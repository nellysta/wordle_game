// the looked for word
//const rightWord;

// save all guesses
var guess1;
var guess2;
var guess3;
var guess4;
var guess5;
var guess6;

var guessCount = 0;

// alla rutor i en array
var boxes = document.getElementsByClassName('ruta');

let keyboard = document.getElementById('tangentbord')
let keys = keyboard.getElementsByTagName('button');

//let green = 0;
//let yellow = 0;
//let grey = 0;

var rightWord;


function getKeys(keys) {
    //get each key that has been clicked on keyboard
    for(let i = 0; i < keys.length; i++ ) {
        keys[i].onclick = ({target}) => {
            const key = target.getAttribute('data-key')
            // assign input value to guess variable, while making the guess uppercase
            if(key != null)
            {
                var guessElement = document.getElementById("guess");
                guessElement.value = guessElement.value + key;
            }
        };
    }
    return keys;
}


// Array with each letter of the right word as one element
var rightWordArray = [5];
const rightWordPromise = getWordFromLexikon()  //Created a promise
rightWordPromise.then(randomRightWord => {
    // array of the boxes
    rightWord = randomRightWord.toUpperCase();    // save value in rightWord and turn to upperCase
    for (i=0;i<5;i++){
        rightWordArray[i] = rightWord.charAt(i);
    }
    console.log(getKeys(keys))
    console.log(rightWord)
    console.log(rightWordArray)
})


/**
 * This function compares word from user with correct word
 * @param guessedWordArray
 * @param rightWordArray
 */
function checkLetters(guessedWordArray, rightWordArray) {
   for(let i = 0; i < guessedWordArray.length; i++ ){
       const keySelector = "[data-key =" + guessedWordArray[i].toLowerCase() + "]";
       var box = boxes[5*guessCount + i];
       const keyElement = document.querySelector(keySelector);
       console.log(keySelector)
       if(guessedWordArray[i] === rightWordArray[i]) { //current character in guessedWord is same as actual
          // green++;
           box.style.backgroundColor = "green";    // change color of box to green
           keyElement.style.backgroundColor = "green";
        }   else if(rightWordArray.includes(guessedWordArray[i])) { //check if guess word includes correct letter
           //yellow++;
           box.style.backgroundColor = "yellow"; // change color of box to yellow
           keyElement.style.backgroundColor = "yellow";
        }   else{ //letter is not the same
           //grey++;
           box.style.backgroundColor = "grey"; // change color of box to grey
           keyElement.style.backgroundColor = "grey";
        }
    }

}

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
document.getElementById("knapp").onclick = async function(){
    var guess;

    // assign input value to guess variable, while making the guess uppercase
    if (guessCount === 0){
        guess1 = document.getElementById("guess").value;
        guess = guess1.toUpperCase();
    } else if (guessCount === 1){
        guess2 = document.getElementById("guess").value;
        guess = guess2.toUpperCase();
    } else if (guessCount === 2){
        guess3 = document.getElementById("guess").value;
        guess = guess3.toUpperCase();
    } else if (guessCount === 3){
        guess4 = document.getElementById("guess").value;
        guess = guess4.toUpperCase();
    } else if (guessCount === 4){
        guess5 = document.getElementById("guess").value;
        guess = guess5.toUpperCase();
    } else if (guessCount === 5){
        guess6 = document.getElementById("guess").value;
        guess = guess6.toUpperCase();
    }

    document.getElementById("input_error").style.display='none';

    // checks if word is lexicon, gives error message and breaks function if not
    let wordInLexikon = await checkWordInLexikon(guess)
    if (wordInLexikon == false){
        document.getElementById("input_error").style.display='block';
        return;
    }

    writeOutAWord(guess,guessCount);

    // Array with each letter of the guessed word as one element
    var guessedWordArray = [5];
    for (i=0;i<5;i++){
        guessedWordArray[i]= guess.charAt(i);
    }
     // change color of boxes
    checkLetters(guessedWordArray,rightWordArray);
    
    guessCount++;


    // feedback-messages to player
    if (guess === rightWord){
        setTimeout(() => {  win(); }, 500);      // wait for guess to be written out before congrats-message in printed
    }

    if(guessCount === 6){                   // after 6 guesses, the player has lost the game. 
        setTimeout(() => {  gameOver(); }, 500);      // wait for guess to be written out before gameover-message in printed
    }
};

/**
 * This function read from "svenska-ord.txt, converts each row to an element in an array and returns filtered array
 * @returns lexikon, a filtered array
 */
async function handleWordFromLexikon() {
    let txt = await fetch('svenska-ord.txt').then(response => response.text())
        .then(text => text.split("\n"))
        .then(text => text.filter(str => str.length === 5))
    return txt;
}

/**
 * Get random word from lexikon
 * @returns a random word
 */
async function getWordFromLexikon() {
    let words = await handleWordFromLexikon()
    return words[Math.floor(Math.random() * words.length)];
}

/**
 * Checks that the guessed word is in the lexikon
 */
async function checkWordInLexikon(guess) {
    let words = await handleWordFromLexikon()

    return words.includes(guess.toLowerCase());
}




