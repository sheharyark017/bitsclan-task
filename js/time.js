const clock = document.getElementById("header-clock");
const timer = document.getElementById("timer");
const avgMinutes = document.getElementById("minutes");
const calendarYear = document.getElementById("calendar-year");
const calendarDate = document.getElementById("calendar-date");

setInterval(function () {
  const fullDate = new Date();
  const year = new Date().getFullYear();
  const month = fullDate.toLocaleString("default", { month: "short" });
  const date = new Date().getDate();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const am = hours > 12 ? "PM" : "AM";
  const hours2 = hours > 12 ? hours - 12 : hours;

  calendarYear.innerHTML = year;
  calendarDate.innerHTML = `${date} ${month}`;

  clock.innerHTML = `${hours2 < 10 ? "0" + hours2 : hours2}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${am}`;
}, 1000);

const avgTimeSec = 185;

const min = parseInt(avgTimeSec / 60);
const sec = avgTimeSec % 60;

avgMinutes.innerHTML = `${min < 10 ? "0" + min : min}:${
  sec < 10 ? "0" + sec : sec
}`;

timer.style.strokeDasharray = 440 - (440 * avgTimeSec) / 3600;
