let red;
let green;
let blue;

let rgb;

function randomize(){
    red = Math.round(Math.random() * 255);
    green = Math.round(Math.random() * 255);
    blue = Math.round(Math.random() * 255);

}

function setColor() {
    rgb = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("ColorBox").style.background = rgb;

    document.getElementById("Red").value = red;
    document.getElementById("Green").value = green;
    document.getElementById("Blue").value = blue;
}

randomize();
setColor();

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      reactFunc();
    }
});


document.getElementById("ranButton").onclick = function(){
    randomize();
    setColor();
}

function reactFunc(){
    red = document.getElementById("Red").value;
    green = document.getElementById("Green").value;
    blue = document.getElementById("Blue").value;
    if (red > 255) {
        red = 255
    };
    if (green>255){
        green = 255
    };
    if (blue>255){
        blue = 255
    };
    setColor();
}

document.getElementById("Blue").addEventListener('input', reactFunc)
document.getElementById("Red").addEventListener('input', reactFunc)
document.getElementById("Green").addEventListener('input', reactFunc)
