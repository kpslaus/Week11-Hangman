var inquirer = require('inquirer');
var Word = require('./word.js');

prompt.start();

function SailorsScouts(words, letters){
	this.words = words;
	this.letters = letters;

}

SailorsScouts.prototype.printInfo = function(){
	console.log("words:" + this.words + "letters:" + this.letters);
};

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
