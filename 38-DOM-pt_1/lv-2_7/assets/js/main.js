const umwickelnDiv = document.querySelector(".umwickeln");
const btn = document.querySelector("button");

let counter = 0;

btn.addEventListener("click", () => {
	const newDiv = document.createElement("div");
	newDiv.innerText = counter;
	umwickelnDiv.appendChild(newDiv);
	if (counter % 10 === 0) {
		newDiv.classList.add("weiss");
	} else {
		newDiv.classList.add("rechteck");
	}
	counter++;
});
