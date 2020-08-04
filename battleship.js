var random_number = Math.floor(Math.random() * 6);
var guess;
var misses = 0;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false){
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):")

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1; 
        }

    if (guess == random_number) { 
            alert("You hit enemy battleship!");
            hits = hits + 1; 
                if (hits == 3) {
                    isSunk = true;
                    alert("You sank my battleship!"); 
                }
    }   else {
            alert("You missed!");
            misses = misses + 1;
         }
}

    var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "and you missed " + misses + " times, which means your shooting accuracy was " + (3/guesses); 
    alert(stats);