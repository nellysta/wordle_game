// the looked for word
var rightWord;

// save all guesses
var guess1;
var guess2;
var guess3;
var guess4;
var guess5;
var guess6;


var boxes = document.getElementsByClassName('ruta');


// function that writes out a letter in one of the boxes
function writeOutLetter(index, inputBokstav){
    var bokstav = document.createElement('H1');
    bokstav.innerHTML = inputBokstav;
    boxes[index].appendChild(bokstav);
}

