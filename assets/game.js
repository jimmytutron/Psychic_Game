//define all possible letters as strings in an array
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//define all the variables needed for the game and set their values.

var wins = 0 ;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessAttempts = [];
var playerGuess = null;

//generate the computer's guess using a random letter from the letters array

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

// make sure it works hehe console.log(computerGuess);

// call the ID of the divs within the HTML
var winText = $("#wins");
var lossText = $("#losses");
var guessesLeftText = $("#Guesses-Left");
var guessesMade = $("#Guesses-Made");


//when the user presses a key, log the key pressed in a string
document.onkeyup = function(keyPress) {

	var userGuess = (keyPress.key).toLowerCase();
	console.log(userGuess);


}

//Keep track of user's guess attempts and makes sure the guesses are actually letters


//set the win condition, update the user's score




