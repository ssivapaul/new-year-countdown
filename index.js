const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const countDown = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const d = Math.floor(countDown / day);
  const h = Math.floor((countDown % day) / hour);
  const m = Math.floor((countDown % hour) / minute);
  const s = Math.floor((countDown % minute) / second);

  dayEl.innerText = d;
  hourEl.innerText = h < 10 ? "0" + h : h;
  minuteEl.innerText = m < 10 ? "0" + m : m;
  secondEl.innerText = s < 10 ? "0" + s : s;

  setTimeout(updateCountdown, 1000);
}
