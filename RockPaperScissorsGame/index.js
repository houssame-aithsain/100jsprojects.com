const buttons = document.querySelectorAll('button');
const gameStatus = document.getElementById('game-status');
const pScore = document.getElementById('player-score');
const bScore = document.getElementById('bot-score');
let playerScore = 0;
let botScore = 0;

const botActions = ['rock', 'scissor', 'paper'];
const actions = [
    {
        player : 'rock',
        bot: 'scissor',
        won: true
    },
    {
        player : 'rock',
        bot: 'paper',
        won: false
    },
    {
        player : 'scissor',
        bot: 'paper',
        won: true
    },
    {
        player : 'scissor',
        bot: 'rock',
        won: false
    },
    {
        player : 'paper',
        bot: 'rock',
        won: true
    },
    {
        player : 'paper',
        bot: 'scissor',
        won: false
    },
];

buttons.forEach((button) => {
    button.addEventListener('click', function listen() {
        setResult(button.id);
    });
});

function setResult(button) {

    const botAction = botActions[Math.floor(Math.random() * 3)];
    const status = actions.filter(x => x.player === button && x.bot == botAction);
    if (status[0]) {
        if (status[0].won === true) {
            playerScore++;
            pScore.innerText = playerScore;
            gameStatus.innerText = `You won! ${status[0].player} beats ${botAction}`;
        } else if (status[0].won === false) {
            botScore++;
            bScore.innerText = botScore;
            gameStatus.innerText = `You lose! ${botAction} beats ${status[0].player}`;
        }
    } else {
        gameStatus.innerText = `It's a tie!`;
    }
};
