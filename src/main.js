
// the looked for word
var rightWord;

// save all guesses
var guess1;
var guess2;
var guess3;
var guess4;
var guess5;
var guess6;



rightWord = "ABCDE";
let guessedWord = "ABCDF";
const answers = [guess1,guess2,guess3,guess4,guess5,guess6];

const rightWordArray = [];
rightWordArrayn= rightWord.charAt(5);

let guessedWordArray = [];
guessedWordArray= guessedWord.charAt(5);

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

function checkForYellowLetters2() {

}