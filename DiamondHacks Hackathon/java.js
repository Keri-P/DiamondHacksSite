var pressedOnce = false;

document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        document.getElementById("secret").innerHTML = "How many people are in your household?";
        document.addEventListener('keyup', (event) => {
            pressedOnce = true;
        });
}
});

let keysPressed = {};
document.addEventListener('keydown', (event) => {
keysPressed[event.key] = true;      



if (keysPressed['Escape'] && pressedOnce) {
    document.getElementById("secret").innerHTML = "";
}
});