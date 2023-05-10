// Lv 1_1
console.log("%c Lv 1_1", "color: red");

for (let i = 1; i <= 10; i++) {
	console.log(`Hello World ${i}`);
}

// Lv 1_2
console.log("%c Lv 1_2", "color: red");

let numArray = [];

for (let i = 0; i <= 10; i++) {
	numArray.push(i);
}

console.log(numArray);

// Lv 1_4
console.log("%c Lv 1_4", "color: red");

let names = [
	"Freddy",
	"Steffen",
	"Finn",
	"Julia",
	"Farid",
	"Christian",
	"Sergio",
];

for (let i of names) {
	console.log(i);
}

// Lv 2_1
console.log("%c Lv 2_1", "color: red");

let imgArray = [];

for (i = 1; i <= 100; i++) {
	if (i < 10) {
		imgArray.push(`image_00${i}`);
	} else if (i < 100) {
		imgArray.push(`image_0${i}`);
	} else {
		imgArray.push(`image_${i}`);
	}
}

console.log(imgArray);
console.log({ imgArray });

// Lv 2_2
console.log("%c Lv 2_2", "color: red");

//output definieren
const output = document.querySelector(".output");

//loop() function ---> onsubmit
function loop() {
	//inputfeld auselsen
	let num = Number(document.querySelector("#num").value);

	// die anzahl der Buchstaben "O" ist zunaechst null/ leer
	let anzahlO = "";

	//fuegt je nach input Buchstaben hinzu, also bei null - null mal "O", bei 1 - 1 mal "O", bei 2 - 2 mal "O" usw....
	for (let i = 0; i < num; i++) {
		anzahlO += "O";
	}
	//Kontrolle ob es geklappt hat
	//console.log(anzahlO.length);

	//gibt L und P mit "O" aus, je nachdem welche zahl im input eingegeben wurde
	output.innerHTML = `L${anzahlO}P`;
}

// Lv 3_2
console.log("%c Lv 2_3", "color: red");

let numArr = [5, 22, 15, 100, 55];
const output2 = document.querySelector(".output2");

//nested loop
//zuerst der Loop fuer die length des Arrays in diesem Falle 5 durchlaeufe = also fuer jede Zahl des Arrays ein Loop
for (let i = 0; i < numArr.length; i++) {
	//nun wird  in dem eingenisteten Loop fuer jede Zahl des Arrays geschaut, durch welche Zahl sie teilbar ist (j = 2 weil nicht geschaut werden soll ob die Zahl  durch 1 teilbar ist & j < numArr[i], weil nicht geschaut werden soll ob die Zahl  durch sich selbst teilbar ist)
	for (let j = 2; j < numArr[i]; j++) {
		//console.log(numArr[i]);
		//console.log(j);

		// wenn numArr[i] durch eine Zahl (j) teilbar ist, dann wird folgendes im output2.innerHTML ausgegeben
		if (numArr[i] % j === 0) {
			output2.innerHTML += `Die zahl ${
				numArr[i]
			} ist teilbar durch ${j}! Das Ergenis ist ${numArr[i] / j} <br> `;
		}
	}
}

// Lv 3_3
console.log("%c Lv 3_3", "color: red");

//output definieren
const output3 = document.querySelector(".output3");

//loop2() function ---> onsubmit
function loop2() {
	//inputfeld auselsen
	let num2 = Number(document.querySelector("#num2").value);

	// die anzahl der Buchstaben "O" ist zunaechst null/ leer
	let anzahlO = "";

	// wenn input nummer gleich null dann wird "ERROR" ausgegeben
	if (num2 === 0) {
		output3.innerHTML = "ERROR";
	}

	//fuegt je nach input Buchstaben hinzu, also bei null - null mal "O", bei 1 - 1 mal "O", bei 2 - 2 mal "O" usw....
	else {
		for (let i = 0; i < num2; i++) {
			//wenn input nummer gerade dann nur kleines "o"
			if (num2 % 2 === 0) {
				anzahlO += "o";
			}
			//wenn input nummer ungerade dann "o" und "O" im Wechsel
			else {
				if (i % 2 === 0) {
					anzahlO += "o";
				} else {
					anzahlO += "O";
				}
			}
		}
		output3.innerHTML = `L${anzahlO}P`;
	}
}
