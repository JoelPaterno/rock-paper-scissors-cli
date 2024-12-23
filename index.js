const buttons = document.querySelectorAll(".btn");
const messageContainer = document.querySelector(".messages");

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
    humanChoice = humanChoice.trim().toLowerCase();
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

let roundResult = ""

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw!");
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            roundResult = "You win! Rock beats Scissors";
            return 1;
        } else if (computerChoice === "paper") {
             roundResult = "You loose! Paper beats Rock";
            return 0;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
             roundResult = "You loose! Scissors beats Paper";
            return 0;
        } else if (computerChoice === "rock") {
             roundResult = "You win! Paper beats Rock";
            return 1;
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
             roundResult = "You win! Scissors beats Paper";
            return 1;
        } else if (computerChoice === "rock") {
             roundResult = "You lose! Rock beats Scissors";
            return 0;
        }
    }
};

let humanScore = 0;
let computerScore = 0;

function playGame(humanSelection, computerSelection) {

    let roundWinner = playRound(humanSelection, computerSelection);
    if (roundWinner === 1) {
        humanScore++;
    } else {
        computerScore++;
    }
    
    return "Your Score: " + humanScore + " Computer Score: " + computerScore;
}

const roundText = document.querySelector(".round");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanMove = button.getAttribute("id");
        const computerSelection = getComputerChoice();
        switch (humanMove) {
            case "rock":
                messageContainer.textContent = playGame(humanMove, computerSelection);
                roundText.textContent = roundResult;
                break;
            case "paper":
                messageContainer.textContent = playGame(humanMove, computerSelection);
                roundText.textContent = roundResult;
                break;
            case "scissors":
                messageContainer.textContent = playGame(humanMove, computerSelection);
                roundText.textContent = roundResult;
                break;
            default:
                messageContainer.textContent = "error";
                break;
        }
    });
});

//playGame();

module.exports = getComputerChoice;