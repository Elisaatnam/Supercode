function calcDiff() {
	const output = document.querySelector(".output");

	let age1 = Number(document.querySelector("#age1").value);
	let age2 = Number(document.querySelector("#age2").value);

	output.innerHTML = "The difference is: " + (age1 - age2);
}
