const output = document.querySelector(".output");
let counterState = 0;
output.innerHTML = counterState;

function cal(addSub) {
	counterState += addSub;
	output.innerHTML = counterState;
}

function multi() {
	counterState *= 2;
	output.innerHTML = counterState;
}

function reset() {
	counterState = 0;
	output.innerHTML = counterState;
}
