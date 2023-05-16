const output = document.querySelector("output");

//Buttons
const btn1 = document.querySelector(".one");
const btn2 = document.querySelector(".two");
const btn3 = document.querySelector(".three");
const btn4 = document.querySelector(".four");

//console.log(document.querySelector("ul").firstElementChild.innerText);

const getList = document.querySelector("ul");
console.log(getList);

btn1.addEventListener("click", () => {
	output.innerHTML = getList.firstElementChild.innerText;
});

btn2.addEventListener("click", () => {
	output.innerHTML = getList.lastElementChild.innerText;
});

btn3.addEventListener("click", () => {
	output.innerHTML = getList.firstElementChild.nextElementSibling.innerText;
});

btn4.addEventListener("click", () => {
	output.innerHTML = getList.lastElementChild.previousElementSibling.innerText;
});
