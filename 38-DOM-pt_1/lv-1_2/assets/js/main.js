const allElmClassExample = document.querySelectorAll(".example");
console.log(allElmClassExample);

const myFunction = () => {
	allElmClassExample.forEach(htmlElement => {
		htmlElement.style.backgroundColor = "black";
	});
};

//reset alternative
/* const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () => {
	allElmClassExample.forEach(htmlElement => {
		htmlElement.style.backgroundColor = "grey";
	});
}); */
