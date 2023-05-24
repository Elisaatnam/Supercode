const startTime = () => {
	let date = new Date();
	document.getElementById("txt").innerHTML = date.toLocaleTimeString();
};

setInterval(startTime, 1000);
