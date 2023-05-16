const changeMeBtn = document.querySelector("#navChange");
const homeBtn = document.querySelector("#navHome");

changeMeBtn.addEventListener("click", () => {
	homeBtn.style.color = "black";
	homeBtn.style.backgroundColor = "pink";
	homeBtn.style.transform = "scaleX(-1)";
});
