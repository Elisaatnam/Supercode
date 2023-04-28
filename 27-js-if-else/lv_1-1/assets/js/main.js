function checkAge() {
	const output = document.querySelector(".output");
	const inputAge = Number(document.querySelector("#age").value);

	if (inputAge >= 18) {
		output.innerHTML = "of age";
	} else {
		output.innerHTML = "underage";
	}
}
