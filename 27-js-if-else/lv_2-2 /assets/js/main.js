const bg = document.querySelector("body");
const aqiOutput = document.querySelector("span");
const concern = document.querySelector(".concern");
const effect = document.querySelector(".effect");
function checkAirQuality() {
	let aqi = document.querySelector("#range").value;
	aqiOutput.innerHTML = aqi;

	if (aqi <= 50) {
		bg.classList.add("green");
		bg.classList.remove("yellow", "orange");
		concern.innerHTML = "Level of health concern: Good";
		effect.innerHTML = "Level of health effect: Little or no risk";
	} else if (aqi > 50 && aqi <= 100) {
		bg.classList.add("yellow");
		bg.classList.remove("green", "orange");
		concern.innerHTML = "Level of health concern: Moderate";
		effect.innerHTML = "Level of health effect: Acceptable quality";
	} else {
		bg.classList.add("orange");
		bg.classList.remove("green", "yellow");
		concern.innerHTML =
			"Level of health concern: Unhealthy for sensitive groups";
		effect.innerHTML =
			"Level of health effect: Generable publics not likely affected";
	}
}
