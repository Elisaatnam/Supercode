const homeButton1 = document.querySelector("#home-button-1");
const homeButton2 = document.querySelector("#home-button-2");
const homeButton3 = document.querySelector("#home-button-3");
const resetButton = document.querySelector("#delete");
const homeScoreField = document.querySelector("#homeScoreField");

let homeScore = 0;

homeButton1.addEventListener("click", () => {
	homeScore++;
	homeScoreField.innerHTML = homeScore;
});

homeButton2.addEventListener("click", () => {
	homeScore += 2;
	homeScoreField.innerHTML = homeScore;
});

homeButton3.addEventListener("click", () => {
	homeScore += 3;
	homeScoreField.innerHTML = homeScore;
});

resetButton.addEventListener("click", () => {
	homeScore = 0;
	homeScoreField.innerHTML = homeScore;
});
