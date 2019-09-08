
//Class to handle all the events
function eventHandler() {
    let decoraionsButton = document.getElementById("digger_decorations");
    let stopDecoraions = document.getElementById("stop_decorations");
    // decoraionsButton.onclick = printHello;
    // decoraionsButton.onclick = changeFontSize;
    // decoraionsButton.onclick = changeFontSizeBy2;
    decoraionsButton.onclick = changeFontSizeBy2WithTimer;
    stopDecoraions.onclick = stopTimer;

    let decorationsCheckBox = document.getElementById("bling");
    decorationsCheckBox.onchange = changeStyles;

}

//Printing  hello world alert
function printHello() {
    alert("Hello World");
}

//changing the font size to 24 in the text area with decorations button
function changeFontSize() {
    let textArea = document.getElementById("textspace");
    textArea.style.fontSize = "24pt";
}

//Function to change the styles in the text area with the checkbox
function changeStyles() {
    let textArea = document.getElementById("textspace");
    let outerDiv = document.getElementById("outerclass");
    let controls = document.getElementById("decoration");
    let currentClass = textArea.className;
    if (currentClass === "textspace") {
        textArea.className = "modifiedtextspace";
        outerDiv.className = "newbodyclass";
        controls.className = "controlsNew";
    } else {
        textArea.className = "textspace";
        outerDiv.className = "outerclass";
        controls.className = "decorations";
    }
    alert("Modify page?");
}

//Function toiIncrease the font size by 2 in the text area
function changeFontSizeBy2() {
    let textArea = document.getElementById("textspace");
    let currentFontSize = textArea.style.fontSize;
    textArea.style.fontSize = parseInt(currentFontSize) + 2 + "pt";
}

//Function with timer to increase the font size by 2 continuosly
let timer = null;
function changeFontSizeBy2WithTimer() {
    timer = setInterval(changeFontSizeBy2, 500);
}

//Function to stop the timer
function stopTimer() {
    clearInterval(timer);
}

window.onload = eventHandler;
