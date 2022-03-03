function addItem() {
    const text = document.getElementById("input").value;
    if (text == "") {
        return;
    }
    document.getElementById("input").value = "";
    
    // determine name
    var newName = "";
    cookies = document.cookie.split(";");
    // first cookie case
    if (cookies.length == 1 && cookies[0] == "") {
        newName = 0;
    }
    else {
        lastCookie = cookies[cookies.length - 1];
        endI = lastCookie.indexOf("=");
        lastCookieName = lastCookie.substring(0, endI);
        newName = parseInt(lastCookieName) + 1;
    }

    // add element
    addElement(text, newName.toString());
    saveCookie(text, newName.toString());
}

function addElement(text, id) {
    // create div
    const newDiv = document.createElement("div");
    // set id
    newDiv.id = id;
    // add text
    const newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);
    // add onclick listener
    newDiv.addEventListener("click", function(){ removeItem(newDiv) });
    // add onhover listener
    newDiv.addEventListener("mouseover", function() { newDiv.classList.add("strikethrough") });
    newDiv.addEventListener("mouseout", function() { newDiv.classList.remove("strikethrough") });
    // insert into dom
    const currentDiv = document.getElementById("final_todo");
    document.body.insertBefore(newDiv, currentDiv);
}

function removeItem(element) {
    // delete cookie
    document.cookie = element.id + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    
    // remove from dom
    element.remove();
}

function saveCookie(text, name) {
    const d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    
    document.cookie = name + "=" + text + "; expires=" + d.toUTCString() + "; path=/; SameSite=Strict";
}

function loadCookies() {
    // decode and split
    let cookies = decodeURIComponent(document.cookie).split(";");
    
    // add all text items to dom
    for (var i = 0; i < cookies.length; i++) {
        startI = cookies[i].indexOf("=");
        text = cookies[i].substring(startI + 1);
        name = cookies[i].substring(0, startI);
        addElement(text, name);
    }
}

function reset() {
    // loop through and delete cookies
    for (var i = 0; i < 1000; i++) {
        document.cookie = i.toString() + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    }
    // reload page
    location.reload();
}

function checkSubmit(event) {
    if(event && event.keyCode == 13) {
       addItem();
    }
 }
