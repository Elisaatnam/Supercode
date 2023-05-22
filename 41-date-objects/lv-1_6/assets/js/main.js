let date1 = new Date(1999, 10, 5, 15);
let date2 = new Date();
let date3 = new Date(2019, 12, 3, 12);
let date4 = new Date(2000, 1, 1, 11);

const amOrPm = object => {
	let amPm = object.getHours() < 12 ? "AM" : "PM";
	return amPm;
};

console.log(amOrPm(date1));
console.log(amOrPm(date2));
console.log(amOrPm(date3));
console.log(amOrPm(date4));
