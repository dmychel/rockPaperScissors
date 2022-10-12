console.log('Hello World');


const options = ['rock', 'paper', 'scissors']


function getPlayerChoice(playerSelection){
    let validChoice = false;
    while(validChoice == false){
        playerSelection = prompt('rock, paper, or scissors?').toLowerCase();
        if(playerSelection == null){
            continue;
        }
        if (options.includes(playerSelection)){
            validChoice == true;
            return playerSelection;
        }
    }
}

function getComputerChoice(){
     const computerSelection = options[Math.floor(Math.random() * 3)]
     return computerSelection;
}



function playRound(computerSelection,playerSelection){
    if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        return `You Win! ${playerSelection} beats ${computerSelection}!`
    }
    else if(
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ){
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
    }
    else if(playerSelection === computerSelection){
        return 'Wow! it\'s a tie!'
    }
}

function winner(playerSelection,computerSelection){
    if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        return 'player'
    }
    else if(
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ){
        return 'computer'
    }
    else if(playerSelection === computerSelection){
        return 'tie'
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
     const playerSelection = getPlayerChoice();
     const computerSelection = getComputerChoice();
     console.log(playRound(computerSelection,playerSelection));
     if (winner(playerSelection,computerSelection) == 'player'){
        playerScore++;
     }
     else if(winner(playerSelection,computerSelection) == 'computer'){
        computerScore++;
     }
     }
     console.log('Game over');
     if(playerScore > computerScore){
        console.log('You won the game!')
     }
     else if(computerScore > playerScore){
        console.log('You lose! The computer won the game.')
     }
     else if(playerScore === computerScore){
        console.log('It\'s a tie!')
     }
}

game()
