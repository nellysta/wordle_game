// the looked for word
var rightWord;

// save all guesses
// var guess1;
var guess2;
var guess3;
var guess4;
var guess5;
var guess6;


// alla rutor i en array
var boxes = document.getElementsByClassName('ruta');


// function that writes out a letter in one of the boxes
function writeOutLetter(index, inputBokstav){
    var bokstav = document.createElement('H1');
    bokstav.innerHTML = inputBokstav;
    boxes[index].appendChild(bokstav);
}

// fixa med onclick eller liknande

var guess1 = document.getElementById("guess1").value;




// skriv ut alla bokstäver i gissning.
function writeOutAWord1(){
    for (i=0;i<5;i++){
        writeOutLetter(i, guess1.charAt(i));
    }
}


