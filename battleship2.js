var location1 = Math.floor(Math.random() * 7);
var location2 = location1 + 1;
var location3 = location1 + 2;
var guess;
var choice;
var hits = 0;
var guesses = 0;
var isSunk = false;
var answer1 = "Yes";
var answer2 = "No";

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):")

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
    }

    if (guess == location1 || guess == location2 || guess == location3) {
        alert("HIT!");
        hits = hits + 1;
        if (hits == 3) {
            isSunk = true;
            alert("You sank my battleship!");
        }
    } else {
        alert("MISS");
    }
}
while (isSunk == true) {
    choice = prompt("Play again? (Enter Yes or No):")

    if (choice == answer1) {
        isSunk = false;
        hits = 0;
        guesses = 0;
    }
    if (choice == answer2) {
        
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3 / guesses);
alert(stats);