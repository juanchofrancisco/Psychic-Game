// letter choices available to the computer and user
var computerChoices = "abcdefghijklmnopqrstuvwxyz";


// all variables for game, are these considered global variables??
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userLettersGuessed = []; 
var computerGuess = [];

// computer selects random letter, new variable of compGuess is introduced which = random computerchoices (alphabet)
// by using the math.floor , computerguess value is added by .push(compguess)

window.onload = function() {
	var compGuess = computerChoices[Math.floor(Math.random() * 26)];
	computerGuess.push(compGuess);
	
}


// actual game
// on key up event, new local variable is introduced, playerGuess, which equals the pressed key, user letter guessed
//is then pushed into the player guess array
document.onkeyup = function(event) {
	var playerGuess = event.key;
	userLettersGuessed.push(playerGuess);
    
    
// beginning of if statements logic scenarios
// if player guess = computer guess, and guesses are greater than zero, then alert you win! add to wins
// I then reiterated the variables to start the game, I couldn't figure out a separate reset function


if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) { 
    wins++;
    alert("You Win!");
	guessesLeft = 9;
	userLettersGuessed.length = 0;
	computerGuess.length = 0;
    var compGuess = computerChoices[Math.floor(Math.random() * 26)];
    document.getElementById("wins").innerHTML = wins;
	computerGuess.push(compGuess);
	
}

// else, if player guess is not equal to the computer guess & guesses are greater than zero, then decrement from
// guesses left
else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
    guessesLeft = guessesLeft-1;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("your-guesses").innerHTML = userLettersGuessed;
}
// alert you loose, add to losses and start over, restore variable values

else {
    losses++;
    alert("You Loose!");
	guessesLeft = 9;
	userLettersGuessed.length = 0;
	computerGuess.length = 0;
    var compGuess = computerChoices[Math.floor(Math.random() * 26)];
    document.getElementById("your-losses").innerHTML = losses;
	computerGuess.push(compGuess);
	
}