console.log("howdy");

function computerPlay() {
    rand = Math.floor(Math.random() * 3);
    
    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("game is broken");
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase() + computerSelection.toLowerCase()) {
        case "rockrock":
            return "It's a draw!"
        case "rockpaper":
            return "Computer wins!"
        case "rockscissors":
            return "Player wins!"
        case "paperrock":
            return "Player wins!"
        case "paperpaper":
            return "It's a draw!"
        case "paperscissors":
            return "Computer wins!"
        case "scissorsrock":
            return "Computer wins!"
        case "scissorspaper":
            return "Player wins!"
        case "scissorsscissors":
            return "It's a draw!"
    }
}

function game() {
    let playerWin = 0, computerWin = 0;
    
    while ((playerWin + computerWin) != 5) {
        let playerInput = window.prompt("Rock, Paper, or Scissors?");
        if (playRound(playerInput, computerPlay()) == "Player wins!") {
            console.log("Player wins!");
            playerWin++;
        }
        else if (playRound(playerInput, computerPlay()) == "Computer wins!") {
            console.log("Computer wins!");
            computerWin++;
        }
        else console.log("Draw!")
    }

    if (playerWin > computerWin) return "Player won " + playerWin + " to " + computerWin + "!";
    else if (playerWin < computerWin) return "Player lost " + playerWin + " to " + computerWin + "!";
}