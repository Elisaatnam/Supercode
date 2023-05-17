let myMusic = [
	{
		artist: "The Beatles",
		title: "Abbey Road",
		release_year: 1969,
		medium: ["LP", "CD", "MC", "Download"],
		gold: true,
	},
	{
		artist: "Pink Floyd",
		title: "Dark Side of the Moon",
		release_year: 1978,
		medium: ["CS", "CD", "LP", "Download"],
		gold: true,
	},
	{
		artist: "Led Zeppelin",
		title: "Led Zeppelin IV",
		release_year: 1971,
		medium: ["CS", "LP", "Download"],
		gold: true,
	},
	{
		artist: "Metallica",
		title: "Kill ’Em All und Ride the Lightning",
		release_year: 1983,
		medium: ["LP", "CD", "MC", "Download"],
		gold: true,
	},
];

//callback function!!!
myMusic.forEach(myMusicObject => {
	console.log(myMusicObject.artist);
	console.log(myMusicObject.title);
	console.log(myMusicObject.medium);

	const html = `<div>
        <p>${myMusicObject.artist}</p>
        <p>${myMusicObject.title}</p>
        <p>${myMusicObject.medium}</p>
        </div><br>`;

	document.body.insertAdjacentHTML("beforeend", html);

	if (myMusicObject.release_year > 1975) {
		const html2 = `<p>	&uarr; Diese Album wurden nach 1975 veroeffentlicht!</p> <br>`;
		document.body.insertAdjacentHTML("beforeend", html2);
	}
});
