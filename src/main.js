
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

// Array with each letter of the right word as one element
var rightWordArray = [];
for (i=0;i<5;i++){
    rightWordArray[i] = rightWord.charAt(i);


// Array with each letter of the guessed word as one element
var guessedWordArray = [];
for (i=0;i<5;i++){
    guessedWordArray[i]= guessedWord.charAt(i);
}



let green = 0;
let yellow = 0;
let grey = 0;




/**
 * This function compares word from user with correct word
 * @param guessedWordArray
 * @param rightWordArray
 * @param guess         guess number where the first guess is 0
 */

function checkLetters(guessedWordArray, rightWordArray, guess) {

   for(let i = 0; i < guessedWordArray.length; i++ ){
       if(guessedWordArray[i] === rightWordArray[i]) { //current character in guessedWord is same as actual
           green ++;
           
           boxes[guess*5 + i].setAttribute("style", "color=green");
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


// array of the boxes
var boxes = document.getElementsByClassName("ruta");
//function checkForYellowLetters2() {}
document.getElementsByClassName("ruta").stye.backgroundColor = "pink";
