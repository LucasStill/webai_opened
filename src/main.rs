mod session_management;
mod webai_management;
mod page_hasher;
mod database_management;

use clap::{App, Arg};
use std::fs::File;
use std::io::{BufReader, Read};
use gotham::pipeline::set::{new_pipeline_set, finalize_pipeline_set};
use gotham::pipeline::new_pipeline;
use gotham::middleware::state::StateMiddleware;
use gotham::middleware::session::{NewSessionMiddleware};
use gotham::router::builder::{build_router, DrawRoutes, DefineSingleRoute};
use crate::session_management::{DefaultSession, header_formatting};
use gotham::rustls;
use gotham::rustls::NoClientAuth;
use gotham::rustls::internal::pemfile::{certs, pkcs8_private_keys};

use gotham::state::{FromState, State};
use std::pin::Pin;
use gotham::handler::{HandlerFuture, HandlerResult};
use gotham::hyper::{body, Body, Uri, StatusCode};
use gotham::helpers::http::response::create_response;
use mime::{TEXT_HTML, IMAGE_JPEG, IMAGE_PNG, IMAGE_SVG, TEXT_CSS, TEXT_JAVASCRIPT, TEXT_XML, TEXT_PLAIN, JSON};
use futures_util::{future, FutureExt};
use std::fs;
use std::path::PathBuf;
use std::sync::Arc;
use futures::executor::block_on;
use tracing_subscriber::{filter, Layer};
use tracing_subscriber::layer::SubscriberExt;
use tracing_subscriber::util::SubscriberInitExt;
use crate::database_management::{Collection, CollectionTypes, DbAsyncMiddleware};
use crate::page_hasher::ReqwestStackMiddleware;
use crate::webai_management::WebAISession;


fn get_main(mut state: State) -> Pin<Box<HandlerFuture>> {


    let f = body::to_bytes(Body::take_from(&mut state)).then(|full_body| match full_body {
        Ok(valid_body) => {

            let _ = String::from_utf8(valid_body.to_vec()).unwrap();
            let uri = Uri::borrow_from(&state).to_string();

            // If we receive additional arguments in the URI we can handle them
            let _uri_elements = uri.split('&').collect::<Vec<&str>>();
            //println!("Uri got {} arguments: {:?}", uri_elements.len(), uri_elements);



            let body_content = fs::read_to_string("webai/pages/webai_project.html").unwrap();
            let mut res = create_response(&state, StatusCode::OK, TEXT_HTML, body_content);
            res = header_formatting(res, &state, false);
            future::ok((state, res))

        }
        Err(e) => future::err((state, e.into())),
    });
    f.boxed()
}

async fn get_monitor_data(mut state: State) -> HandlerResult {
    let database_requester = DbAsyncMiddleware::borrow_from(&state);

    let collection_query = match Collection::get_monitor_data(database_requester).await {
        Ok(mut col) => {col.data.pop().unwrap()}
        Err(e) => {
            println!("error: {:?}", e);
            let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, "error".to_string());
            res = header_formatting(res, &state, false);
            return Ok((state, res))
        }
    };

    let body_content = match collection_query {
        CollectionTypes::MonitorUI(monitor) => {
            serde_json::to_string(&monitor).unwrap()
        },
        _ => "error2".to_string()
    };

    let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, body_content);
    res = header_formatting(res, &state, false);
    Ok((state, res))
}

fn get_page(mut state: State) -> Pin<Box<HandlerFuture>> {
    let f = body::to_bytes(Body::take_from(&mut state)).then(|full_body| match full_body {
        Ok(valid_body) => {
            let _ = String::from_utf8(valid_body.to_vec()).unwrap();
            let uri = Uri::borrow_from(&state).to_string();

            // If we receive additional arguments in the URI we can handle them
            let uri_elements = uri.split('&').collect::<Vec<&str>>();

            let file_location = format!{"webai/{}", uri_elements[0]};

            let response_content = match fs::read_to_string(file_location) {
                Ok(body) => {
                    (body, StatusCode::OK)
                }
                Err(e) => {
                    let body = fs::read_to_string("webai/pages/error_page.html").expect("Unable to read file");
                    println!("get page error {e:?}");
                    (body, StatusCode::NOT_FOUND)
                }
            };
            let mut res = create_response(&state, response_content.1, TEXT_HTML, response_content.0);
            res = header_formatting(res, &state, false);
            future::ok((state, res))

        }
        Err(e) => future::err((state, e.into())),
    });
    f.boxed()
}



fn to_dir_handler(mut state: State) -> Pin<Box<HandlerFuture>> {
    let f = body::to_bytes(Body::take_from(&mut state)).then(|full_body| match full_body {
        Ok(_valid_body) => {
            let uri = Uri::borrow_from(&state).to_string();
            println!("GOT: {uri}");

            // If we receive additional arguments in the URI we can handle them
            let uri_elements = uri.split('&').collect::<Vec<&str>>();

            let file_location = format!{"webai{}", uri_elements[0]}.replace("[\"", "").replace("\"]", "");

            let file_extension = &file_location.split('/').collect::<Vec<&str>>();
            let file_extension = file_extension.last().unwrap().to_owned();
            let (_anterior, file_extension) = match file_extension.split_once('.') {
                Some((anterior, file_extension)) => (anterior, file_extension),
                _ => {("error", "error")}
            };

            let mime_type = match file_extension {
                "jpg" => { IMAGE_JPEG}
                "jpeg" => { IMAGE_JPEG}
                "png" => {IMAGE_PNG}
                "svg" => {IMAGE_SVG}
                "html" => { TEXT_HTML}
                "css" => { TEXT_CSS}
                "js" => {TEXT_JAVASCRIPT}
                "xml" => {TEXT_XML}
                "pdf"=> {mime::APPLICATION_PDF}
                _ => {
                    //println!("file location is {}, anterior is {} and file extension is {}", file_location, anterior, file_extension);
                    TEXT_PLAIN
                }
            };


            match File::open(&file_location) {
                Ok(mut body) => {
                    let mut file_content = Vec::new();
                    match body.read_to_end(&mut file_content) {
                        Ok(_) => {
                            let mut res = create_response(&state, StatusCode::OK, mime_type, file_content);
                            res = header_formatting(res, &state, false);
                            future::ok((state, res))
                        },
                        Err(e) => {
                            //println!("Error reading file content: {e:?}");

                            tracing::error!("Error reading file content: {e:?}");

                            let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, "error reading content, contact your administrator".to_string());
                            res = header_formatting(res, &state, false);
                            future::ok((state, res))
                        }
                    }
                },
                Err(e) => {
                    let mut body = File::open("webai/pages/error_page.html").expect("Unable to read error file");
                    tracing::error!("error get support {e:?} for {file_location}");
                    let mut file_content = Vec::new();
                    body.read_to_end(&mut file_content).expect("Unable to read");
                    let mut res = create_response(&state, StatusCode::OK, TEXT_HTML, file_content);
                    res = header_formatting(res, &state, false);
                    future::ok((state, res))
                }
            }

        }
        Err(e) => future::err((state, e.into())),
    });
    f.boxed()
}



pub fn main() {
    let cmd: clap::ArgMatches = parse_cmd();
    let addr: String = cmd.value_of("ip").unwrap_or_default().to_string();

    // Set tracing
    let mut webai_folder = PathBuf::new();
    webai_folder.push("/tmp/webai/logs");
    if !webai_folder.exists() {
        println!("did not find log folder so create it");
        fs::create_dir("/tmp/webai/logs").expect("could not create directory /webai/logs") }
    /*let _guard = tracing_utils::set_subscriber_level(
        Some(Vec::new()),
        true,
        Some("INFO".to_string()),
        webai_folder
    );*/

    let stdout_log = tracing_subscriber::fmt::layer()
        .pretty();

    // A layer that logs events to a file.
    let file = File::create("/tmp/webai/logs/webai.log");
    let file = match file  {Ok(file) => file,Err(error) => panic!("Error: {error:?}")};
    let debug_log = tracing_subscriber::fmt::layer()
        .with_writer(Arc::new(file));

    let error_file = File::create("/tmp/webai/logs/errors.log");
    let error_file = match error_file  {Ok(file) => file,Err(error) => panic!("Error: {error:?}")};
    let error_log = tracing_subscriber::fmt::layer()
        .with_writer(Arc::new(error_file));

    let warn_file = File::create("/tmp/webai/logs/warn.log");
    let warn_file = match warn_file  {Ok(file) => file,Err(error) => panic!("Error: {error:?}")};
    let warn_log = tracing_subscriber::fmt::layer()
        .with_writer(Arc::new(warn_file));

    tracing_subscriber::registry()
        .with(
            stdout_log
                // Add an `INFO` filter to the stdout logging layer
                .with_filter(filter::LevelFilter::INFO)
                // Combine the filtered `stdout_log` layer with the
                // `debug_log` layer, producing a new `Layered` layer.
                .and_then(debug_log)
                // Add a filter to *both* layers that rejects spans and
                // events whose targets start with `metrics`.
                .with_filter(filter::filter_fn(|metadata| {
                    !metadata.target().starts_with("metrics")
                }))
        )
        .with(error_log.with_filter(filter::LevelFilter::ERROR))
        .with(warn_log.with_filter(filter::LevelFilter::WARN))
        .init();

    tracing::info!("Launch test");

    // This event will only be seen by the debug log file layer:
    tracing::debug!("this is a message, and part of a system of messages");

    // This event will be seen by both the stdout log layer *and*
    // the debug log file layer, but not by the metrics layer.
    tracing::warn!("the message is a warning about danger!");

    tracing::error!("Test error");

    // Removed WebAISession from middleware state and use a default one here instead
    let middleware = match cmd.is_present("https") {
        true => {
            // If Https is enabled, create a secure middleware handling LoginData over sessions
            NewSessionMiddleware::default().with_session_type::<Option<DefaultSession>>()
        }
        false => {
            NewSessionMiddleware::default()
                // Configure the type of data which we want to store in the session.
                // See the custom_data_type example for storing more complex data.
                .with_session_type::<Option<DefaultSession>>()
                // By default, the cookies used are only sent over secure connections. For our test server,
                // we don't set up an HTTPS certificate, so we allow the cookies to be sent over insecure
                // connections. This should not be done in real applications.
                .insecure()
        }
    };


    let pipelines = new_pipeline_set();

    let (pipelines, default) = pipelines.add(
        new_pipeline()
            .add(middleware)
            .build(),
    );

    // SQLX Middleware for Database readings
    // Pass the username, password and database info below
    let db_creds = "your db creds here";

    // Create DB task which will process all async request to read
    let sqlx_task = block_on( database_management::DbAsyncTask::new(db_creds)).unwrap();

    // Create Middleware containing the TX which will allow communication with the sqlx_task
    let sqlx_db = database_management::DbAsyncMiddleware::new(sqlx_task.tx.clone());
    let (pipelines, extended2) = pipelines.add(
        new_pipeline()
            .add(StateMiddleware::new(sqlx_db))
            .build(),
    );



    // Page Parser Middleware that stores instructions into a stack
    let (reqwest_stack_middleware, rsm_rx) = ReqwestStackMiddleware::new(DbAsyncMiddleware::new(sqlx_task.tx.clone()));
    let (pipelines, extended) = pipelines.add(
        new_pipeline()
            .add(StateMiddleware::new(reqwest_stack_middleware))
            .build(),
    );


    // - Create Runtimes
    // Now run the task in a runtime
    let rt = tokio::runtime::Runtime::new().unwrap();
    // Third spawn a listening task in the runtime to keep the connection alive with the database
    // Spawn a future onto the runtime
    rt.spawn(async {
        sqlx_task.process().await
    });

    // Creates its runtime
    let rt = tokio::runtime::Runtime::new().unwrap();
    rt.spawn(async {
        rsm_rx.process().await
    });


    let pipeline_set = finalize_pipeline_set(pipelines);
    let default_chain = (default, ());
    let extended_chain = (extended, default_chain);
    let extended_chain = (extended2, extended_chain);


    let router = build_router(extended_chain, pipeline_set, |route| {
    //let router = build_simple_router(|route|{


        route.scope("/", |route| {
            route.get("").to(get_main);
        });

        route.scope("/pages/*", |route|{
            route.get("").to(get_page);
        });

        // When the script is launched, sends data here
        route.scope("/start_webai", |route| {
            route.post("").to_async(webai_management::start_webai);
            route.options("").to(session_management::accept_cors_policy)
        });

        route.scope("/send_packets", |route| {
            route.post("").to_async(webai_management::receive_webai_packets);
            route.options("").to(session_management::accept_cors_policy)
        });

        route.scope("/send_questionnaire", |route| {
            route.post("").to_async(webai_management::receive_webai_questionnaire);
            route.options("").to(session_management::accept_cors_policy)
        });

        route.scope("/get_monitor_data", |route| {
           route.post("").to_async(get_monitor_data)
        });

        route.get("/*").to(to_dir_handler);



    });

    if cmd.is_present("https") {
        // TLS gotham server that load the .pem files
        gotham::start_with_tls(addr, router, build_config().unwrap())
    } else {
        // Gotham HTTP
        gotham::start(addr, router)
    }
}




// Load the certificates
fn build_config() -> Result<rustls::ServerConfig, rustls::TLSError> {
    let mut cfg = rustls::ServerConfig::new(NoClientAuth::new());
    let full_chain = File::open("/Users/lucas-andreithil/localhost.crt").unwrap();
    //let full_chain = File::open("/Users/lucas-andreithil/192.168.1.141.crt").unwrap();
    let mut cert_file = BufReader::new(full_chain);
    let priv_key = File::open("/Users/lucas-andreithil/localhost.key").unwrap();
    let mut key_file = BufReader::new(priv_key);
    let certs = certs(&mut cert_file).unwrap();

    let mut keys = pkcs8_private_keys(&mut key_file).unwrap();

    cfg.set_single_cert(certs, keys.remove(0))?;
    Ok(cfg)
}

pub fn parse_cmd() -> clap::ArgMatches<'static> {
    let matches = App::new("")
        .arg(Arg::with_name("ip")
            .short("ip")
            .long("ip")
            .value_name("String")
            .help("Bind to tihs [ip:port] of your server")
            .required(true)
            .takes_value(true))
        .arg(Arg::with_name("https")
            .short("https")
            .long("https")
            .help("Run with https enabled"))
        .get_matches();

    println!("{matches:?}");

    matches
}

