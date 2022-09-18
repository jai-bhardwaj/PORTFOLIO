const dynamicElement = document.getElementById("dynamic-element");
console.log(dynamicElement);
const phrases = ["Software Engineer...","Enthusiast...","Student..."];
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 75;

function printText(phrase) {

    if(letterIndex >= phrase.length){
        clearText(phrase);
    }

    else if(letterIndex < phrase.length){
        dynamicElement.textContent += phrase[letterIndex++];
        setTimeout(function(){
            printText(phrase);
        },typingSpeed);
    }
}

function clearText(){

    if(letterIndex > -1) {
        let x = phrases[phraseIndex].slice(0,letterIndex--);
        // console.log(x);
        dynamicElement.textContent = x;
        setTimeout(function (){
            clearText();
        },erasingSpeed);
    }
    else {
        letterIndex = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length ;
        printText(phrases[phraseIndex]);
    }
}


// printText(phrases[phraseIndex]);