console.log("JS file is connected to HTML! Woo!")

var CardOne = "queen";
var CardTwo = "queen";
var CardThree = "king";
var CardFour = "king";

/*if (CardTwo === CardFour){
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}
*/

var gameBoard = document.getElementById('game-board');

var createCards = function() {
		for (var i=0; i<4; i++){
		var cardNew = document.createElement('div');
		cardNew.className = 'card';
		gameBoard.appendChild(cardNew);
	}
}

	createCards(4);
