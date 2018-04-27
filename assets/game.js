//define all possible letters as strings in an array
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//define all the variables needed for the game and set their values.

var wins = 0 ;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessesMade = [];
var playerGuess = null;

//generate the computer's guess using a random letter from the letters array

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

// make sure it works hehe console.log(computerGuess);

// call the ID of the divs within the HTML
var winText = $("#wins");
var lossText = $("#losses");
var guessesLeftText = $("#Guesses-Left");
var guessesMadeText = $("#Guesses-Made");

//Fill the empty divs with content, in this case the number of wins,loses, etc;
winText.html(wins);
lossText.html(losses);
guessesLeftText.html(guessesLeft);
guessesMadeText.html(guessesMade);


var reset = function() {
 guesses = 10;
 guessesLeft = 10;
 guessesMade = [];
 guessesLeftText.html(guessesLeft);
 guessesMadeText.html(guessesMade);
}

//when the user presses a key, log the key pressed in a string
document.onkeyup = function(keyPress) {

	guessesMadeText.html(guessesMade);
	guessesLeft--;
	guessesLeftText.html(guessesLeft);

	var userGuess = (keyPress.key).toLowerCase();
	console.log(userGuess);
	console.log(guessesLeft);

	if (guessesLeft > 0){
		if (userGuess === computerGuess){
			wins++;
			winText.html(wins);
		$("#winner").html("<h2>wow. you won. *claps* </h2>");
		reset();
		}

	}
	else if (guessesLeft === 0){
		losses++;
		lossText.html(losses);
		$("#loser").html("<h2>loooooser!!! ya lost boiiii</h2>")
		reset();
	}
}

//Keep track of user's guess attempts and makes sure the guesses are actually letters


//set the win condition, update the user's score




