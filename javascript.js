let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}


function playRound(playerChoice, computerChoice) {

    console.log(`Player choice: ${playerChoice} - Computer choice: ${computerChoice}`);
    if (playerChoice === computerChoice) {
        playerScore = playerScore + 1;
        computerScore = computerScore + 1;
        return "You Tie!        SCORE [ " + playerScore + "-" + computerScore + " ]";

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore = playerScore + 1;
        return "You win!        SCORE [ " + playerScore + "-" + computerScore + " ]";
    } else {
        computerScore = computerScore + 1;
        return "You Lose!       SCORE [ " + playerScore + "-" + computerScore + " ]";
    }

}


function playGame() {
    for (let i = 0; i <= 4; i++) {
        const playerChoice = prompt("rock, paper, scissors!").toLowerCase();
        const result = playRound(playerChoice, getComputerChoice());
        console.log(result);
    }
}
playGame();
