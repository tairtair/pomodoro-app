const countdownEl = document.querySelector('.circles__countdown');
const countdownArr = countdownEl.textContent.split(':');
let countdownTime = +countdownArr[0] * 60;
let minutes = Math.floor(countdownTime / 60);
let seconds = countdownTime % 60;
console.log(countdownTime);
const increaseBtn = document.querySelector('.buttons__btn--plus');
const decreaseBtn = document.querySelector('.buttons__btn--minus');
const buttonsCont = document.querySelector('.buttons');
const updateClock = (min = minutes, sec = seconds) =>
  (countdownEl.textContent = `${min >= 10 ? min : '0' + min}:${
    sec >= 10 ? sec : '0' + sec
  }`);
const startCountdown = () => {};
buttonsCont.addEventListener('click', function (e) {
  const btn = e.target;
  if (!btn.closest('.buttons__btn')) return;
  if (btn.classList.contains('buttons__btn--plus')) {
    minutes <= 55 && (minutes += 5) && (countdownTime += 300);
    console.log(countdownTime);
  }
  if (btn.classList.contains('buttons__btn--minus')) {
    minutes >= 10 && (minutes -= 5) && (countdownTime -= 300);
    console.log(countdownTime);
  }
  if (btn.classList.contains('buttons__btn--start')) {
    setInterval(function () {
      countdownTime--;
      console.log(countdownTime);
      updateClock(Math.floor(countdownTime / 60), countdownTime % 60);
    }, 1000);
  }
  updateClock();
});
