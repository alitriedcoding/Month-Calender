const monthEl = document.querySelector(".date h1");
const fulDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

let monthinx = new Date().getMonth();
// this is for lastday of the month
let lastday = new Date(new Date().getFullYear(), monthinx + 1, 0).getDate();
// this is for fistday of the month
let firstday = new Date(new Date().getFullYear(), monthinx, 1).getDay() - 1;

const month = [
  "Junuary",
  "February",
  "March",
  "April",
  "May",
  "June",
  "july",
  "Augest",
  "September",
  "October",
  "November",
  "December",
];

monthEl.innerHTML = month[monthinx];
fulDateEl.innerHTML = new Date().toDateString();

let days = "";
for (let i = firstday; i > 0; i--) {
  days += ` <div class="emty";></div>`;
}

for (let i = 1; i <= lastday; i++) {
  if (i == new Date().getDate()) {
    days += ` <div class="todaydate";>${i}</div>`;
  } else days += ` <div>${i}</div>`;
}

daysEl.innerHTML = days;
