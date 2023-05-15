/* Level 1_5 Click counter */
const clickMeBtn = document.querySelector(".klickzaehler button");
const clickMeOutput = document.querySelector(".klickzaehler span");
let countVal = 0;

clickMeBtn.addEventListener("click", () => {
	clickMeOutput.innerHTML = countVal++;
});

/* Level 1_6 Events addEventListener("change")
 */
const selectField = document.querySelector(".change select");
const output = document.querySelector(".change p");

selectField.addEventListener("change", () => {
	output.innerHTML = `You chose: ${selectField.value}`;
});

/* Level 1_9 Remove List Element */
const removeBtn = document.querySelector(".remove button");
const selectedColor = document.querySelector("#farbeAuswahlen");

removeBtn.addEventListener("click", () => {
	event.preventDefault();
	selectedColor.remove(selectedColor.selectedIndex);
});

/* 2_4: DOM Background Colors */
const chnageBgSection = document.querySelector(".change-bg");
const changeBgBtn = document.querySelector(".change-bg button");
const selectedColor2 = document.querySelector("#farbeAuswahlen2");

changeBgBtn.addEventListener("click", () => {
	event.preventDefault();

	//variable color bekommt die value von selectedColor2 ohne Leerzeichen und kleingeschrieben
	let color = selectedColor2.value.replace(" ", "").toLowerCase();

	//kontrolle
	console.log(color);

	//nun die bg color aendern
	chnageBgSection.style.backgroundColor = color;
});
