console.log("howdy");

const playerName = document.createElement('div');;
const nameContainer = document.querySelector('.nameContainer');
const nameInput = document.querySelector('#nameInput');
const nameSubmit = document.querySelector('#nameSubmit');
nameSubmit.addEventListener('click', () => {
    playerName.classList.add('name');
    playerName.textContent = document.getElementById('nameInput').value;
    nameContainer.prepend(playerName);
    nameContainer.removeChild(nameInput);
    nameContainer.removeChild(nameSubmit);
});

const winner = document.querySelector('#winner');
const result = document.querySelector('#result');
const scoreBoard = document.querySelector('#scoreBoard');
const playerScore = document.querySelector('#playerScore');
const cpuScore = document.querySelector('#cpuScore');
const buttons = document.querySelectorAll('button');
const reset = document.querySelector('reset');
document.getElementById('reset').addEventListener('mouseup', resetGame);

buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('playing');
        result.textContent = playRound(button.id, computerPlay());
        winner.textContent = winCondition(playerScore, cpuScore);
    });
});
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function winCondition(playerScore, cpuScore) {
    if ((playerScore.textContent < 5) && (cpuScore.textContent < 5)) return 'Who will emerge victorious?';
    else {
        buttons.forEach(button => {button.disabled = true;} );
        document.getElementById('reset').disabled = false;
        if (playerScore.textContent == 5) {
            if (cpuScore.textContent < 3) return `${playerName.textContent} wins in a dominant fashion!`;
            else return `${playerName.textContent} wins the tight game!`;
        }
        else if (cpuScore.textContent == 5) {
            if (playerScore.textContent < 3) return `CPU is the winner! What an absolutely pathetic display from ${playerName.textContent}!`;
            else return `CPU is the winner! Better luck to ${playerName.textContent} next time!`;
        }
    }
}

function resetGame() {
    playerScore.textContent = 0;
    cpuScore.textContent = 0;
    buttons.forEach(button => {button.disabled = false;} );
    document.getElementById('reset').disabled = true;
    winner.textContent = 'Who will emerge victorious?';
    result.textContent = 'Ready, set, go!';
}

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
    switch (playerSelection + computerSelection) {
        case "rockrock":
            return "Rock and rock, it's a draw!"
        case "rockpaper":
            cpuScore.textContent++;
            return "Paper beats rock, CPU wins!"
        case "rockscissors":
            playerScore.textContent++;
            return `Rock beats scissors, ${playerName.textContent} wins!`
        case "paperrock":
            playerScore.textContent++;
            return `Paper beats rock, ${playerName.textContent} wins!`
        case "paperpaper":
            return "Paper and paper, it's a draw!"
        case "paperscissors":
            cpuScore.textContent++;
            return "Scissors beat paper, CPU wins!"
        case "scissorsrock":
            cpuScore.textContent++;
            return "Rock beats scissors, CPU wins!"
        case "scissorspaper":
            playerScore.textContent++;
            return `Scissors beat paper, ${playerName.textContent} wins!`
        case "scissorsscissors":
            return "Scissors and scissors, it's a draw!"
    }
}