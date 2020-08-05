var location = Math.floor(Math.random() * 7);
var guess;
var hits = 0;
var miss = 0;
var guesses = 0;
var isSunk = null;
var answer1 = "Yes" || "yes";
var answer2 = "No" || "no";

while (isSunk == null){
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):")

    if (guess < 0 || guess > 6 || guess == null) {
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
            miss = miss + 1;
            if (miss == 3) {
                isSunk = false;
                alert("Got you!");
                while (isSunk == false) {
                    prompt("I got you! HAHHAHAA! Play again? (Enter Yes or No):")
                    if (answer1) {
                        isSunk = null;
                        guesses = 0;
                        hits = 0;
                        miss = 0;
                        if (answer2) {
                            alert("You are now finished playing battleship!")
                        }
                    }
                }
        }
    }
}

    var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3/guesses); 
    alert(stats);