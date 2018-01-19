
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

//first card user flipped
var cardOne = cards[0];
cardsInPlay.push(cardOne);

//second card user flipped
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

