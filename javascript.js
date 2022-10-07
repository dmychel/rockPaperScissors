//rock, paper, scissors ^
//computer needs to select an option(rock,paper,scissors)randomly ^
//rock needs to beat scissors
//paper needs to beat rock
//scissors needs to beat paper
//same choice === tie


console.log('Hello World');

const options = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const compChoice = options[Math.floor(Math.random() * options.length)];
    console.log(compChoice);
    return compChoice;
   
}

function winner(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return 'tie';
    }
    if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ){
        return 'player';
    }
    else{
        return 'computer';
    }
}

function round(playerSelection,computerSelection){
    const result = winner(playerSelection,computerSelection);
    if(result === 'tie'){
        return 'Wow! it \'s a tie!';
    } 
    if(result === 'player'){
        return `Wow! you win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(result === 'computer'){
        return `Oh no! you lost, ${computerSelection} beats ${playerSelection}`;
    }
}


const playerSelection = 'rock'
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(round(playerSelection,computerSelection));
