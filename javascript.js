console.log('Hello! Welcome to the battle! Choose your weapon carefully!');

//options
const options = ['archer', 'horseback', 'knight'];

//random compChoice
function getCompChoice(compSelection){
   compSelection = options[Math.floor(Math.random() * 3)];
   console.log(compSelection);
   return compSelection
}




//player choice
function getPlayerChoice(playerSelection){
    let validOption = false;
    while(validOption == false){
        playerSelection = prompt('Choose your warrior! Knight, Archer, or Horseback').toLowerCase();
        if(playerSelection == null){
            continue;
        }
        if(options.includes(playerSelection)){
            validOption == true;
            return playerSelection;  
        }
    }
}


function playRound(playerSelection, compSelection){
    if(
         (playerSelection === 'archer' && compSelection === 'knight') ||
         (playerSelection === 'horseback' && compSelection === 'archer') ||
         (playerSelection === 'knight' && compSelection === 'horseback')
     ){
         return `You win! ${playerSelection} beats ${compSelection}!`
     }
     else if(
         (compSelection === 'archer' && playerSelection === 'knight') ||
         (compSelection === 'horseback' && playerSelection === 'archer') ||
         (compSelection === 'knight' && playerSelection === 'horseback')
     ){
         return `You lose! ${compSelection} beats ${playerSelection}!`
     }
     else{
         return `It's  tie!`
     }
 }


 

//round logic
function checkWinner(playerSelection, compSelection){
    console.log('Choose your weapon next weapon!')
   if(
        (playerSelection === 'rock' && compSelection === 'scissor') ||
        (playerSelection === 'paper' && compSelection === 'rock') ||
        (playerSelection === 'scissor' && compSelection === 'paper')
    ){
        return 'player'
    }
    else if(
        (compSelection === 'rock' && playerSelection === 'scissor') ||
        (compSelection === 'paper' && playerSelection === 'rock') ||
        (compSelection === 'scissor' && playerSelection === 'paper')
    ){
        return 'computer'
    }
    else{
        return 'tie'
    }
}


//game logic
function gameLogic(playerSelection, compSelection){
    let playerScore = 0;
    let compScore = 0;
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const compSelection = getCompChoice();
        console.log('Choose your next warrior!')
        console.log(playRound(playerSelection,compSelection));
        console.log('--------------------------------------');
        if(checkWinner(playerSelection,compSelection) == 'player'){
            playerScore++;
        }
        else{
            compScore++
        }
    }
    if(playerScore > compScore){
        console.log('You Won the War!!!')
    }
    else{
        console.log('You Lost the War!!!')
    }
}

gameLogic()