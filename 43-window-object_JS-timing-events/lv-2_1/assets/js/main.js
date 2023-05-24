const message = document.querySelector(".message");
let count = Number(document.querySelector("#count").textContent);
console.log(count);
const countOutput = document.querySelector("#count");

let intervalFunctionVariable = setInterval(() => {
	count--;
	countOutput.textContent = count;
	if (count === 0) {
		clearInterval(intervalFunctionVariable);
		message.style.opacity = "0";
		message.style.transition = "opacity .5s ease";
	}
}, 1000);
