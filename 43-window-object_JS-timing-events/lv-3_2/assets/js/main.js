const timeOutput = document.querySelector("#time");
let intervalVar;

const startMinCountdown = () => {
	event.preventDefault();

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
	}, 1000);
};

const updateTimeOutput = (minutes, seconds) => {
	const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
	const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
	timeOutput.textContent = `${formattedMinutes}:${formattedSeconds}`;
};

const pauseMinCountdown = () => {
	clearInterval(intervalVar);
};

const restartMinCountdown = () => {
	event.preventDefault();
	//hole mir den aktuellen wert aus dem Timeoutput ist ein String!
	const stoppedTime = timeOutput.textContent;

	//minuten ausschneiden und in eine Nummer zurueck verwandeln
	let minutes = Number(stoppedTime.slice(0, 2));

	//sekunden ausschneiden und in eine Nummer zurueck verwandeln
	let seconds = Number(stoppedTime.slice(3));

	//ab jetzt exakt selbe funktion wie bei startMinCountdown
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
	}, 1000);
};
