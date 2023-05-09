let languages = [
	"JavaScript",
	"Python",
	"Java",
	"Ruby",
	"PHP",
	"C++",
	"CSS",
	"C#",
	"Go",
	"C",
	"TypeScript",
	"Swift",
];

console.log(languages.sort());

console.log("%c lv 1_2 ", "color: white; background-color: blue");
let languages2 = [
	"JavaScript",
	"Python",
	"Java",
	"Ruby",
	"PHP",
	"C++",
	"CSS",
	"C#",
	"Go",
	"C",
	"TypeScript",
	"Swift",
];

console.log(languages2.sort());
console.log(languages2.reverse());

// sort von klein nach gross
console.log("%c lv 1_3 ", "color: white; background-color: blue");
var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(numArray1.sort((a, b) => a - b));

// sort von gross nach klein
console.log("%c lv 2_2 ", "color: white; background-color: blue");
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

console.log(numArray2.sort((a, b) => b - a));
