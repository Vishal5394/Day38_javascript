const prompt = require("prompt-sync")();


function guessGame(){
    number = Math.floor(Math.random()*99)+1;
    console.log(number);
    var guess = prompt("Guess a number: ");
        do {
            guess = prompt("Keep guessing!");
            if (number < guess) {
                prompt("You've guessed too high!");
            } else if (number > guess) {
                prompt("You've guessed too low!");
            } else console.log("Good Job!");
        } while (guess != number);
}
guessGame();
