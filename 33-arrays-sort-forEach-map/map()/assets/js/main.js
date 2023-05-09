//Lv 1_2
console.log("%c Lv 1_2 ", "color: red;");
let getraenke = [
	"Coca-Cola",
	"Apfelsaft",
	"Pepsi",
	"Traubensaft",
	"Sprite",
	"Orangensaft",
	"Red Bull Energy Drink",
	"Fanta",
];

console.log(getraenke.map(beverage => beverage.toUpperCase()));
console.log(getraenke); // ist wieder normal, weil map() den Ursprungsarray nicht veraendert

//Lv 1_3
console.log("%c Lv 1_3 ", "color: red;");
let array = [
	18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
	74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

console.log(array);

let arrayTimes2 = array.map(multi => multi * 2);
console.log(arrayTimes2.sort((a, b) => a - b));

//Lv 1_4
console.log("%c Lv 1_4 ", "color: red;");
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
console.log({ fahrenheit });
console.log(fahrenheit);

let celsius = fahrenheit.map(temp => Math.round((temp - 32) / 1.8));
console.log({ celsius });
console.log(celsius);
