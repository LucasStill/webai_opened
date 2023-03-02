use std::borrow::Borrow;
use std::collections::hash_map::DefaultHasher;
use std::hash::Hasher;
use futures_util::{future, FutureExt};
use gotham::state::{FromState, State};
use std::pin::Pin;
use std::str::FromStr;
use gotham::handler::{HandlerError, HandlerFuture, HandlerResult};
use gotham::hyper::{body, Body, Uri, StatusCode};
use gotham::helpers::http::response::create_response;
use crate::session_management::{error_response, header_formatting};
use mime::{TEXT_HTML, TEXT_PLAIN};
use chrono::{Utc};
use gotham::middleware::session::SessionData;
use rand::Rng;
use serde::{Deserialize, Serialize};
use crate::{ReqwestStackMiddleware};
use crate::page_hasher::{LinkType, ReqwestStackPacket};
use futures::executor::block_on;
use crate::database_management::{Collection, CollectionTypes, CommunicationType, DbAsyncMiddleware, DbAsyncMiddlewareError, WebAIDataPacket};
use sqlx::{types::Uuid};
use crate::database_management::CommunicationType::UUID;
use gotham_derive::StateData;
use rand::rngs::ThreadRng;
use rand::rngs::StdRng;
use tracing::trace;

/// WebAIAccount describes information about a single user.
///
/// The fields are:
///
///     - webai_uuid: is the account key of a user, the userID
///     - first_seen: datetime when the account was created
///     - last_seen: last time the user was seen
///     - session_list: list of session_uuids describing a user's visit. These ids are used to access
///                     the respective session data.
///
/// todo: modify session_list into session_amount that we increase each time a new session is created for that account.
///     We don't need to track the session_uuids into the WebAIAccount because the webai_uuids are already stored in the session descriptors
#[derive(Debug, PartialEq, Eq, sqlx::FromRow, Clone)]
pub struct WebAIAccount {
    pub(crate) webai_uuid: Uuid,
    pub(crate) first_seen: i64,    // timestamp
    pub(crate) last_seen: i64,     // timestamp
    pub(crate) blocking_local_storage: bool
}

/// Implement WebAIAccount functionalities in terms of WebAIManagement code
impl WebAIAccount {

    pub(crate) fn default() -> Self {
        Self {
            webai_uuid: Uuid::nil(),
            first_seen: 0,
            last_seen: 0,
            blocking_local_storage: false
        }
    }

    /// Creates a webai account if no uuid has been found in the frontend nor the session.
    /// We still pass the session data in order to update with the proper webai_uuid.
    /// Here we don't need to care about the WebAISession by checking the data at all.
    /// We assume we don't need to check the session at all in this function.
    async fn from_new_random(database_requester: &DbAsyncMiddleware) -> Result<WebAIAccount, DbAsyncMiddlewareError> {


        // Make request and obtain collection sent back from database that needs to be checked.
        // If it passes the checks, it means we can trust the created_webai_account without querying the DB again.
        // Otherwise we must return an error
        match Self::create_account_from_random_id(database_requester).await {
            Ok(webai_account) => {
                tracing::info!("Created new account from random with webai_uuid: {}", webai_account.webai_uuid);

                Ok(webai_account)
            },
            Err(e) => {
                tracing::error!("Got DbAsyncMiddlewareError after trying to create account from random id: {e:?}");
                Err(e)
            }
        }
    }


    /// Tries to retrieve an account from the State UUID obtained if the body_webai_uuid could be parsed.
    /// Inputs are the state middleware keeping data about the session that will be retrieved,
    /// and frontend webai_uuid that will be matched against the value from the state.
    /// Exact diagram about the process is described in the documentation, not in code comments.
    /// todo: if UUIDs match, update webai_uuid in the session
    /// todo: eventually remove WebAISession checks if not needed anymore as we can do it in start_webai
    async fn from_uuid(//state: &State,
                       webai_uuid: Uuid,
                       database_requester: &DbAsyncMiddleware,
    ) -> Result<WebAIAccount, DbAsyncMiddlewareError> {


        let (webai_account_exists, webai_account) = Self::check_if_id_exists(database_requester, webai_uuid).await;

        // 1 - First check if there is already an account with that webai_uuid:
        if webai_account_exists {
            // Account already exists, thus return account
            match webai_account {
                Some(webai_account) => {
                    // Account found
                    Ok(webai_account)
                },
                None => {
                    // No account found
                    tracing::error!("No account found even though the check_if_id_exists returned true! With webai_uuid {}", webai_uuid);
                    Err(DbAsyncMiddlewareError::NotOK)
                }
            }

        } else {
            // Danger, for some reason the account does not exist in the database
            // Log the data
            tracing::warn!("Great danger, no backed webai_account have been found even though we called this function. This is maybe due to a database issue that got deleted. Thus by default use that provided webai_uuid to set up a new default account. WebAI_uuid: {}", webai_uuid);
            tracing::error!("Great danger, no backed webai_account have been found even though we called this function. This is maybe due to a database issue that got deleted. Thus by default use that provided webai_uuid to set up a new default account. WebAI_uuid: {}", webai_uuid);

            // We need to create a random account instead
            let new_webai_account = WebAIAccount {
                webai_uuid,
                first_seen: chrono::Utc::now().timestamp(),
                last_seen: chrono::Utc::now().timestamp(),
                blocking_local_storage: false
            };

            tracing::info!("WebAI Account created: {:?}", new_webai_account);
            Self::insert_webai_account_database(database_requester, new_webai_account).await

        }
    }

    /// /!\ Don't call outside of Self!
    /// Inserts a WebAIAccount into the database. This function should only be called from other functions such as Self::from_uuid, or new_random.
    async fn insert_webai_account_database(database_requester: &DbAsyncMiddleware, webai_account: WebAIAccount) -> Result<WebAIAccount, DbAsyncMiddlewareError>{
        // Make request to insert new webai_account to database
        match Collection::insert_webai_account(database_requester, CollectionTypes::WebAIAccount(webai_account.clone())).await {
            Ok(collection) => {

                match collection.status == "account created" {
                    true => {
                        tracing::trace!("Great, account was created and we got the 'account created' flag");
                        tracing::warn!("Great, account was created and we got the 'account created' flag");
                        Ok(webai_account)
                    },
                    false => {
                        tracing::error!("got wrong collection status: '{}' for insert_webai_account_database in webai_management", collection.status);
                        Err(DbAsyncMiddlewareError::NotOK)
                    }
                }
            }
            Err(e) => {
                tracing::error!("Got DbAsyncMiddleware Error when trying to insert webai account into database: {:?}", e);
                Err(e)
            }
        }
    }

    /// Query the database to find if a webai_account exists based on a provided webai_uuid.
    /// True if account exists, false otherwise.
    async fn check_if_id_exists(database_requester: &DbAsyncMiddleware, webai_uuid: Uuid) -> (bool, Option<WebAIAccount>) {
        match Collection::load_element_by_id(database_requester,
                                             CollectionTypes::WebAIAccount(WebAIAccount::default()),
                                             CommunicationType::UUID(webai_uuid)).await {
            Ok(mut col) => {
                // Account exists in database with that webai_uuid

                // Very important:
                // If we receive status 'ok', it means we found an account.
                // If we don't have that, it means we haven't found anything. In that case, the
                // status flag should be 'empty'.
                if col.status == "empty" {return (false, None)}
                if !col.data.is_empty() && col.status == "ok" {
                    // Found an account in theory as there is a value in the vector
                    match col.data.pop() {
                        Some(col_type) => {
                            match col_type {
                                CollectionTypes::WebAIAccount(webai_account) => {
                                    (col.status == "ok", Some(webai_account))
                                },
                                _ => {
                                    tracing::error!("IMPOSSIBLE REACH, Error for webai_uuid {}", webai_uuid);
                                    (false, None)
                                }
                            }
                        },
                        _ => {
                            tracing::error!("IMPOSSIBLE REACH 2, Error for webai_uuid {}", webai_uuid);

                            (false, None)
                        }
                    }
                } else {
                    // If previous conditions not met, return None
                    (col.status == "ok", None)
                }

            }
            Err(e) => {
                // No account found
                tracing::error!("No accounts were found for webai_uuid: {} and error: {e:?}", webai_uuid);
                (false, None)
            }
        }
    }

    /// Verifies whether the obtained collection from the database is correct and return the
    /// webai_account or an error.
    /// Private method to dry the code
    /// todo: after inserting account, we don't get anything
    fn check_retrieved_account(mut col: Collection) -> Result<Self, DbAsyncMiddlewareError> {

        println!("Checked retrieved account got: {col:?}");

        // Check flag status
        if col.status != "ok"{
            // Got wrong flag status from reading the database
            tracing::error!("Error reading web_ai_account from database with webai_uuid NotOK");

            return Err(DbAsyncMiddlewareError::NotOK)
        }
        // Check elements in collection
        if col.data.is_empty() || col.data.len() > 1 {
            tracing::error!("Wrong amount of webai_accounts in collection: {} - NotOK", col.data.len());
            return Err(DbAsyncMiddlewareError::NotOK)
        }

        // Get account from collection, if error have empty ContentData and return error
        // Possibly for elegant code, don't allocate more memory and match it all directly in unwrap
        match col.data.pop().unwrap_or(CollectionTypes::ErrorType) {
            CollectionTypes::WebAIAccount(webai_account) => {Ok(webai_account)}
            _ => {
                tracing::error!("Error, got wrong collection type in retrieving webai_account from collection");
                Err(DbAsyncMiddlewareError::Type)
            }
        }
    }

    /// Creates and insert a new WebAI Account into the database.
    /// Generate a random ID and checks whether this webai_uuid already exists in the database.
    /// If not, create this new account and insert it into the database.
    /// Important: Don't use this function outside of the impl of WebAIAccount.
    /// There are some issues of ownership in passing the rng through the async loop. Seems fixed by reallocating
    async fn create_account_from_random_id(database_requester: &DbAsyncMiddleware) -> Result<WebAIAccount, DbAsyncMiddlewareError> {
        // Generate random webai_uuid
        //let mut rng = rand::thread_rng();
        //let mut webai_uuid: i32 = rng.gen();
        let mut webai_uuid: u128 = rand::thread_rng().gen();
        //let mut webai_uuid = Uuid::new_v4();

        // Loops until we find a webai_uuid not taken
        while Self::check_if_id_exists(&database_requester.clone(), Uuid::from_u128(webai_uuid)).await.0 {
            let mut rng = rand::thread_rng();
            webai_uuid = rng.gen();
            //webai_uuid = Uuid::new_v4();
            tracing::warn!("Failed attempt, generate new webai_uuid: {webai_uuid}");
        }

        // Now use that available webai_uuid to create a new webai_account
        let webai_account = WebAIAccount {
            webai_uuid: Uuid::from_u128(webai_uuid),
            first_seen: chrono::Utc::now().timestamp(),
            last_seen: chrono::Utc::now().timestamp(),
            blocking_local_storage: false
        };

        // Make request to insert new webai_account to database
        /*match Collection::insert_webai_account(database_requester, CollectionTypes::WebAIAccount(webai_account.clone())).await {
            Ok(collection) => {

                match collection.status == "account created" {
                    true => {
                        println!("Great, account was created and we got the 'account created' flag");
                        Ok(webai_account)
                    },
                    false => {
                        println!("got wrong collection status: {}", collection.status);
                        Err(DbAsyncMiddlewareError::NotOK)
                    }
                }
            }
            Err(e) => {
                Err(e)
            }
        }*/

        // Insert account into database
        Self::insert_webai_account_database(database_requester, webai_account).await

    }

}




/// todo: add browser information
#[derive(Clone, Debug)]
pub struct WebAISession {
    pub(crate) session_uuid: Uuid,
    pub(crate) webai_uuid: Uuid,
    pub(crate) total_hops: i16,
    pub(crate) version: i16,
    pub(crate) start_time: i64,
    pub(crate) user_agent: String,
    pub(crate) app_name: String,
    pub(crate) language: String,
    pub(crate) cookie_enabled: bool,
    pub(crate) product: String,
    pub(crate) vendor: String,
    pub(crate) answered_questionnaire: bool,
}

// todo add Session UUID: if there is one, it means a session has already been started
// todo: read session not from middleware but from database directly
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct WebAISessionStartingPacket {
    pub(crate) uuid: String,
    pub(crate) session_uuid: String,    // New addition
    pub(crate) url: String,
    pub(crate) version: String,
    pub(crate) client_date: String,

    pub(crate) user_agent: String,
    pub(crate) app_name: String,
    pub(crate) language: String,
    pub(crate) cookie_enabled: bool,
    pub(crate) product: String,
    pub(crate) vendor: String
}

/// When the script is loaded, it sends a XHR request with some main session info.
/// We need to check whether a session is already active or not too.
/// todo: create random UUID and check database
/// todo: when do we generate a random UUID? What about one per page load, and another one per session
/// todo: get client time
/// todo: reject packets being too large to limit DDOS
/// warning: somehow, the 'current_uuid' is not used, why?
/// todo: use start_time of frontend user and not rust
/// todo: return hop_count
pub async fn start_webai(mut state: State) -> HandlerResult {

    // Extract body from state and do conversions
    let body = Body::take_from(&mut state);

    let valid_body = match body::to_bytes(body).await {
        Ok(body) => body,
        Err(e) => return Err((state, HandlerError::from(e)))
    };
    let body_data = String::from_utf8(valid_body.to_vec()).unwrap();

    // Parse the packet and checks if it has the right format
    let body_data: serde_json::Result<WebAISessionStartingPacket> = serde_json::from_str(&body_data);

    // If error returns
    if body_data.is_err() {
        tracing::error!("Error parsing WebAISessionStartingPacket");
        let response_payload = "error;wrong packet format!".to_string();
        let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, response_payload);
        res = header_formatting(res, &state, true);
        Ok((state, res))
    } else {
        // Get the right fields
        let body_data = body_data.unwrap(); // Unwrap result

        // Parse start datetime timestamp or have 0 as error
        let start_datetime_timestamp = match chrono::NaiveDateTime::parse_from_str(body_data.client_date.as_str(), "%Y-%m-%dT%H:%M:%S%.fZ") {
            Ok(start_date_time) =>  start_date_time.timestamp(),
            Err(e) => {
                tracing::error!("Error parsing start_webai datetime: {}, error: {}", body_data.client_date, e);
                0
            }
        };

        // 1. Check/Create Account
        // Check WebAIAccount
        let database_requester = DbAsyncMiddleware::borrow_from(&state);

        // Need to check if there is an actual UUID from front end
        // Try to parse webai_uuid from body:
        let webai_account_creation = match Uuid::parse_str(body_data.uuid.as_str()) {
            Ok(frontend_webai_uuid) => {
                tracing::info!("Managed to parse frontend UUID, about to create from UUID");
                let webai_account = match WebAIAccount::from_uuid(frontend_webai_uuid, database_requester).await {
                    Ok(webai_account) => webai_account,
                    Err(_e) => {
                        // todo: log data, very grave error happening
                        // return
                        tracing::error!("error; frontend UUID is fraudulent!");
                        let response_payload = "error; frontend UUID is fraudulent!".to_string();
                        let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, response_payload);
                        res = header_formatting(res, &state, true);
                        return Ok((state, res))
                    }
                };
                // We found the account, so we can ensure that the session indeed takes this webai_uuid value
                /*let webai_session = WebAISession::borrow_mut_from(&mut state);
                webai_session.webai_uuid = webai_account.webai_uuid.as_u128().clone();*/
                webai_account
            },
            Err(_e) => {
                tracing::warn!("Could not parse uuid from body: '{}', need to create a random one", body_data.uuid);
                // Set up default uuid
                // todo update session
                let webai_account = match WebAIAccount::from_new_random(database_requester).await {
                    Ok(account) => {
                        account
                    },
                    Err(e) => {
                        tracing::error!("Error creating WebAI Account, continuing with a default one!!: {:?}", e);
                        WebAIAccount::default()
                    }
                };
                webai_account
            }
        };

        // 2. Check/Create Session
        // Check if there is an existing session_uuid present in the starting packet, otherwise it means there are no sessions created
        // Obtain WebAISession Option from database.
        let database_requester = DbAsyncMiddleware::borrow_from(&state);
        let found_webai_session = match body_data.session_uuid.as_str() {
            "" => {
                // No session_uuid found in frontend, need to create one
                tracing::info!("No current WebAISession found, generate default one with random uuid");
                // Generate Random Session_UUID
                //let mut rng = rand::random();
                let uuid: u128 = rand::random();

                // Creates webai_session, and use the webai_uuid of the found webai_account above
                let session_updated = WebAISession {
                    session_uuid: Uuid::from_u128(uuid.clone()),
                    webai_uuid: webai_account_creation.webai_uuid.clone(),
                    total_hops: 0,
                    version: 1,
                    start_time: start_datetime_timestamp,   // Starting datetime timestamp parsed
                    user_agent: body_data.user_agent,
                    app_name: body_data.app_name,
                    language: body_data.language,
                    cookie_enabled: body_data.cookie_enabled,
                    product: body_data.product,
                    vendor: body_data.vendor,
                    answered_questionnaire: false
                };
                //*webai_session = Some(session_updated.clone());
                // TODO: update session database
                match Collection::insert_webai_session(&database_requester, CollectionTypes::WebAISession(session_updated.clone())).await {
                    Ok(col) => {
                        tracing::info!("Inserted new session into database with status: {}", col.status);
                    },
                    Err(e) => {
                        tracing::error!("could not insert new WebAISession into database after creation: {:?}", e);
                        let error_resp = error_response("error initiating session", &state);
                        return Ok((state, error_resp))
                    }
                };

                //session_created = true;

                tracing::info!("Default session created: {session_updated:?}");
                session_updated
            },
            _ => {
                // Parse found session_uuid
                match Uuid::from_str(body_data.session_uuid.as_str()) {
                    Ok(session_uuid) => {
                        // a. Query database to find this session data
                        let mut found_session = match Collection::query_webai_session(&database_requester, session_uuid).await {
                            Ok(mut col) => {
                                if col.data.len() < 1 {
                                    tracing::error!("Could not retrieve any sessions, status={}", col.status);
                                    let error_resp = error_response("could not retrieve any session", &state);
                                    return Ok((state, error_resp))
                                } else {
                                    if col.data.len() > 1 {tracing::warn!("Danger! More than one session has been found with the same id {}", session_uuid)}
                                    let col = col.data.pop().unwrap();
                                    match col {
                                        CollectionTypes::WebAISession(webai_session) => webai_session,
                                        _ => {
                                            tracing::error!("Error! Unwrapped the wrong Collection type for WebAISession");
                                            let error_resp = error_response("CollectionType error", &state);
                                            return Ok((state, error_resp))
                                        }
                                    }
                                }
                            },
                            Err(e) => {
                                tracing::error!("Could not retrieve WebAISession from database for uuid {} with error {:?}", session_uuid, e);
                                let error_resp = error_response("Could not retrieve WebAISession from database", &state);
                                return Ok((state, error_resp))
                            }
                        };

                        // b. As we already found one, we can update the hop count and update the database
                        found_session.total_hops += 1;
                        match Collection::update_webai_session_hops(&database_requester, CollectionTypes::WebAISession(found_session.clone())).await {
                            Ok(col) => {
                                if col.status == "session total_tops updated" {
                                    //tracing::trace!("Success, hops updated");
                                } else {
                                    tracing::error!("Error, hops for WebAISession not updated from collection status: {:?}", col);
                                }
                            },
                            Err(e) => {
                                tracing::error!("Error updating webai_session_hops: {e:?}");
                            }
                        }
                        found_session
                    },
                    Err(e) => {
                        tracing::error!("Could not parse session_uuid coming from start_webai packet. session_uuid found: {}, with error {}", body_data.session_uuid, e);
                        let error_resp = error_response("Could not parse session_uuid coming from start_webai packet.", &state);
                        return Ok((state, error_resp))
                    }
                }
            }
        };

        // old:
        /*let current_webai_data = {
            let webai_data: &Option<WebAISession> = SessionData::<Option<WebAISession>>::borrow_from(&state);
            webai_data.clone()
        };*/

        // Now check whether it has already been set up or not.
        // If not, generate random uuid for that session
        // todo: query database to find proper session id to make sure it is not already used? ==> No need, can have duplicates because we use webai_uuid too for the KEY
        // todo: IMPL WebAISession properly
        // todo: improve updates to session
        // todo: see if we need found_session or remove it
        let mut session_created = false;
        /*let found_session_webai = match current_webai_data {
            Some(mut current_webai_session) => {
                // As function got recalled, increase hop_count
                let webai_session: &mut Option<WebAISession> = SessionData::<Option<WebAISession>>::borrow_mut_from(&mut state);
                let session_updated = WebAISession {
                    session_uuid: current_webai_session.session_uuid,
                    webai_uuid: current_webai_session.webai_uuid,  // Default u128 value
                    total_hops: current_webai_session.total_hops + 1,
                    version: current_webai_session.version,
                    start_time: current_webai_session.start_time,
                    user_agent: current_webai_session.user_agent,
                    app_name: current_webai_session.app_name,
                    language: current_webai_session.language,
                    cookie_enabled: current_webai_session.cookie_enabled,
                    product: current_webai_session.product,
                    vendor: current_webai_session.vendor,
                    answered_questionnaire: current_webai_session.answered_questionnaire
                };
                *webai_session = Some(session_updated.clone());
                session_updated
            },
            None => {
                tracing::info!("No current WebAISession found, generate default one with random uuid");
                // Generate Random Session_UUID
                let mut rng = rand::thread_rng();
                let uuid: u128 = rng.gen();

                // Creates webai_session
                let webai_session: &mut Option<WebAISession> = SessionData::<Option<WebAISession>>::borrow_mut_from(&mut state);
                let session_updated = WebAISession {
                    session_uuid: Uuid::from_u128(uuid),
                    webai_uuid: Uuid::nil(),  // Default u128 value
                    total_hops: 0,
                    version: 1,
                    start_time: start_datetime_timestamp,   // Starting datetime timestamp parsed
                    user_agent: body_data.user_agent,
                    app_name: body_data.app_name,
                    language: body_data.language,
                    cookie_enabled: body_data.cookie_enabled,
                    product: body_data.product,
                    vendor: body_data.vendor,
                    answered_questionnaire: false
                };
                *webai_session = Some(session_updated.clone());

                // Return the session data
                /*let current_webai_session = {
                    let webai_data: &Option<WebAISession> = SessionData::<Option<WebAISession>>::borrow_from(&state);
                    webai_data.clone()
                };*/

                // As None data was found in the state session, it means that there are no WebAISession created either and we just created one above
                session_created = true;

                tracing::info!("Default session created: {session_updated:?}");
                session_updated
            }
        };*/




        /*
        // Update session
        let webai_session_old = {
            let webai_session: &Option<WebAISession> = SessionData::<Option<WebAISession>>::borrow_from(&state);
            match webai_session {
                Some(session) => { session.clone() },
                None => {
                    tracing::error!("could not get old WebAISession from session state to update, for webai_uuid: {} and session_uuid: {}", found_session_webai.webai_uuid, found_session_webai.session_uuid);
                    // So instead we just return the one created previously, but we need to check whether it makes sense or not...
                    // It means that we cannot get it from the session so it is not working and neither tbe updates
                    found_session_webai.clone()
                }
            }
        };
        // Only update if there is nothing in it yet or is different
        if webai_session_old.webai_uuid != webai_account_creation.webai_uuid.as_u128() {
            let webai_session: &mut Option<WebAISession> = SessionData::<Option<WebAISession>>::borrow_mut_from(&mut state);
            *webai_session = Some(WebAISession {
                session_uuid: webai_session_old.session_uuid,
                webai_uuid: webai_account_creation.webai_uuid.clone(),//.as_u128(),
                total_hops: webai_session_old.total_hops,
                version: webai_session_old.version,
                start_time: webai_session_old.start_time,
                user_agent: webai_session_old.user_agent,
                app_name: webai_session_old.app_name,
                language: webai_session_old.language,
                cookie_enabled: webai_session_old.cookie_enabled,
                product: webai_session_old.product,
                vendor: webai_session_old.vendor,
                answered_questionnaire: webai_session_old.answered_questionnaire
            });
        }

        let webai_session_new = {
            let webai_session: &Option<WebAISession> = SessionData::<Option<WebAISession>>::borrow_from(&state);
            match webai_session {
                Some(session) => { session.clone() },
                None => {
                    tracing::error!("could not get old WebAISession from session state to update, for webai_uuid: {} and session_uuid: {}", found_session_webai.webai_uuid, found_session_webai.session_uuid);
                    // So instead we just return the one created previously, but we need to check whether it makes sense or not...
                    // It means that we cannot get it from the session so it is not working and neither tbe updates
                    found_session_webai
                }
            }
        };

        // Prepare to return the current hop count of the session
        let current_hop_count = webai_session_new.total_hops;

        // We'll return the current webai session_uuid
        let webai_session_uuid = webai_session_new.session_uuid.clone();

        // Should save session data into database
        tracing::info!("Latest session webai: {webai_session_new:?}");

        // Now update database with the new session data
        if session_created {
            // WebAISession is not yet present in the database, so we need to set it up here
            // Need to query database to insert this session
            // We also need to reborrow the database_requester
            let database_requester = DbAsyncMiddleware::borrow_from(&state);

            match Collection::insert_webai_session(database_requester,
                                                                    CollectionTypes::WebAISession(webai_session_new.clone())).await {
                Ok(col) => {
                    //
                    if col.status == "session created" {
                        tracing::info!("WebAISession correctly inserted in Database with status 'session created'")
                    } else if col.status.as_str() == "session UUID already exists" {
                        tracing::warn!("WebAISession UUID already exists! Need to create a new WebAISession UUID and try inserting again. session_uuid: {} for webai_uuid: {}", webai_session_new.session_uuid, webai_session_new.webai_uuid);
                        // todo retry insert because flag said that UUID already exists
                        //tracing::warn!("SessionUUID already exists");
                        // XXX redo request
                    } else {
                        tracing::error!("WebAISession failed to insert into database: '{}' for session {:?}", col.status, webai_session_new);
                    }
                }
                Err(e) => {
                    tracing::error!("Error inserting Session into Database!: {e:?} for session {:?}", webai_session_new);
                }
            };
        } else {
            // Session already created but its data got updated, thus we need to update the backend.
            // Currently, the data being update is the total hop count

            let database_requester = DbAsyncMiddleware::borrow_from(&state);

            match Collection::update_webai_session_hops(database_requester, CollectionTypes::WebAISession(webai_session_new)).await {
                Ok(col) => {
                    if col.status == "session total_tops updated" {
                        //tracing::trace!("Success, hops updated");
                    } else {
                        tracing::error!("Error, hops for WebAISession not updated from collection status: {:?}", col);
                    }
                },
                Err(e) => {
                    tracing::error!("Error updating webai_session_hops: {e:?}");
                }
            }

        }
        */

        // Write to DB
        // todo: write to db
        // todo: move tx_rsm borrow_mut further above to reduce racing issues
        // If session already existed we should probably store the hops somewhere, or what are the visited pages.
        // These requests should be send into a stack via a oneshot channel in order to not wait
        // for them to finish here.
        //
        //  1) First hash page data to build its descriptors: send to oneshot RSM
        // todo: when done, remove false flag
        let tx_rsm = ReqwestStackMiddleware::borrow_from(&state).one_shot_tx.clone();
        match block_on(tx_rsm.lock().unwrap().send(ReqwestStackPacket {
            url: body_data.url,  // Pass the origin url
            //url: "https://chess.com".to_string(),
            link_type: LinkType::Html,
            page_source: 0
        })) {
            Ok(_) => {},
            Err(e) => {
                tracing::error!("could not send page to page_hasher with error: {}", e)
            }
        };


        // Await everything
        //webai_account.await.unwrap();

        let response_payload = format!("ok;WEBAI_UUID={};hop_count={};sc={};answered_questionnaire={}", webai_account_creation.webai_uuid, found_webai_session.total_hops, found_webai_session.session_uuid, found_webai_session.answered_questionnaire);
        let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, response_payload);
        res = header_formatting(res, &state, true);

        // Ensure the request has been sent
        // todo put back
        //stack_crawler_request.unwrap_or_default();

        Ok((state, res))
    }

}


/// WebAI packets received from the online script at each step
/// The time field represent the time interval on which this packet has been created.
/// It represents an atomic time step where the current received data has been recorded.
///
/// In the vector fields: coords, clicks, scrolls and touches, the first u16 value represent a
/// time step in that interval in milliseconds. That way, we can know precisely when their
/// corresponding values have been recorded.
///
/// We can also track various changes in the page or in hardware with the additional listed fields.
/// todo: add session storage UUID or basic UUID in case local storage is fully blocked
#[derive(Debug, Serialize, Deserialize)]
struct WebAIPacket {
    session_uuid: String,
    time: i32,          // Time interval of recorded packet
    inner_width: i16,
    inner_height: i16,
    outer_width: i16,
    outer_height: i16,
    x_offset: i16,
    y_offset: i16,
    screen_left: i16,   // Can also have negative values if multiple monitors
    screen_top: i16,
    screen_x: i16,  // If multiple monitors can have negative values
    screen_y: i16,
    has_touch: bool,
    has_mouse: bool,
    trackpad: i16,      // Trackad presence: 0=no data, 1=trackpad not enabled, 2=trackpad found
    coords: Vec<(u16, u16, u16)>,
    clicks: Vec<(u16, u16, u16)>,
    scrolls: Vec<(u16, u16, u16)>,
    touches: Vec<(u16, u16, u16)>,
    src: String
    //touched_pressed: Vec<Vec<(u16, u16)>>
}

impl WebAIPacket {

    /// Convert times series into three separate vectors.
    /// Example coords --> coords_t, coords_x, & coords_y
    fn convert_series(series: Vec<(u16, u16, u16)>) -> (Vec<i32>, Vec<i16>, Vec<i16>){
        let mut s_t = Vec::new();
        let mut s_x = Vec::new();
        let mut s_y = Vec::new();

        for (t, x, y) in series {
            s_t.push(t as i32);
            s_x.push(x as i16);
            s_y.push(y as i16)
        }

        (s_t, s_x, s_y)
    }
}

/// If we receive data that already has a UUID and no session what to do?
/// In theory better to still take them as it might come from an expired session, but
/// we should in fact not allow any data to be saved in the database and instead
/// send back a request to the script to relaunch the start_webai function to created a new UUID
/// and default parameters. That way we add extra safety just in case but it means that our script must
/// check and compare the time since the script has been launched too.
/// Ok in Session: add time of the day we receive the packet
/// todo: potentially analyse URI
/// Ok: check for max sized packets of valid_body to limit DDOS
/// Ok: update last_seen value from WebAIAccount
/// todo: add webai_uuid or session in the packets?
pub async fn receive_webai_packets(mut state: State) -> HandlerResult {


    // Extract body from state and do conversions
    let body = Body::take_from(&mut state);

    let valid_body = match body::to_bytes(body).await {
        Ok(bytes) => {
            if bytes.len() > 5000 {
                tracing::error!("packet too large in receive_webai_packets");
                let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, "packet too large".to_string());
                res = header_formatting(res, &state, true);
                return Ok((state, res))
            }
            bytes
        },
        Err(e) => {
            tracing::warn!("body not valid: {e:?}");
            return Err((state, HandlerError::from(e)))
        }
    };

    let body_data = match String::from_utf8(valid_body.to_vec()) {
        Ok(body_data) => body_data,
        Err(e) => {
            tracing::error!("Could not parse body data Utf8: {}", e);
            let error_res = error_response("Could not parse session uuid", &state);
            return Ok((state, error_res))
        }
    };


    let body_data: serde_json::Result<WebAIPacket> = serde_json::from_str(&body_data);

    // If error returns
    if body_data.is_err() {
        tracing::warn!("Error parsing WebAIPacket: {:?}", body_data);
        let response_payload = "error;wrong packet format!".to_string();
        let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, response_payload);
        res = header_formatting(res, &state, true);
        Ok((state, res))
    } else {
        // Parse the packet and checks if it has the right format
        // todo check if can parse
        let webai_packet = match body_data {
            Ok(body) => body,
            Err(e) => {
                tracing::error!("Could not parse webai_packet with error {}", e);
                let response_payload = "error;wrong packet format!".to_string();
                let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, response_payload);
                res = header_formatting(res, &state, true);
                return Ok((state, res))
            }
        };

        let database_requester = DbAsyncMiddleware::borrow_from(&state);
        let session_uuid = match Uuid::from_str(webai_packet.session_uuid.as_str()) {
            Ok(uuid) => uuid,
            Err(e) => {
                tracing::error!("Could not parse session uuid receive_packets: {} with error: {}. All packet: {:?}", webai_packet.session_uuid, e, webai_packet);
                let error_res = error_response("Could not parse session uuid", &state);
                return Ok((state, error_res))
            }
        };

        // Get webai_session
        let webai_session = match Collection::query_webai_session(&database_requester, session_uuid).await {
            Ok(mut col) => {
                if col.data.len() < 1 {
                    tracing::error!("Could not retrieve any sessions, status={}", col.status);
                    let error_resp = error_response("could not retrieve any session", &state);
                    return Ok((state, error_resp))
                } else {
                    if col.data.len() > 1 {tracing::warn!("Danger! More than one session has been found with the same id {}", session_uuid)}
                    let col = col.data.pop().unwrap();
                    match col {
                        CollectionTypes::WebAISession(webai_session) => webai_session,
                        _ => {
                            tracing::error!("Error! Unwrapped the wrong Collection type for WebAISession");
                            let error_resp = error_response("CollectionType error", &state);
                            return Ok((state, error_resp))
                        }
                    }
                }
            },
            Err(e) => {
                tracing::error!("Could not retrieve WebAISession from database for uuid {} with error {:?}", session_uuid, e);
                let error_resp = error_response("Could not retrieve WebAISession from database", &state);
                return Ok((state, error_resp))
            }
        };


        // old:
        /*let webai_session = {
            let webai_data: &Option<WebAISession> = SessionData::<Option<WebAISession>>::borrow_from(&state);
            match webai_data {
                Some(session) => session.clone(),
                None => {
                    tracing::error!("Could not get WebAISession from packet receive");
                    // todo: if error, get the session_uuid from the packet. Could be very important
                    WebAISession {
                        session_uuid: Uuid::from_u128(webai_packet.session_uuid),
                        webai_uuid: Uuid::nil(),
                        total_hops: 0,
                        version: 0,
                        start_time: 0,
                        user_agent: "".to_string(),
                        app_name: "".to_string(),
                        language: "".to_string(),
                        cookie_enabled: false,
                        product: "".to_string(),
                        vendor: "".to_string(),
                        answered_questionnaire: false
                    }
                }
            }
        };*/

        let (coords_t, coords_x, coords_y) = WebAIPacket::convert_series(webai_packet.coords);
        let (clicks_t, clicks_x, clicks_y) = WebAIPacket::convert_series(webai_packet.clicks);
        let (scrolls_t, scrolls_x, scrolls_y) = WebAIPacket::convert_series(webai_packet.scrolls);
        let (touches_t, touches_x, touches_y) = WebAIPacket::convert_series(webai_packet.touches);

        // todo: find a way to hash this or remove
        //let mut hasher = DefaultHasher::new();
        //hasher.write_str(webai_packet.src.as_str());
        //let hash_page = hasher.finish();

        // Convert WebAIPacket to its database more complete version WebAIDataPacket
        let webai_data_packet = WebAIDataPacket {
            serial_value: 0,
            session_uuid: webai_session.session_uuid.as_u128(),
            hop: webai_session.total_hops,
            time: webai_packet.time,
            url: webai_packet.src,
            inner_width: webai_packet.inner_width,
            inner_height: webai_packet.inner_height,
            outer_width: webai_packet.outer_width,
            outer_height: webai_packet.outer_height,
            x_offset: webai_packet.x_offset,
            y_offset: webai_packet.y_offset,
            screen_left: webai_packet.screen_left,
            screen_top: webai_packet.screen_top,
            screen_x: webai_packet.screen_x,
            screen_y: webai_packet.screen_y,
            has_mouse: webai_packet.has_mouse,
            trackpad: webai_packet.trackpad,
            coords_t,
            coords_x,
            coords_y,
            clicks_t,
            clicks_x,
            clicks_y,
            scrolls_t,
            scrolls_x,
            scrolls_y,
            touches_t,
            touches_x,
            touches_y,
            hash_page: 0,
            hash_content: vec![]
        };

        tracing::info!("Received WebAIDataPacket: {webai_data_packet:?}");

        // Make request
        match Collection::write_webai_data_packet(database_requester, CollectionTypes::WebAIDataPacket(webai_data_packet)).await {
            Ok(col) => {col}
            Err(e) => {
                tracing::error!("Error write webai data packet: error: {e:?}");
                let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, "error p".to_string());
                res = header_formatting(res, &state, true);
                return Ok((state, res))
            }
        };

        // Update last seen webAIAccount
        let webai_uuid = webai_session.webai_uuid;
        match Collection::update_last_seen_webai_account(database_requester, webai_uuid).await {  // Uuid::from_u128(webai_uuid)
            Ok(col) => col,
            Err(e) => {
                tracing::error!("error updating last seen: {e:?}");
                let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, "error ls".to_string());
                res = header_formatting(res, &state, true);
                return Ok((state, res))
            }
        };


        let mut res = create_response(&state, StatusCode::OK, TEXT_HTML, "ok".to_string());
        res = header_formatting(res, &state, true);
        Ok((state, res))
    }
}


#[derive(Debug, PartialEq, Eq, sqlx::FromRow, Clone)]
pub struct WebAIQuestionnaire {
    pub(crate) serial_value: i32,
    pub(crate) webai_uuid: Uuid,
    pub(crate) session_uuid: Uuid,
    pub(crate) version: i16,
    pub(crate) gender: String,
    pub(crate) age_category: String,
    pub(crate) right_handed: bool,     // boolean is more ergonomic
    pub(crate) anxiety: i16,           // scale from 1 to 5
    pub(crate) awareness: i16,         // scale from 1 to 5
    pub(crate) frustration: i16,       // Yes, No, Maybe
    pub(crate) happiness: i16,         // Yes, No, Maybe
    pub(crate) has_session: bool       // If we found a session or not
}

#[derive(Debug, Serialize, Deserialize)]
struct WebAIQuestionnairePacket {
    webai_uuid: String,
    session_uuid: String,
    gender: String,
    age: String,
    hand: String,
    anxiety: String,
    awareness: String,
    frustration: String,
    happiness: String
}

// Ok: get webai session_uuid from the questionnaire
// todo: get webai_uuid somehow, as for now we do default
pub async fn receive_webai_questionnaire(mut state: State) -> HandlerResult {
    // Extract body from state and do conversions
    let body = Body::take_from(&mut state);
    println!("Body: {body:?}");

    let valid_body = match body::to_bytes(body).await {
        Ok(bytes) => {
            tracing::info!("LENGTH BODY DATA {}", bytes.len());
            if bytes.len() > 5000 {
                tracing::error!("Body too long, over 5000 bytes in receiving questionnaire");
                let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, "packet too large".to_string());
                res = header_formatting(res, &state, true);
                return Ok((state, res))
            }
            bytes
        },
        Err(e) => {
            tracing::error!("body not valid for questionnaire: {e:?}");
            return Err((state, HandlerError::from(e)))
        }
    };

    let body_data = String::from_utf8(valid_body.to_vec()).unwrap();


    let body_data: serde_json::Result<WebAIQuestionnairePacket> = serde_json::from_str(&body_data);

    // If error returns
    if body_data.is_err() {
        tracing::error!("Error parsing WebAIQuestionnaire: {:?}", body_data);
        let response_payload = "error;wrong packet format!".to_string();
        let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, response_payload);
        res = header_formatting(res, &state, true);
        Ok((state, res))
    } else {
        // Parse the packet and checks if it has the right format
        let webai_questionnaire_packet = body_data.unwrap();

        tracing::warn!("Obtained questionnaire: {:?}", webai_questionnaire_packet);

        /*let session_uuid = match webai_questionnaire_packet.session_uuid.parse::<u128>() {
            Ok(uuid) => Uuid::from_u128(uuid),
            Err(e) => {
                tracing::error!("Could not parse WebAI uuid: {}, error: {e}", webai_questionnaire_packet.webai_uuid);
                return Err((state, HandlerError::from(e)))
            }
        };*/

        let session_uuid = match Uuid::from_str(webai_questionnaire_packet.session_uuid.as_str()) {
            Ok(uuid) => uuid,
            Err(e) => {
                tracing::error!("Could not parse session uuid in WebAIQuestionnaire: {} with error: {}. Packet questionnaire received is {:?}", webai_questionnaire_packet.session_uuid, e, webai_questionnaire_packet);
                let error_res = error_response("Could not parse session uuid questionnaire", &state);
                return Ok((state, error_res))
            }
        };

        // Get webai_session
        let database_requester = DbAsyncMiddleware::borrow_from(&state);
        let mut webai_session = match Collection::query_webai_session(&database_requester, session_uuid.clone()).await {
            Ok(mut col) => {
                if col.data.len() < 1 {
                    tracing::error!("Could not retrieve any sessions, status={}", col.status);
                    let error_resp = error_response("could not retrieve any session", &state);
                    return Ok((state, error_resp))
                } else {
                    if col.data.len() > 1 {tracing::warn!("Danger! More than one session has been found with the same id {}", session_uuid)}
                    let col = col.data.pop().unwrap();
                    match col {
                        CollectionTypes::WebAISession(webai_session) => webai_session,
                        _ => {
                            tracing::error!("Error! Unwrapped the wrong Collection type for WebAISession");
                            let error_resp = error_response("CollectionType error", &state);
                            return Ok((state, error_resp))
                        }
                    }
                }
            },
            Err(e) => {
                tracing::error!("Could not retrieve WebAISession from database for uuid {} with error {:?}", session_uuid, e);
                let error_resp = error_response("Could not retrieve WebAISession from database", &state);
                return Ok((state, error_resp))
            }
        };

        let mut webai_questionnaire = WebAIQuestionnaire {
            serial_value: 0,
            webai_uuid: Uuid::nil(),
            /*session_uuid: match webai_questionnaire_packet.session_uuid.parse::<u128>() {
                Ok(uuid) => {
                    tracing::warn!("found packet for questionnaire session_uuid: {}", uuid);
                    Uuid::from_u128(uuid)
                },
                Err(e) => {
                    tracing::error!("Could not parse session_uuid when receiving questionnaire, received '{}' with error {}", webai_questionnaire_packet.session_uuid, e); Uuid::nil()
                }
            },*/
            session_uuid,
            version: 1,
            gender: webai_questionnaire_packet.gender,
            age_category: webai_questionnaire_packet.age,
            right_handed: match webai_questionnaire_packet.hand.as_str() {
                "Right Handed" => true,
                "Left Handed" => false,
                _ => {
                    let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, "wrong hand value");
                    res = header_formatting(res, &state, true);
                    return Ok((state, res))
                }
            },
            anxiety: webai_questionnaire_packet.anxiety.parse().expect("could not parse anxiety"),
            awareness: webai_questionnaire_packet.awareness.parse().expect("could not parse awareness"),
            frustration: match webai_questionnaire_packet.frustration.as_str() {
                "Yes" => 1,
                "No" => 0,
                "Maybe" => 2,
                _ => {
                    tracing::error!("Got wrong frustration value in questionnaire: {}", webai_questionnaire_packet.frustration);
                    let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, "wrong frustration value");
                    res = header_formatting(res, &state, true);
                    return Ok((state, res))
                }
            },
            happiness: match webai_questionnaire_packet.happiness.as_str() {
                "Yes" => 1,
                "No" => 0,
                "Maybe" => 2,
                _ => {
                    tracing::error!("Got wrong happiness value in questionnaire: {}", webai_questionnaire_packet.happiness);
                    let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, "wrong happiness value");
                    res = header_formatting(res, &state, true);
                    return Ok((state, res))
                }
            },
            has_session: false
        };



        /*let webai_session = {
            let webai_data: &Option<WebAISession> = SessionData::<Option<WebAISession>>::borrow_from(&state);
            webai_data.clone()//.expect("Could not get WebAISession from packet receive")
        };*/

        // If we do not find a session, it is problematic because it means it has not been setup in a previous page.
        // This breaks the principle of how WebAI works, in the sense that this questionnaire has been loaded the
        // necessary page interactions
        webai_questionnaire.session_uuid = webai_session.webai_uuid;
        webai_questionnaire.has_session = true;
        /*match webai_session {
            Some(webai_session) => {
                //webai_questionnaire.session_uuid = Uuid::from_u128(webai_session.webai_uuid);
                webai_questionnaire.session_uuid = webai_session.webai_uuid;
                webai_questionnaire.has_session = true;
            }
            None => {
                webai_questionnaire.has_session = false;
            }
        }*/

        // Now add WebAI Questionnaire to backend
        match Collection::insert_webai_questionnaire(database_requester, CollectionTypes::WebAIQuestionnaire(webai_questionnaire)).await {
            Ok(col) => {
                tracing::warn!("Received WebAIQuestionnaire and properly inserted: {:?}", col);

                // Update WebAISession in the backend for having answered the questionnaire


            },
            Err(e) => {
                tracing::error!("Error inserting webai questionnaire: {e:?}");
                let mut res = create_response(&state, StatusCode::BAD_REQUEST, TEXT_HTML, "error".to_string());
                res = header_formatting(res, &state, true);
                return Ok((state, res))
            }
        };

        // Update WebAISession that the questionnaire has been answered
        webai_session.answered_questionnaire = true;
        match Collection::update_webai_session_answered_questionnaire(&database_requester, CollectionTypes::WebAISession(webai_session)).await {
            Ok(col) => {
                if col.status == "session answered_questionnaire updated" {
                    tracing::warn!("Success updating session that a questionnaire has been answered");
                } else {
                    tracing::error!("Failure updating session that a questionnaire has been answered, wrong col status: {}", col.status);
                }
            },
            Err(e) => {
                tracing::error!("Error update_webai_session_answered_questionnaire, error: {:?}", e);
            }
        };


        let mut res = create_response(&state, StatusCode::OK, TEXT_HTML, "ok".to_string());
        res = header_formatting(res, &state, true);
        Ok((state, res))
    }
}



#[cfg(test)]
mod tests {
    use serde_json::Value;
    use sqlx::types::Uuid;
    use crate::webai_management::{WebAIPacket};

    #[test]
    fn test_packet_json() {
        let webai_packet = WebAIPacket {
            session_uuid: Uuid::nil().to_string(),
            inner_width: 757,
            inner_height: 0,
            outer_width: 0,
            outer_height: 0,
            x_offset: 0,
            y_offset: 0,
            screen_left: 0,
            screen_top: 0,
            screen_x: 0,
            screen_y: 0,
            has_touch: false,
            has_mouse: false,
            trackpad: 0,
            time: 0,
            coords: vec![],
            clicks: vec![],
            scrolls: vec![],
            touches: vec![],
            src: "".to_string()
        };
        println!("{:?}", webai_packet);
        println!("{:?}", serde_json::to_string(&webai_packet).unwrap());
    }

    #[test]
    fn test_json() {
        //let data = r#"{"inner_width":757,"inner_height":825,"outer_width":761,"outer_height":827,"x_offset":0,"y_offset":123,"screen_left":4,"screen_top":1,"screen_x":4,"screen_y":1,"has_touch":false,"has_mouse":true,"time":2003,"coords":[[15,460,542],[16,446,541],[17,433,538],[13,427,537],[11,419,534],[17,412,530],[16,406,524],[16,400,516],[17,393,504],[16,388,491],[16,385,478],[17,382,463],[16,382,450],[17,382,439],[17,382,431],[17,383,424],[16,385,417],[14,387,410],[17,392,404]],"clicks":[],"scrolls":[]}"#;
        let webai_packet = WebAIPacket {
            session_uuid: Uuid::nil().to_string(),
            inner_width: 757,
            inner_height: 0,
            outer_width: 0,
            outer_height: 0,
            x_offset: 0,
            y_offset: 0,
            screen_left: 0,
            screen_top: 0,
            screen_x: 0,
            screen_y: 0,
            has_touch: false,
            has_mouse: false,
            trackpad: 0,
            time: 0,
            coords: vec![],
            clicks: vec![],
            scrolls: vec![],
            touches: vec![],
            src: "".to_string()
        };
        println!("{:?}", webai_packet);
        let json_data = serde_json::to_string(&webai_packet).unwrap();
        println!("{:?}", json_data);

        let body_data: WebAIPacket = serde_json::from_str(&json_data).unwrap();
        print!("{:?}", body_data);

    }

    #[test]
    fn test_time() {
        let time_now = chrono::Utc::now();
        println!("Time: {}", time_now);

        let start_time = chrono::NaiveDateTime::from_timestamp_opt(time_now.timestamp(), 0).unwrap();
        println!("from_str: {}", start_time);

    }


}