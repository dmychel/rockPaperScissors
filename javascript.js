//run function getPlayerChoice.
//run function getComputerChoice. done
//run function checkWinner done
//run game in a loop 5 times
//compare scores, display winner
const options = ['knight', 'cavalry', 'archer'];

const playerChoice_h2 = document.getElementById('playerChoice');
const computerChoice_h2 = document.getElementById('computerChoice');
const playerScore_h2 = document.getElementById('playerScore');
const computerScore_h2 = document.getElementById('computerScore');
const result_h2 = document.getElementById('result');
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(playerSelection){
    playerSelection = 'archer'
    return playerSelection
};

function getComputerChoice(computerSelection){
    computerSelection = options[Math.floor(Math.random() * 3)];
    return computerSelection;
};

function checkWinner(playerSelection,computerSelection){
    if(
        (playerSelection === 'archer' && computerSelection === 'knight') ||
        (playerSelection === 'knight' && computerSelection === 'cavalry') ||
        (playerSelection === 'cavlary' && computerSelection === 'archer')){
            return 'player'
        }
    else if(
        (computerSelection === 'archer' && playerSelection === 'knight') ||
        (computerSelection === 'knight' && playerSelection === 'cavalry') ||
        (computerSelection === 'cavalry' && playerSelection === 'archer')){
            return 'computer'
        }
        else{
            return 'tie'
        };
};

function gameLogic(playerSelection,computerSelection){
    for(let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        if(checkWinner(playerSelection,computerSelection) == 'player'){
            playerScore++
        }
        else if(checkWinner(playerSelection,computerSelection) == 'computer'){
            computerScore++
        }
        else {
            return null;
        }


        //console.log('playerSelction is ' + playerSelection);
        //console.log('computerSelection is ' + computerSelection)
    };
};

gameLogic()



