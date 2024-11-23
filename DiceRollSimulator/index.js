const diceHistory = document.querySelector('ul');
const diceHolder = document.querySelector('.rollDice');
const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
var diceNumbe = 0;

document.querySelector('button').addEventListener('click', function rollingDice() {
    diceHolder.style.animation = 'none';
    setTimeout(() => {
        diceHolder.style.animation = 'roll 1s ease-in-out';
    }, 0);
    
    let count = 0;
    const interval = setInterval(() => {
        const randomFace = diceFaces[Math.floor(Math.random() * diceFaces.length)];
        diceHolder.innerText = randomFace;

        count++;
        if (count >= 10) {
            const item = document.createElement('li');
            item.id = 'frame';
            diceNumbe++;
            item.innerText = `Roll ${diceNumbe}:`;
            span = document.createElement('span');
            span.innerText = diceHolder.innerText;
            span.style.fontSize = '50px';
            item.appendChild(span);
            diceHistory.appendChild(item);

            clearInterval(interval);
            diceHolder.style.animation = 'none';
            setTimeout(() => {
                diceHolder.style.animation = 'roll 6s ease-in-out infinite';
            }, 0);
        }
    }, 90);
});
