// when user has used all their guesses
function gameOver(){
    terminateGame();

    var gameOverBox = document.getElementById("feedback");

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
    terminateGame();

    var winBox = document.getElementById("feedback");

    // congrats is printed inside the box
    var title = document.createElement("h2");
    title.innerHTML = "Grattis!";
    winBox.appendChild(title);
    title.style.textAlign = "center";

     // text that explain that you have won is printed
     var moreText = document.createElement("p");
     var explainingText = "Du har gissat rätt ord";
     moreText.innerHTML = explainingText;
     winBox.appendChild(moreText);
     moreText.style.textAlign = "center";
}

// the game is terminated (either due to win or loss). the player 
// can't write any input words anymore
function terminateGame(){
    // delete everything inside of the "input"-div
    var inputDiv = document.getElementById("inputBox");
    var knapp = inputDiv.getElementsByTagName("button")[0];
    var inputField = inputDiv.getElementsByTagName("input")[0];
    var text = inputDiv.getElementsByTagName("label")[0];
    inputDiv.removeChild(knapp);
    inputDiv.removeChild(inputField);
    inputDiv.removeChild(text);

    // create a div where a feedback-message will be printed to the player
    var feedbackBox = document.getElementById("feedback");
    feedbackBox.style.width = "375px";
    feedbackBox.style.height = "130px";
    feedbackBox.style.backgroundColor = "pink";
    feedbackBox.style.position = "absolute";
}
