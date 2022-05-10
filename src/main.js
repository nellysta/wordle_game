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

// alla rutor i en array
var boxes = document.getElementsByClassName('ruta');


rightWord = "matte";
const answers = [guess1,guess2,guess3,guess4,guess5,guess6];


// Array with each letter of the right word as one element
var rightWordArray = [5];
for (i=0;i<5;i++){
    rightWordArray[i] = rightWord.charAt(i);
}


let green = 0;
let yellow = 0;
let grey = 0;


// array of the boxes
var boxes = document.getElementsByClassName("ruta");

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
        }   else if(rightWordArray.includes(guessedWordArray[i])) { //check if guess word includes correct letter
           yellow++;
           box.style.backgroundColor = "yellow"; // change color of box to yellow
        }   else{ //letter is not the same
           grey++;
           box.style.backgroundColor = "grey"; // change color of box to grey
        }
    }

}



// function checkForYellowLetters2() {}

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

    if(guessCount === 6){                   // after 6 guesses, the player has lost the game. 
        setTimeout(() => {  gameOver(); }, 500);      // wait for guess to be written out before gameover-message in printed
    }
};




// when user has used all their guesses
function gameOver(){
    
    // delete everything inside of the "input"-div
    var inputDiv = document.getElementById("inputBox");
    var knapp = inputDiv.getElementsByTagName("button")[0];
    var inputField = inputDiv.getElementsByTagName("input")[0];
    var text = inputDiv.getElementsByTagName("label")[0];
    inputDiv.removeChild(knapp);
    inputDiv.removeChild(inputField);
    inputDiv.removeChild(text);

    // create a div where a game over-message is printed
    var gameOverBox = document.createElement("div");
    gameOverBox.style.width = "375px";
    gameOverBox.style.height = "130px";
    gameOverBox.style.backgroundColor = "pink";
    gameOverBox.style.position = "absolute";
    document.getElementById("feedback").append(gameOverBox);

    // GAME OVER is printed inside the box
    var title = document.createElement("h2");
    title.innerHTML = "GAME OVER";
    gameOverBox.appendChild(title);
    title.style.textAlign = "center";

    // text that explain that you have lost is printed
    var moreText = document.createElement("p");
    var explainingText = "Du har använt alla dina gissningar och har förlorat spelet. Det korrekta ordet var: " + rightWord;
    moreText.innerHTML = explainingText;
    gameOverBox.appendChild(moreText);
    moreText.style.textAlign = "center";
}


// when user has guessed the correct word and therefor win
function win(){
    // not yet implemented
}




