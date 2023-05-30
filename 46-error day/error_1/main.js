console.log("JavaScript ist verbunden");

const hi_button = document.querySelector("#hi_button");
const goodbye_button = document.querySelector("#goodbye");

hi_button.addEventListener("click", () => {
	console.log("Hi");
});

goodbye_button.addEventListener("click", () => {
	console.log("Goodbye");
});
