let monate = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

let wochenTag = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

// #Level 1_1
/* const body = document.querySelector("body");

let currentDate = new Date();
body.innerHTML = `${currentDate}<br>Jahr: ${currentDate.getFullYear()}<br>Monat: ${currentDate.getMonth()}<br>Tag: ${currentDate.getDate()}<br>Stunde: ${currentDate.getHours()}<br>Minute: ${currentDate.getMinutes()}<br>Weekday: ${
	wochenTag[currentDate.getDay()]
}<br>Month: ${monate[currentDate.getMonth()]}`; */

//! Level 1_2 Digital Clock

const dateOutput = document.querySelector("#dateOutput");
const timeOutput = document.querySelector("#timeOutput");

const showTime = () => {
	let date = new Date();
	let year = date.getFullYear();
	let month = monate[date.getMonth()];
	let day = date.getDate();
	let weekDay = wochenTag[date.getDay()];

	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();
	let amPm = "AM";

	if (h == 0) {
		h = 12;
	}

	if (h > 12) {
		h = h - 12;
		amPm = "PM";
	}
	//sellt sicher, dass die Stunden, Minuten und Sekunden immer mit führender Null angezeigt werden, wenn sie kleiner als 10 sind
	//Ternary Operator
	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;

	timeOutput.innerHTML = `<p>${weekDay}, ${h}:${m}:${s} ${amPm}</p>`;
	setTimeout(showTime, 1000);

	dateOutput.innerHTML = `<p class="white-bg">${year}-${month}-${day}`;
};

showTime();
