let startTime, timerInterval, running = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

const updateDisplay = () => {
    const elapsed = new Date(new Date() - startTime);
    display.textContent = `${String(elapsed.getUTCHours()).padStart(2, '0')}:${String(elapsed.getUTCMinutes()).padStart(2, '0')}:${String(elapsed.getUTCSeconds()).padStart(2, '0')}:${String(Math.floor(elapsed.getUTCMilliseconds() / 10)).padStart(2, '0')}`;
};

startStopBtn.addEventListener('click', () => {
    if (running) {
        clearInterval(timerInterval);
    } else {
        startTime = new Date() - (startTime || 0);
        timerInterval = setInterval(updateDisplay, 10);
    }
    startStopBtn.textContent = running ? 'Start' : 'Pause';
    running = !running;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    display.textContent = '00:00:00:00';
    running = false;
    startTime = null;
    startStopBtn.textContent = 'Start';
});
