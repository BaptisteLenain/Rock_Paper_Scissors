/*
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  */

  let playerScore = 0;
  let computerScore = 0;


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


let playerSelection = ""
  const buttons = document.querySelectorAll('.glow-on-hover');
  buttons.forEach((button) => { button.addEventListener('click', () => {
    playerSelection = button.id;
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
    } else {
      game();  
    }
      })
  });

  let resultRoundDisplay  = document.querySelector('.resultRound');
  let resultGameDisplay = document.querySelector('.resultGame');

function playRound(playerSelection,computerSelection) {
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        resultRoundDisplay.innerHTML = '+1 for you! Scissors beats Paper';
        return 'win';
        
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        resultRoundDisplay.innerHTML = '+1 for you! Paper beats Rock';
        return 'win';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        resultRoundDisplay.innerHTML = '+1 for computer! Scissors beats Paper';
        return 'loose';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        resultRoundDisplay.innerHTML = '+1 for computer! Rock beats Paper';
        return 'loose';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        resultRoundDisplay.innerHTML = '+1 for you! Rock beats Scissors';
        return 'win';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        resultRoundDisplay.innerHTML = '+1 for computer! Rock beats Scissors';
        return 'loose';
    } else  {
        resultRoundDisplay.innerHTML = 'Tie!';
        resulta = 2;
        return 'tie';
    }
}



let playerScoreDisplay  = document.querySelector('.playerScore');
let computerScoreDisplay  = document.querySelector('.computerScore');
playerScoreDisplay.innerHTML = playerScore;
computerScoreDisplay.innerHTML = computerScore;


function game() {
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

        if (playerScore == 5 && computerScore < 5) {
            resultGameDisplay.innerHTML = 'YOU WIIIIN';
        } else if (playerScore < 5 && computerScore == 5) {
            resultGameDisplay.innerHTML = 'YOU LOOOOSE'; 
        } else {
            resultGameDisplay.innerHTML = '';
        }
    
        console.log(playerScore);
        playerScoreDisplay.innerHTML = playerScore;
        computerScoreDisplay.innerHTML = computerScore;



/*
    if (playerScore > computerScore) {
        console.log(`You win the game! The score is ${score}`);
    } else if (playerScore < computerScore) {
        console.log(`You loose the game! The score is ${score}`);
    } else {
        console.log(`It's a tie! The score is ${score}`);
    }
*/
};

