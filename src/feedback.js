var oldPoints;
//var oldWords = [];

// when user has used all their guesses
function gameOver(){
    terminateGame(false);

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
    terminateGame(true);

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

     // text that tells you how many points you got
     var pointText = document.createElement("p");
     var points = 7 - guessCount;
     pointText.innerHTML = "Du fick " + points + " poäng.";
     winBox.appendChild(pointText);
     pointText.style.textAlign = "center";
}

// the game is terminated (either due to win or loss). the player 
// can't write any input words anymore
function terminateGame(winning){
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
    feedbackBox.style.height = "140px";
    feedbackBox.style.backgroundColor = "pink";
    feedbackBox.style.position = "absolute";

    document.getElementById("replayButton").style.display='block';
    document.getElementById("replayButton").style.position = "static";

    saveResults(winning);
}

function saveResults(winning){
    if (sessionStorage.getItem('pointKey') == null && sessionStorage.getItem('wordKey') == null){
        oldPoints = [];
        oldWords = [];
    }
    else if (sessionStorage.getItem('pointKey') != null && sessionStorage.getItem('wordKey') != null){
        oldPoints = JSON.parse(sessionStorage.getItem('pointKey'));
        oldWords = JSON.parse(sessionStorage.getItem('wordKey'));
    }
    else {
        console.log()
        throw "Unexpected error";
    }

    console.log(oldPoints);
    console.log(oldWords);


    points = 6 - guessCount;
    if (winning == true){points++;}
    
    if (oldPoints != null && oldWords != null){
        oldPoints.push(points);
        oldWords.push(rightWord);
    }
    else if (oldPoints == null && oldWords == null){
        oldPoints = [points];
        oldWords = [rightWord];
    }
    else{
        throw "Unexpected error";
    }

    sessionStorage.setItem('pointKey', JSON.stringify(oldPoints));
    sessionStorage.setItem('wordKey', JSON.stringify(oldWords));

    console.log(oldPoints);
    console.log(oldWords);
}

//when you press the button to play again, the page is refreshed
document.getElementById("replayButton").onclick = function(){
    location.reload();
};

/**
 * Shows the old functions
 */
 function displayOldPoints(){
    if (sessionStorage.getItem('pointKey') == null && sessionStorage.getItem('wordKey') == null){
        oldPoints = [];
    }
    else if (sessionStorage.getItem('pointKey') != null && sessionStorage.getItem('wordKey') != null){
        oldPoints = JSON.parse(sessionStorage.getItem('pointKey'));
        oldWords = JSON.parse(sessionStorage.getItem('wordKey'));
    }
    else {
        throw "Unexpected error";
    }
    

    var scoreBoard = document.getElementById("oldScores");

    var pointsTitle = document.createElement("h2");
    pointsTitle.innerHTML = "Tidigare spel";
    scoreBoard.appendChild(pointsTitle)

    for ( i = 0; i < oldPoints.length; i++){
        var oldScore = document.createElement("p");
        oldScore.innerHTML = "Ord: " + oldWords[i]+ "   Poäng: " + oldPoints[i];
        scoreBoard.appendChild(oldScore);
    }
}

window.onload = function()
{
    displayOldPoints();
};
