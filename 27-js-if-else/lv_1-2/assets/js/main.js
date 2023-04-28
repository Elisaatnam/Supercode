const output = document.querySelector(".output");

function weather() {
	let qual = document.querySelector("#num").value;
	if (qual <= 10 && qual >= 8) {
		output.innerHTML = " super";
	} else if (qual == 7 || qual == 6) {
		output.innerHTML = " gut";
	} else if (qual <= 5 && qual >= 3) {
		output.innerHTML = " okay";
	} else if (qual <= 2 && qual >= 0) {
		output.innerHTML = " schlecht";
	} else {
		output.innerHTML = "Bitte Zahl zwischen 1 und 10 eingeben";
	}
}
