function multiply() {
	const output = document.querySelector(".output");

	let num = Number(document.querySelector(".num").value);
	console.log(num);

	output.innerHTML = num + " * 2 = " + num * 2;
}
