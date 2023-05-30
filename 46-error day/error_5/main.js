console.log("JS works");

let batContact = {
	user: "Batman",
	email: "batman@batCave.batmail",
	//Arrow Function bezieht sich auf das globale Window Object, deshalb muss ich reinnavigieren(batContact.user)
	logIn: () => {
		console.log(`${batContact.user} ist eingeloggt`);
	},
	//"normale" Function bezieht sich lokal auf mein Objekt, deswegen kann ich this.user nehmen
	loginTwo: function () {
		console.log(`${this.user} ist eingeloggt`);
	},
};

batContact.logIn();
batContact.loginTwo();
