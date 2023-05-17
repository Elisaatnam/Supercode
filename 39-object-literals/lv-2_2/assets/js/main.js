const singers = [
	{
		name: "The Beatles",
		country: "United Kingdom",
		period_active: { start: 1960, end: 1970 },
		genre: "Rock / Pop",
	},
	{
		name: "Elvis Presley",
		country: "United States",
		period_active: { start: 1954, end: 1977 },
		genre: "Rock and roll",
	},
	{
		name: "Michael Jackson",
		country: "United States",
		period_active: { start: 1964, end: 2009 },
		genre: "Pop / Rock / Dance / Soul / R&B",
	},
	{
		name: "Elton John",
		country: "United Kingdom",
		period_active: { start: 1964, end: "present" },
		genre: "Pop / Rock",
	},
	{
		name: "Madonna",
		country: "United States",
		period_active: { start: 1979, end: "present" },
		genre: "Pop / Dance / Electronica",
	},
	{
		name: "Led Zeppelin",
		country: "United Kingdom",
		period_active: { start: 1968, end: 1980 },
		genre: "Hard rock / Blues rock / Folk rock",
	},
	{
		name: "Rihanna",
		country: "United States",
		period_active: { start: 2005, end: "present" },
		genre: "R&B / Pop / Dance / Hip-hop",
	},
	{
		name: "Pink Floyd",
		country: "United Kingdom",
		period_active: { start: 1965, end: 1996, extra: 2014 },
		genre: "Progressive rock / Psychedelic rock",
	},
];

singers.sort(function (a, b) {
	if (a.name < b.name) return -1;
	//ternary operator
	return a.name > b.name ? 1 : 0;
});

console.log(singers);

// ! Erklaerung: Der Code ab Zeile 52 verwendet die sort-Methode, um das Array singers zu sortieren. Die sort-Methode erwartet eine Vergleichsfunktion als Parameter, die definiert, wie die Elemente im Array sortiert werden sollen. In diesem Fall verwenden wir eine anonyme Funktion als Vergleichsfunktion. Die Vergleichsfunktion vergleicht zwei Sängerobjekte a und b anhand ihrer name-Eigenschaften.

//! Wenn a.name (der Name von Sängerobjekt a) kleiner ist als b.name (der Name von Sängerobjekt b), wird -1 zurückgegeben. Dies bedeutet, dass a vor b sortiert werden soll.

//! Wenn a.name größer als b.name ist, wird der ternary operator verwendet, um zu überprüfen, ob a.name größer als b.name ist. Wenn dies der Fall ist, wird 1 zurückgegeben, was bedeutet, dass b vor a sortiert werden soll.

//! Wenn a.name und b.name gleich sind, wird 0 zurückgegeben, was bedeutet, dass die Reihenfolge der beiden Sängerobjekte beibehalten wird.

//? Durch die Verwendung dieser Vergleichsfunktion sortiert der Code das Array singers basierend auf den Namen der Sänger in aufsteigender Reihenfolge. Das bedeutet, dass die Sänger alphabetisch sortiert werden, wobei Sänger mit einem früheren Namen vor Sängern mit einem späteren Namen stehen.
