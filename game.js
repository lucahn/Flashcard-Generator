var inquirer = require("inquirer");

inquirer.prompt([{
    name: "choose_game",
    message: "Which game would you like to play?",
    type: "list",
    choices: ["Flower Game", "Fruit Game"]
}]).then (function(game) {
    if(game.choose_game === "Flower Game") {
        console.log("\nFlower 🌸 Power!\n");
        var basicCards = require("./basic_cards.js");
        // console.log(basicCards);
    
        var basic_i = 0;

        function runBasicGame() {
            inquirer.prompt([
                {
                name: "Basic_Question",
                type: "input",
                message: basicCards[basic_i].front
                },
            ]).then (function(res) {
                if(res.Basic_Question === basicCards[basic_i].back) {
                    console.log("\nCorrect!\n");
                    basic_i++
                    if(basic_i < 10){
                        runBasicGame();
                    }
                    else {
                        console.log("The game is over!\n");
                    }
                }

                else {
                    console.log("\nWrong :( The answer was: " + basicCards[basic_i].back + "\n");
                    basic_i++
                    if(basic_i < 10){
                        runBasicGame();
                    }
                    else {
                        console.log("The game is over!\n");
                    }
                }
            })
        }
        
        runBasicGame();   

    }

    else {
        console.log("\nLet's get fruity 🍎 !\n");
        var clozeCards = require("./cloze_cards.js");
        // console.log(clozeCards);

        var i = 0;

        function runClozeGame() {
            inquirer.prompt([
                {
                name: "Cloze_Question",
                type: "input",
                message: clozeCards[i].partial
                },
            ]).then (function(res) {
                if(res.Cloze_Question === clozeCards[i].cloze) {
                    console.log("\nCorrect!\n");
                    i++
                    if(i < 10){
                        runClozeGame();
                    }
                    else {
                        console.log("The game is over!\n");
                    }
                }

                else {
                    console.log("\nWrong :( The answer was: " + clozeCards[i].cloze + "\n");
                    i++
                    if(i < 10){
                        runClozeGame();
                    }
                    else {
                        console.log("The game is over!\n");
                    }
                }
            })
        }
        
        runClozeGame();   
    }
});

// console.log(basicCards);
// console.log(clozeCards);