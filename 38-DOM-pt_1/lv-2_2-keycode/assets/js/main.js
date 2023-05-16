const h2 = document.querySelector("h2");
const keyVal = document.querySelector(".key-val");
const keyCodeVal = document.querySelector(".key-code-val");
const codeVal = document.querySelector(".code-val");

// Code, der ausgeführt wird, wenn eine Taste gedrückt wird
document.addEventListener("keydown", function (event) {
	console.log(`Taste ${event.key} wurde gedrückt!`);
	h2.innerHTML = event.keyCode;
	keyVal.innerHTML = event.key;
	keyCodeVal.innerHTML = event.keyCode;
	codeVal.innerHTML = event.code;
});
