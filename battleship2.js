var location1 = Math.floor(Math.random() * 9) + 1;
var guess;
var choice;
var hits = 0;
var misses = 0;
var guesses = 0;
var isSunk = false;
var answer1 = "y";
var answer2 = "n";

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 1-9):")

    if (guess < 1 || guess > 9) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
    }

    if (guess == location1) {
        alert("HIT!");
        hits = hits + 1;
        if (hits == 3) {
            isSunk = true;
            alert("You sank my battleship!");
        }
    } else {
        alert("MISS");
        misses = misses + 1;
        if (misses == 3) {
            alert("Your battlship sank!");
            isSunk = true;
        }
    }
}

while (isSunk == true) {
    choice = prompt("Play again? (Enter y or n):")

    if (choice == answer1) {
        location.reload();
        isSunk = false;
        hits = 0;
        misses = 0;
        guesses = 0;
    }
    if (choice == answer2) {
            isSunk = null;
    }
}