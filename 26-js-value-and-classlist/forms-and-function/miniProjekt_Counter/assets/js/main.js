let output = document.querySelector(".output");
let counterState = Number(output.innerText);

const add1 = document.querySelector(".add1");
add1.addEventListener("click", () => {
	output.innerText = counterState += 1;
});

const sub1 = document.querySelector(".sub1");
sub1.addEventListener("click", () => {
	output.innerText = counterState -= 1;
});

const add10 = document.querySelector(".add10");
add10.addEventListener("click", () => {
	output.innerText = counterState += 10;
});

const sub10 = document.querySelector(".sub10");
sub10.addEventListener("click", () => {
	output.innerText = counterState -= 10;
});

const add100 = document.querySelector(".add100");
add100.addEventListener("click", () => {
	output.innerText = counterState += 100;
});

const sub100 = document.querySelector(".sub100");
sub100.addEventListener("click", () => {
	output.innerText = counterState -= 100;
});

const mul2 = document.querySelector(".mul2");
mul2.addEventListener("click", () => {
	output.innerText = counterState *= 2;
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
	output.innerText = counterState = 0;
});
