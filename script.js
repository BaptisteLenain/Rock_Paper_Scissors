/*
Ask user what he wants to choose
compare choice to computer choice
based on result, return win or loose
*/

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3 + 1);
    if (rand === 1) {
        return 'Paper';
    } else if (rand === 2) {
        return 'Rock';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'You win! Scissors beats Paper';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return 'You loose! Scissors beats Paper';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'You loose! Rock beats Paper';
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'You loose! Rock beats Scissors';
    } else  {
        return 'Even!';
    }
}



const playerSelection = 'Rock';
let computerSelection = getComputerChoice();
console.log(getComputerChoice());
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("win")) {
            let playerScore = playerScore + 1;
        }

        

        console.log(result);
        console.log(playerScore);
    }
}
game();