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

// getraenke sortieren und jedes im HTML ausgeben plus <br>
getraenke.sort().forEach(beverage => document.write(beverage + "<br>"));

//Lv 1_5
let checkNumber = [
	18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
	74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

let checkNumberDiv3 = checkNumber.map(elmnt => {
	if (elmnt % 3 === 0) {
		elmnt = elmnt + 100;
	}
	return elmnt;
});

console.log(checkNumberDiv3);

//Alternative
/* let div3 = checkNumber.map(durchDrei => {
	return durchDrei % 3;
});

console.log(div3);

checkNumber = checkNumber.map((number, index) => {
	if (div3[index] === 0) {
		return number + 100;
	} else {
		return number;
	}
});

console.log(checkNumber); */

//Lv 1_6
let album = [
	"holidays.jpg",
	"Restaurant.jpg",
	"desktop",
	"rooms.GIF",
	"DOGATBEACH.jpg",
];

let newAlbum = album.map(elmnt =>
	elmnt.indexOf(".") === -1
		? (elmnt = "invalid")
		: elmnt.slice(0, elmnt.indexOf(".")).toLowerCase(),
);

console.log({ newAlbum });
console.log(newAlbum);
