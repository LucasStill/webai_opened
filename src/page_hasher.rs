use std::borrow::Borrow;
use std::collections::hash_map::DefaultHasher;
use std::hash::{Hash, Hasher};
use std::sync::{Arc, Mutex};
use chrono::{DateTime, Utc};
use gotham_derive::StateData;
use scraper::{ElementRef, Html, Selector};
use serde::Serialize;
use crate::database_management::{CollectionTypes, DbAsyncMiddleware};

/// Packet format of communication through the oneshot channel of the pages needing crawling.
///
/// page_source is useful for LinkTypes being Styles Or Script. It is the page from which they were called.
/// We use it after crawling a style or script in order to add their hash_content to the original page in the database in their own context.
#[derive(Debug)]
pub struct ReqwestStackPacket {
    pub(crate) url: String,
    pub(crate) link_type: LinkType,
    pub(crate) page_source: u64
}


/// Middleware owning a TX accessible from any state connection.
/// ABBREVIATIONS: RSM
///
/// Used to send messages to the RedwestStack runtime to add tasks to the stack
///
/// In the implementation, a RX is also created that will be passed into the runtime processing the
/// requests
///
#[derive(Clone, StateData)]
pub struct ReqwestStackMiddleware {
    pub one_shot_tx:  Arc<Mutex<tokio::sync::mpsc::Sender<ReqwestStackPacket>>> // do tokio oneshot
}

impl ReqwestStackMiddleware {
    /// Returns the middleware structure and the Rx to send to the Runtime dedicated to crawl the pages
    /// ____________________________________________________________________________________
    /// |       Main        |       Gotham Runtime      |       ReqwestStack Runtime        |
    /// |___________________|___________________________|___________________________________|
    /// |        RX --------|---------------------------------------->>> X                  |
    /// |   Middleware(TX) -|--------->>> X             |                                   |
    /// |                   |    Gets new page to crawl ---------->>> Added to stack        |
    /// |                   |                           |             ||=> crawl + hash     |
    /// |___________________|___________________________|___________________________________|
    pub fn new(db_async_middleware: DbAsyncMiddleware) -> (ReqwestStackMiddleware, RsmRuntime) {
        let (one_shot_tx, rx) = tokio::sync::mpsc::channel(32);
        (
            Self { one_shot_tx: Arc::new(Mutex::new(one_shot_tx.clone())) },
            RsmRuntime::new(rx, db_async_middleware, one_shot_tx)
        )
    }
}


/// RsmRuntime handles tasks to crawl the pages based on a stack
/// todo: potentially remove the stack and handle everything as it goes
///
/// A oneshot RX receives communications from the RSM and adds the tasks to the reqwest stack to be
/// processed right away.
///
/// A stack of requests that does not have a shared state. It runs in its own runtime which receives
/// communications through a mpsc RX belonging to webAI's middleware state.
/// We stack the received urls and request descriptors in order to asynchronously crawl the current
/// page and see if changes happened, new designs arrived etc.
/// The goal of making this in its own runtime serves the purpose of not overloading gotham's handler
/// functions which need to function fast. We can do them here with delay.
/// Furthermore, ReqwestStack should in theory be its own runtime to maintain database_management.rs
/// independence with its own runtime.
///
/// Structure is as follows:
///     request_stack: Vector of Url Strings
///
/// todo: when obtained page_descriptor, check database and save or not
pub struct RsmRuntime {
    rx: tokio::sync::mpsc::Receiver<ReqwestStackPacket>,
    tx: tokio::sync::mpsc::Sender<ReqwestStackPacket>,      // Same Tx as in the middleware
    request_stack: Vec<ReqwestStackPacket>,
    db_async_requester: DbAsyncMiddleware
}


#[derive(Debug, Clone)]
struct CrawlCounter {
    count_pages: usize,
    count_styles: usize,
    count_scripts: usize,
    count_page_errors: usize,
    count_styles_errors: usize,
    count_scripts_error: usize
}

impl RsmRuntime {
    pub fn new(rx: tokio::sync::mpsc::Receiver<ReqwestStackPacket>, db_async_requester: DbAsyncMiddleware, tx: tokio::sync::mpsc::Sender<ReqwestStackPacket>) -> Self {
        Self {
            rx,
            tx,
            request_stack: Vec::new(),
            db_async_requester
        }
    }

    /// Processes incoming communications from the Tx to Rx and spawn an tokio task
    /// where each url is used
    pub async fn process(mut self) {

        // Amount of received communications;
        let crawl_counter = CrawlCounter {
            count_pages: 0,
            count_styles: 0,
            count_scripts: 0,
            count_page_errors: 0,
            count_styles_errors: 0,
            count_scripts_error: 0
        };
        let crawl_counter = Arc::new(Mutex::new(crawl_counter));

        let db_async_middleware = self.db_async_requester.clone();

        // Receive incoming messages
        loop {
            let incoming_message = match self.rx.recv().await {
                Some(m) => m,
                None => {
                    tracing::error!("Error receiving message in PageHasher Loop process: Matched with None");
                    continue
                }
            };
            // Create async task to process request in the own runtime

            let db_middleware_async = db_async_middleware.clone();
            let db_middleware_async_content = db_async_middleware.clone();

            let tx = self.tx.clone();

            let counter = crawl_counter.clone();

            match incoming_message.link_type {
                LinkType::Html => {
                    tokio::spawn(async move {
                        match PageDescriptor::crawl(incoming_message.url.to_string(), db_middleware_async.clone(), tx).await {
                            Ok(page_descriptor) => {
                                counter.clone().lock().unwrap().count_pages += 1;
                                tracing::info!("Found page descriptor: {} at {}, first_time: {}, hash: {}, hash_content_len: {}", page_descriptor.url, page_descriptor.last_date_found, page_descriptor.first_date_found == page_descriptor.last_date_found, page_descriptor.hash, page_descriptor.hash_contents.len());
                            },
                            Err(e) => {
                                counter.clone().lock().unwrap().count_page_errors += 1;
                                tracing::error!("Error crawling page {}, error: {:?}", incoming_message.url, e)
                            }
                        }
                        tracing::info!("########### {:?} ###########", counter.clone());

                        //println!("############# Crawled Total {}: Pages: {}, Styles: {}, Scripts: {}! --- Errors: pages={}, styles={}, scripts={}", sum, count_pages, count_styles, count_scripts, count_pages_errors, count_styles_errors, count_scripts_errors);
                    });
                },
                _ => {
                    // If StyleSheet or Script
                    // If found a new stylesheet, insert into database

                    tokio::spawn(async move {
                        match ContentData::crawl(incoming_message.url.to_string(), db_middleware_async_content.clone(), incoming_message.link_type, incoming_message.page_source).await {
                            Ok(_) => {
                                if incoming_message.link_type == LinkType::StyleSheet {
                                    counter.clone().lock().unwrap().count_styles += 1;
                                } else if incoming_message.link_type == LinkType::Script {
                                    counter.clone().lock().unwrap().count_scripts += 1;
                                }
                            },
                            Err(e) => {
                                if incoming_message.link_type == LinkType::StyleSheet {
                                    counter.clone().lock().unwrap().count_styles_errors += 1;
                                } else if incoming_message.link_type == LinkType::Script {
                                    counter.clone().lock().unwrap().count_scripts_error += 1;
                                }
                                tracing::error!("Error crawling {:?} {}, error: {:?}", incoming_message.link_type.clone(), incoming_message.url, e);
                                // Should do the new Request here:
                                // Fallback option
                                let mut new_link = incoming_message.url.clone().replace("//../", "/").replace("/../", "/").replace("../", "/");
                                if !new_link.contains("https://") {new_link = format!("https://{}", new_link)}
                                match ContentData::crawl(new_link.clone(), db_middleware_async_content.clone(), incoming_message.link_type, incoming_message.page_source).await {
                                    Ok(_) => {},
                                    Err(e) => {
                                        tracing::error!("PageHasher Loop: still failed to parse the page with link {}, for type {:?} with error: {}", new_link, incoming_message.link_type, e);
                                    }
                                };

                            }
                        }
                        tracing::info!("########### {:?} ###########", counter.clone());
                    });
                }
            }
        }
    }
}




/// Descriptor of a page.
/// A single page dependent of a url changes over time.
/// Thus we need to keep track of these evolutions through a descriptor combining the url and a
/// hash of the page's content. If one url has several corresponding hashes, then the page has been
/// changed over time.
///
/// Potential issues:
/// 1) A templating engine may alter some parts of the page uniquely for each user. We need to identify
/// those and treat them. They can be:
///     - Head descriptors
///     - Script values retrieved
/// We might assume that once provided with the link from a user opening webAI's script, the crawl
/// being handled from our side would mean that most individual changes might not happen as we are
/// considered as the same entity. Furthermore, we take the assumption that the page we crawl
/// is visually the same as the one the user explored.
#[derive(Debug, PartialEq, Eq, sqlx::FromRow, Clone)]
pub struct PageDescriptor {
    pub(crate) url: String,
    pub(crate) content: String,
    pub(crate) hash: String,
    pub(crate) first_date_found: i64,
    pub(crate) last_date_found: i64,
    pub(crate) hash_contents: Vec<String>,
}


#[derive(Debug, Clone, Copy, PartialEq)]
pub enum LinkType {
    StyleSheet,
    Script,
    Html
}


impl PageDescriptor {

    /// Provided a link, uses reqwest to parse the content of that page
    /// todo: some styles are downloaded from different websites. Thus we should
    ///     hash them to generate a key and reuse them
    /// todo: add PageDescriptor after
    /// todo: compare previous hash values of pages if some things got added
    /// todo: define when a script or style is worth being sent to the stack again
    pub async fn crawl(url: String, db_async_middleware: DbAsyncMiddleware, tx: tokio::sync::mpsc::Sender<ReqwestStackPacket>) -> Result<Self, reqwest::Error> {

        let date_found: DateTime<Utc> = Utc::now();

        // Do reqwest here
        match reqwest::get(url.to_string()).await {
            Ok(response) => {
                match response.text().await {
                    Ok(content) => {
                        let hash = PageDescriptor::hash_url_content(url.to_string(), content.clone());

                        // If the PageDescriptor is newly created, we'll add it to the database after the hash_contents have been created too
                        let mut newly_created = false;

                        // DB query to find if that hash page has already been encountered or not
                        let page_descriptor = match db_async_middleware.query_page_descriptor(hash).await {
                            Ok(collection) => {
                                match collection.status.as_str() {
                                    "no entries found" => {
                                        // Querying did not find any elements
                                        tracing::info!("Page descriptor never found, add it to database");
                                        newly_created = true;
                                        let page_descriptor = PageDescriptor {
                                            url : url.clone(),
                                            content: content.clone(),
                                            hash: hash.to_string(),
                                            first_date_found: date_found.clone().timestamp(),
                                            last_date_found: date_found.clone().timestamp(),
                                            hash_contents: vec![]
                                        };
                                        // Add it to database here
                                        db_async_middleware.insert_page_descriptor(page_descriptor.clone()).await.unwrap();
                                        page_descriptor
                                    },
                                    // Querying found some elements, thus the entry already exists
                                    "sent" => {
                                        tracing::info!("Page already exists");
                                        let db_page = match collection.data[0].borrow() {
                                            CollectionTypes::PageDescriptor(descriptor) => { descriptor.clone() },
                                            _ => { tracing::error!("Error backend returned wrong type");
                                                PageDescriptor {
                                                    url: "".to_string(),
                                                    content: "".to_string(),
                                                    hash: "0".to_string(),
                                                    first_date_found: 0,
                                                    last_date_found: 0,
                                                    hash_contents: vec![]
                                                }
                                            }
                                        };

                                        // Update previous page descriptor:
                                        let page_descriptor = PageDescriptor {
                                            url: url.clone(),
                                            content: content.clone(),
                                            hash: hash.to_string(),
                                            first_date_found: db_page.first_date_found,
                                            last_date_found: date_found.clone().timestamp(),
                                            hash_contents: db_page.hash_contents
                                        };

                                        // Now update last seen date into the database
                                        match db_async_middleware.update_page_descriptor(hash, page_descriptor.clone()).await {
                                            Ok(col) => {
                                                tracing::info!("Success updating page descriptor, status: {}", col.status);
                                            },
                                            Err(e) => {
                                                tracing::error!("Error updating database for page descriptor: {e:?}");
                                            }
                                        };
                                        page_descriptor
                                    }
                                    _ => {
                                        // Big error, this flag should not happen
                                        tracing::error!("Big Error! Unmatched status flag for PageDescriptor when querying database: {}", collection.status);
                                        // todo: change return to Err
                                        return Ok(PageDescriptor {
                                            url,
                                            content: content.clone(),
                                            hash: hash.to_string(),
                                            first_date_found: date_found.clone().timestamp(),
                                            last_date_found: date_found.clone().timestamp(),
                                            hash_contents: vec![]
                                        })
                                    }
                                }


                            },
                            // If not found process here to create new one and insert into database
                            Err(e) => {
                                tracing::error!("BIG ERROR BIG ERROR: Page descriptor never found, add it to database. BUT GOT ERROR CASE {e:?}");

                                newly_created = true;
                                // todo return Err
                                return Ok(PageDescriptor {
                                    url,
                                    content: content.clone(),
                                    hash: hash.to_string(),
                                    first_date_found: date_found.clone().timestamp(),
                                    last_date_found: date_found.clone().timestamp(),
                                    hash_contents: vec![]
                                })
                            }
                        };

                        // Else, analyze the page, find scripts and other sources to download
                        // We obtain the links present in the sources, so we should:
                        // For each:
                        //  1- Check if these are links or contents
                        //  2- If source --> Create HashKey and proceed
                        //  3- If content --> Source url is local, hash url + content
                        //  4- Query database and check if HashKey already exists or not
                        // todo: need to match with other starting strings
                        let stylesheets = match PageDescriptor::page_parser(content.clone(), LinkType::StyleSheet) {
                            Ok(s) => s,
                            Err(e) => {tracing::error!("Could not Parse Stylesheets from {}, error: {}", url, e); Vec::new()}
                        };
                        for name in stylesheets {
                            /*if name.starts_with("http") {
                                // Hash the link by its full URL. No need to check its content as
                                // this would be done every 24 hours to verify whether the content has changed or not.
                                //let url_hash = PageDescriptor::hash_url(name.to_string());

                                // Query database to find if it has already been found or not
                                // XXX
                                // If yes:  it means that we found a content already used by another page.
                                //          Thus, we add its hashkey reference to the page's descriptor Vector of HashContents
                                // If no:   it means it has never been encountered before, it will need to be CRAWLED.
                                //          Thus, we need to make a request to send this to the Stack Reqwest to be analyzed

                                // here we should send it direclty to the reqwest stack
                                // todo: check last time the page was UPDATED to guess whether is worth it to parse it or not.
                                // If it is the same page and its contents weren't changed, we assume it is not worth it to update it.

                                let reqwest_packet = ReqwestStackPacket {
                                    url: name.clone(),
                                    link_type: LinkType::StyleSheet,
                                    page_source: page_descriptor.hash.parse::<u64>().unwrap()
                                };

                                // Send style to be crawled and parse
                                tx.clone().send(reqwest_packet).await.unwrap_or(tracing::error!("could not send Stylesheet reqwest packet for url {name}"));
                            }*/

                            match PageDescriptor::get_proper_url_name(name.clone(), url.clone()) {
                                Ok(name_url) => {
                                    println!("name_url created for stylesheet is: {}", name_url);

                                    let reqwest_packet = ReqwestStackPacket {
                                        url: name_url.clone(),
                                        link_type: LinkType::StyleSheet,
                                        page_source: page_descriptor.hash.parse::<u64>().unwrap()
                                    };

                                    // Send style to be crawled and parse
                                    match tx.clone().send(reqwest_packet).await {
                                        Ok(_) => {}
                                        Err(e) => {
                                            tracing::error!("could not send Stylesheet reqwest packet for url {name_url}, error: {}", e);
                                            // Try again by modifying the link with a full clean one:
                                            let mut new_link = name_url.replace("//../", "/").replace("/../", "/").replace("../", "/");
                                            if !new_link.contains("https://") {new_link = format!("https://{}", new_link)}
                                            let reqwest_packet = ReqwestStackPacket {
                                                url: new_link.clone(),
                                                link_type: LinkType::StyleSheet,
                                                page_source: page_descriptor.hash.parse::<u64>().unwrap()
                                            };
                                            tx.clone().send(reqwest_packet).await.unwrap_or(tracing::error!("Could still not send Stylesheet request for {}", new_link));
                                        }
                                    }
                                },
                                Err(e) => {
                                    tracing::error!("Got a link url name that could not be turned in a proper form for stylesheet: {}, for url: {}, with error: {}", name, url, e)
                                }
                            };
                        }

                        // Same evaluation of scripts as from the stylesheets
                        let scripts = match PageDescriptor::page_parser(content.clone(), LinkType::Script) {
                            Ok(s) => s,
                            Err(e) => {tracing::error!("Could not Parse Scripts from {}, error: {}", url, e); Vec::new()}
                        };
                        for name in scripts {
                            /*if name.starts_with("http") {
                                let reqwest_packet = ReqwestStackPacket {
                                    url: name.clone(),
                                    link_type: LinkType::Script,
                                    page_source: page_descriptor.hash.parse::<u64>().unwrap()
                                };
                                tx.clone().send(reqwest_packet).await.unwrap_or(tracing::error!("could not send Script reqwest packet for url {name}"))
                            }*/
                            match PageDescriptor::get_proper_url_name(name.clone(), url.clone()) {
                                Ok(name_url) => {
                                    let reqwest_packet = ReqwestStackPacket {
                                        url: name_url.clone(),
                                        link_type: LinkType::Script,
                                        page_source: page_descriptor.hash.parse::<u64>().unwrap()
                                    };
                                    match tx.clone().send(reqwest_packet).await {
                                        Ok(_) => {}
                                        Err(e) => {
                                            tracing::error!("could not send Script reqwest packet for url {name_url}, error: {}", e);
                                            // Try again by modifying the link with a full clean one:
                                            let mut new_link = name_url.replace("//../", "/").replace("/../", "/").replace("../", "/");
                                            if !new_link.contains("https://") {new_link = format!("https://{}", new_link)}
                                            let reqwest_packet = ReqwestStackPacket {
                                                url: new_link.clone(),
                                                link_type: LinkType::Script,
                                                page_source: page_descriptor.hash.parse::<u64>().unwrap()
                                            };
                                            tx.clone().send(reqwest_packet).await.unwrap_or(tracing::error!("Could still not send Script request for {}", new_link));
                                        }
                                    }
                                },
                                Err(e) => {
                                    tracing::error!("Got a link url name that could not be turned in a proper form for script: {}, for url: {}, with error: {}", name, url, e)

                                }
                            }
                        }

                        // If new page found, add it to database
                        /*if newly_created {

                            // todo: add found hashs and scripts to PageDescriptor

                            match db_async_middleware.insert_page_descriptor(page_descriptor.clone()).await {
                                Ok(col) => {
                                    println!("Success inserting page descriptor in database from page hasher, status: {}", col.status);
                                },
                                Err(e) => {
                                    println!("Error inserting page descriptor from page hasher: {e:?}");
                                }
                            };
                        }*/


                        Ok(page_descriptor)
                    },
                    Err(e) => {
                        tracing::error!("Could not get text from response of URL '{}', for date '{}': {:?}", url, date_found, e);
                        Err(e)
                    }
                }
            },
            Err(e) => {
                tracing::error!("PageDescriptor Could not perform reqwest from URL '{}', for date '{}': {:?}", url, date_found, e);
                Err(e)
            }
        }
    }

    /// Hash URL + Content to generate a Key
    fn hash_url_content(url: String, content: String) -> u64 {
        let mut hasher = DefaultHasher::new();
        url.hash(&mut hasher);
        content.hash(&mut hasher);
        hasher.finish()
    }

    /// Hash URL to generate key
    fn hash_url(url: String) -> u64 {
        let mut hasher = DefaultHasher::new();
        url.hash(&mut hasher);
        hasher.finish()
    }


    /// Returns the canonical link for that resource
    /// Input the current parsed link, and recreate the canonical link by adding the domain name
    /// and navigating the resource tree
    fn get_proper_url_name(name: String, page_url: String) -> Result<String, String> {
        let proper_url = match name.starts_with("http") {
            true => name.clone(),
            false => {
                // If the last char is '/', remove it, and replace spaces
                let mut page_url = page_url.replace(" ", "");
                let last =  page_url.chars().last().unwrap();
                if last == '/' {
                    if page_url.pop().is_some() {
                        println!("The new string is: {}", page_url);
                    }
                    //page_url = match page_url.chars().rev().nth(page_url.len()-1) {Some(s) => s.to_string(), None => return Err(format!("error removing last char in get_proper_url_name {}", page_url))}
                }

                // Does not start with http, so we assume it comes from the same source, and thus we need to add the domain name to it
                let domain_name = PageDescriptor::parse_domain_name(page_url.clone());
                println!("domain_name: {:?} for page_url: {} and name: {}", domain_name, page_url, name);
                if domain_name.len() == 0 {tracing::error!("Retrieving parts of domain name gave a length of 0! {}", page_url)}
                // The link starts
                if name.starts_with("/") {
                    format!("{}{}", domain_name[0], name)
                } else {
                    // Look if we use relative links starting with ../
                    // and then recreate the appropriate link by going back up the tree
                    let mut name_url = domain_name[0].to_string();
                    if name.starts_with("../") {
                        let tree_depth = name.matches("../").count();
                        println!("tree depth: {}", tree_depth);
                        let mut i = 0;

                        if domain_name.len() == 1 {
                            return Ok(format!("{}/{}", domain_name[0], name.replace("../", "")))
                        }

                        /*while i < tree_depth && tree_depth < domain_name.len() {
                            if domain_name[i+1] != "../" {
                                name_url = format!("{}/{}", name_url, domain_name[i+1]);
                            }
                            i += 1
                        }*/
                    }
                    format!("{}/{}", name_url, name).replace("../", "")
                }
            }
        };
        println!("About to return: {}", proper_url);
        Ok(proper_url)
    }

    /// Retrieves the domain name from a url and returns its parts delimited with '/'
    /// eg: https://webai.ai/pages/index.html
    /// ==> vec!['webai.ai', 'pages', 'index.html']
    fn parse_domain_name(mut url: String) -> Vec<String> {
        // Remove front part
        if url.starts_with("https://") {
            url = url.replace("https://", "");
        } else if url.starts_with("http://") {
            url = url.replace("http://", "");
        }

        // Remove the rest
        let parts = url.split("/").collect::<Vec<&str>>();
        let mut domain_parts = Vec::new();
        for part in parts {domain_parts.push(part.to_string())}
        domain_parts
    }

    /// Parse and analyze the page text from a url to find its stylesheets, scripts, etc...
    /// - Stylesheets
    /// - Scripts
    /// For scripts, don't get those containing trackers
    /// todo: if a script or style has a src link or not https, handle them and still try to download them
    fn page_parser(text: String, content_type: LinkType) -> Result<Vec<String>, String> {
        let document = Html::parse_document(&text);

        let selector_type = match content_type {
            LinkType::StyleSheet => {"link"}
            LinkType::Script => {"script"}
            LinkType::Html => {return Err("Wrong Link Type: Html!".to_string())}
        };

        // Uses html5ever parsing
        let selector = Selector::parse(selector_type).unwrap();
        let mut link_sources: Vec<String> = Vec::new();

        for element in document.select(&selector) {

            // Styles: Look for rel=stylesheet
            if let Some(rel) = element.value().attr("rel") {
                if rel == "stylesheet" && content_type == LinkType::StyleSheet {

                    link_sources = PageDescriptor::parse_element_attributes(element, "href", link_sources);
                    link_sources = PageDescriptor::parse_element_attributes(element, "src", link_sources);

                    // If none of them, attempt to get inner text:
                    let sheet = format!("{:?}", element.text().collect::<Vec<_>>());

                    if !PageDescriptor::contains_forbidden_pattern(sheet.as_str()) {
                        link_sources.push(sheet)
                    }
                }

                // COMMENT: we continue as we only care about stylesheets and no other tags
                continue

            }


            if let Some(src) = element.value().attr("src") {
                println!("Found Script Element to Parse {}", src);
                if content_type == LinkType::Script {
                    // Scripts: Look for scripts directly
                    link_sources = PageDescriptor::parse_element_attributes(element, "src", link_sources);

                    // If none of them, attempt to get inner text:
                    let sheet = format!("{:?}", element.text().collect::<Vec<_>>());

                    if !PageDescriptor::contains_forbidden_pattern(sheet.as_str()) {
                        link_sources.push(sheet)
                    }
                }
            }

        }

        Ok(link_sources)
    }

    /// Parse specific element attributes to add to the collection of found elements.
    /// Discards if these are scripts for trackers. The goal is to find scripts affecting the UI
    /// itself such as some controlling the menu or some navigation elements.
    fn parse_element_attributes(element: ElementRef, attribute: &str, mut found_values: Vec<String>) -> Vec<String> {
        let href_attr = element.value().attr(attribute);
        if let Some(value) = href_attr {
            if !PageDescriptor::contains_forbidden_pattern(value) {
                found_values.push(value.to_string());
            }
        };
        found_values
    }

    /// Verifies whether a text contain certain forbidden patterns such as origin scripts we want to avoid
    /// todo: for some scripts, we'll have to download them and check whether they do DOM or style operations.
    ///         if not, we can discard that data and drop them from the database.
    /// RISK: if the scripts are generated by a UUID, we risk of overflowing out database with incoming requests
    /// RISK: if script is hosted on local server, we need to treat it as an individual one even if it comes
    ///     from a third party. Thus ALWAYS HASH WITH DOMAIN NAME to keep source constant.
    fn contains_forbidden_pattern(text: &str) -> bool {
        let forbidden_values = vec!["tracker", "matomo", "facebook", "twitter", "instagram", "twitch",
        "navigation", "paypal", "GoogleAnalytics", "\""];

        for value in forbidden_values {
            if text.contains(value) {
                return true
            }
        }

        if text.is_empty() || text=="[]" {return true}

        // Additional tests more unitary:
        if text.contains("/bundles/app/js") {return true}
        if text.contains("cloudflare") && !text.contains("css") {return true} // || !text.contains("js") if wanna add js too

        false
    }

}


#[derive(Debug, PartialEq, Eq, sqlx::FromRow, Clone)]
pub struct ContentData {
    pub(crate) hash: String,
    pub(crate) url: String,
    pub(crate) content: String,
    pub(crate) first_date_found: i64,
    pub(crate) last_date_found: i64,
    pub(crate) tag: bool
}

impl ContentData {

    /// Crawl the source of a ContentData
    /// todo: improve code
    pub async fn crawl(mut url: String, db_async_middleware: DbAsyncMiddleware, link_type: LinkType, page_source: u64) -> Result<(), reqwest::Error> {

        let link_type = match link_type {
            LinkType::StyleSheet => {false}
            LinkType::Script => {true}
            LinkType::Html => {
                tracing::error!("Error link type");
                return Ok(())
            }
        };

        let date_found: DateTime<Utc> = Utc::now();

        if !url.starts_with("http") {
            url = format!("https://{}", url)
        }

        match reqwest::get(url.to_string()).await {
            Ok(response) => {
                match response.text().await {
                    Ok(content) => {

                        let hash = PageDescriptor::hash_url_content(url.to_string(), content.clone());

                        // 1 - First add the ContentData to the database
                        match db_async_middleware.query_content_data(hash).await {
                            Ok(collection) => {

                                let content_data = ContentData {
                                    hash: hash.to_string(),
                                    url,
                                    content,
                                    first_date_found: date_found.timestamp(),
                                    last_date_found: date_found.timestamp() ,
                                    tag: link_type
                                };

                                match collection.status.as_str() {
                                    "no entries found" => {
                                        // Never found, add it to database
                                        match db_async_middleware.insert_content_data(content_data).await {
                                            Ok(col) => {
                                                tracing::info!("Success inserting content data: {}", col.status);
                                            },
                                            Err(e) => {
                                                tracing::error!("Error inserting content data: {:?}", e)
                                            }
                                        }
                                    },
                                    "sent" => {
                                        // Entry already exists so only update last seen value
                                        match db_async_middleware.update_content_data(hash, content_data).await {
                                            Ok(col) => tracing::info!("Succes updating content data: {}", col.status),
                                            Err(e) => tracing::error!("Error updating content data: {:?}", e)
                                        }
                                    },
                                    _ => {
                                        // BIG ERROR, LOG IT
                                        tracing::error!("Big error parsing ContentData")
                                    }
                                };
                            },
                            Err(e) => {
                                tracing::error!("error: {e:?}")
                            }
                        };

                        // 2 - Update parent PageDescriptor:
                        match db_async_middleware.query_page_descriptor(page_source).await {
                            Ok(col) => {
                                if col.data.len() == 1 {


                                    if let CollectionTypes::PageDescriptor(page_descriptor) = col.data[0].borrow() {
                                        if !page_descriptor.hash_contents.contains(&format!("{hash}")) {
                                            let mut page_descriptor = page_descriptor.clone();
                                            page_descriptor.hash_contents.push(format!("{hash}"));

                                            // Now update PageDescriptor
                                            match db_async_middleware.update_page_descriptor_hash_contents(page_source, page_descriptor).await {
                                                Ok(col) => {

                                                },
                                                Err(e) => {
                                                    tracing::error!("Could not update PageDescriptor with new hash_content value: page_source={}, error: {:?}", page_source, e);
                                                }
                                            }
                                        }
                                    }


                                    /*
                                    match col.data[0].borrow() {
                                        CollectionTypes::PageDescriptor(page_descriptor) => {
                                            // Page does not contain this source so add it
                                            if !page_descriptor.hash_contents.contains(&format!("{hash}")) {
                                                let mut page_descriptor = page_descriptor.clone();
                                                page_descriptor.hash_contents.push(format!("{hash}"));

                                                // Now update PageDescriptor
                                                match db_async_middleware.update_page_descriptor_hash_contents(page_source, page_descriptor).await {
                                                    Ok(col) => {

                                                    },
                                                    Err(e) => {
                                                        tracing::error!("Could not update PageDescriptor with new hash_content value: page_source={}, error: {:?}", page_source, e);
                                                    }
                                                }
                                            }
                                        },
                                        _ => {

                                        }
                                    }
                                    */
                                } else {
                                    tracing::error!("Error, duplicates found for PageDescriptor Hash {page_source}, len is {}", col.data.len());
                                }
                            },
                            Err(e) => {
                                tracing::error!("Error getting query_page_descriptor page_source for link type {link_type}");
                            }
                        }

                    },
                    Err(e) => {
                        tracing::error!("Could not get text from response of URL '{url}', for date '{date_found}': {e:?}");
                        return Err(e)
                    }
                }
            },
            Err(e) => {
                tracing::error!("ContentData Could not perform reqwest from URL '{url}', for date '{date_found}': {e:?}");
                return Err(e)
            }
        }

        Ok(())
    }

}








#[cfg(test)]
mod tests {
    use std::borrow::Borrow;
    use std::collections::HashSet;
    use std::fs;
    use futures::executor::block_on;
    use crate::page_hasher::{LinkType, PageDescriptor, ReqwestStackPacket};
    use crate::{database_management, DbAsyncMiddleware, ReqwestStackMiddleware};
    use crate::webai_management::WebAISessionStartingPacket;
    use scraper::{Html, Selector};

    #[test]
    fn test_hasher() {
        let url = "100foods.com".to_string();
        let content = fs::read_to_string("webai/pages/index.html").unwrap();
        println!("hash is: {}", PageDescriptor::hash_url_content(url, content));
    }

    #[tokio::test]
    async fn test_rsm() {

        let webai_starting_packet = WebAISessionStartingPacket {
            uuid: "".to_string(),
            session_uuid: "".to_string(),
            url: "lucasandrei.com".to_string(),
            version: "".to_string(),
            client_date: "".to_string(),
            user_agent: "".to_string(),
            app_name: "".to_string(),
            language: "".to_string(),
            cookie_enabled: false,
            product: "".to_string(),
            vendor: "".to_string()
        };
        let payload = serde_json::to_string(webai_starting_packet.borrow()).unwrap();

        // Loop and make webai reqwests
        let mut i = 0;
        while i < 10 {
            let client = reqwest::Client::new();
            let p = payload.clone();
            let res = client.post("http://127.0.0.1:8080/start_webai")
                .body(p)
                .send()
                .await.unwrap();
            print!("done {}", i);
            i += 1;
        }

    }

    /*
    #[tokio::test]
    async fn test_async_crawl() {

        let rt = tokio::runtime::Runtime::new().unwrap();
        rt.spawn(async {

            let links = [
                "https://lucasandrei.com",
                "https://chess.com",
                "https://google.com",
                "http://127.0.0.1:8080/pages/dummy.html",
            ];

            for entry in links {
                //while let Some(incoming_message) = self.rx.recv().await {
                // Create async task to process request in the own runtime
                println!("1{}", entry);
                tokio::spawn(async move {
                    println!("2{}", entry);
                    match PageDescriptor::crawl(entry.to_string()).await {
                        Ok(page_descriptor) => {
                            println!("{} Found page descriptor: {:?}", entry, page_descriptor.first_date_found);
                        },
                        Err(e) => {
                            println!("error: {} : {}", entry, e)
                        }
                    }
                });
            }
        });

        loop {}

    }*/

    #[tokio::test]
    async fn test_url_parser() {
        let resp = reqwest::get("https://lucasandrei.com").await.unwrap();

        let text = resp.text().await.unwrap();

        let document = Html::parse_document(&text);
        let selector = Selector::parse("link").unwrap();
        for title in document.select(&selector) {

            println!("- {:?}", title.value().attrs);

            let rel = title.value().attr("rel").expect("rel not found");
            if rel == "stylesheet" {
                println!(
                    "{}",
                    title
                        .value()
                        .attr("href")
                        .expect("href not found")
                        .to_string()
                );
            }


        }

    }

    #[tokio::test]
    async fn test_url_parser_code() {
        let url = "https://www.alicson-studio.com".to_string();
        let resp = reqwest::get(url.to_string()).await.unwrap();
        let text = resp.text().await.unwrap();

        let stylesheets = PageDescriptor::page_parser(text.clone(), LinkType::StyleSheet).unwrap();
        let scripts = PageDescriptor::page_parser(text, LinkType::Script).unwrap();

        println!("Found stylesheet: {:?}", stylesheets);
        println!("Found scripts: {:?}", scripts);

        for name in stylesheets {
            let name_url = PageDescriptor::get_proper_url_name(name.clone(), url.clone());
            println!("Proper Url: {}", name_url.unwrap());
        }

        for name in scripts {
            let name_url = PageDescriptor::get_proper_url_name(name.clone(), url.clone());
            println!("Proper Url: {}", name_url.unwrap());
        }
    }

    #[tokio::test]
    async fn test_url_page_descriptor_full() {

        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on( database_management::DbAsyncTask::new(db_creds)).unwrap();
        let sqlx_db = database_management::DbAsyncMiddleware::new(sqlx_task.tx.clone());

        let (reqwest_stack_middleware, rsm_rx) = ReqwestStackMiddleware::new(DbAsyncMiddleware::new(sqlx_task.tx.clone()));

        print!("1");

        let rt = tokio::runtime::Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });

        print!("2");

        // Creates its runtime
        let rt = tokio::runtime::Runtime::new().unwrap();
        rt.spawn(async {
            rsm_rx.process().await
        });

        print!("3");


        let url = "https://webai.ai/pages/questionnaire.html".to_string();

        let reqwest_packet = ReqwestStackPacket {
            url,
            link_type: LinkType::Html,
            page_source: 0
        };

        let r = reqwest_stack_middleware.one_shot_tx.clone().lock().unwrap().send(reqwest_packet).await.unwrap();

        print!("4");

        loop {}

        rt.shutdown_background()
    }


    #[tokio::test]
    async fn test_parrse() {
        let mut url = "https://webai.ai/".to_string();
        if url.pop().is_some() {
            println!("The new string is: {}", url);
        }
    }

}