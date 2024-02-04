let rounds = 3;
let score;

function getComputerChoice() {
    let rngGenerator = Math.floor(Math.random() * 3);

    switch (rngGenerator) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

// converts the first letter of the player's string to upper case and stores it
// into playerSelection
function playerUpperCase(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    firstLetter = playerSelection.charAt(0);
    firstLetterCap = firstLetter.toUpperCase();
    remainingLetters = playerSelection.slice(1);
    return (playerSelection = firstLetterCap + remainingLetters);
}

function playRound(playerSelection, computerSelection) {
    if (
        playerSelection == "Rock" &&
        (computerSelection == "Paper" || computerSelection == "Scissors")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        score++;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        score++;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        score++;
    } else if (playerSelection === computerSelection) {
        console.log(`Tie!`);
        score++;
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        score--;
    }
}

function playGame() {
    for (let i = 0; i < rounds; i++) {
        playerSelection = prompt("Input:");
        playerSelection = playerUpperCase(playerSelection);
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if (score > rounds / 2) {
        console.log("You win the game!");
    } else if (score == rounds / 2) {
        console.log("Tie for the game!");
    } else {
        console.log("You lose the game!");
    }
}

playGame();
