let number = Number(document.querySelector("span").textContent);

const btn = document.querySelector("button");

//* Variable intervalVariable MUSS als globaler Scope definiert werden, damit sie von beiden Funktionen verwendet werden kann
let intervalVariable;

const countdown = () => {
	if (number === 0) {
		clearInterval(intervalVariable);
	} else if (number > 0) {
		number--;
		document.querySelector("span").textContent = number;
	}
};

btn.addEventListener("click", () => {
	intervalVariable = setInterval(countdown, 100);
});
