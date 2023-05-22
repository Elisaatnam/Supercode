let list = [
	"Januar",
	"Februar",
	"März",
	"April",
	"Mai",
	"Juni",
	"Juli",
	"August",
	"September",
	"Oktober",
	"November",
	"Dezember",
];

const monatsName = (jahr, monat, tag) => {
	let ergebnis = list[monat - 1];
	return ergebnis;
};

console.log(monatsName(2001, 3, 4));
console.log(monatsName(2019, 12, 24));
console.log(monatsName(1410, 07, 15));
