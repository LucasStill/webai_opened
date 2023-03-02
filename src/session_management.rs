use std::collections::HashMap;
use gotham::state::{FromState, State};
use chrono::{Utc};
use gotham_derive::StateData;
use gotham::helpers::http::response::create_response;
use gotham::handler::HandlerFuture;
use std::pin::Pin;
use std::sync::{Arc, Mutex};
use mime::{TEXT_PLAIN};
use gotham::hyper::{Body, Response, StatusCode, HeaderMap};
use futures_util::{future, FutureExt};
use serde::{Deserialize, Serialize};



#[derive(Clone, Debug, Deserialize, Serialize, StateData)]
pub struct DefaultSession {
    id: i32
}



#[derive(Debug)]
pub enum SessionSharedError {
    LockError,
    AlreadyPresent,
    NotFound
}

/// Middleware shared state between sessions
/// sessions_times:
///     Shared states of each session with the UUID of that session and the Utc chrono time.
///     We use a shared state for this because chrono Utc apparently can not be serialized in the
///     session middleware state.
#[derive(Clone, StateData)]
pub struct SessionShared {
    session_times: Arc<Mutex<HashMap<i64, i64>>>,
}

impl SessionShared {
    pub(crate) fn new() -> Self {
        Self {
            session_times: Arc::new(Mutex::new(HashMap::new()))
        }
    }


    /// Insert an entry in the shared state by providing the created session id.
    /// Returns a result with empty field for Ok, and a SessionSharedError in case of failure
    pub(crate) fn insert_entry(self, id: i64) -> Result<bool, SessionSharedError> {


        match self.session_times.lock() {
            Ok(mut session_times) => {
                match session_times.contains_key(&id) {
                    false => {
                        // added to shared state
                        session_times.insert(id, chrono::Utc::now().timestamp());
                        Ok(true)
                    },
                    true => {
                        println!("Key is already present in shared session state: {id}");
                        Err(SessionSharedError::AlreadyPresent)
                    }
                }
            },
            Err(e) => {
                println!("Could not access session times database, poison error: {e:?}");
                Err(SessionSharedError::LockError)
            }
        }
    }

    /// Retrieves an entry from the shared state of initial session times
    pub(crate) fn retrieve_time(&self, id: i64) -> Result<chrono::NaiveDateTime, SessionSharedError> {
        match self.session_times.lock() {
            Ok(session_times) => {
                match session_times.contains_key(&id) {
                    true => {
                        let timestamp = *session_times.get(&id).unwrap();
                        let naive_time = chrono::NaiveDateTime::from_timestamp_opt(timestamp, 0).unwrap();
                        Ok(naive_time)
                    },
                    false => {
                        println!("Entry key not found: {id}");
                        Err(SessionSharedError::NotFound)
                    }
                }
            },
            Err(e) => {
                println!("Could not access session times database, poison error: {e:?}");
                Err(SessionSharedError::LockError)
            }
        }
    }
}


// OriginDomain struct that will keep in shared memory the origin domain access for header creation.
// This is the middlewares structure
// Todo: this will be merged with other branches' middlewares structures
#[derive(Clone, StateData)]
pub struct OriginDomain {
    pub origin_domain: String,
}

/// Counter implementation.
impl OriginDomain {
    /// Creates a new origin domain to allow cross domain sharing
    pub(crate) fn new(origin: String) -> Self {
        Self {
            origin_domain: origin,
        }
    }
}

// Get the domain of the website passed as a command line argument during initialization
pub fn get_domain_origin(state: &State) -> String {
   OriginDomain::borrow_from(state).origin_domain.clone()
}

// Format the header according to our specification
pub fn header_formatting(mut res: Response<Body>, state: &State, cross_origin_enabled: bool) -> Response<Body> {

    let utc = Utc::now();

    let cross_origin = match cross_origin_enabled {
        true => {
            // Test header stuff
            print!("true ");
            let map = HeaderMap::borrow_from(state);
            let r = map.get("origin").unwrap().to_str().unwrap();
            r
        },
        false => {
            print!("false ");
            let map = HeaderMap::borrow_from(state);
            let r = map.get("host").unwrap().to_str().unwrap();
            r
        }
    };

    println!("cross origin value is: {cross_origin}");

    let headers = res.headers_mut();
    //headers.insert("Strict-Transport-Security", "max-age=63072000".parse().unwrap());
    //headers.insert("X-Frame-Options", "SAMEORIGIN".parse().unwrap());
    //headers.insert("X-Content-Type-Options", "nosniff".parse().unwrap());
    headers.insert("Access-Control-Allow-Origin", cross_origin.parse().unwrap());
    headers.insert("Access-Control-Allow-Method", "GET, POST, OPTIONS".parse().unwrap());
    headers.insert("Access-Control-Allow-Headers", "Content-Type".parse().unwrap());
    headers.insert("Access-Control-Allow-Credentials", "true".parse().unwrap());
    //headers.insert("Permissions-Policy", "accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()".parse().unwrap());
    headers.insert("Date", format!("{utc:?}").parse().unwrap());
    res
}

pub fn accept_cors_policy(state: State) -> Pin<Box<HandlerFuture>>{
    let response_payload = "ok;CORS".to_string();
    let mut res = create_response(&state, StatusCode::OK, TEXT_PLAIN, response_payload);
    res = header_formatting(res, &state, true);
    future::ok((state, res)).boxed()
}


pub fn error_response(message: &str, state: &State) -> Response<Body> {
    let mut res = create_response(state, StatusCode::OK, TEXT_PLAIN, message.to_string());
    header_formatting(res, state, true)
}