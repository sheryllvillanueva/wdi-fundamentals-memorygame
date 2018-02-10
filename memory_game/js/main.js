
var cards = [
{
	rank: "queen",
	suit: "hearts", 
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
]

var cardsInPlay = [];

var gameScore = 0;

var checkForMatch = function (){
	
	if (cardsInPlay.length === 2  && cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
		gameScore = gameScore + 1;
		document.getElementById('score').innerHTML=gameScore;
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push (cards[cardId].rank);
	console.log(cardsInPlay.length);
	if (cardsInPlay.length === 2){
	checkForMatch();
	} else if (cardsInPlay.length > 2){
		resetcard();
	}

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

var createBoard = function () {
	for (var i=0; i<cards.length; i++){	
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i); 
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}

}

var resetcard = function () {
	document.getElementById('game-board').innerHTML = "";
	createBoard();
	cardsInPlay = [];
}



createBoard();

document.getElementById('resetBtn').addEventListener('click', resetcard);









