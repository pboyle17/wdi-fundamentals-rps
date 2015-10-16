////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    
    return prompt("Please choose rock, paper or scissors. You may also type 'quit' to quit");
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
    return getInput().toLowerCase();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

    return randomPlay().toLowerCase();
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
    if (playerMove=='quit') {
        return 'quit';
    }

}

function playToFive() {
    alert("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    alert('player wins : '+playerWins+'           computer wins : '+computerWins);

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while(playerWins< 5 && computerWins < 5 ){
       var playerMove=getPlayerMove();
       var computerMove=getComputerMove();
       var winner=getWinner(playerMove,computerMove);
        
        
        if(winner=='player'){
            playerWins+=1;
            alert('player chose: '+ playerMove+'          Computer chose: '+computerMove);
            alert('player Won the round!');
            alert('player wins: '+playerWins+' computer wins: '+computerWins);

        }
        else if(winner=='computer'){
            computerWins+=1;
            alert('player chose: '+ playerMove+'          Computer chose: '+computerMove);
            alert('computer Won the round!');
            alert('player wins: '+playerWins+' computer wins: '+computerWins);

        }
        else if (winner=='tie') {
            alert('player chose: '+ playerMove+'          Computer chose: '+computerMove);
            alert('tie!')
            alert('player wins: '+playerWins+' computer wins: '+computerWins);
        }
        else if(winner=='quit'){
            alert('Thanks for playing, try your skill again!');
            break;
        }
        else {
            alert('Please enter a valid selection of rock, paper or scissors');
        }
    }


    
    if(playerWins>computerWins){
        alert('Congrats! You won the Match! The score was player: '+playerWins+'    computer: '+computerWins);
    }
    else if (computerWins>playerWins) {
        alert('Sorry! computer won the Match! The score was player: '+playerWins+'    computer: '+computerWins);
    }
    else {
        alert('The match ended in a tie. The score was player: '+playerWins+'    computer: '+computerWins);
    }

    return ;
}

playToFive();

