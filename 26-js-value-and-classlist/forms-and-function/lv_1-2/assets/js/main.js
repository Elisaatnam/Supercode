function calcAge() {
	const output = document.querySelector(".output");

	let currentYear = new Date().getFullYear();

	let age = Number(document.querySelector(".birthYear").value);

	output.innerHTML = currentYear - age;
}
