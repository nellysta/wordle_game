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

//let green = 0;
//let yellow = 0;
//let grey = 0;

var rightWord;


// Array with each letter of the right word as one element
var rightWordArray = [5];
const rightWordPromise = getWordFromLexikon()  //Created a promise
rightWordPromise.then(rightWord => {
    const answers = [guess1,guess2,guess3,guess4,guess5,guess6];
    for (i=0;i<5;i++){
        rightWordArray[i] = rightWord.charAt(i);
    }
    // array of the boxes
    return rightWord;
})


/**
 * This function compares word from user with correct word
 * @param guessedWordArray
 * @param rightWordArray
 */
function checkLetters(guessedWordArray, rightWordArray) {
   for(let i = 0; i < guessedWordArray.length; i++ ){
       var box = boxes[5*guessCount + i];
       if(guessedWordArray[i] === rightWordArray[i]) { //current character in guessedWord is same as actual
          // green++;
           box.style.backgroundColor = "green";    // change color of box to green
        }   else if(rightWordArray.includes(guessedWordArray[i])) { //check if guess word includes correct letter
           //yellow++;
           box.style.backgroundColor = "yellow"; // change color of box to yellow
        }   else{ //letter is not the same
           //grey++;
           box.style.backgroundColor = "grey"; // change color of box to grey
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
document.getElementById("knapp").onclick = function(){
    var guess;

    // assign input value to guess variable
    if (guessCount === 0){
        guess1 = document.getElementById("guess").value;
        guess = guess1;
    } else if (guessCount === 1){
        guess2 = document.getElementById("guess").value;
        guess = guess2;
    } else if (guessCount === 2){
        guess3 = document.getElementById("guess").value;
        guess = guess3;
    } else if (guessCount === 3){
        guess4 = document.getElementById("guess").value;
        guess = guess4;
    } else if (guessCount === 4){
        guess5 = document.getElementById("guess").value;
        guess = guess5;
    } else if (guessCount === 5){
        guess6 = document.getElementById("guess").value;
        guess = guess6;
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




