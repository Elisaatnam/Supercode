function changeBackground() {
	let r = Number(document.querySelector("#red").value);
	let g = Number(document.querySelector("#green").value);
	let b = Number(document.querySelector("#blue").value);

	console.log(r, g, b);

	//String Concatenation
	let bgColor = "rgb(" + r + ", " + g + ", " + b + ")";
	console.log(bgColor);

	document.querySelector("body").style.backgroundColor = bgColor;

	let output = document.querySelector(".output");
	output.innerHTML = "Here is your rgb code: " + bgColor;
}
