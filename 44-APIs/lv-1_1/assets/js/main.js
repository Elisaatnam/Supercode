//! Variante 1 - Lokal
fetch("../assets/js/fakeData.json")
	.then(res => res.json())
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log("Fehler: ", err);
	});

//! Variante 2 - URL
fetch("https://picsum.photos/v2/list")
	.then(res => res.json())
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log("Fehler: ", err);
	});
