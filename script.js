let timerDisplay = document.getElementById("timer");
let focusBtn = document.getElementById("Focus");
let breakBtn = document.getElementById("Break");
let resetBtn = document.getElementById("Reset");
let time = 1500; // 25 minutes
let timer;
focusBtn.addEventListener("click", function() {
    time = 1500;
    startTimer();
});

breakBtn.addEventListener("click", function() {
    time = 300;
    startTimer();
});

resetBtn.addEventListener("click", function() {
    clearInterval(timer);
    time = 1500;
    updateDisplay();
});
function startTimer() {
    clearInterval(timer);

    timer = setInterval(function() {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timer);
        }
    }, 1000);
}
function updateDisplay() {
    let minutes = Math.floor(time / 60); 
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    timerDisplay.textContent = minutes + ":" + seconds;
}
console.log(timerDisplay);
updateDisplay();
