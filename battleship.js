var location = Math.floor(Math.random() * 7);
var guess;
var hits = 0;
var misses = 0;
var guesses = 0;
var isSunk = null;
var answer1 = "Yes";
var answer2 = "No";

while (isSunk == null){
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):")

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1; 
        }

    if (guess == location) { 
            alert("HIT!");
            hits = hits + 1; 
                if (hits == 3) {
                    isSunk = true;
                    alert("You sank my battleship!"); 
                }
    }   else {
            alert("MISS");
            misses = misses + 1;
            if (misses == 3) {
                alert("Your battleship sunk!")
                isSunk = false;
            }
    while (isSunk == false) {
        prompt("Play again? (Enter Yes or No):");
        if (answer1) {
            isSunk = null;
        }
        if (answer2) {
            alert("You have finished playing Battleship!")
        }
    }
         }
}

    var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3/guesses); 
    alert(stats);