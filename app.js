let timeDisplay = document.getElementById("timeStopwatch");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let startTimer = function () {
  start.style.display = "none";
  millisecInt = setInterval(function () {
    milliseconds = milliseconds > 1000 ? 1 : milliseconds + 1;
    setToHtml(minutes, seconds, milliseconds);
  }, 1);

  secondsInt = setInterval(function () {
    seconds = seconds > 59 ? 1 : seconds + 1;
  }, 1000);

  minsInt = setInterval(function () {
    ++minutes;
  }, 1000 * 60);
};

var stopTimer = function () {
  if ((start.style.display = "none")) {
    start.style.display = "inline-block";
  }
  clearInterval(millisecInt);
  clearInterval(secondsInt);
  clearInterval(minsInt);
};

var resetTimer = function () {
  stopTimer();
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  timeDisplay.innerHTML = ` <h1 id="timeStopwatch">
  <span class="minutes">00</span>:<span class="seconds">00</span>:
  <span class="milliseconds">00</span>
</h1>`;
};

var setToHtml = function (minutes, seconds, milliseconds) {
  document.querySelector(".minutes").innerText =
    minutes.length == 1 ? "0" + minutes : minutes;
  document.querySelector(".seconds").innerText =
    seconds.length == 1 ? "0" + seconds : seconds;
  document.querySelector(".milliseconds").innerText =
    milliseconds.length == 1 ? "0" + milliseconds : milliseconds;
};
