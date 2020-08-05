var location1 = Math.floor(Math.random() * 7);
var location2 = location1 + 1
var location3 = location1 + 2
var guess;
var choice;
var hits = 0;
var misses = 0;
var guesses = 0;
var isSunk = false;
var answer1 = 1;
var answer2 = 2;

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
        else if (misses == 3) {
            alert("Your battleship sunk!")
        } else {
            alert("MISS");
            misses = misses + 1;
        }
    }
}
while (isSunk == true) {
    choice = prompt("Play again? (Enter 1 or 2):");
}
if (choice == answer1) {
    isSunk = false;
    hits = 0;
    misses = 0;
    guesses = 0;
}
else if (choice == answer2) {
    alert("You are finished playing Battleship!");
    if (choice > 2 || choice < 1) {
        alert("That is not a valid response.")
    }
}