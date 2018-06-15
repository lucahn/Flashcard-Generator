var idcounter = 1;

var ClozeCard = function(text, cloze) {
    this.id = idcounter++;
    this.cloze = cloze;  
    this.fullText = text; 
    this.partial = text.replace(cloze, "_____")
};

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");
    
// console.log(firstPresidentCloze);

module.exports = ClozeCard;