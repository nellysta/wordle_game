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


// alla rutor i en array
var boxes = document.getElementsByClassName('ruta');


// function that writes out a letter in one of the boxes
function writeOutLetter(row, index, inputBokstav){
    var bokstav = document.createElement('H1');
    bokstav.innerHTML = inputBokstav;
    boxes[5*row + index].appendChild(bokstav);
}


// the following 6 methods are being called after user pushes 
// submit button after each guess. The method takes in the guess
// and sends it to the method 'writeOutWord'
function writeOutAWord1(){
    guess1 = document.getElementById("guess1").value;
    writeOutAWord(guess1, 0);
}

function writeOutAWord2(){
    guess2 = document.getElementById("guess2").value;
    writeOutAWord(guess2, 1);
}

function writeOutAWord3(){
    guess3 = document.getElementById("guess3").value;
    writeOutAWord(guess3, 2);
}

function writeOutAWord4(){
    guess4 = document.getElementById("guess4").value;
    writeOutAWord(guess4, 3);
}

function writeOutAWord5(){
    guess5 = document.getElementById("guess5").value;
    writeOutAWord(guess5, 4);
}

function writeOutAWord6(){
    guess6 = document.getElementById("guess6").value;
    writeOutAWord(guess6, 5);
}

// skriv ut alla bokstäver i gissning.
function writeOutAWord(guess, row){
    for (i=0;i<5;i++){
        writeOutLetter(row, i, guess.charAt(i));
    }
}


