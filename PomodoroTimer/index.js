const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const timerText = document.querySelector('p');

var timeInseconds = 25 * 60;
var standBy = false;
var started = false;

startButton.addEventListener('click', function start() {
    if (started === false) {
        started = true;
        standBy = false;
        let interval = setInterval(() => {
            let minutes = Math.floor(timeInseconds / 60);
            let seconds = timeInseconds % 60;
        
            timerText.innerText = `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;
            if (timeInseconds > 0 && !standBy) {
                timeInseconds--;
            } else {
                if (timeInseconds <= 0) {
                    alert("TIME'S OUT O.O");
                }
                clearInterval(interval);
                started = false;
            }
        }, 1000);  
    }
});

stopButton.addEventListener('click', function stop() {
    standBy = true;
});

resetButton.addEventListener('click', function reset() {
    timeInseconds = 25 * 60;
    timerText.innerText = '25:00';
});
