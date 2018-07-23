const numberToGuess = 5;
var guessedRight = false;

// Continue the guessing game while the right number has not been guessed yet.
while (!guessedRight) {
    // Ask the user for a number to guess
    var guessedNumber = prompt("Guess a number I have in mind from 1 to 5");

    // control flow statement of the guessed number
    if (guessedNumber == numberToGuess) {
        alert("Congratulations! You have guessed right!")
        guessedRight = true;

    } else {
        alert("you have guessed wrong!")
    }
}

// Print out the guessed number in the console
console.log("the number you have guessed is " + guessedNumber)