let unserLager = {
	schreibtisch: {
		schublade: "Hefter",
	},
	schrank: {
		"Obere Schublade": {
			Ordner1: "Dokumente",
			Ordner2: "Geheimnisse",
		},
		"Untere Schublade": "Cola",
	},
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);
