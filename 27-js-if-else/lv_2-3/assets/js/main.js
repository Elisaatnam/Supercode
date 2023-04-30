function randomNum() {
	let num = document.querySelector("#random").value;
	num -= 27;

	if (num > 27) {
		console.log("multiplizier " + num * 2);
	}
}
