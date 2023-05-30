const submitBtn = document.getElementById("submit-btn");
let inputAge = document.getElementById("input-age");
let age;

submitBtn.addEventListener("click", event => {
	event.preventDefault();
	age = Number(inputAge.value);
	if (age >= 18) {
		console.log(true);
		document.getElementById("output").innerHTML = "over 18";
	} else {
		console.log(false);
		document.getElementById("output").innerHTML = "under 18";
	}
});
