var location1 = Math.floor(Math.random() * 10);
var guess;
var choice;
var hits = 0;
var guesses = 0;
var isSunk = false;
var answer1 = "y";
var answer2 = "n";

function attackShip() {
    while (isSunk == false) {
        guess = prompt("Ready, aim, fire! (enter a number from 1-9):");

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
        }
    }
}
attackShip();
while (isSunk == true) {
    

    if (choice == answer1) {
        guess = prompt("Ready, aim, fire! (enter a number from 1-9):");
    }
    if (choice == answer2) {
        var stats = "You took " + guesses + " guesses to sink the battleship, " +
            "which means your shooting accuracy was " + (3 / guesses);
            alert(stats);
    isSunk = null;
    }
  }