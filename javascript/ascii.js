"use strict";
let globalFrame = 0;
let frames = [];
let timer = null;
var timerSpeed = 250;

function eventsLoader() {
    let start = document.getElementById("start");
    let animation = document.getElementById("animation");    
    let turbo = document.getElementById("turbo");
    let fonts = document.getElementById("fontsize");
    start.onclick = startGame;  
    animation.onclick = animationsFunction;  
    turbo.onchange = speedIncrement;    
    fonts.onchange = changeSize; 
}

function startGame() {
    let stop = document.getElementById("stop");   
    stop.disabled = false;      
    stop.onclick = stopGame;      
}

function animationsFunction() {
    let selectedAnimation = document.getElementById("animation").value;
    frames = ANIMATIONS[selectedAnimation].split('=====\n');
    timer = setIntervalFunct(displayFrames, timerSpeed, frames);
}

function setIntervalFunct(displayFrames, timerSpeed, frames){
    console.log("fassfasfafaf" + timer + "ssssss" + timerSpeed);
    return setInterval(displayFrames, timerSpeed, frames);
}

function displayFrames(framesArray) {
    let textArea = document.getElementById("text-area");
    textArea.value = frames[globalFrame];
    globalFrame = incrementI();
}

function incrementI() {
    if (globalFrame >= frames.length - 1) { globalFrame = 0; }
    else { globalFrame++; }
    return globalFrame;
}

function speedIncrement() {
    if (timerSpeed == 250) {
        timerSpeed = 50;
        window.clearInterval(timer);
        animationsFunction();        
    }
    else {
        timerSpeed = 250;
        window.clearInterval(timer);
        animationsFunction();
    }
}

function changeSize() {
    let textArea = document.getElementById("text-area");
    let selectectedSize = document.getElementById("fontsize").value;
    console.log(selectectedSize);
    console.log(textArea.innerHTML);
    switch (selectectedSize) {
        case "Tiny":
            textArea.style.fontSize = "7pt";
        case "Small":
            textArea.style.fontSize = "10pt";
        case "Medium":
            textArea.style.fontSize = "12pt";
        case "Large":
            textArea.style.fontSize = "16pt";
        case "Extra Large":
            textArea.style.fontSize = "24pt";
        case "XXL":
            textArea.style.fontSize = "32pt";
    }
}


function stopGame() {
    let stop = document.getElementById("stop");
    let textArea = document.getElementById("text-area");
    frames = [" ", " ", " "];
    textArea.value = frames;
    clearInterval(timer);
    startGame();
    stop.disabled = true;
}

window.onload = eventsLoader;