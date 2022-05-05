
// the looked for word
var rightWord;

// save all guesses
var guess1;
var guess2;
var guess3;
var guess4;
var guess5;
var guess6;

var guessCount = 0;



rightWord = "ABCDE";
let guessedWord = "ABCDF";
const answers = [guess1,guess2,guess3,guess4,guess5,guess6];


// Array with each letter of the right word as one element
var rightWordArray = [5];
for (i=0;i<5;i++){
    rightWordArray[i] = rightWord.charAt(i);

}
// Array with each letter of the guessed word as one element
var guessedWordArray = [5];
for (i=0;i<5;i++){
    guessedWordArray[i]= guessedWord.charAt(i);
}




let green = 0;
let yellow = 0;
let grey = 0;


// array of the boxes
var boxes = document.getElementsByClassName("ruta");

// test for checkLetters function
checkLetters(guessedWordArray,rightWordArray);

/**
 * This function compares word from user with correct word
 * @param guessedWordArray
 * @param rightWordArray
 * @param guess         guess number where the first guess is 0
 */

function checkLetters(guessedWordArray, rightWordArray) {
   for(let i = 0; i < guessedWordArray.length; i++ ){
       var box = boxes[5*guessCount + i];
       if(guessedWordArray[i] === rightWordArray[i]) { //current character in guessedWord is same as actual
           green++;
           
           box.style.backgroundColor = "green";    // change color of box to green
        }   else if(guessedWordArray.includes(rightWordArray[i])) { //check if guess word includes correct letter
           yellow++;
           box.style.backgroundColor = "yellow"; // change color of box to yellow
        }   else{ //letter is not the same
           grey++;
           box.style.backgroundColor = "red"; // change color of box to red
        }
    }

}







// function checkForYellowLetters2() {}