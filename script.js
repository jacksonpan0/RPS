//Global Variables to keep track of score and player choice
playerWins = 0;
computerWins = 0;
let playerChoice = "";
let computerChoice = "";
let results = "";
let titleCard = "Rock Paper Scissor Showdown";
//Get computer choice function, uses random to have the computer randomly select RPS
function getComputerChoice() {
    let computerChoice = "Scissors";
    let randomNum = Math.floor(Math.random()*3);
    switch(randomNum) {
        case 0:
            return computerChoice = "Scissors";
            break;
        case 1:
            return computerChoice = "Rock";
            break;
        case 2:
            return computerChoice = "Paper";
            break;
        default:
            computerChoice = "null";
        }
        return computerChoice = "null";
    }
//Function to allow the game to decide outcome use comparator and union operation logic
function playRound(playerSelection, computerSelection) {
    let playerOutcome = "null";
    if((playerSelection == computerSelection)) {
        return playerOutcome = "Tie";
    }
    if(((playerSelection == "Rock")&&(computerSelection == "Paper")) || 
    ((playerSelection == "Paper")&&(computerSelection == "Scissors")) ||
    ((playerSelection == "Scissors")&&(computerSelection == "Rock"))) {
        computerWins++;
        return playerOutcome = "Lose";
    }
    if(((playerSelection == "Rock")&&(computerSelection == "Scissors")) || 
    ((playerSelection == "Paper")&&(computerSelection == "Rock")) || 
    ((playerSelection == "Scissors")&&(computerSelection == "Paper"))) {
        playerWins++;
        return playerOutcome = "Win";
    }
}
//Function which calls the game and keeps track of score between the player and computer
function game() {
    console.log(playRound(playerChoice, getComputerChoice()));
    if(playerWins > computerWins) {
        return "You won with a score of " + playerWins + " to " + computerWins;
    }
    if(playerWins < computerWins) {
        return "You lost with a score of " + playerWins + " to " + computerWins;
    }
    if(playerWins == computerWins) {
        return "You tied with a score of " + playerWins + " to " + computerWins;
    }
}
//Query Selector and Element Creation here
//Creation of container along with score tracker
const contentClass = document.querySelector('.content');
const scoreTracker = document.createElement('div');
scoreTracker.classList.add('font');
scoreTracker.textContent = playerWins + ' vs ' + computerWins;
contentClass.appendChild(scoreTracker);
//Creation of starting card
const startCard = document.createElement('div');
startCard.classList.add('font');
startCard.textContent = titleCard;
contentClass.appendChild(startCard);
//Buttons assigment, basically gameplay here
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        //Checks to make sure neither player or computer is at 5 wins
        if(playerWins < 5 && computerWins < 5) {
            playerChoice = button.id;
            computerChoice = getComputerChoice();
            //Calculates the results and displays to user
            result = playRound(playerChoice, computerChoice);
            scoreTracker.textContent = playerWins + ' vs ' + computerWins;
            contentClass.appendChild(scoreTracker);
            if(result == "Win") {
                titleCard = "You " + result + "! " + playerChoice + " beat " + computerChoice + "!";
            }
            else if(result == "Lose") {
                titleCard = "You " + result + " " + playerChoice + " lost to " + computerChoice + "!";
            } 
            else if(result == "Tie") {
                titleCard = "You " + result + ". " + playerChoice + " tied with " + computerChoice + "!";
            }
            startCard.textContent = titleCard;
            contentClass.appendChild(startCard);
        }
        //Once either party gets to 5 wins, the game ends
        if(playerWins == 5) {
            titleCard = "You won the game! Congrats :)";
        } 
        else if(computerWins == 5) {
            titleCard = "You lose the game! Unlucky :(";
            }
            startCard.textContent = titleCard;
            contentClass.appendChild(startCard);
    });
});
