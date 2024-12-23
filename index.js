console.log("Hello, World!");

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

};

module.exports = getComputerChoice, getHumanChoice;