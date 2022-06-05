# Wordle game
This is a wordle inspired game for the course DD1349

### About the game
This is a project inspired by the famous game “wordle”. Wordle is a word guessing game where the player is supposed to guess a five letter word with six guesses. After the player has guessed a legitimate word, the letters will change color depending on the circumstance. If a letter turns gray, it is not in the word. If the letter turns yellow, it is in the word but it is currently at the wrong spot. If the letter turns green, it is located in the correct spot. The player will also get a score between 0-6 depending on the number of guesses needed to find the word.

![example of wordle](Wordle_Example)

### How to run the game
Alternative 1: WebStorm

If you have WebStorm installed, you can run the program by opening the files and clicking on the "run"-button on the main.html file.

Alternative 2: http server

You can run the program by using the http server package using Node.js. First make sure you have Node.js installed, then install the http server package using the command `npm install http-server -g`. Then run `npx http-server` from the src folder, and you can access the program by typing `http://localhost:8080/` in your browser, and then going to main.html. You may need to allow CORS if further problems persist.
