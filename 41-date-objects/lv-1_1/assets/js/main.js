const body = document.querySelector("body");

let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800);
let date4 = new Date(86400000);

//body.innerHTML = `${date1} <br> ${date2} <br> ${date3} <br> ${date4}`;

let dateObj = [];
dateObj.push(date1, date2, date3, date4);
console.log(dateObj);

dateObj.forEach(arrayElem => {
	body.innerHTML += `${arrayElem}<br>`;
});
