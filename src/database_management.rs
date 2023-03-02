use std::borrow::Borrow;
use serde::{Serialize};
use tokio::sync::{mpsc, oneshot};
use sqlx::postgres::PgPoolOptions;
use sqlx::{Pool, Postgres};
use std::sync::{Arc, Mutex};
use gotham_derive::StateData;
use sqlx::{types::Uuid};
use tokio::sync::mpsc::error::SendError;
use tokio::sync::oneshot::Sender;
use crate::page_hasher::{ContentData, PageDescriptor};
use crate::webai_management::{WebAIAccount, WebAIQuestionnaire};
use crate::WebAISession;

/// Structures representing the rows in the database

/// For monitoring content in the UI
#[derive(Debug, Serialize)]
pub struct Monitor {
    pub(crate) webai_account_total: i64,
    pub(crate) webai_session_total: i64,
    pub(crate) unique_webai_account_in_sessions: usize,
    pub(crate) languages: Vec<String>,
    pub(crate) hops_mean: usize,
    pub(crate) answered_questionnaire: usize,
    pub(crate) total_links: usize,
    pub(crate) page_descriptor_urls: Vec<String>,
    pub(crate) total_links_content_data: usize,
    pub(crate) content_data_urls: Vec<String>,
    pub(crate) total_packets: usize
}

/// New WebAIDataPackets
#[derive(Debug, sqlx::FromRow,)]
pub struct WebAIDataPacket {
    pub(crate) serial_value: u64,
    pub(crate) session_uuid: u128,
    pub(crate) hop: i16,
    pub(crate) time: i32,
    pub(crate) url: String,
    pub(crate) inner_width: i16,
    pub(crate) inner_height: i16,
    pub(crate) outer_width: i16,
    pub(crate) outer_height: i16,
    pub(crate) x_offset: i16,
    pub(crate) y_offset: i16,
    pub(crate) screen_left: i16,
    pub(crate) screen_top: i16,
    pub(crate) screen_x: i16,
    pub(crate) screen_y: i16,
    pub(crate) has_mouse: bool,
    pub(crate) trackpad: i16,
    pub(crate) coords_t: Vec<i32>,
    pub(crate) coords_x: Vec<i16>,
    pub(crate) coords_y: Vec<i16>,
    pub(crate) clicks_t: Vec<i32>,
    pub(crate) clicks_x: Vec<i16>,
    pub(crate) clicks_y: Vec<i16>,
    pub(crate) scrolls_t: Vec<i32>,
    pub(crate) scrolls_x: Vec<i16>,
    pub(crate) scrolls_y: Vec<i16>,
    pub(crate) touches_t: Vec<i32>,
    pub(crate) touches_x: Vec<i16>,
    pub(crate) touches_y: Vec<i16>,
    pub(crate) hash_page: i32,
    pub(crate) hash_content: Vec<i32>
}


/*
/// This is the data retrieved from the database after being transformed
#[derive(Debug, PartialEq, Eq, sqlx::FromRow, Serialize)]
pub struct PageData {
    id: u128,
    url: String,
    content: String,
    first_date_found: String,
    last_date_found: String,
    hash_content: Vec<u128>
}

impl PageData {
    pub fn new_empty() -> Self {Self{
        id: u128::MIN,
        url: "".to_string(),
        content: "".to_string(),
        first_date_found: "".to_string(),
        last_date_found: "".to_string(),
        hash_content: vec![]
    }}
}

#[derive(Debug, PartialEq, Eq, sqlx::FromRow)]
struct PageDataOptionDB {
    url: String,
    content: String,
    first_date_found: String,
    last_date_found: String,
    hash_content: Vec<u128>
}


/// Content Data
/// Relates to Styles and Scripts files stored in the database
#[derive(Debug, PartialEq, Eq, sqlx::FromRow, Serialize)]
pub struct ContentData {
    id: i32,
    url: String,
    content: String,
    first_date_found: String,
    last_date_found: String
}

impl ContentData {
    pub fn new_empty() -> Self { Self {
        id: i32::MIN,
        url: "".to_string(),
        content: "".to_string(),
        first_date_found: "".to_string(),
        last_date_found: "".to_string()
    }}
}

#[derive(Debug, PartialEq, Eq, sqlx::FromRow)]
struct ContentDataOptionDB {
    id: i32,
    url: Option<String>,
    content: Option<String>,
    first_date_found: Option<String>,
    last_date_found: Option<String>
}*/




#[derive(Debug)]
pub enum CollectionTypes {
    WebAIAccount(WebAIAccount),
    WebAISession(WebAISession),
    WebAIDataPacket(WebAIDataPacket),
    WebAIQuestionnaire(WebAIQuestionnaire),
    PageDescriptor(PageDescriptor),
    ContentData(ContentData),
    MonitorUI(Monitor),
    ErrorType
}

// Allows to pass the right format to query the database
#[derive(Debug)]
pub enum CommunicationType {
    I32(i32),
    UUID(Uuid),
    VarChar64(u64),
}


#[derive(Debug)]
pub struct Collection {
    pub data: Vec<CollectionTypes>,     // Store each type of data structure in a Vec
    pub status: String                  // Status of structure used for creation or database communications
}

impl Collection {
    fn new_empty() -> Collection {
        Self { data: Vec::new(), status: "empty".to_string() }
    }


    /// Retrieve a specific collection type by its ID.
    /// Supports:
    ///
    ///     - WebAI Accounts
    pub async fn load_element_by_id(database_requester: &DbAsyncMiddleware, element: CollectionTypes, id: CommunicationType) -> Result<Self, DbAsyncMiddlewareError> {

        if let CollectionTypes::WebAIAccount(_) = element {
            return match id {
                CommunicationType::UUID(uuid) => {
                    match database_requester.query_webai_account(uuid).await {
                        Ok(collection) => {
                            Ok(collection) }
                        Err(e) => {
                            tracing::error!("error query webai account");
                            Self::match_middleware_error(e)
                        }
                    }
                },
                _ => {
                    tracing::error!("load_element_by_id");
                    Self::match_middleware_error(DbAsyncMiddlewareError::CommunicationType)
                }
            }
        }


        /*
        match element {
            CollectionTypes::WebAIAccount(_) => {
                return match id {
                    CommunicationType::UUID(uuid) => {
                        match database_requester.query_webai_account(uuid).await {
                            Ok(collection) => {
                                Ok(collection) }
                            Err(e) => {
                                tracing::error!("error query webai account");
                                Self::match_middleware_error(e)
                            }
                        }
                    }
                    _ => {
                        tracing::error!("load_element_by_id");
                        Self::match_middleware_error(DbAsyncMiddlewareError::CommunicationType)
                    }
                }
            },
            _ => {
                // Else type
            }
        }
        */
        // Wrong match so return that
        tracing::error!("load_element_by_id 2");
        Self::match_middleware_error(DbAsyncMiddlewareError::Type)
    }


    /// Adds a webai_account to the database
    pub async fn insert_webai_account(database_requester: &DbAsyncMiddleware, element: CollectionTypes) -> Result<Self, DbAsyncMiddlewareError> {
        match element {
            CollectionTypes::WebAIAccount(webai_account) => {
                return match database_requester.create_webai_account(webai_account).await {
                    Ok(collection) => {Ok(collection)}
                    Err(e) => {Self::match_middleware_error(e)}
                }
            },
            _ => {
                // Wrong type
                tracing::error!("insert_webai_account");
                Self::match_middleware_error(DbAsyncMiddlewareError::Type)
            }
        }
    }

    /// Updates last_seen value of WebAIAccount from middleware
    pub async fn update_last_seen_webai_account(database_requester: &DbAsyncMiddleware, webai_uuid: Uuid) -> Result<Self, DbAsyncMiddlewareError> {
        return match database_requester.update_last_seen_webai_account(webai_uuid).await {
            Ok(collection) => {Ok(collection)}
            Err(e) => {
                tracing::error!("update_last_seen_webai_account");
                Self::match_middleware_error(e)}
        }
    }

    /// Adds a webai_session to the database
    pub async fn insert_webai_session(database_requester: &DbAsyncMiddleware, element: CollectionTypes) -> Result<Self, DbAsyncMiddlewareError> {
        match element {
            CollectionTypes::WebAISession(webai_session) => {
                return match database_requester.create_webai_session(webai_session).await {
                    Ok(collection) => Ok(collection),
                    Err(e) => Self::match_middleware_error(e)
                }
            },
            _ => {
                tracing::error!("insert_webai_session");
                Self::match_middleware_error(DbAsyncMiddlewareError::Type)
            }
        }
    }

    /// Query WebAISession
    pub async fn query_webai_session(database_requester: &DbAsyncMiddleware, session_uuid: Uuid) -> Result<Self, DbAsyncMiddlewareError> {
        return match database_requester.query_webai_session(session_uuid).await {
            Ok(collection) => Ok(collection),
            Err(e) => Self::match_middleware_error(e)
        }
    }

    pub async fn update_webai_session_hops(database_requester: &DbAsyncMiddleware, element: CollectionTypes) -> Result<Self, DbAsyncMiddlewareError> {
        match element {
            CollectionTypes::WebAISession(webai_session) => {
                return match database_requester.update_webai_session_hops(webai_session).await {
                    Ok(collection) => Ok(collection),
                    Err(e) => Self::match_middleware_error(e)
                }
            },
            _ => {
                tracing::error!("update_webai_session_hops");
                Self::match_middleware_error(DbAsyncMiddlewareError::Type)
            }
        }
    }

    pub async fn update_webai_session_answered_questionnaire(database_requester: &DbAsyncMiddleware, element: CollectionTypes) -> Result<Self, DbAsyncMiddlewareError> {
        match element {
            CollectionTypes::WebAISession(webai_session) => {
                return match database_requester.update_webai_session_answered_questionnaire(webai_session).await {
                    Ok(collection) => Ok(collection),
                    Err(e) => Self::match_middleware_error(e)
                }
            },
            _ => {
                tracing::error!("update_webai_session_answered_questionnaire");
                Self::match_middleware_error(DbAsyncMiddlewareError::Type)
            }
        }
    }

    pub async fn write_webai_data_packet(database_requester: &DbAsyncMiddleware, element: CollectionTypes) -> Result<Self, DbAsyncMiddlewareError> {
        match element {
            CollectionTypes::WebAIDataPacket(webai_data_packet) => {
                return match database_requester.insert_webai_data_packet(webai_data_packet).await {
                    Ok(collection) => Ok(collection),
                    Err(e) => Self::match_middleware_error(e)
                }
            },
            _ => {
                tracing::error!("write_webai_data_packet");
                Self::match_middleware_error(DbAsyncMiddlewareError::Type)
            }
        }
    }

    pub async fn insert_webai_questionnaire(database_requester: &DbAsyncMiddleware, element: CollectionTypes) -> Result<Self, DbAsyncMiddlewareError> {
        match element {
            CollectionTypes::WebAIQuestionnaire(webai_questionnaire) => {
                return match database_requester.insert_webai_questionnaire(webai_questionnaire).await {
                    Ok(collection) => Ok(collection),
                    Err(e) => Self::match_middleware_error(e)
                }
            },
            _ => {
                tracing::error!("insert_webai_questionnaire");
                Self::match_middleware_error(DbAsyncMiddlewareError::Type)
            }
        }
    }

    pub async fn query_webai_questionnaire(database_requester: &DbAsyncMiddleware, webai_uuid: Uuid) -> Result<Self, DbAsyncMiddlewareError> {
        return match database_requester.query_webai_questionnaire(webai_uuid).await {
            Ok(collection) => Ok(collection),
            Err(e) => Self::match_middleware_error(e)
        }
    }

    pub async fn insert_page_descriptor(database_requester: &DbAsyncMiddleware, element: CollectionTypes) -> Result<Self, DbAsyncMiddlewareError> {
        match element {
            CollectionTypes::PageDescriptor(page_descriptor) => {
                return match database_requester.insert_page_descriptor(page_descriptor).await {
                    Ok(collection) => Ok(collection),
                    Err(e) => Self::match_middleware_error(e)
                }
            },
            _ => { Self::match_middleware_error(DbAsyncMiddlewareError::Type) }
        }
    }

    pub async fn query_page_descriptor(database_requester: &DbAsyncMiddleware, hash_value: u64) -> Result<Self, DbAsyncMiddlewareError> {
        return match database_requester.query_page_descriptor(hash_value).await {
            Ok(collection) => Ok(collection),
            Err(e) => Self::match_middleware_error(e)
        }
    }

    pub async fn update_page_descriptor(database_requester: &DbAsyncMiddleware, element: CollectionTypes) -> Result<Self, DbAsyncMiddlewareError> {
        match element {
            CollectionTypes::PageDescriptor(page_descriptor) => {
                return match database_requester.update_page_descriptor(page_descriptor.hash.parse::<u64>().unwrap(), page_descriptor).await {
                    Ok(collection) => Ok(collection),
                    Err(e) => Self::match_middleware_error(e)
                }
            },
            _ => {
                Self::match_middleware_error(DbAsyncMiddlewareError::Type)
            }
        }
    }

    pub async fn update_page_descriptor_hash_contents(database_requester: &DbAsyncMiddleware, element: CollectionTypes) -> Result<Self, DbAsyncMiddlewareError> {
        match element {
            CollectionTypes::PageDescriptor(page_descriptor) => {
                return match database_requester.update_page_descriptor_hash_contents(page_descriptor.hash.parse::<u64>().unwrap(), page_descriptor).await {
                    Ok(collection) => Ok(collection),
                    Err(e) => Self::match_middleware_error(e)
                }
            },
            _ => {
                Self::match_middleware_error(DbAsyncMiddlewareError::Type)
            }
        }
    }

    pub async fn query_content_data(database_requester: &DbAsyncMiddleware, hash_value: u64) -> Result<Self, DbAsyncMiddlewareError> {
        return match database_requester.query_content_data(hash_value).await {
            Ok(collection) => Ok(collection),
            Err(e) => Self::match_middleware_error(e)
        }
    }

    pub async fn insert_content_data(database_requester: &DbAsyncMiddleware, element: CollectionTypes) -> Result<Self, DbAsyncMiddlewareError> {
        match element {
            CollectionTypes::ContentData(content_data) => {
                return match database_requester.insert_content_data(content_data).await {
                    Ok(collection) => Ok(collection),
                    Err(e) => Self::match_middleware_error(e)
                }
            },
            _ => { Self::match_middleware_error(DbAsyncMiddlewareError::Type) }
        }
    }

    pub async fn update_content_data(database_requester: &DbAsyncMiddleware, element: CollectionTypes) -> Result<Self, DbAsyncMiddlewareError> {
        match element {
            CollectionTypes::ContentData(content_data) => {
                return match database_requester.update_content_data(content_data.hash.parse::<u64>().unwrap(), content_data).await {
                    Ok(collection) => Ok(collection),
                    Err(e) => Self::match_middleware_error(e)
                }
            },
            _ => {
                Self::match_middleware_error(DbAsyncMiddlewareError::Type)
            }
        }
    }

    pub async fn get_monitor_data(database_requester: &DbAsyncMiddleware) -> Result<Self, DbAsyncMiddlewareError> {
        return match database_requester.get_monitor_data().await {
            Ok(collection) => Ok(collection),
            Err(e) => Self::match_middleware_error(e)
        }
    }


    fn match_middleware_error(e: DbAsyncMiddlewareError) -> Result<Self, DbAsyncMiddlewareError> {
        match e {
            DbAsyncMiddlewareError::Receive => {
                tracing::error!("RecvError loading database");
                Err(e)
            }
            DbAsyncMiddlewareError::Unwrap => {
                tracing::error!("Unwrap error loading database");
                Err(e)
            }
            DbAsyncMiddlewareError::Type => {
                tracing::error!("TypeError in matching instructions");
                Err(e)
            },
            DbAsyncMiddlewareError::CommunicationType => {
                tracing::error!("CommunicationType Error in providing right type");
                Err(e)
            }
            DbAsyncMiddlewareError::NotOK => {
                tracing::error!("NotOK error in matching middleware_error");
                Err(e)
            }
        }
    }
}







/// Part managing all of the connection readings

// Messaging between oneshot channels
#[derive(Debug)]
pub enum OneShotMessage {
    Success,
    Error
}


// Messaging between onshot channels specifying what postgres request should be make
#[derive(Debug)]
pub enum DbMessage {
    QueryWebAIAccount,              // Queries WebAIAccount from the database
    InsertWebAIAccount,             // Creates WebAIAccount
    UpdateLastSeenWebAIAccount,     // Updates the last seen value of a WebAIAccount

    InsertWebAISession,             // Insert a WebAISession instance in the database
    QueryWebAISession,              // Query a WebAISession based on its Session_uuid
    UpdateHopCountWebAISession,     // Update the hop count value of the WebAISession instance
    UpdateAnsweredQuestionnaireWebAISession,    // Change the flag if the questionnaire has been answered in that session

    InsertWebAIDataPacket,          // Insert an upcoming WebAIDataPacket in the database

    InsertWebAIQuestionnaire,       // Insert an upcoming WebAIQuestionnaire in the database
    QueryWebAIQuestionnaire,        // Query a webai questionnaire

    InsertPageDescriptor,           // Insert a page descriptor with its information and content,
    QueryPageDescriptor,            // Query PageDescriptor based on hash
    UpdatePageDescriptor,           // Update elements of the page Descriptor: Date
    UpdatePageDescriptorContentData,    // Update a page's external links with references to ContentData

    InsertContentData,              // Insert a content data type into the database: style or script
    QueryContentData,               // Checks whether the entry exists in the database / returns its content
    UpdateContentData,              // Update specific values of that entry

    GetMonitorData,                 // Loads all monitoring data needed
}

#[derive(Debug)]
pub enum DbAsyncMiddlewareError {
    Receive,
    Unwrap,
    Type,
    CommunicationType,
    NotOK
}

// MPSC Sender Type to communicate between the DbAsyncTask and Middleware
type DatabaseRx = mpsc::Receiver<(DbMessage, oneshot::Sender<(OneShotMessage, Collection)>, CommunicationType, Collection)>;
type DatabaseTx = mpsc::Sender<(DbMessage, oneshot::Sender<(OneShotMessage, Collection)>, CommunicationType, Collection)>;

// This is the middleware structure we use to share the TX communicating with the DbAsyncTask (sqlx_task)
// accross all threads
#[derive(Clone, StateData)]
pub struct DbAsyncMiddleware {
    tx_arc: Arc<Mutex<DatabaseTx>>
}

impl DbAsyncMiddleware {
    // Creation by passing the TX allowing the communication with the DbAsyncTask (sqlx_task)
    pub fn new(tx: DatabaseTx) -> Self {
        Self {tx_arc: Arc::new(Mutex::new(tx))}
    }

    // Waits for incoming response from DbAsyncTask and returns the communication result
    async fn answer(&self, rx_req: oneshot::Receiver<(OneShotMessage, Collection)> ) -> Result<Collection, DbAsyncMiddlewareError> {
        match rx_req.await {
            Ok((one_shot_message, collection)) => {
                match one_shot_message {
                    OneShotMessage::Success => { Ok(collection) }
                    OneShotMessage::Error => { Err(DbAsyncMiddlewareError::Unwrap) }
                }
            },
            Err(e) => {
                tracing::error!("Error DbAsyncMiddleware Answer: {e:?}");
                Err(DbAsyncMiddlewareError::Receive)
            }
        }
    }


    /// Query database to retrieve a WebAIAccount
    pub async fn query_webai_account(&self, webai_uuid: Uuid) -> Result<Collection, DbAsyncMiddlewareError> {
        // 1 - Create a oneshot channel which will be passed to the DbAsyncTask (sqlx_task) to allow
        // it returning the String payload
        let (tx_req, rx_req) = oneshot::channel();

        // 2 - Obtain the TX to communicate with DbAsyncTask
        let sender = self.tx_arc.lock().unwrap().clone();

        // 3 - Send the oneshot TX allowing the DbAsyncTask to communicate back
        let sender = sender.send((DbMessage::QueryWebAIAccount, tx_req, CommunicationType::UUID(webai_uuid), Collection::new_empty()));
        match sender.await {
            Ok(_) => {
                //println!("Sender got good message");
            },
            Err(e) => {
                tracing::error!("Got send error in query_webai_account {}", e);
            }
        }

        self.answer(rx_req).await
    }

    /// Query database to create a WebAIAccount
    pub async fn create_webai_account(&self, webai_account: WebAIAccount) -> Result<Collection, DbAsyncMiddlewareError> {
        // 1 - Create a oneshot channel which will be passed to the DbAsyncTask (sqlx_task) to allow
        // it returning the String payload
        let (tx_req, rx_req) = oneshot::channel();

        // 2 - Obtain the TX to communicate with DbAsyncTask
        let sender = self.tx_arc.lock().unwrap().clone();

        // 2.5 - Prepare collection passing the account
        let collection = Collection {
            data: vec![CollectionTypes::WebAIAccount(webai_account)],
            status: "".to_string()
        };

        // 3 - Send the oneshot TX allowing the DbAsyncTask to communicate back
        let sender = sender.send((DbMessage::InsertWebAIAccount, tx_req, CommunicationType::I32(i32::MIN), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    /// Updates the last_seen field of a WebAIAccount
    pub async fn update_last_seen_webai_account(&self, webai_uuid: Uuid) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection::new_empty();
        let sender = sender.send((DbMessage::UpdateLastSeenWebAIAccount, tx_req, CommunicationType::UUID(webai_uuid), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    pub async fn create_webai_session(&self, webai_session: WebAISession) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![CollectionTypes::WebAISession(webai_session)],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::InsertWebAISession, tx_req, CommunicationType::I32(i32::MIN), collection));
        match sender.await {
            Ok(_) => {

            },
            Err(e) => {
                tracing::error!("Unwrap error in sender for create_webai_session. error: {}", e)
            }
        }; //;.unwrap_or(tracing::error!("Unwrap error in sender for create_webai_session"));

        self.answer(rx_req).await
    }

    pub async fn query_webai_session(&self, session_uuid: Uuid) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::QueryWebAISession, tx_req, CommunicationType::UUID(session_uuid), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    pub async fn update_webai_session_hops(&self, webai_session: WebAISession) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![CollectionTypes::WebAISession(webai_session)],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::UpdateHopCountWebAISession, tx_req, CommunicationType::I32(i32::MIN), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    pub async fn update_webai_session_answered_questionnaire(&self, webai_session: WebAISession) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![CollectionTypes::WebAISession(webai_session)],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::UpdateAnsweredQuestionnaireWebAISession, tx_req, CommunicationType::I32(i32::MIN), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }


    /// Inserts into the database a new packet coming from WebAI
    pub async fn insert_webai_data_packet(&self, webai_data_packet: WebAIDataPacket) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![CollectionTypes::WebAIDataPacket(webai_data_packet)],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::InsertWebAIDataPacket, tx_req, CommunicationType::I32(i32::MIN), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    /// Insert into the database a received WebAIQuestionnaire
    pub async fn insert_webai_questionnaire(&self, webai_questionnaire: WebAIQuestionnaire) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![CollectionTypes::WebAIQuestionnaire(webai_questionnaire)],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::InsertWebAIQuestionnaire, tx_req, CommunicationType::I32(i32::MIN), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    /// Query WebAI Questionnaires
    pub async fn query_webai_questionnaire(&self, webai_uuid: Uuid) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::QueryWebAIQuestionnaire, tx_req, CommunicationType::UUID(webai_uuid), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    /// Insert new Page Descriptor into database
    pub async fn insert_page_descriptor(&self, page_descriptor: PageDescriptor) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![CollectionTypes::PageDescriptor(page_descriptor)],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::InsertPageDescriptor, tx_req, CommunicationType::I32(i32::MIN), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    /// Query based on Hash
    pub async fn query_page_descriptor(&self, hash_value: u64) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::QueryPageDescriptor, tx_req, CommunicationType::VarChar64(hash_value), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    /// Update values of the page descriptor based on provided hash value. Now only update last_seen_date
    pub async fn update_page_descriptor(&self, hash_value: u64, page_descriptor: PageDescriptor) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![CollectionTypes::PageDescriptor(page_descriptor)],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::UpdatePageDescriptor, tx_req, CommunicationType::VarChar64(hash_value), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    /// Update HashContents
    pub async fn update_page_descriptor_hash_contents(&self, hash_value: u64, page_descriptor: PageDescriptor) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![CollectionTypes::PageDescriptor(page_descriptor)],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::UpdatePageDescriptorContentData, tx_req, CommunicationType::VarChar64(hash_value), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    /// Query based on Hash a Content Data
    pub async fn query_content_data(&self, hash_value: u64) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::QueryContentData, tx_req, CommunicationType::VarChar64(hash_value), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    /// Insert new Content Data into database
    pub async fn insert_content_data(&self, content_data: ContentData) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![CollectionTypes::ContentData(content_data)],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::InsertContentData, tx_req, CommunicationType::I32(i32::MIN), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    /// Update values of the content data based on provided hash value. Now only update last_seen_date
    pub async fn update_content_data(&self, hash_value: u64, content_data: ContentData) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![CollectionTypes::ContentData(content_data)],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::UpdateContentData, tx_req, CommunicationType::VarChar64(hash_value), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }

    /// Returns information about the database to monitor
    pub async fn get_monitor_data(&self) -> Result<Collection, DbAsyncMiddlewareError> {
        let (tx_req, rx_req) = oneshot::channel();
        let sender = self.tx_arc.lock().unwrap().clone();
        let collection = Collection {
            data: vec![],
            status: "".to_string()
        };
        let sender = sender.send((DbMessage::GetMonitorData, tx_req, CommunicationType::I32(0), collection));
        sender.await.unwrap();

        self.answer(rx_req).await
    }


}

// DbAsyncTask must be started in a runtime and will manage connections to the database
pub struct DbAsyncTask {
    rx: DatabaseRx,        // Receives communications from user's gotham requests
    pub tx: DatabaseTx,      // TX that is cloned and shared in the DbAsyncMiddleware in gotham's internal state
    pool: Pool<Postgres>                                // Pool of connections to allow database readings
}

impl DbAsyncTask {
    // Creates a DbAsyncTask where credentials for the database access are provided.
    // The amount of max_connections is hardcoded as well as the buffer size. Once the buffer
    // is full of requests, the sending options will sleep.
    pub async fn new(credentials: &str) -> Result<Self, sqlx::Error> {
        match PgPoolOptions::new()
            .max_connections(5)
            .connect(credentials).await {
            Ok(pool) => {
                let (tx, rx) = mpsc::channel(32);
                Ok(Self {
                    rx,
                    tx,
                    pool
                })
            },
            Err(e) => { Err(e) }
        }
    }

    // When a query error happens in the database, returns an error message through the oneshot channel
    fn return_query_error(&self, back_channel: oneshot::Sender<(OneShotMessage, Collection)>, message: &str) {
        tracing::error!("Error query: {message}");
        let mut collection = Collection::new_empty();
        collection.status = message.to_string();
        back_channel.send((OneShotMessage::Error, collection)).unwrap();
    }


    // Process requests sent by the users from gotham's request handler.
    // Communications are done through the self.tx which is cloned into the DbAsyncMiddleware
    // todo add back messaging for errors
    // todo add matching in unwrap of types
    pub async fn process(mut self) {
        // Loop and wait to receive something
        while let Some((db_message, back_channel, communication_type, collection)) = self.rx.recv().await {

            // Match with a message enum specifying what kind of request has been made and proceed
            match db_message {
                // Gets the WebAIAccount by ID
                DbMessage::QueryWebAIAccount => {

                    // Match communication type
                    let uuid = match communication_type {
                        CommunicationType::UUID(uuid) => {
                            uuid
                        },
                        _ => {
                            // type communication error so return message and continue loop
                            tracing::error!("Error of Communication type!!!!");
                            let error_collection = Collection { data: vec![], status: "failure communication type".to_string() };
                            self.return_query_error(back_channel, "failure communication type");
                            continue
                        }
                    };

                    match sqlx::query_as!(WebAIAccount, r#"SELECT * FROM webaiaccount WHERE webai_uuid = $1"#, uuid).fetch_one(&self.pool).await {
                        Ok(row) => {
                            let entry = CollectionTypes::WebAIAccount(WebAIAccount {
                                webai_uuid: row.webai_uuid,
                                first_seen: row.first_seen,
                                last_seen: row.last_seen,
                                blocking_local_storage: row.blocking_local_storage
                            });

                            let found_collection = Collection { data: vec![entry], status: "ok".to_string() };
                            // Send back the communication through the middleware's oneshot TX and drop them.
                            back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                        },
                        Err(e) => {

                            // So very important stuff:
                            // If no account exist, it is going to return an error. This is Okay.
                            // This is okay if indeed there are no accounts yet created.
                            // So if we match with the right error message, we can return a success and not an error.
                            // But if not, we should return an error.
                            // Thus we must always comply with the right sqlx version that returns this very message, otherwise we have big problems.
                            // todo: ensure that this error message is the right one
                            // todo: improve check message
                            if format!("{e}").as_str() == "no rows returned by a query that expected to return at least one row" {

                                // Pass an empty status message
                                let found_collection = Collection { data: vec![], status: "empty".to_string() };
                                // Send back the communication through the middleware's oneshot TX and drop them.
                                back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                            } else {
                                tracing::error!("Big error message with database in query webai account: {e}");
                                self.return_query_error(back_channel, format!("error QueryWebAIAccount query {e}").as_str())
                            }

                        }
                    };


                },
                DbMessage::InsertWebAIAccount => {
                    // todo: get rid of the query webai_uuid function above and only use this one. If UUID already exists when trying to insert, we return the message from here and ask the gotham environment to create a new random UUID and try to insert it again.

                    // Wrong amount of elements in collection provided
                    if collection.data.len() != 1 {
                        self.return_query_error(back_channel, format!("wrong amount of elements in database request: {}", collection.data.len()).as_str())
                    } else {
                        // When getting one element, we match on the type of the first element
                        match collection.data[0].borrow() {
                            CollectionTypes::WebAIAccount(account) => {
                                //let uuid_raw = Uuid::from_u128(account.webai_uuid);

                                match sqlx::query_as!(WebAIAccount, r#"INSERT INTO webaiaccount(webai_uuid, first_seen, last_seen, blocking_local_storage)
                                VALUES ($1, $2, $3, $4)"#, account.webai_uuid, account.first_seen, account.last_seen, account.blocking_local_storage).fetch_all(&self.pool).await {
                                    Ok(row) => {

                                        let found_collection = Collection { data: vec![], status: "account created".to_string() };
                                        // Send back the communication through the middleware's oneshot TX and drop them.
                                        back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                    },
                                    Err(e) => {
                                        self.return_query_error(back_channel, "error QueryWebAIAccount query {e}".to_string().as_str())
                                    }
                                }
                            },
                            _ => {
                                // Wrong collection given
                                tracing::error!("Oops! wrong collection given: {collection:?}");
                                self.return_query_error(back_channel, "error QueryWebAIAccount query, wrong collection type provided".to_string().as_str())
                            }
                        }
                    }
                },
                DbMessage::UpdateLastSeenWebAIAccount => {
                    match communication_type {
                        CommunicationType::UUID(webai_uuid) => {
                            let new_last_seen = chrono::Utc::now().timestamp();

                            match sqlx::query_as!(WebAIAccount, r#"UPDATE webaiaccount SET last_seen = $1 WHERE webai_uuid = $2;"#, new_last_seen, webai_uuid).fetch_all(&self.pool).await {
                                Ok(row) => {
                                    let found_collection = Collection { data: vec![], status: "account last_time updated".to_string() };
                                    back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                },
                                Err(e) => {
                                    self.return_query_error(back_channel, "error UpdateLastSeenWebAIAccount query {e}".to_string().as_str())
                                }
                            }

                        },
                        _ => {
                            tracing::error!("Error: sent wrong communication_type for UpdateLastSeenWebAIAccount");
                            self.return_query_error(back_channel, "Error: sent wrong communication_type for UpdateLastSeenWebAIAccount".to_string().as_str())
                        }
                    }
                },
                DbMessage::InsertWebAISession => {
                    // Wrong amount of elements in collection provided
                    if collection.data.len() != 1 {
                        self.return_query_error(back_channel, format!("wrong amount of elements in database request: {}", collection.data.len()).as_str())
                    } else {
                        // When getting one element, we match on the type of the first element
                        match collection.data[0].borrow() {
                            CollectionTypes::WebAISession(session) => {
                                //let uuid_raw = Uuid::from_u128(account.webai_uuid);

                                // Convert from u128 into Uuid type
                                // old:
                                //let session_uuid = Uuid::from_u128(session.session_uuid);
                                //let webai_uuid = Uuid::from_u128(session.webai_uuid);

                                let session_uuid = session.session_uuid;
                                let webai_uuid = session.webai_uuid;

                                match sqlx::query_as!(WebAISession, r#"INSERT INTO webaisession(session_uuid, total_hops, version, webai_uuid, start_time, user_agent, app_name, language, cookie_enabled, product, vendor, answered_questionnaire)
                                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) "#, session_uuid, session.total_hops, session.version, webai_uuid, session.start_time, session.user_agent, session.app_name, session.language, session.cookie_enabled, session.product, session.vendor, session.answered_questionnaire).fetch_all(&self.pool).await {
                                    Ok(row) => {

                                        let found_collection = Collection { data: vec![], status: "session created".to_string() };
                                        // Send back the communication through the middleware's oneshot TX and drop them.
                                        back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                    },
                                    Err(e) => {
                                        if format!("{e}") == *"error returned from database: duplicate key value violates unique constraint \"webai_session_pkey\"" {
                                            // WebAISession UUID already exists, return an error
                                            tracing::error!("Error! WebAISession UUID already exists! {session_uuid}");
                                            let found_collection = Collection { data: vec![], status: "session UUID already exists".to_string() };
                                            back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                        } else {
                                            self.return_query_error(back_channel, format!("error InsertWebAISession insert query {e}").as_str())

                                        }
                                    }
                                }
                            },
                            _ => {
                                // Wrong collection given
                                tracing::error!("Oops! wrong collection given: {collection:?}");

                                // todo: implement code when UUID is already present in database, and return message asking to re-create a new webai_session_id


                                self.return_query_error(back_channel, "error InsertWebAISession insert query, wrong collection type provided".to_string().as_str())
                            }
                        }
                    }
                },
                DbMessage::QueryWebAISession => {
                  // Query a WebAISession based on the provided ID
                    match communication_type {
                        CommunicationType::UUID(session_uuid) => {
                            match sqlx::query_as!(WebAISession, r#"SELECT * FROM WEBAISESSION WHERE session_uuid = $1"#, session_uuid).fetch_all(&self.pool).await {
                                Ok(rows) => {

                                    let mut data = Vec::new();

                                    for row in rows {
                                        let entry = CollectionTypes::WebAISession(WebAISession {
                                            session_uuid,
                                            webai_uuid: row.webai_uuid,
                                            total_hops: row.total_hops,
                                            version: row.version,
                                            start_time: row.start_time,
                                            user_agent: row.user_agent,
                                            app_name: row.app_name,
                                            language: row.language,
                                            cookie_enabled: row.cookie_enabled,
                                            product: row.product,
                                            vendor: row.vendor,
                                            answered_questionnaire: row.answered_questionnaire
                                        });
                                        data.push(entry);
                                    }


                                    let found_collection = Collection { data, status: "ok".to_string() };
                                    // Send back the communication through the middleware's oneshot TX and drop them.
                                    back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                },
                                Err(e) => {
                                    self.return_query_error(back_channel, "error QueryWebAISession query {e}".to_string().as_str())
                                }
                            }
                        },
                        _ => {
                            tracing::error!("Error: sent wrong communication_type for QueryWebAISession");
                            self.return_query_error(back_channel, "Error: sent wrong communication_type for QueryWebAISession".to_string().as_str())
                        }
                    }
                },
                DbMessage::UpdateHopCountWebAISession => {
                    // Update Hop count of WebAISession based on its session_uuid
                    if collection.data.len() != 1 {
                        self.return_query_error(back_channel, format!("wrong amount of elements in database request: {}", collection.data.len()).as_str())
                    } else {
                        match collection.data[0].borrow() {
                            CollectionTypes::WebAISession(webai_session) => {
                                //let session_uuid = Uuid::from_u128(webai_session.session_uuid);
                                let session_uuid = webai_session.session_uuid;
                                let hop_value = webai_session.total_hops;

                                // todo: also query with webai_uuid? The main reason is that we do not have checks yet that the session are truly unique, or we could implement one
                                match sqlx::query_as!(WebAISession, r#"UPDATE webaisession SET total_hops = $1 where session_uuid = $2"#, hop_value, session_uuid).fetch_all(&self.pool).await {
                                    Ok(row) => {
                                        let found_collection = Collection { data: vec![], status: "session total_tops updated".to_string() };
                                        // Send back the communication through the middleware's oneshot TX and drop them.
                                        back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                    },
                                    Err(e) => {
                                        self.return_query_error(back_channel, "error QueryWebSession update query {e}".to_string().as_str())
                                    }
                                }
                            },
                            _ => {
                                // Wrong collection given
                                tracing::error!("Oops! wrong collection given: {collection:?}");
                                self.return_query_error(back_channel, "error QueryWebAISession insert query, wrong collection type provided".to_string().as_str())
                            }
                        }
                    }
                },
                DbMessage::UpdateAnsweredQuestionnaireWebAISession => {
                    if collection.data.len() != 1 {
                        self.return_query_error(back_channel, format!("wrong amount of elements in database request: {}", collection.data.len()).as_str())
                    } else {
                        match collection.data[0].borrow() {
                            CollectionTypes::WebAISession(webai_session) => {
                                //let session_uuid = Uuid::from_u128(webai_session.session_uuid);
                                let session_uuid = webai_session.session_uuid;

                                match sqlx::query_as!(WebAIQuestionnaire, r#"UPDATE webaisession SET answered_questionnaire = $1 WHERE session_uuid = $2"#, webai_session.answered_questionnaire, session_uuid).fetch_all(&self.pool).await {
                                    Ok(row) => {
                                        let found_collection = Collection { data: vec![], status: "session answered_questionnaire updated".to_string() };
                                        // Send back the communication through the middleware's oneshot TX and drop them.
                                        back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                    },
                                    Err(e) => {
                                        self.return_query_error(back_channel, "error QueryWebSession update query {e}".to_string().as_str())
                                    }
                                }
                            },
                            _ => {
                                // Wrong collection given
                                tracing::error!("Oops! wrong collection given: {collection:?}");
                                self.return_query_error(back_channel, "error QueryWebAISession insert query, wrong collection type provided".to_string().as_str())
                            }
                        }
                    }
                }
                DbMessage::InsertWebAIDataPacket => {
                    if collection.data.len() != 1 {
                        self.return_query_error(back_channel, format!("wrong amount of elements in database request: {}", collection.data.len()).as_str())
                    } else {
                        match collection.data[0].borrow() {
                            // WDP: WebAI Data Packet
                            CollectionTypes::WebAIDataPacket(wdp) => {

                                let session_uuid = Uuid::from_u128(wdp.session_uuid);

                                match sqlx::query_as!(WebAIDataPacket, r#"INSERT INTO webaidatapackets(session_uuid, hop, time, url, inner_width, inner_height, outer_width, outer_height, x_offset, y_offset, screen_left, screen_top, screen_x, screen_y, has_mouse, trackpad, coords_t, coords_x, coords_y, clicks_t, clicks_x, clicks_y, scrolls_t, scrolls_x, scrolls_y, touches_t, touches_x, touches_y, hash_page, hash_content)
                                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30)"#,
                                session_uuid, wdp.hop, wdp.time, wdp.url, wdp.inner_width, wdp.inner_height, wdp.outer_width, wdp.outer_height, wdp.x_offset, wdp.y_offset, wdp.screen_left, wdp.screen_top, wdp.screen_x, wdp.screen_y, wdp.has_mouse, wdp.trackpad, &wdp.coords_t, &wdp.coords_x, &wdp.coords_y, &wdp.clicks_t, &wdp.clicks_x, &wdp.clicks_y, &wdp.scrolls_t, &wdp.scrolls_x, &wdp.scrolls_y, &wdp.touches_t, &wdp.touches_x, &wdp.touches_y, wdp.hash_page, &wdp.hash_content
                                ).fetch_all(&self.pool).await {
                                    Ok(row) => {
                                        let found_collection = Collection { data: vec![], status: "sent".to_string() };
                                        // Send back the communication through the middleware's oneshot TX and drop them.
                                        back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                    },
                                    Err(e) => {
                                        self.return_query_error(back_channel, "error InsertWebAIDataPacket update query {e}".to_string().as_str())
                                    }
                                }

                            },
                            _ => {
                                // Wrong collection given
                                tracing::error!("Oops! wrong collection given: {collection:?}");
                                self.return_query_error(back_channel, "error InsertWebAIDataPacket insert query, wrong collection type provided".to_string().as_str())
                            }
                        }
                    }
                },
                DbMessage::InsertWebAIQuestionnaire => {
                    if collection.data.len() != 1 {
                        self.return_query_error(back_channel, format!("wrong amount of elements in database request: {}", collection.data.len()).as_str())
                    } else {
                        match collection.data[0].borrow() {
                            CollectionTypes::WebAIQuestionnaire(webai_questionnaire) => {

                                match sqlx::query_as!(WebAIQuestionnaire, r#"INSERT INTO WEBAIQUESTIONNAIRE(webai_uuid, session_uuid, version, gender, age_category, right_handed, anxiety, awareness, frustration, happiness, has_session)
                                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)"#, webai_questionnaire.webai_uuid, webai_questionnaire.session_uuid, webai_questionnaire.version, webai_questionnaire.gender, webai_questionnaire.age_category,
                                webai_questionnaire.right_handed, webai_questionnaire.anxiety, webai_questionnaire.awareness, webai_questionnaire.frustration, webai_questionnaire.happiness, webai_questionnaire.has_session).fetch_all(&self.pool).await {
                                    Ok(rows) => {
                                        let found_collection = Collection { data: vec![], status: "sent".to_string() };
                                        // Send back the communication through the middleware's oneshot TX and drop them.
                                        back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                    },
                                    Err(e) => {
                                        self.return_query_error(back_channel, "error InsertWebAIQuestionnaire update query {e}".to_string().as_str())
                                    }
                                }
                            },
                            _ => {
                                self.return_query_error(back_channel, "error InsertWebAIQuestionnaire insert query, wrong collection type provided".to_string().as_str())
                            }
                        }
                    }
                },
                DbMessage::QueryWebAIQuestionnaire => {
                    // Match communication type
                    let uuid = match communication_type {
                        CommunicationType::UUID(uuid) => {
                            uuid
                        },
                        _ => {
                            // type communication error so return message and continue loop
                            tracing::error!("Error of Communication type!!!!");
                            let error_collection = Collection { data: vec![], status: "failure communication type".to_string() };
                            self.return_query_error(back_channel, "failure communication type");
                            continue
                        }
                    };

                    match sqlx::query_as!(WebAIQuestionnaire, r#"SELECT * FROM WEBAIQUESTIONNAIRE WHERE webai_uuid = $1"#, uuid).fetch_all(&self.pool).await {
                        Ok(rows) => {

                            let mut found_collection = Collection { data: vec![], status: "ok".to_string() };

                            // Loop in the found rows to collect them
                            for row in rows {
                                let entry = CollectionTypes::WebAIQuestionnaire(WebAIQuestionnaire {
                                    serial_value: row.serial_value,
                                    webai_uuid: row.webai_uuid,
                                    session_uuid: row.session_uuid,
                                    version: row.version,
                                    gender: row.gender.to_string(),
                                    age_category: row.age_category.to_string(),
                                    right_handed: row.right_handed,
                                    anxiety: row.anxiety,
                                    awareness: row.awareness,
                                    frustration: row.frustration,
                                    happiness: row.happiness,
                                    has_session: row.has_session
                                });
                                found_collection.data.push(entry);
                            }

                            // Send back the communication through the middleware's oneshot TX and drop them.
                            back_channel.send((OneShotMessage::Success, found_collection)).unwrap();

                        },
                        Err(e) => {
                            if format!("{e}").as_str() == "no rows returned by a query that expected to return at least one row" {

                                // Pass an empty status message
                                let found_collection = Collection { data: vec![], status: "empty".to_string() };
                                // Send back the communication through the middleware's oneshot TX and drop them.
                                back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                            } else {
                                tracing::error!("Big error message with database in query webai account: {e}");
                                self.return_query_error(back_channel, format!("error QueryWebAIAccount query {e}").as_str())
                            }
                        }
                    }

                }
                DbMessage::InsertPageDescriptor => {
                    if collection.data.len() != 1 {
                        self.return_query_error(back_channel, format!("wrong amount of elements in database request: {}", collection.data.len()).as_str())
                    } else {
                        match collection.data[0].borrow() {
                            CollectionTypes::PageDescriptor(page_descriptor) => {

                                let hash_str = page_descriptor.hash.to_string();
                                let mut hash_contents = Vec::new();
                                for entry in &page_descriptor.hash_contents {hash_contents.push(entry.to_string())}

                                match sqlx::query_as!(PageDescriptor, r#"INSERT INTO PAGEDESCRIPTOR(url, content, hash, first_date_found, last_date_found, hash_contents)
                                VALUES($1, $2, $3, $4, $5, $6)"#, page_descriptor.url, page_descriptor.content, hash_str, page_descriptor.first_date_found, page_descriptor.last_date_found, &hash_contents).fetch_all(&self.pool).await {
                                    Ok(rows) => {
                                        let found_collection = Collection { data: vec![], status: "sent".to_string() };
                                        // Send back the communication through the middleware's oneshot TX and drop them.
                                        back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                    },
                                    Err(e) => {
                                        self.return_query_error(back_channel, "error InsertPageDescriptor update query {e}".to_string().as_str())
                                    }
                                }
                            },
                            _ => {
                                self.return_query_error(back_channel, "error InsertPageDescriptor insert query, wrong collection type provided".to_string().as_str())
                            }
                        }
                    }
                },
                DbMessage::QueryPageDescriptor => {
                    match communication_type {
                        CommunicationType::VarChar64(hash_value) => {
                            let hash_str = hash_value.to_string();
                            match sqlx::query_as!(PageDescriptor, r#"SELECT * FROM PAGEDESCRIPTOR WHERE HASH = $1"#, hash_str).fetch_all(&self.pool).await {
                                Ok(rows) => {

                                    // Nothing found return
                                    if rows.is_empty() {
                                        let found_collection = Collection { data: vec![], status: "no entries found".to_string() };
                                        // Send back the communication through the middleware's oneshot TX and drop them.
                                        back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                        continue
                                    }

                                    /*let found_page_descriptor = PageDescriptor {
                                        url: rows[0].url.to_string(),
                                        content: rows[0].url.to_string(),
                                        hash: rows[0].hash.to_string(),
                                        first_date_found: rows[0].first_date_found.clone(),
                                        last_date_found: rows[0].last_date_found.clone(),
                                        hash_contents: vec![]
                                    };*/

                                    let entry = CollectionTypes::PageDescriptor(PageDescriptor {
                                        url: rows[0].url.to_string(),
                                        content: rows[0].url.to_string(),
                                        hash: rows[0].hash.to_string(),
                                        first_date_found: rows[0].first_date_found,
                                        last_date_found: rows[0].last_date_found,
                                        hash_contents: rows[0].hash_contents.clone()
                                    });

                                    let found_collection = Collection { data: vec![entry], status: "sent".to_string() };
                                    // Send back the communication through the middleware's oneshot TX and drop them.
                                    back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                },
                                Err(e) => {
                                    tracing::error!("error query page descriptor: {e:?}");
                                    self.return_query_error(back_channel, "error QueryPageDescriptor query {e}".to_string().as_str())
                                }
                            }
                        },
                        _ => {
                            self.return_query_error(back_channel, "error QueryPageDescriptor insert query, wrong communication type provided".to_string().as_str())
                        }
                    }
                },
                DbMessage::UpdatePageDescriptor => {
                    match communication_type {
                        CommunicationType::VarChar64(hash) => {
                            if collection.data.len() != 1 {
                                self.return_query_error(back_channel, "error UpdatePageDescriptor insert query, wrong amount of elements provided".to_string().as_str())
                            } else {
                                match collection.data[0].borrow() {
                                    CollectionTypes::PageDescriptor(page_descriptor) => {
                                        let hash_str = hash.to_string();
                                        match sqlx::query_as!(PageDescriptor, r#"UPDATE PAGEDESCRIPTOR SET last_date_found = $1 WHERE hash = $2"#, page_descriptor.last_date_found, hash_str).fetch_all(&self.pool).await {
                                            Ok(rows) => {
                                                let found_collection = Collection { data: vec![], status: "updated".to_string() };
                                                // Send back the communication through the middleware's oneshot TX and drop them.
                                                back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                            },
                                            Err(e) => {
                                                self.return_query_error(back_channel, "error , query {e}".to_string().as_str())
                                            }
                                        }
                                    },
                                    _ => {
                                        self.return_query_error(back_channel, "error UpdatePageDescriptor insert query, wrong CollectionType provided".to_string().as_str())
                                    }
                                }
                            }
                        },
                        _ => {
                            self.return_query_error(back_channel, "error UpdatePageDescriptor insert query, wrong communication type provided".to_string().as_str())
                        }
                    }
                },
                DbMessage::UpdatePageDescriptorContentData => {
                    match communication_type {
                        CommunicationType::VarChar64(hash) => {
                            if collection.data.len() != 1 {
                                self.return_query_error(back_channel, "error UpdatePageDescriptorContentData insert query, wrong amount of elements provided".to_string().as_str())
                            } else {
                                match collection.data[0].borrow() {
                                    CollectionTypes::PageDescriptor(page_descriptor) => {
                                        let hash_str = hash.to_string();
                                        match sqlx::query_as!(PageDescriptor, r#"UPDATE PAGEDESCRIPTOR SET hash_contents = $1 WHERE hash = $2"#, &page_descriptor.hash_contents, hash_str).fetch_all(&self.pool).await {
                                            Ok(rows) => {
                                                let found_collection = Collection { data: vec![], status: "updated".to_string() };
                                                // Send back the communication through the middleware's oneshot TX and drop them.
                                                back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                            },
                                            Err(e) => {
                                                self.return_query_error(back_channel, "error , query {e}".to_string().as_str())
                                            }
                                        }
                                    },
                                    _ => {
                                        self.return_query_error(back_channel, "error UpdatePageDescriptorContentData insert query, wrong CollectionType provided".to_string().as_str())
                                    }
                                }
                            }
                        },
                        _ => {
                            self.return_query_error(back_channel, "Error: sent wrong communication_type for UpdatePageDescriptorContentData".to_string().as_str())
                        }
                    }
                },
                DbMessage::QueryContentData => {
                    match communication_type {
                        CommunicationType::VarChar64(hash) => {

                            let hash_str = hash.to_string();
                            match sqlx::query_as!(ContentData, r#"SELECT * FROM CONTENTDATA WHERE hash = $1"#, hash_str).fetch_all(&self.pool).await {
                                Ok(rows) => {

                                    if rows.is_empty() {
                                        let found_collection = Collection { data: vec![], status: "no entries found".to_string() };
                                        // Send back the communication through the middleware's oneshot TX and drop them.
                                        back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                        continue
                                    }

                                    let entry = CollectionTypes::ContentData(ContentData {
                                        hash: hash_str,
                                        url: rows[0].url.to_string(),
                                        content: rows[0].content.to_string(),
                                        first_date_found: rows[0].first_date_found,
                                        last_date_found: rows[0].last_date_found,
                                        tag: rows[0].tag
                                    });

                                    let found_collection = Collection { data: vec![entry], status: "sent".to_string() };
                                    // Send back the communication through the middleware's oneshot TX and drop them.
                                    back_channel.send((OneShotMessage::Success, found_collection)).unwrap();

                                },
                                Err(e) => {
                                    tracing::error!("Could not retrieve QueryContentData rows from database {e:?}");
                                    self.return_query_error(back_channel, "error QueryContentData update query {e}".to_string().as_str())
                                }
                            }
                        },
                        _ => {
                            self.return_query_error(back_channel, "Error: sent wrong communication_type for QueryContentData".to_string().as_str())
                        }
                    }
                },
                DbMessage::InsertContentData => {
                    if collection.data.len() != 1 {
                        self.return_query_error(back_channel, format!("wrong amount of elements in database request: {}", collection.data.len()).as_str())
                    } else {
                        match collection.data[0].borrow() {
                            CollectionTypes::ContentData(content_data) => {


                                match sqlx::query_as!(ContentData, r#"INSERT INTO CONTENTDATA(hash, url, content, first_date_found, last_date_found, tag)
                                VALUES($1, $2, $3, $4, $5, $6)"#, content_data.hash, content_data.url, content_data.content, content_data.first_date_found, content_data.last_date_found, content_data.tag).fetch_all(&self.pool).await {
                                    Ok(rows) => {
                                        let found_collection = Collection { data: vec![], status: "sent".to_string() };
                                        // Send back the communication through the middleware's oneshot TX and drop them.
                                        back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                    },
                                    Err(e) => {
                                        self.return_query_error(back_channel, &format!("error InsertContentData update query {e:?}"))
                                    }
                                }
                            },
                            _ => {
                                self.return_query_error(back_channel, "error InsertContentData insert query, wrong collection type provided".to_string().as_str())
                            }
                        }
                    }
                },
                DbMessage::UpdateContentData => {
                    match communication_type {
                        CommunicationType::VarChar64(hash) => {
                            if collection.data.len() != 1 {
                                self.return_query_error(back_channel, "error UpdateContentData insert query, wrong amount of elements provided".to_string().as_str())
                            } else {
                                match collection.data[0].borrow() {
                                    CollectionTypes::ContentData(page_descriptor) => {
                                        let hash_str = hash.to_string();
                                        match sqlx::query_as!(PageDescriptor, r#"UPDATE CONTENTDATA SET last_date_found = $1 WHERE hash = $2"#, page_descriptor.last_date_found, hash_str).fetch_all(&self.pool).await {
                                            Ok(rows) => {
                                                let found_collection = Collection { data: vec![], status: "updated".to_string() };
                                                // Send back the communication through the middleware's oneshot TX and drop them.
                                                back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                                            },
                                            Err(e) => {
                                                tracing::error!("Error query trying to update ContentData: {}", e);
                                                self.return_query_error(back_channel, format!("error , query {}", e).as_str())
                                            }
                                        }
                                    },
                                    _ => {
                                        self.return_query_error(back_channel, "error UpdateContentData update query, wrong communication type provided".to_string().as_str())
                                    }
                                }
                            }
                        },
                        _ => {
                            self.return_query_error(back_channel, "error UpdateContentData insert query, wrong communication type provided".to_string().as_str())
                        }
                    }
                },
                DbMessage::GetMonitorData => {
                    // Loads lots of data that we need
                    let row: (i64,) = sqlx::query_as("SELECT COUNT(*) FROM WEBAIACCOUNT;")
                        .bind(150_i64)
                        .fetch_one(&self.pool).await.unwrap();
                    let webai_account_total = row.0;


                    let row: (i64,) = sqlx::query_as("SELECT COUNT(*) FROM WEBAISESSION;")
                        .bind(150_i64)
                        .fetch_one(&self.pool).await.unwrap();
                    let webai_session_total = row.0;


                    let row = sqlx::query!("SELECT WEBAI_UUID FROM WEBAISESSION GROUP BY WEBAI_UUID HAVING COUNT(*) = COUNT(DISTINCT WEBAI_UUID)").fetch_all(&self.pool).await.unwrap();
                    let unique_webai_account_in_sessions = row.len();

                    let row = sqlx::query!("SELECT language FROM WEBAISESSION GROUP BY language HAVING COUNT(*) = COUNT(DISTINCT language);").fetch_all(&self.pool).await.unwrap();
                    let languages = row;


                    let row = sqlx::query!("SELECT total_hops FROM WEBAISESSION GROUP BY total_hops HAVING COUNT(*) = COUNT(DISTINCT total_hops);").fetch_all(&self.pool).await.unwrap();
                    let hops = row;

                    // Find the mean, std
                    let mut sum = 0;
                    let l = hops.len();
                    for entry in hops {sum += 1}
                    let hops_mean = sum / l;

                    let row = sqlx::query!("SELECT answered_questionnaire FROM WEBAISESSION GROUP BY answered_questionnaire HAVING COUNT(*) = COUNT(DISTINCT answered_questionnaire);").fetch_all(&self.pool).await.unwrap();
                    let answered_questionnaire = row.len();


                    let row = sqlx::query!("SELECT URL FROM pagedescriptor GROUP BY URL HAVING COUNT(*) = COUNT(DISTINCT URL);").fetch_all(&self.pool).await.unwrap();
                    let mut page_descriptor_urls = Vec::new();
                    for entry in row {
                        page_descriptor_urls.push(entry.url)
                    }

                    let row = sqlx::query!("SELECT URL FROM contentdata GROUP BY URL HAVING COUNT(*) = COUNT(DISTINCT URL);").fetch_all(&self.pool).await.unwrap();
                    let mut content_data_urls = Vec::new();
                    for entry in row {
                        content_data_urls.push(entry.url)
                    }

                    let row = sqlx::query!("SELECT COUNT(*) FROM WEBAIdatapackets;").fetch_all(&self.pool).await.unwrap();
                    let total_packets = row.len();


                    let monitor = Monitor {
                        webai_account_total,
                        webai_session_total,
                        unique_webai_account_in_sessions,
                        languages: vec![],
                        hops_mean,
                        answered_questionnaire,
                        total_links: page_descriptor_urls.len(),
                        page_descriptor_urls,
                        total_links_content_data: content_data_urls.len(),
                        content_data_urls,
                        total_packets
                    };

                    let found_collection = Collection { data: vec![CollectionTypes::MonitorUI(monitor)], status: "ok".to_string() };
                    // Send back the communication through the middleware's oneshot TX and drop them.
                    back_channel.send((OneShotMessage::Success, found_collection)).unwrap();
                }
            }

        }
        // Continue to loop
    }
}

// todo: serialization issue
/*pub fn match_collection_status(status: &str, data: &Vec<CollectionTypes>) -> String {
    println!("status is {}", status);
    match status {
        "ok" => {
            // Serialize the payload
            serde_json::to_string(data).unwrap()
        },
        _ => {
            println!("Error in collection status: {}", status);
            "error".to_string()
        }
    }
}*/


#[cfg(test)]
mod tests {
    use rand::Rng;
    use tokio::runtime::Runtime;
    use crate::{block_on, WebAISession};
    use crate::database_management::{Collection, CollectionTypes, CommunicationType, DbAsyncMiddleware, DbAsyncMiddlewareError, DbAsyncTask, WebAIDataPacket};
    use crate::webai_management::WebAIAccount;
    use sqlx::{types::Uuid};
    use sqlx::postgres::PgPoolOptions;
    use crate::page_hasher::{ContentData, PageDescriptor};

    #[test]
    fn test_query_qaccount() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");

        let test_uuid = Uuid::parse_str("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11").unwrap();

        // Make request
        let collection = match block_on(Collection::load_element_by_id(&sqlx_db,
                                                        CollectionTypes::WebAIAccount(WebAIAccount::default()),
                                                        CommunicationType::UUID(test_uuid))) {
            Ok(col) => {col}
            Err(e) => {
                println!("error at the end: {:?}", e);
                return
            }
        };

        println!("found: {:?}", collection);

        rt.shutdown_background();

    }

    #[test]
    fn test_create_qaccount() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");

        let mut rng = rand::thread_rng();
        let mut webai_uuid: u128 = rng.gen();

        // Create WebAIAccount
        let webai_account = WebAIAccount {
            webai_uuid: Uuid::from_u128(webai_uuid),
            first_seen: 0,
            last_seen: 0,
            blocking_local_storage: false
        };

        // Make request
        let collection = match block_on(Collection::insert_webai_account(&sqlx_db,
                                                                       CollectionTypes::WebAIAccount(webai_account))) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        println!("found: {:?}", collection);

        rt.shutdown_background();

    }



    #[test]
    fn test_insert_session() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");


        // Create WebAIAccount
        let webai_session = WebAISession {
            session_uuid: Uuid::nil(),
            webai_uuid: Uuid::nil(),
            total_hops: 0,
            version: 0,
            start_time: 0,
            user_agent: "test user agent content test user agent content test user agent content test user agent content".to_string(),
            app_name: "app name test".to_string(),
            language: "Fr fr".to_string(),
            cookie_enabled: false,
            product: "testing".to_string(),
            vendor: "testing".to_string(),
            answered_questionnaire: false
        };

        // Make request
        let collection = match block_on(Collection::insert_webai_session(&sqlx_db,
                                                                         CollectionTypes::WebAISession(webai_session))) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        if collection.status.as_str() == "session UUID already exists" {
            println!("Session UUID already exists!!")
        }

        println!("found: {:?}", collection);
        rt.shutdown_background();
    }

    #[test]
    fn test_update_session_hop_count() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");


        // Create WebAIAccount
        let webai_session = WebAISession {
            session_uuid: Uuid::nil(),
            webai_uuid: Uuid::nil(),
            total_hops: 3,
            version: 0,
            start_time: 0,
            user_agent: "test user agent content test user agent content test user agent content test user agent content".to_string(),
            app_name: "app name test".to_string(),
            language: "Fr fr".to_string(),
            cookie_enabled: false,
            product: "testing".to_string(),
            vendor: "testing".to_string(),
            answered_questionnaire: false
        };

        // Make request
        let collection = match block_on(Collection::update_webai_session_hops(&sqlx_db,
                                                                         CollectionTypes::WebAISession(webai_session))) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        println!("found: {:?}", collection);
        rt.shutdown_background();
    }

    #[test]
    fn test_insert_data_packet() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");


        // Create WebAIAccount
        let webai_data_packet = WebAIDataPacket {
            serial_value: 0,
            session_uuid: 0,
            hop: 0,
            time: 0,
            url: "test url".to_string(),
            inner_width: 0,
            inner_height: 0,
            outer_width: 0,
            outer_height: 0,
            x_offset: 0,
            y_offset: 0,
            screen_left: 0,
            screen_top: 0,
            screen_x: 0,
            screen_y: 0,
            has_mouse: false,
            trackpad: 0,
            coords_t: vec![1, 2, 3],
            coords_x: vec![4, 5, 6],
            coords_y: vec![7, 8, 9],
            clicks_t: vec![],
            clicks_x: vec![],
            clicks_y: vec![],
            scrolls_t: vec![],
            scrolls_x: vec![],
            scrolls_y: vec![],
            touches_t: vec![],
            touches_x: vec![],
            touches_y: vec![],
            hash_page: 0,
            hash_content: vec![0]
        };

        // Make request
        let collection = match block_on(Collection::write_webai_data_packet(&sqlx_db,
                                                                              CollectionTypes::WebAIDataPacket(webai_data_packet))) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        println!("found: {:?}", collection);
        rt.shutdown_background();
    }

    #[test]
    fn test_insert_page_descriptor() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");


        // Create WebAIAccount
        let page_descriptor = PageDescriptor {
            url: "empty url".to_string(),
            content: "empty content test".to_string(),
            hash: '0'.to_string(),
            first_date_found: 0,
            last_date_found: 0,
            hash_contents: vec!['0'.to_string(), '1'.to_string(), '2'.to_string(), "10".to_string()]
        };

        // Make request
        let collection = match block_on(Collection::insert_page_descriptor(&sqlx_db,
                                                                              CollectionTypes::PageDescriptor(page_descriptor))) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        println!("found: {:?}", collection);


        rt.shutdown_background();
    }

    #[test]
    fn test_query_page_descriptor() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");


        let collection_query = match block_on(Collection::query_page_descriptor(&sqlx_db, 10)) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        println!("query found {:?}", collection_query.status);


        rt.shutdown_background();
    }

    #[test]
    fn test_update_page_descriptor() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");

        let page_descriptor = PageDescriptor {
            url: "".to_string(),
            content: "".to_string(),
            hash: "0".to_string(),
            first_date_found: 0,
            last_date_found: 2,
            hash_contents: vec![]
        };

        let collection_query = match block_on(Collection::update_page_descriptor(&sqlx_db, CollectionTypes::PageDescriptor(page_descriptor))) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        println!("query found {:?}", collection_query.status);


        rt.shutdown_background();
    }

    #[test]
    fn test_query_content_data() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");


        let collection_query = match block_on(Collection::query_content_data(&sqlx_db, 0)) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        println!("query found {:?}", collection_query);


        rt.shutdown_background();
    }

    #[test]
    fn test_insert_content_data() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");


        let content_data = ContentData {
            hash: "0".to_string(),
            url: "empty".to_string(),
            content: "empty".to_string(),
            first_date_found: 0,
            last_date_found: 0,
            tag: false
        };

        // Make request
        let collection = match block_on(Collection::insert_content_data(&sqlx_db,
                                                                           CollectionTypes::ContentData(content_data))) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        println!("found: {:?}", collection);


        rt.shutdown_background();
    }

    #[test]
    fn test_update_content_data() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");

        let content_data = ContentData {
            hash: "0".to_string(),
            url: "".to_string(),
            content: "".to_string(),
            first_date_found: 1,
            last_date_found: 0,
            tag: false
        };

        let collection_query = match block_on(Collection::update_content_data(&sqlx_db, CollectionTypes::ContentData(content_data))) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        println!("query found {:?}", collection_query.status);


        rt.shutdown_background();
    }
    
    #[test]
    fn test_update_page_hash_data() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");

        let page_descriptor = PageDescriptor {
            url: "".to_string(),
            content: "".to_string(),
            hash: "0".to_string(),
            first_date_found: 0,
            last_date_found: 0,
            hash_contents: vec!["one".to_string()]
        };

        let collection_query = match block_on(Collection::update_page_descriptor_hash_contents(&sqlx_db, CollectionTypes::PageDescriptor(page_descriptor))) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        println!("query found {:?}", collection_query.status);


        rt.shutdown_background();
    }

    #[test]
    fn test_query_questionnaire() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");

        let uuid = Uuid::parse_str("a2803370-6129-a65f-358b-af3c869be4e7").unwrap();

        let collection_query = match block_on(Collection::query_webai_questionnaire(&sqlx_db, uuid)) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        println!("query found {:?}", collection_query.status);
        println!("Found {} total questionnaires", collection_query.data.len());

        rt.shutdown_background();
    }

    #[test]
    fn test_load_monitor_data() {

        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        let pool = block_on(PgPoolOptions::new()
            .max_connections(5)
            .connect(db_creds)).unwrap();

        // Make a simple query to return the given parameter (use a question mark `?` instead of `$1` for MySQL)
        let row: (i64,) = block_on(sqlx::query_as("SELECT COUNT(*) FROM WEBAIACCOUNT;")
            .bind(150_i64)
            .fetch_one(&pool)).unwrap();
        let webai_account_total = row.0;


        // Make a simple query to return the given parameter (use a question mark `?` instead of `$1` for MySQL)
        let row: (i64,) = block_on(sqlx::query_as("SELECT COUNT(*) FROM WEBAISESSION;")
            .bind(150_i64)
            .fetch_one(&pool)).unwrap();
        let webai_session_total = row.0;



        // Make a simple query to return the given parameter (use a question mark `?` instead of `$1` for MySQL)
        let row = block_on(sqlx::query!("SELECT WEBAI_UUID FROM WEBAISESSION GROUP BY WEBAI_UUID HAVING COUNT(*) = COUNT(DISTINCT WEBAI_UUID)").fetch_all(&pool)).unwrap();
        let unique_webai_account_in_sessions = row.len();
        
        let row = block_on(sqlx::query!("SELECT language FROM WEBAISESSION GROUP BY language HAVING COUNT(*) = COUNT(DISTINCT language);").fetch_all(&pool)).unwrap();
        let languages = row;


        let row = block_on(sqlx::query!("SELECT total_hops FROM WEBAISESSION GROUP BY total_hops HAVING COUNT(*) = COUNT(DISTINCT total_hops);").fetch_all(&pool)).unwrap();
        let hops = row;

        // Find the mean, std
        let mut sum = 0;
        let l = hops.len();
        for entry in hops {sum += 1}
        let hops_mean = sum / l;


        let row = block_on(sqlx::query!("SELECT answered_questionnaire FROM WEBAISESSION GROUP BY answered_questionnaire HAVING COUNT(*) = COUNT(DISTINCT answered_questionnaire);").fetch_all(&pool)).unwrap();
        let answered_questionnaire = row.len();


        let row = block_on(sqlx::query!("SELECT URL FROM pagedescriptor GROUP BY URL HAVING COUNT(*) = COUNT(DISTINCT URL);").fetch_all(&pool)).unwrap();
        let mut page_descriptor_urls = Vec::new();
        for entry in row {
            page_descriptor_urls.push(entry.url)
        }

        let row = block_on(sqlx::query!("SELECT URL FROM contentdata GROUP BY URL HAVING COUNT(*) = COUNT(DISTINCT URL);").fetch_all(&pool)).unwrap();
        let mut content_data_urls = Vec::new();
        for entry in row {
            content_data_urls.push(entry.url)
        }


        let row = block_on(sqlx::query!("SELECT COUNT(*) FROM WEBAIdatapackets;").fetch_all(&pool)).unwrap();
        let total_packets = row.len();

        #[derive(Debug)]
        struct Monitor {
            webai_account_total: i64,
            webai_session_total: i64,
            unique_webai_account_in_sessions: usize,
            languages: Vec<String>,
            hops_mean: usize,
            answered_questionnaire: usize,
            total_links: usize,
            page_descriptor_urls: Vec<String>,
            total_links_content_data: usize,
            content_data_urls: Vec<String>,
            total_packets: usize
        }

        let monitor = Monitor {
            webai_account_total,
            webai_session_total,
            unique_webai_account_in_sessions,
            languages: vec![],
            hops_mean,
            answered_questionnaire,
            total_links: page_descriptor_urls.len(),
            page_descriptor_urls,
            total_links_content_data: content_data_urls.len(),
            content_data_urls,
            total_packets
        };

        println!("webai_account_total: {:?}", webai_account_total);
        println!("webai_session_total: {:?}", webai_session_total);
        println!("unique_webai_account_in_sessions: {:?}", unique_webai_account_in_sessions);
        println!("Monitor: {:?}", monitor);
    }

    #[test]
    fn test_query_monitor() {
        let db_creds = "postgres://postgres:oxoN36vcMieHN49CwSvi@localhost/webai";

        // Create DB task which will process all async request to read
        let sqlx_task = block_on(DbAsyncTask::new(db_creds)).unwrap();

        // Create Middleware containing the TX which will allow communication with the sqlx_task
        let sqlx_db = DbAsyncMiddleware::new(sqlx_task.tx.clone());

        // Now run the task in a runtime
        let rt = Runtime::new().unwrap();
        // Third spawn a listening task in the runtime to keep the connection alive with the database
        // Spawn a future onto the runtime
        rt.spawn(async {
            sqlx_task.process().await
        });
        println!("started runtime");


        let mut collection_query = match block_on(Collection::get_monitor_data(&sqlx_db)) {
            Ok(col) => {col}
            Err(e) => {
                println!("error: {:?}", e);
                return
            }
        };

        println!("query found {:?}", collection_query.data.pop().unwrap());

        rt.shutdown_background();
    }

}