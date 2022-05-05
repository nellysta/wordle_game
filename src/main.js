// the looked for word
var rightWord;

// save all guesses
// var guess1;
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



