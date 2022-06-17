const firstBall = document.querySelector(".ball-1");
const secondBall = document.querySelector(".ball-2");
const thirdBall = document.querySelector(".ball-3");
const redtimer = document.querySelector(".redtimer");
const greentimer = document.querySelector(".greentimer");
let timeFirst = 10;
const timer = setInterval(() => {
  timeFirst = timeFirst % 60;
  timeFirst--;
  redtimer.textContent = timeFirst;
  if (timeFirst === 0) {
    clearInterval(timer);
  }
}, 1000);
setTimeout(() => {
  firstBall.classList.remove("red");
  secondBall.classList.add("yellow");
}, 10000);
setTimeout(() => {
  secondBall.classList.remove("yellow");
  thirdBall.classList.add("green");
  redtimer.classList.add("hide");
  greentimer.classList.remove("hide");
  let timeSecond = 20;
  const timer = setInterval(() => {
    timeSecond = timeSecond % 60;
    timeSecond--;
    greentimer.textContent = timeSecond;
    if (timeSecond === 0) {
      clearInterval(timer);
      location.reload();
    }
  }, 1000);
}, 13000);