var Letter = function(character) {

	this.character = character.toUpperCase();

    this.letterGuessedCorrectly = false;
	
	this.showCharacter = function() {
		if (this.letterGuessedCorrectly) {
			console.log(this.character);
		}
		else {
			//console.log ("_");
		}

	}
}

//exporting Letter constructor
module.exports = Letter