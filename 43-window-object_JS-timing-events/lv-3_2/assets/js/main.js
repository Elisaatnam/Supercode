//! GLOBAL SCOPES
const timeOutput = document.querySelector("#time");
let intervalVar;

// * Funktion zur Formatierung der Sec und Min
const updateTimeOutput = (minutes, seconds) => {
	const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
	const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
	timeOutput.textContent = `${formattedMinutes}:${formattedSeconds}`;
};

// * das ist dafuer da, dass die Funktion nur 1x gestartet werden kann
let startExecuted = false;
let restartExecuted = false;

//! startMinCountdown Funktion
const startMinCountdown = () => {
	event.preventDefault();

	if (startExecuted === false) {
		let minutes = Number(document.querySelector("#minutes").value);
		let seconds = 0;
		updateTimeOutput(minutes, seconds);

		intervalVar = setInterval(() => {
			if (minutes === 0 && seconds === 1) {
				clearInterval(intervalVar);
			}

			if (seconds === 0) {
				minutes--;
				seconds = 59;
			} else {
				seconds--;
			}

			updateTimeOutput(minutes, seconds);

			startExecuted = true;
		}, 1000);
	}
};

//! pauseMinCountdown Funktion
const pauseMinCountdown = () => {
	clearInterval(intervalVar);
	restartExecuted = false;
};

//! restartMinCountdown Funktion
const restartMinCountdown = () => {
	event.preventDefault();

	if (restartExecuted === false) {
		//hole mir den aktuellen wert aus dem Timeoutput ist ein String!
		const stoppedTime = timeOutput.textContent;

		//minuten ausschneiden und in eine Nummer zurueck verwandeln
		let minutes = Number(stoppedTime.slice(0, 2));

		//sekunden ausschneiden und in eine Nummer zurueck verwandeln
		let seconds = Number(stoppedTime.slice(3));

		//ab jetzt exakt selbe funktion wie bei startMinCountdown
		intervalVar = setInterval(() => {
			if (minutes === 0 && seconds === 1) {
				clearInterval(intervalVar);
			}

			if (seconds === 0) {
				minutes--;
				seconds = 59;
			} else {
				seconds--;
			}

			updateTimeOutput(minutes, seconds);

			restartExecuted = true;
		}, 1000);
	}
};

//! reset Funktion
const reset = () => {
	clearInterval(intervalVar);
	timeOutput.textContent = "00:00";
	document.querySelector("#minutes").value = "";
	startExecuted = false;
	restartExecuted = false;
};

class Hover3D {
	constructor(id) {
		this.id = id;
		this.xOffset = 10;
		this.yOffset = 10;
		this.attack = 0.1;
		this.release = 0.5;
		this.perspective = 500;
		this.create();
	}

	create() {
		document.querySelectorAll("#time").forEach(element => {
			const rectTransform = element.getBoundingClientRect();
			const perspective = "perspective(" + this.perspective + "px) ";
			element.style.setProperty("transform-style", "preserve-3d");

			element.addEventListener("mouseenter", e => {
				element.style.setProperty(
					"transition",
					"transform " + this.attack + "s",
				);
			});

			element.addEventListener("mousemove", e => {
				let dy = e.clientY - rectTransform.top;
				let dx = e.clientX - rectTransform.left;
				let xRot = this.map(
					dx,
					0,
					rectTransform.width,
					-this.xOffset,
					this.xOffset,
				);
				let yRot = this.map(
					dy,
					0,
					rectTransform.height,
					this.yOffset,
					-this.yOffset,
				);
				let propXRot = "rotateX(" + yRot + "deg) ";
				let propYRot = "rotateY(" + xRot + "deg)";

				element.style.setProperty(
					"transform",
					perspective + propXRot + propYRot,
				);
			});

			element.addEventListener("mouseleave", e => {
				element.style.setProperty(
					"transition",
					"transform " + this.release + "s",
				);
				element.style.setProperty(
					"transform",
					perspective + "rotateX(0deg) rotateY(0deg)",
				);
			});
		});
	}
	// Processing map() function
	map(value, istart, istop, ostart, ostop) {
		return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
	}
}
