////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("pick rock paper or scissors");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

    return randomPlay();
}

function getWinner(playerMove,computerMove) {
    
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == 'rock' && computerMove == 'scissors'){
        return 'player';
    }
    

    if (playerMove=='rock' && computerMove == 'rock'){
        return 'tie';
    }

    if (playerMove=='rock' && computerMove == 'paper'){
        return 'computer';
    }

    if (playerMove=='scissors' && computerMove == 'scissors'){
        return 'tie';
    }

    if (playerMove=='scissors' && computerMove == 'rock'){
        return 'computer';
    }

    if (playerMove=='scissors' && computerMove == 'paper'){
        return 'player';
    }

    if (playerMove=='paper' && computerMove == 'scissors'){
        return 'computer';
    }

    if (playerMove=='paper' && computerMove == 'rock'){
        return 'player';
    }

    if (playerMove=='paper' && computerMove == 'paper'){
        return 'tie';
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    console.log('player wins : '+playerWins+'   computer wins : '+computerWins);

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while(playerWins< 5 && computerWins < 5 ){
       var winner=getWinner(getPlayerMove(),getComputerMove());
        
        
        if(winner=='player'){
            playerWins+=1;
            console.log('player Won the round!');
            console.log('player wins: ',playerWins,'computer wins:',computerWins);

        }
        else if(winner=='computer'){
            computerWins+=1;
            console.log('computer Won the round!');
            console.log('player wins: ',playerWins,'computer wins:',computerWins);

        }
        else {
            console.log('tie!')
            console.log('player wins: ',playerWins,'computer wins:',computerWins);
        }
    }

    if(playerWins>computerWins){
        console.log('player won the Match!');
    }
    else {
        console.log('computer won the Match');
    }

    return [playerWins, computerWins];
}

playToFive();

