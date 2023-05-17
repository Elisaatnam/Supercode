//Objekt
const person = {
	name: "Elisa",
	alter: "28",
	sagNameAlter: () => {
		window.alert(
			`Mein Name ist ${person.name} und ich bin ${person.alter} Jahre alt`,
		);
	},
};

console.log(person.name, person.alter);

//Funktionsaufruf
person.sagNameAlter();
