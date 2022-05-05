// the looked for word
var rightWord;

// save all guesses
var guess1;
var guess2;
var guess3;
var guess4;
var guess5;
var guess6;

var guessCounter = 0;
// alla rutor i en array
var boxes = document.getElementsByClassName('ruta');


// function that writes out a letter in one of the boxes
function writeOutLetter(row, index, inputBokstav){
    var bokstav = document.createElement('H1');
    bokstav.innerHTML = inputBokstav;
    boxes[5*row + index].appendChild(bokstav);
}

// skriv ut alla bokstäver i gissning.
function writeOutAWord(guess, row){
    for (i=0;i<5;i++){
        writeOutLetter(row, i, guess.charAt(i));
    }
}

// wait for guess to be sumbitted
document.getElementById("knapp").onclick = function(){
    var guess;
    if (guessCounter === 0){
        guess1 = document.getElementById("guess").value;
        guess = guess1;
    } else if (guessCounter === 1){
        guess2 = document.getElementById("guess").value;
        guess = guess2;
    } else if (guessCounter === 2){
        guess3 = document.getElementById("guess").value;
        guess = guess3;
    } else if (guessCounter === 3){
        guess4 = document.getElementById("guess").value;
        guess = guess4;
    } else if (guessCounter === 4){
        guess5 = document.getElementById("guess").value;
        guess = guess5;
    } else if (guessCounter === 5){
        guess6 = document.getElementById("guess").value;
        guess = guess6;
    } 
    writeOutAWord(guess,guessCounter);
    guessCounter++;
};

rightWord = "ABCDE";
let guessedWord = "ABCDF";
const answers = [guess1,guess2,guess3,guess4,guess5,guess6];

const rightWordArray = [];
rightWordArrayn= rightWord.split("");

let guessedWordArray = [];
guessedWordArray= guessedWord.split("");

let green = 0;
let yellow = 0;
let grey = 0;

/**
 * This function compares word from user with correct word
 * @param guessedWordArray
 * @param rightWordArray
 */

function checkLetters(guessedWordArray, rightWordArray) {

   for(let i = 0; i < guessedWordArray.length; i++ ){
       if(guessedWordArray[i] === rightWordArray[i]) { //current character in guessedWord is same as actual
           green ++;
           console.log('green');
       }
       else if(guessedWordArray.includes(rightWordArray[i])) //check if guess word includes correct letter
       {
           yellow++;
           console.log('yellow');
       }
       else{ //letter is not the same
           grey++;
           console.log('grey');
       }
   }

}

/**
 * This function read from "svenska-ord.txt converts each row to an element in an array and returns random element
 * @returns word, an element in the lexikonArray
 */
function getWordFromLexikon() //this is convert to array
{
    const fs = require("fs");
    const text = fs.readFileSync("./svenska-ord.txt").toString('utf-8'); //reads from file, return buffer and convert to string
    const lexikon = text.split("\n"); //separate word by different rows
    let word;

    return word = lexikon[Math.floor(Math.random() * words.length)]; //get random word between index 0 and length
}

