var pressedOnce = false;

document.addEventListener('keydown', function(event){
    if(event.key === "h"){
        document.getElementById("secret").innerHTML = "How many people are in your household?";
        document.addEventListener('keyup', (event) => {
            pressedOnce = true;
        });
}
});

let keysPressed = {};
document.addEventListener('keydown', (event) => {
keysPressed[event.key] = true;      



if (keysPressed['h'] && pressedOnce) {
    document.getElementById("secret").innerHTML = "";
}
});