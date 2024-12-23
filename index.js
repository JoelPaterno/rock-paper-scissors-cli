const prompt = require('prompt');

function getComputerChoice() {
    let result = (Math.floor((Math.random() * 10)) % 3) + 1;
    switch (result) {
        case 1:
            result = "rock";
            break;
        case 2:
            result = "paper";
            break;
        case 3:
            result = "scissors";
            break;
        default:
            result = 'Error';
    }
    return result;
};

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?");
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            return 'Error';
    }
};

console.log(getHumanChoice());

module.exports = { getComputerChoice, getHumanChoice };