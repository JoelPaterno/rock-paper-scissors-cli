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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw!");
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            console.log("You win! Rock beats Scissors");
            return 1;
        } else if (computerChoice === "paper") {
            console.log("You loose! Paper beats Rock");
            return 0;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log("You loose! Scissors beats Paper");
            return 0;
        } else if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            return 1;
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
            console.log("You win! Scissors beats Paper");
            return 1;
        } else if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            return 0;
        }
    }
};

function playGame(humanSelection, computerSelection) {
    let humanScore = 0;
    let computerScore = 0;

    let roundWinner = playRound(humanSelection, computerSelection);
    if (roundWinner === 1) {
        humanScore++;
    } else {
        computerScore++;
    }
    
    return "Your Score: " + humanScore + " Computer Score: " + computerScore;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanMove = button.getAttribute("id");
        const computerSelection = getComputerChoice();
        switch (humanMove) {
            case "rock":
                messageContainer.textContent = playGame(humanMove, computerSelection);
                break;
            case "paper":
                messageContainer.textContent = playGame(humanMove, computerSelection);
                break;
            case "scissors":
                messageContainer.textContent = playGame(humanMove, computerSelection);
                break;
            default:
                messageContainer.textContent = "error";
                break;
        }
    });
});

//playGame();

module.exports = getComputerChoice;