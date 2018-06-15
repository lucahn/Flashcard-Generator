var ClozeCard = require("./ClozeCard.js");

//<---->

var card1 = new ClozeCard ("An apple is a small, round, red fruit", "apple");
var card2 = new ClozeCard ("A banana is a long, thin, yellow fruit", "banana");
var card3 = new ClozeCard ("A watermelon is a large, round, green fruit", "watermelon");
var card4 = new ClozeCard ("A blueberry is a tiny, round, blue fruit", "blueberry");
var card5 = new ClozeCard ("A grape is a tiny, round, purple fruit", "grape");
var card6 = new ClozeCard ("An orange is a small, sour, orange fruit", "orange");
var card7 = new ClozeCard ("A blackberry is a tiny, sour, black berry", "blackberry");
var card8 = new ClozeCard ("A peach is a small, round, pink fruit", "peach");
var card9 = new ClozeCard ("A lemon is a small, sour, yellow fruit", "lemon");
var card10 = new ClozeCard ("A strawberry is a small, triangular, red berry", "strawberry");

//<---->

var cloze_cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

// console.log(cloze_cards);

module.exports = cloze_cards;