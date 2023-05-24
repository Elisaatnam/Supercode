//! 1a
//console.log("Start: Warten fuer 3 Sekunden");
//setTimeout(() => {
//	console.log("Herzlichen Glueckwunsch, du hast 3 Sekunden verschwendet");
//}, 3000);

//! 1b

let counter = 11;

const countdown = () => {
	if (counter === 1) {
		clearInterval(clearVar);
		console.log("Endlich Feierabend");
	} else {
		counter--;
		console.log(counter);
	}
};

const clearVar = setInterval(countdown, 1000);
