const output = document.querySelector("#output");

let counter = 0;

const changeBackground = color => {
	counter++;
	document.body.style.backgroundColor = color;
	output.innerHTML = `Du hast ${counter} Mal die Farbe geaendert.`;
};

const changeHandle = () => {
	let r = document.querySelector("#rot").value;
	console.log(r);
	let g = document.querySelector("#grun").value;
	console.log(g);
	let b = document.querySelector("#blau").value;
	console.log(b);

	document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

	// ========RGB in HEX umwandeln=============
	function valueToHex(c) {
		var hex = c.toString(16);
		return hex;
	}

	function rgbToHex(r, g, b) {
		return "#" + valueToHex(r) + valueToHex(g) + valueToHex(b);
	}

	// RGB und Hex(=> Funktionsaufruf) ausgeben
	output.innerHTML = `rgb(${r},${g},${b}) => ${rgbToHex(
		parseInt(r),
		parseInt(g),
		parseInt(b),
	)}`;
};
