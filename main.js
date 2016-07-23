var prompt = require('prompt');
var Word = require('./word.js');

prompt.start();

game = {

	sailorScouts : ["Sailor Moon", "Sailor Mercury", "Sailor Mars", "Sailor Venus", "Sailor Jupiter"];
	Won : 0,
	guessesLeft : 5,
	currentWord: null, 

	startGame : function(word){

		this.resetGuessesLeft();

		this.currentWord = new Word(this.sailorScouts[Math.floor(Math.random()* this.sailorScouts.length)]);

		this.keepPromptingUser();

	},

	resetGuessesLeft : function(){

		this.guessesLeft = 5
	},

	keepPromptingUser : function(){

		var self = this;

		prompt.get(["guessLetter"], function(err, result){
			console.log (" the letter you guessed is: " + result.guessLetter);

			var findHowManyOfUserGuess = self.currentWord.checkIfLetterFound(result.guessLetter)
		})

		if(findHowManyOfUserGuess == 0){
			console.log("Wrong guess!";)
			self.guessesLeft--;
		}else{
			console.log("You're right!");
		}

		if(self.currentWord.didWeFindTheWord(){
			console.log("Winner!");
			return;
		})
	}

	console.log("guessesLeft:" , self.guessesLeft);
	console.log(self.currentWord.wordRender());
	console.log("here are the words you guessed: ");

	if((self.guessesLeft > 0) &&(self.currentWord.found == false)){
		self.keepPromptingUser();
	}
	else if(self.guessesLeft == 0){
		console.log("Game over");

	}else{
		console.log(self.currentWord.wordRender)
	}
}

game.startGame();
