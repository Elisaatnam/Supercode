let edelMetallPreise = [
	{ name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
	{ name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
	{ name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
	{ name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
	{ name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
	{ name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
	{ name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
	{ name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
	{ name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

//for each fuer d Namen
const metallNames = [];
edelMetallPreise.forEach(metallObject => {
	metallNames.push(metallObject.name);
});
console.log("%c forEach methode", "color: orange");
console.log(metallNames);

//map fuer d Namen
const metallNamesMap = edelMetallPreise.map(metallObject => metallObject.name);
console.log("%c map methode", "color: red");
console.log(metallNamesMap);

//for each fuer d Preise
const metallPreiseGramm = [];
edelMetallPreise.forEach(metallObject => {
	metallPreiseGramm.push(metallObject.preiseGramEuro);
});
console.log("%c forEach methode", "color: orange");
console.log(metallPreiseGramm);

//map fuer d Preise
const metallPreiseGrammMap = edelMetallPreise.map(
	metallObject => metallObject.preiseGramEuro,
);
console.log("%c map methode", "color: red");
console.log(metallPreiseGrammMap);

//for each fuer d veraenderung
const metallVeraenderungen = [];
edelMetallPreise.forEach(metallObject => {
	metallVeraenderungen.push(metallObject.veraenderung);
});
console.log("%c forEach methode", "color: orange");
console.log(metallVeraenderungen);

//map fuer d veraenderung
const metallVeraenderungenMap = edelMetallPreise.map(
	metallObject => metallObject.veraenderung,
);
console.log("%c map methode", "color: red");
console.log(metallVeraenderungenMap);

// ! ============== FILTER() METHODE ===========
console.log(
	"%c filter methode - hier filtere ich alle objekte mit preisen pro gramm ueber 50 euro",
	"color: white; background-color: blue",
);
const preisUeber50 = edelMetallPreise.filter(
	metallObject => metallObject.preiseGramEuro > 50,
);
console.log(preisUeber50);

// ! +++++++++  alles als Tabelle ausgeben  ++++++++++++
const createTable = () => {
	const table = document.createElement("table");
	let tableContent = `<tr><th>Name</th><th>Preis pro Gramm in Euro</th><th>Veraenderung</th></tr>`;

	for (let i = 0; i < edelMetallPreise.length; i++) {
		tableContent += `<tr><td>${edelMetallPreise[i].name}</td><td>${edelMetallPreise[i].preiseGramEuro}</td><td>${edelMetallPreise[i].veraenderung}</td></tr>`;
	}

	table.innerHTML = tableContent;

	document.body.append(table);
};

createTable();
