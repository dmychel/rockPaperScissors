console.log('Hello World')

function getComputerChoice(){
   let choices = ['rock', 'paper', 'scissors']
   return choices[Math.floor(Math.random() * 3)]  
}

function playRound(playerSelection,computerSelection){
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
const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
