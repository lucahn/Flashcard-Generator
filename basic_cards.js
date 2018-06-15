var BasicCard = require("./BasicCard.js");

//<---->

var card1 = new BasicCard ("What color are roses?", "red");
var card2 = new BasicCard ("What color are violets?", "blue");
var card3 = new BasicCard ("What color are daffodils?", "yellow");
var card4 = new BasicCard ("What color are lilies?", "white");
var card5 = new BasicCard ("What color are sunflowers?", "yellow");
var card6 = new BasicCard ("What color are poppies?", "red");
var card7 = new BasicCard ("What color are marigolds?", "orange");
var card8 = new BasicCard ("What color are hibiscus?", "pink");
var card9 = new BasicCard ("What color are birds of paradise?", "orange");
var card10 = new BasicCard ("What color are cosmos?", "pink");

//<---->

var basic_cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

// console.log(basic_cards);

module.exports = basic_cards;