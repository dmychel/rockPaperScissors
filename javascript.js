//run function getPlayerChoice.
//run function getComputerChoice. done
//run function checkWinner done
//run game in a loop 5 times
//compare scores, display winner
const options = ['knight', 'cavalry', 'archer'];

let playerChoice_h2 = document.getElementById('playerChoice');
let computerChoice_h2 = document.getElementById('computerChoice');
let playerScore_h2 = document.getElementById('playerScore');
let computerScore_h2 = document.getElementById('computerScore');
const result_h2 = document.getElementById('result');
const cavalry = document.getElementById('cavalry');
const archer = document.getElementById('archer');
const knight = document.getElementById('knight');
const endGame_h2 = document.getElementById('endGame');
let wrapper_h2 = document.getElementById('wrapper')
let resultContainer_div = document.getElementById('result')

let playerScore = 0;
let computerScore = 0

    knight.addEventListener('click', function(){
        let playerSelection = 'knight';
        let computerSelection = getComputerChoice();
        
        console.log(playerSelection);
        console.log(computerSelection);
        playRound(playerSelection,computerSelection);
        checkScore(playerSelection,computerSelection);
        resetGame(playerScore,computerScore);
        playerChoice_h2.innerHTML = playerSelection;
        computerChoice_h2.innerHTML = computerSelection;
    });
    
    archer.addEventListener('click', function(){
        let playerSelection = 'archer';
        let computerSelection = getComputerChoice();

        console.log(playerSelection);
        console.log(computerSelection);
        playRound(playerSelection,computerSelection);
        checkScore(playerSelection,computerSelection);
        resetGame(playerScore,computerScore);
        playerChoice_h2.innerHTML = playerSelection;
        computerChoice_h2.innerHTML = computerSelection;
    });
    
    cavalry.addEventListener('click', function(){
        let playerSelection = 'cavalry';
        let computerSelection = getComputerChoice();

        console.log(playerSelection);
        console.log(computerSelection);
        playRound(playerSelection,computerSelection);
        checkScore(playerSelection,computerSelection);
        resetGame(playerScore,computerScore);
        playerChoice_h2.innerHTML = playerSelection;
        computerChoice_h2.innerHTML = computerSelection;
    });
    
    function getComputerChoice(computerSelection){
         computerSelection = options[Math.floor(Math.random() * 3)]
         return computerSelection
    };

    function playRound(playerSelection,computerSelection){
        if(
            (playerSelection === 'archer' && computerSelection === 'knight') ||
            (playerSelection === 'knight' && computerSelection === 'cavalry') ||
            (playerSelection === 'cavalry' && computerSelection === 'archer')){
                result_h2.innerHTML = `Player Wins! ${playerSelection} beats ${computerSelection}!`
            }
        else if(
            (computerSelection === 'archer' && playerSelection === 'knight') ||
            (computerSelection === 'knight' && playerSelection === 'cavalry') ||
            (computerSelection === 'cavalry' && playerSelection === 'archer') ){
                result_h2.innerHTML = `Player Loses! ${computerSelection} beats ${playerSelection}!`
            }
            else{
                result_h2.innerHTML = 'It\'s a tie!'
            }
    }

    function checkScore(playerSelection,computerSelection){
        if(
            (playerSelection === 'archer' && computerSelection === 'knight') ||
            (playerSelection === 'knight' && computerSelection === 'cavalry') ||
            (playerSelection === 'cavalry' && computerSelection === 'archer')){
                playerScore++
                playerScore_h2.innerHTML = playerScore
                console.log(playerScore)
            }
        else if(
            (computerSelection === 'archer' && playerSelection === 'knight') ||
            (computerSelection === 'knight' && playerSelection === 'cavalry') ||
            (computerSelection === 'cavalry' && playerSelection === 'archer') ){
                computerScore++
                computerScore_h2.innerHTML = computerScore
                console.log(computerScore)
            }
    }

    function resetGame(playerScore,computerScore){
        if(playerScore === 5){
            endGame_h2.innerHTML = 'Player Wins the War!!';
            wrapper_h2.remove();
            resultContainer_div.remove();
        }
        else if(computerScore === 5){
            endGame_h2.innerHTML = 'Computer Wins the War!!'
            wrapper_h2.remove();
            resultContainer_div.remove();
        }
    };
  
