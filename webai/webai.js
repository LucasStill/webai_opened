
/*                              ▄▄
▀████▀     █     ▀███▀        ▄██             ██     ▀████▀
  ▀██     ▄██     ▄█           ██            ▄██▄      ██
   ██▄   ▄███▄   ▄█    ▄▄█▀██  ██▄████▄     ▄█▀██▄     ██
    ██▄  █▀ ██▄  █▀   ▄█▀   ██ ██    ▀██   ▄█  ▀██     ██
    ▀██ █▀  ▀██ █▀    ██▀▀▀▀▀▀ ██     ██   ████████    ██
     ▄██▄    ▄██▄     ██▄    ▄ ██▄   ▄██  █▀      ██   ██
      ██      ██       ▀█████▀ █▀█████▀ ▄███▄   ▄████▄████▄

    Reach out to "lucas at webai.ai" for more information or visit webai.ai
*/

let version = "0.0.1";
let WEBAI_UUID = "";
// todo: initiate session_uuid
let session_uuid = "";
let URL = "";
let DATE = "";
let time_tracker = 0; //ms
let LAST_INTERVAL = 0;
let LAST_INTERVAL_TOUCH = 0;
let LAST_INTERVAL_SCROLL = 0;
let LAST_INTERVAL_CLICK = 0;
let LAST_INTERVAL_TOUCH_START = 0;
let INTERVAL_MOV = 10; //ms
const print_console = false;    // If you want logs, set to true
let trackpad = 0;
let WEBAI_URL = "https://webai.ai";
let SRC = window.location.href;
let ANSWERED_QUESTIONNAIRE = false;

console.log("found session uuid: " + sessionStorage.getItem("webai_session_uuid"));


onload = function main() {

    console.log("Got webAI");

    // Get url of the loaded page
    URL = window.location.href;

    if(URL.includes("127.") || URL.includes("192.168")) {
        console.log("Don't accept local URLS");
        return
    }

    // Get date
    DATE = new Date();


    // Set Up last Interval as the initial time measured to start with
    LAST_INTERVAL = DATE;
    LAST_INTERVAL_SCROLL = DATE;
    LAST_INTERVAL_CLICK = DATE;
    LAST_INTERVAL_TOUCH = DATE;

    // Set event listeners on the body element of the page:
    document.getElementsByTagName("body")[0].setAttribute("onmousemove", "update_coords_webAI(event)");
    document.getElementsByTagName("body")[0].setAttribute("onclick", "update_click_webAI(event)");
    document.getElementsByTagName("body")[0].setAttribute("onscroll", "update_scroll_webAI(event)");
    document.getElementsByTagName("body")[0].setAttribute("ontouchmove", "update_touch_webAI(event)");
    document.getElementsByTagName("body")[0].setAttribute("ontouchstart", "update_touch_pressed(event)");
    document.getElementsByTagName("body")[0].setAttribute("ontouchend", "update_touch_release(event)");
    document.getElementsByTagName("body")[0].setAttribute("onkeypress", "key_pressed_display(event)");

    start_web_ai();

    // Update loop webAI
    setInterval(update_webAI, 1000);
}


function onkeydown_display(event) {
    console.log(event.key);
    console.log(event.keyCode);
}

// If some directional event happened, record it.
// They include: space bar, arrows
// We could only use this function when a scroll event is happening for safety reasons
function key_pressed_display(event) {
    let event_key = "";
    if(event.key === " ") {event = event.key }
    else if(event.key === "");
}


// When a touch event start such as leaving a finger on a touchscreen
// Keeps track when the touchscreen's cursor is pressed
let touch_rest = false;
let TOUCH_PRESSED = [];
function update_touch_pressed(event) {
    touch_rest = true;

    LAST_INTERVAL_TOUCH_START = Date.now();

    // Add starting time when finger has been pushed on screen
    TOUCH_PRESSED.push([LAST_INTERVAL_TOUCH_START, 0]);
    document.getElementById("tracker_touchrest").innerText = "touchrest=" + true;
}

function update_touch_release(event) {
    touch_rest = false;

    let interval = Date.now() - LAST_INTERVAL_TOUCH;
    LAST_INTERVAL_TOUCH_START = Date.now();

    // Add interval when finger is released from the screen
    TOUCH_PRESSED.push(interval);
    document.getElementById("tracker_touchrest").innerText = "touchrest=" + false;
}



// When scrolling on mobile, the fingers coordinates are not recorded
// A hypothesis is that we can record variational changes when scrolling if we track where the thumb or finger is.
// For example lots of +50yo are scrolling with their index while Millennials use their thumbs.
// We should be able to detect these differences.
// We need to record mobile cursor each time there is a movement with it on screen that is not a click.
let MOBILE_CURSOR = [];

// Keep track of pressed finger movements
function update_touch_webAI(event) {
    let interval = Date.now() - LAST_INTERVAL_TOUCH;
    if(interval < INTERVAL_MOV) {return}

    // Update Last Measure Timestamp
    LAST_INTERVAL_TOUCH = Date.now();

    let x = ~~event.touches[0].clientX;
    let y = ~~event.touches[0].clientY;

    // If negative, turn into 0
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;

    document.getElementById("tracker_touchmove").innerText = "touchmove=" + x +", " + y;

    MOBILE_CURSOR.push([interval, x, y])
}


let SCROLLS = [];
// Whenever a scroll operation happens, record it
function update_scroll_webAI(event) {
    // Need a certain time interval to elapse
    let interval = Date.now() - LAST_INTERVAL_SCROLL;
    if(interval < INTERVAL_MOV) {return}

    // Update Last Measure Timestamp
    LAST_INTERVAL_SCROLL = Date.now();

    let scroll_x = ~~window.pageXOffset;
    let scroll_y = ~~window.pageYOffset;

    // If negative, turn into 0
    scroll_x = scroll_x < 0 ? 0 : scroll_x;
    scroll_y = scroll_y < 0 ? 0 : scroll_y;

    SCROLLS.push([interval, scroll_x, scroll_y]);
}

let CLICKS = []
// Whenever a click action is performed, store it here
function update_click_webAI(event) {
    // Need a certain time interval to elapse
    let interval = Date.now() - LAST_INTERVAL_CLICK;
    if(interval < INTERVAL_MOV) {return}

    // Update Last Measure Timestamp
    LAST_INTERVAL_CLICK = Date.now();

    let x = event.clientX;
    let y = event.clientY;

    // If negative, turn into 0
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;

    CLICKS.push([interval, x, y]);
}

let COORDINATES = [];

// Store mouse coordinates in a vec until they are dump in the API call
function update_coords_webAI(event) {

    // Need a certain time interval to elapse
    let interval = Date.now() - LAST_INTERVAL;
    if(interval < INTERVAL_MOV) {return}

    // Update Last Measure Timestamp
    LAST_INTERVAL = Date.now();

    let x = event.clientX;
    let y = event.clientY;

    // If negative, turn into 0
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;

    get_top_element_cursor(x, y);

    // Push the new coordinates from the event.
    COORDINATES.push([interval, x, y]);

}

// Gives the top element the cursor is on
// After testing we remain on those features:
//  - Cursor element ID
//  - Class Name
//  - Attributes List
//  - Height
//  - Width
//  - Top
//  - Left
//  - local name
function get_top_element_cursor(x, y) {
    return document.elementFromPoint(x, y)
}

function update_webAI() {
    // Get time of current function trigger
    const date_now = Date.now();

    // Get current screen size
    const inner_width = ~~window.innerWidth;
    const inner_height = ~~window.innerHeight;
    const outer_width = ~~window.outerWidth;
    const outer_height = ~~window.outerHeight;

    // Get offsets
    const x_offset = ~~window.pageXOffset;
    const y_offset = ~~window.pageYOffset;

    // Get screen difference with window
    const screen_left = window.screenLeft;
    const screen_top = window.screenTop;
    const screen_x = window.screenX;
    const screen_y = window.screenY;

    // Get cursor options
    let has_touch = is_touch_enabled();
    let has_mouse = is_mouse_enabled();


    let coords = COORDINATES;
    let clicks = CLICKS;
    let scrolls = SCROLLS;
    let touches = MOBILE_CURSOR;
    let touch_pressed = TOUCH_PRESSED;


    // Flush the coordinates data
    COORDINATES = [];
    CLICKS = [];
    SCROLLS = [];
    MOBILE_CURSOR = [];
    TOUCH_PRESSED = [];

    // Flush the time intervals
    LAST_INTERVAL = date_now;
    LAST_INTERVAL_CLICK = date_now;
    LAST_INTERVAL_SCROLL = date_now;
    LAST_INTERVAL_TOUCH = date_now;
    LAST_INTERVAL_TOUCH_START = date_now;

    // Prepare to send packet updates
    if(coords.length > 0 || clicks.length > 0 || scrolls.length > 0 || touches > 0) {
        // Get time options
        time_tracker  =  date_now - DATE;

        // todo: delete in prod
        if(print_console) {
            display_in_console(
                time_tracker, inner_width, inner_height, outer_width, outer_height, x_offset, y_offset, screen_left, screen_top, screen_x, screen_y,
                has_touch, has_mouse, trackpad, coords, clicks, scrolls, touches, touch_pressed
            );
        }

        send_webAI_packets(
            time_tracker, inner_width, inner_height, outer_width, outer_height, x_offset, y_offset, screen_left, screen_top, screen_x, screen_y,
            has_touch, has_mouse, trackpad, coords, clicks, scrolls, touches, touch_pressed
        );
    }
}

async function start_web_ai() {
    local_storage_info();
    session_storage_info();


    // Try to get webai_uuid from session
    console.log("WEBAI_UUID: " + WEBAI_UUID);

    let dict = {
        "uuid": WEBAI_UUID,
        "session_uuid": SESSION_UUID,
        "url": URL,
        "version": version,
        "client_date": DATE,
        "user_agent": navigator.userAgent,
        "app_name": navigator.appName,
        "language": navigator.language,
        "cookie_enabled": navigator.cookieEnabled,
        "product": navigator.product,
        "vendor": navigator.vendor
    };


    let payload = JSON.stringify(dict);

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {if (xhr.readyState === 4) {if (xhr.status === 200) {
        let data = xhr.responseText.split(";");
        console.log('started webai, response: ' + data[0]);
        WEBAI_UUID = data[1].split("=")[1];
        //console.log("WEBAI_UUID: " + WEBAI_UUID);
        let current_hop_count = data[2].split("=")[1];
        //console.log("CURRENT_HOP_COUNT: " + current_hop_count);

        SESSION_UUID = data[3].split("=")[1];
        console.log("WEBAI SESSION_UUID: " + SESSION_UUID);

        let answered_questionnaire = data[4].split("=")[1];
        if(answered_questionnaire==="true") {
            ANSWERED_QUESTIONNAIRE = true
        } else {
            console.log("Questionnaire_answered: " + answered_questionnaire);
        }

        if(localStorage.getItem("webai_uuid")===null) {
            localStorage.setItem("webai_uuid", WEBAI_UUID);
        }

        if(sessionStorage.getItem("webai_session_uuid")===null) {
            sessionStorage.setItem("webai_session_uuid", SESSION_UUID);
        }

        // If current hop_count is at least 3, open pop up to invite user to take questionnaire
        // And that the questionnaire has not been answered yet
        if(current_hop_count >= 2 && !ANSWERED_QUESTIONNAIRE) {
            spawn_off_questionnaire_window();
        }

    }}}

    // Change target address with WebAI's domain
    xhr.open("POST", WEBAI_URL + "/start_webai", true);
    xhr.setRequestHeader('Content-type', 'application/json');
    //xhr.withCredentials = true;

    xhr.send(payload);
}


/// Check sessionID storage
// todo: possibly remove as function used above
function local_storage_info() {

    let webai_uuid = localStorage.getItem("webai_uuid");
    if(webai_uuid === null) {
        console.log("creating webai_uuid");
        WEBAI_UUID = "";

    } else {
        // Found so change value
        WEBAI_UUID = webai_uuid;
    }
}

// Check if there is a session_storage_uuid already set up
function session_storage_info() {

    let session_uuid = sessionStorage.getItem("webai_session_uuid");
    if(session_uuid===null) {
        console.log("creating webai_session_uuid");
        SESSION_UUID = "";
    } else {
        console.log("found webai_session_uuid: " + session_uuid);

        SESSION_UUID = session_uuid;
    }
}

async function send_webAI_packets(
    time, inner_width, inner_height, outer_width, outer_height, x_offset, y_offset, screen_left, screen_top, screen_x, screen_y,
    has_touch, has_mouse, trackpad, coords, clicks, scrolls, touches, touch_pressed
) {
    // First check what kind of URL we have. We should not send anything that has a local URL, only existing domain names.
    // That is done such that the server can crawl the page and gather all of the needed elements.
    // XXX

    let dict = {
        "session_uuid": SESSION_UUID,
        "time": time,
        "inner_width": inner_width,
        "inner_height": inner_height,
        "outer_width": outer_width,
        "outer_height": outer_height,
        "x_offset": x_offset,
        "y_offset": y_offset,
        "screen_left": screen_left,
        "screen_top": screen_top,
        "screen_x": screen_x,
        "screen_y": screen_y,
        "has_touch": has_touch,
        "has_mouse": has_mouse,
        "trackpad": trackpad,
        "coords": coords,
        "clicks": clicks,
        "scrolls": scrolls,
        "touches": touches,
        "src": SRC,
        // "touched_pressed": touch_pressed,
    };
    let payload = JSON.stringify(dict);


    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {if (xhr.readyState === 4) {if (xhr.status === 200) {
        let data = xhr.responseText;
        console.log('sent packet, response: ' + data);
    }}}

    // Change target address with WebAI's domain
    xhr.open("POST", WEBAI_URL + "/send_packets", true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(payload);
}


function display_in_console(
    time, inner_width, inner_height, outer_width, outer_height, x_offset, y_offset, screen_left, screen_top, screen_x, screen_y,
    has_touch, has_mouse, trackpad, coords, clicks, scrolls, touches, touched_pressed
) {
    console.log(
        "time: " + time +
        ", inner width: " + inner_width +
        ", inner height: " + inner_height +
        ", outer width: " + outer_width +
        ", outer height: " + outer_height +
        ", x offset: " + x_offset +
        ", y offset: " + y_offset +
        ", screen left: " + screen_left +
        ", screen top: " + screen_top +
        ", screen x: " + screen_x +
        ", screen y: " + screen_y +
        ", has touch: " + has_touch +
        ", has mouse: " + has_mouse +
        ", has trackpad: " + trackpad +
        ", coords: " + coords +
        ", clicks: " + clicks +
        ", scrolls: " + scrolls +
        ", touches: " + touches +
        ", touched_pressed: " + touched_pressed +
        ".\n"
    );
}

function is_touch_enabled() {
    return ( 'ontouchstart' in window ) ||
        ( navigator.maxTouchPoints > 0 ) ||
        ( navigator.msMaxTouchPoints > 0 );
}

function is_mouse_enabled() {
    return matchMedia('(pointer:fine)').matches
}

// Detect the presence of a trackpad once a scroll event happens
// This is done by measuring the difference between the delta values
// of the screen and the input device as a mouse has a big gap compared to a trackpad.
function detectTrackPad(e) {
    var isTrackpad = false;
    if (e.wheelDeltaY) {
        if (e.wheelDeltaY === (e.deltaY * -3)) {
            isTrackpad = true;
            trackpad = 2;
        } else {
            trackpad = 1;
        }
    }
    else if (e.deltaMode === 0) {
        isTrackpad = true;
        trackpad = 2;
    } else {
        trackpad = 1;
    }
}

document.addEventListener("mousewheel", detectTrackPad, false);
document.addEventListener("DOMMouseScroll", detectTrackPad, false);



// After a while, we can spawn off a window asking if the user wants to take WebAI's questionnaire.
// You can close it by clicking on a close button provided with it.
function spawn_off_questionnaire_window() {
    let div = document.createElement("div");
    div.id = "webai_popup";
    div.style.position = "fixed";
    div.style.display = "block";
    div.style.width = "200px";
    div.style.bottom = "10px";
    //div.style.left = "0";
    div.style.right = "10px";
    div.style.marginLeft = "auto";
    div.style.marginRight = "auto";
    div.style.border = "2px solid goldenrod";
    div.style.borderRadius = "25px";
    div.style.padding = "10px";
    div.style.backgroundColor = "white";
    div.style.marginTop = "50px";

    let title = document.createElement("h2");
    title.style.textAlign = "center";
    title.innerText = "WebAI!";
    div.appendChild(title);

    let p = document.createElement("p");
    p.innerText = "Take 30 seconds to contribute to privacy and Artificial Intelligence! Thank you very much";
    div.appendChild(p);

    let div2 = document.createElement("div");
    div2.style.width = "100%";
    div2.style.cursor = "pointer";
    let url_questionnaire = 'https://webai.ai/pages/questionnaire.html&' + SESSION_UUID;
    div2.setAttribute("onclick", "window.open('" + url_questionnaire + "', '_blank')");

    let button = document.createElement("p");
    button.setAttribute("id", "webai_button");
    button.setAttribute("onmouseenter", "document.getElementById('webai_button').style.backgroundColor = '#f2f2f2';");
    button.setAttribute("onmouseleave", "document.getElementById('webai_button').style.backgroundColor = 'white';");
    button.style.textAlign = "center";
    button.style.margin = "auto";
    button.style.padding = "10px";
    button.style.borderRadius = "25px";
    button.style.border = "1px solid goldenrod";
    button.innerText = "Improve WebAI";
    div2.appendChild(button);

    div.appendChild(div2);

    let close_btn = document.createElement("p");
    close_btn.innerText = "close";
    close_btn.style.textAlign = "center";
    close_btn.style.margin = "auto";
    close_btn.style.marginTop = "10px";
    close_btn.style.marginBottom = "0";
    close_btn.style.color = "gray";
    close_btn.style.cursor = "pointer";
    close_btn.onclick = close_webai_popup;

    div.appendChild(close_btn);


    //"Interested in Artificial Intelligence & Privacy? Take "

    document.getElementsByTagName("body")[0].appendChild(div);
}

function close_webai_popup() {
    document.getElementById("webai_popup").style.display = "none";
}