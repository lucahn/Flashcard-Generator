var idcounter = 1;

var BasicCard = function(front, back) {
    this.id = idcounter++;
    this.front = front;
    this.back = back;
};

// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// console.log(firstPresident.front, "\n", firstPresident.back); 
    
module.exports = BasicCard;