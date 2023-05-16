const submit = document.querySelector("#save");
const liste = document.querySelector("ul");
const userInput = document.querySelector("#userinput");

const addItem = () => {
	let inputText = userInput.value;
	console.log(inputText);
	let newListItem = document.createElement("li");
	newListItem.innerText = inputText;

	if (inputText == "") {
		window.alert("Bitte Artikel eingeben");
	} else {
		liste.appendChild(newListItem);
		//setzt inputfeld zurueck
		userInput.value = "";
	}
};

submit.addEventListener("click", () => {
	addItem();
});

//beim betaetigen/loslassen der enter taste wirde ebenfalls die funktion addItem losgetreten
userInput.addEventListener("keyup", event => {
	if (event.keyCode === 13) {
		addItem();
	}
});
