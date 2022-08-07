/*
Ask user what he wants to choose
compare choice to computer choice
based on result, return win or loose
*/


function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3 + 1);
    if (rand === 1) {
        return 'paper';
    } else if (rand === 2) {
        return 'rock';
    } else {
        return 'scissors';
    }
}



function playRound(playerSelection,computerSelection) {
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats Paper';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You loose! Scissors beats Paper';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You loose! Rock beats Paper';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You loose! Rock beats Scissors';
    } else  {
        return 'Tie!';
    }
}





function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose between Paper, Rock or Scissors').toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        if (result.includes('win')) {
            playerScore = playerScore + 1;
            computerScore = computerScore;
            
        } else if (result.includes('loose')) {
            playerScore = playerScore;
            computerScore = computerScore + 1;
        } else {
            playerScore = playerScore;
            computerScore = computerScore; 
        }
        score = playerScore + ' | ' + computerScore;


        console.log(result);
        console.log(score);
    }

    if (playerScore > computerScore) {
        console.log(`You win the game! The score is ${score}`);
    } else if (playerScore < computerScore) {
        console.log(`You loose the game! The score is ${score}`);
    } else {
        console.log(`It's a tie! The score is ${score}`);
    }

}
game();

