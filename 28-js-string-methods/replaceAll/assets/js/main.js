//variante 1
/*  function highlight() {
	let searchInput = String(document.querySelector("#search-input").value);
	console.log(searchInput);
	let newArticle = String(document.querySelector("article").innerText);
	console.log(newArticle);
	newArticle = newArticle.replaceAll(
		searchInput,
		"<span>" + searchInput + "</span>",
	);
	console.log(newArticle);
	document.querySelector("article").innerHTML = newArticle;

	let highlighted = document.querySelectorAll("span");

	highlighted.forEach(span => {
		span.classList.add("highlight");
	});
} */

//variante 2
const article = document.querySelector("article");
const output = document.querySelector(".output");

function highlight() {
	//alles zurücksetzen, falls vorher schon eine Suche lief, dann alle <span>'s entfernen
	article.innerHTML = article.innerHTML.replaceAll("<span>", " ");

	let input = document.querySelector("#search-input").value;

	//wenn im article.innerText der input vorkommt, dann wird jeder input durch `<span>${input}</span>` ersetzt, d.h. jeder input bekommt ein <span>-Tag verpasst, durch css wird die bg-color des span tags gelb
	if (article.innerHTML.includes(input) == true) {
		article.innerHTML = article.innerHTML.replaceAll(
			input,
			`<span>${input}</span>`,
		);

		//wenn der article.innerText den input nicht enthaelt (false), dann wird "Keine Ergebnisse gefunden." ausgegeben
	} else {
		output.innerHTML = "Keine Ergebnisse gefunden.";
	}
}
