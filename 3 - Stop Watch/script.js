const secoundsElement = document.getElementById("secounds");
const minutesElement = document.getElementById("minutes");
const hourElement = document.getElementById("hour");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let sectimeInterval;
let mintimeInterval;
let hourtimeInterval;

let seconds = 0;
let minutes = 0;
let hour = 0;

const stopWatch = () => {
  const secoundsFn = () => {
    seconds >= 59 ? (seconds = 0) : seconds++;
    secoundsElement.innerHTML = seconds < 10 ? "0" + String(seconds) : seconds;
  };

  const minutesFn = () => {
    minutes >= 59 ? (minutes = 0) : minutes++;
    minutesElement.innerHTML = minutes < 10 ? "0" + String(minutes) : minutes;
  };

  const hourFn = () => {
    hour++;
    hourElement.innerHTML = hour < 10 ? "0" + String(hour) : hour;
  };

  sectimeInterval = setInterval(secoundsFn, 1000);
  mintimeInterval = setInterval(minutesFn, 60000);
  hourtimeInterval = setInterval(hourFn, 60000);
};

const startWatch = () => {
  stopWatch();
  stopBtn.classList.remove("disabled");
  resetBtn.classList.remove("disabled");
};

const stopWatchFn = () => {
  clearInterval(sectimeInterval);
  clearInterval(mintimeInterval);
  clearInterval(hourtimeInterval);
};

const resetWatchFn = () => {
  stopWatchFn();
  seconds = 0;
  minutes = 0;
  hour = 0;
  minutesElement.innerHTML = 0 + "0";
  secoundsElement.innerHTML = 0 + "0";
  hourElement.innerHTML = 0 + "0";
};

startBtn.addEventListener("click", startWatch);
stopBtn.addEventListener("click", stopWatchFn);
resetBtn.addEventListener("click", resetWatchFn);
