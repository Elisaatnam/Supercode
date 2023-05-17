let studentData = [
	{
		name: "Alex",
		age: 23,
		coop: false,
		address: {
			street: "Don Valley Business Park",
			city: "Toronto",
			postalCode: "ONM3C3E5",
		},
		emails: ["alex69@gmail.com", "alex123@yahoo.com"],
	},
	{
		name: "Sandra",
		age: 22,
		coop: true,
		address: {
			street: "34 Lawrence Ave",
			city: "Quebec",
			postalCode: "ONM3C0E5",
		},
		emails: ["sandra@gmail.com", "sandra@yahoo.com"],
	},
];

studentData.forEach(studentDataObject => {
	console.log(studentDataObject.name);
	console.log(studentDataObject.coop);
	console.log(studentDataObject.emails);
});

//die 2 Staedte als Array ausgeben exakt so wie in der Aufgabe
let cities = [];
studentData.forEach(studentDataObject => {
	cities.push(studentDataObject.address.city);
});

console.log(cities);
