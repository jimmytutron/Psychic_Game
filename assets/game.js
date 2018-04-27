//define all possible letters as strings in an array
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//define all the variables needed for the game and set their values.

var wins = 0 ;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];

//generate the computer's guess using a random letter from the letters array

var computerGuess = letters[Math.floor(Math.random() * letters.length)];
//cheat code hehe open console log for guaranteed win!
console.log(computerGuess);

// call the ID of the divs within the HTML
var winText = $("#wins");
var lossText = $("#losses");
var guessesLeftText = $("#Guesses-Left");
var guessesMadeText = $("#Guesses-Made");
var result = $("#result");

//Fill the empty divs with content, in this case the number of wins,loses, etc; at default
winText.html(wins);
lossText.html(losses);
guessesLeftText.html(guessesLeft);
guessesMadeText.html(guessesMade);


//A function to reset the values once the user wins or loses
var reset = function() {
 guessesLeft = 10;
 guessesMade = [];
 guessesLeftText.html(guessesLeft);
 computerGuess = letters[Math.floor(Math.random() * letters.length)];

}

//when the user presses a key, log the key pressed in a string
document.onkeyup = function(keyPress) {

	//subtract the amount of guesses left after every key press
	guessesLeft--;
	//update that value in the div
	guessesLeftText.html(guessesLeft);


	//set the key presses to lowercase in case user has caplocks on or something
	var userGuess = (keyPress.key).toLowerCase();

	//TEST TEST
	// console.log(userGuess);
	// console.log(guessesLeft);

	guessesMade.push(userGuess);
	guessesMadeText.html(guessesMade.join(", "));



	if (guessesLeft > 0){
		if (userGuess === computerGuess){
			wins++;
			winText.html(wins);
		result.html("<h3>wow. you won. *claps* </h3> the letter was... " + computerGuess);
		reset();
		}

	}
	else if (guessesLeft === 0){
		losses++;
		lossText.html(losses);
		result.html("<h3>loooooser!!! ya lost boiiii</h3> the letter was... " + computerGuess);
		reset();
	}
}

//Keep track of user's guess attempts and makes sure the guesses are actually letters


//set the win condition, update the user's score




