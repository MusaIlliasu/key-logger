const eventKey = document.querySelector(".eventKey")
const eventKeyCode = document.querySelector(".eventKeyCode")
const eventCode = document.querySelector(".eventCode")
const text = document.querySelector(".text");
const keysContainer = document.querySelector(".keys_container");

window.addEventListener("keydown", (event) => {
    event.preventDefault();

    text.style.display = "none";
    keysContainer.style.display = "flex";
    if(event.key === " "){
        eventKey.innerHTML = "Space";
        eventKeyCode.innerHTML = event.keyCode;
        eventCode.innerHTML = event.code;
    } else {
        eventKey.innerHTML = event.key;
        eventKeyCode.innerHTML = event.keyCode;
        eventCode.innerHTML = event.code;
    }
});