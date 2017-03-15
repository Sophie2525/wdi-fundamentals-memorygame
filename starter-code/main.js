console.log("JS file is connected to HTML! Woo!")

/*var CardOne = "queen";
var CardTwo = "queen";
var CardThree = "king";
var CardFour = "king";
*/

/*if (CardTwo === CardFour){
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}
*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');

var createBoard = function() {
	for (var i=0; i<cards.length; i++) {
		var cardNew = document.createElement('div');
		cardNew.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardNew);
		gameBoard.appendChild(cardElement);
	}
}

createBoard(4);

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'King') {
		this.innerHTML = '<img src="king.jpg" alt="King of the Jungle" />';
	} else {
		this.innerHTML = '<img src="queen.jpg" alt="Queen Bee" />'
	}
	if (cardsInPlay.length === 2) {
		isMatch (cardsInPlay);
		cardsInPlay = [];
	}
}

var isMatch = function(){
	if (cards[0] === cards[1] || cards[2] === cards[3]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	}
}

createBoard()
