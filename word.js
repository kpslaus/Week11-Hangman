var letter = require ('letters');

var Word = function(wrd){

		var word = new Object;

		var lets = [];

		var found = false;

		var getLets = function(){
			for(var i = 0; i < word.length; i++){
				lets = lets + push(word[i]);
			}
		}

	this.didWeFindTheWord = function(){
		var whatToReturn = 0;

		for(var i = 0; i <)

	};

	this.checkIfLetterFound = function(guessLeter){

		var whatToReturn = 0;

		for (var i = word.length - 1; i >= 0; i--) {
			word[i]
		}
		if(letter === guessLeter){
			appear = true;
			whatToReturn++;
			return whatToReturn;
		}

	};

	this.wordRender = function(){
		var string = [" "];

		for (var i = this.lets.length - 1; i >= 0; i--) {
			this.lets[i]
		}
		return string;
	};
}

exports.word;