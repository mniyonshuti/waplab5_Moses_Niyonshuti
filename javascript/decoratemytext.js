
//Class to handle all the events
function eventHandler() {
    let decoraionsButton = document.getElementById("digger_decorations");
    let stopDecoraions = document.getElementById("stop_decorations");
    let igpayAtinlay = document.getElementById("igpay_atinlay");
    let malkovitch = document.getElementById("malkovitch");
    // decoraionsButton.onclick = printHello;
    // decoraionsButton.onclick = changeFontSize;
    // decoraionsButton.onclick = changeFontSizeBy2;
    decoraionsButton.onclick = changeFontSizeBy2WithTimer;
    stopDecoraions.onclick = stopTimer;

    let decorationsCheckBox = document.getElementById("bling");
    decorationsCheckBox.onchange = changeStyles;

    igpayAtinlay.onclick = changeConsonats;
    malkovitch.onclick = replaceLongWords;

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
    let currentFontSize = window.getComputedStyle(textArea).fontSize;
    textArea.style.fontSize = (Math.ceil((parseInt(currentFontSize)) * 0.75) + 2 + "pt");
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

//Function to change words begginign with consonats
function changeConsonats(){
    let textArea = document.getElementById("textspace");
    let enteredText = textArea.value;
    let wordsEntered = enteredText.split(" "); 
    textArea.value = twistWords(wordsEntered);
}

//Function that twists the text as per the rules of consonants and vowels
function twistWords(words){
    let currentWord = null;    
    let currentWordCharArray = null;
    for( let i = 0; i < words.length; i ++){
        currentWord = words[i];
        currentWordCharArray = words[i].split('');        
        if(indexOfForstVowel(currentWordCharArray) === 0){
            words[i] = currentWord + "ay";
        }
        else{
            words[i] = currentWord.substring(indexOfForstVowel(currentWord), currentWord.length) +
            currentWord.substring(0, indexOfForstVowel(currentWord)) + "ay";
        }
    }
    return words.reduce(function(prev, elem){
        return prev + " " + elem;
    }); ;
}

//Function that returns the index of the first vowel in a particular word
function indexOfForstVowel(word){
    let indexOfForstVowel = 0;
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    for( let i = 0; i < word.length; i ++){
        if(vowels.includes(word[i])){
            indexOfForstVowel = i;
            break;
        }       
    }
    return indexOfForstVowel;
}


//Function that replaces words that have length greater than or equal to 5
function replaceLongWords(words){
    let textArea = document.getElementById("textspace");
    let enteredText = textArea.value;
    let wordsEntered = enteredText.split(" ");
    let replacedWords = wordsEntered.map(function(elem){
        if(elem.length >= 5) return "Malkovitch"
        return elem;
    });
    textArea.value = replacedWords.reduce(function(prev, elem){
        return prev + " " + elem;
    });
} 
window.onload = eventHandler;
