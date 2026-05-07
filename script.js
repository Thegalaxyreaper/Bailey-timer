let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("start");
let breakBtn = document.getElementById("Break");
let resetBtn = document.getElementById("Reset");
let stopBtn = document.getElementById("stop");
let time = 0; // 25 minutes
let timer;
let foucusTitle = document.getElementById("focus-title");
function updateTitle(text) {
    foucusTitle.textContent = text;
}
startBtn.addEventListener("click", function() {
    let userInput = parseInt(prompt("enter time in minutes:"));
    if (!isNaN(userInput) && userInput > 0) {
        time = userInput * 60;
        startTimer();
    } else {
        alert(" please enter a valid number");
    }
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

            if (time === 10) {
            updateTitle("time for a Break!");
            } else {
               updateTitle("Time to focus!");
        }
        } else {
           clearInterval(timer);
        }
} ,1000);
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
