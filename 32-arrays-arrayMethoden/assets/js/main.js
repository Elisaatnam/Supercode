let person = [28, "dogmom", "vegetarian"];
let friends = ["Lena", "Kathi", "Franzi"];
let favFood = ["Masala Dosa", "Idly", "Thai Curry"];

console.log(person);
console.log(friends);
console.log(favFood);

//Lv 1_2
console.log("%c --------Lv 1_2-------", "color: red");

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(favFood[0]);
console.log(favFood[1]);
console.log(favFood[2]);

//Lv 1_3
console.log("%c --------Lv 1_3-------", "color: red");

console.log(person.length);
console.log(friends.length);
console.log(favFood.length);

//Lv 1_4
console.log("%c --------Lv 1_4-------", "color: red");

person.push("spiritual", "nature lover");
console.log(person, person.length);

friends.push("Tina", "Melanie");
console.log(friends, friends.length);

favFood.push("Kartoffelgerichte", "Samosa");
console.log(favFood, favFood.length);

//Lv 1_5
console.log("%c --------Lv 1_5-------", "color: red");

console.log(person);
let popPerson = person.pop();
console.log(person);
console.log(popPerson);

console.log(friends);
let popFriends = friends.pop();
console.log(friends);
console.log(popFriends);

console.log(favFood);
let popFavFood = favFood.pop();
console.log(favFood);
console.log(popFavFood);

//Lv 1_6
console.log("%c --------Lv 1_6-------", "color: red");

console.log(person);
let shiftPerson = person.shift();
console.log(shiftPerson);
console.log(person);

//Lv 1_7
console.log("%c --------Lv 1_7-------", "color: red");

console.log(friends);
let unshiftFriends = friends.unshift("Isi", "Miri");
console.log(unshiftFriends);
console.log(friends);

console.log(favFood);
let unshiftFavFood = favFood.unshift("Auflauf", "Quinoa-Salat", "Feta-Reis");
console.log(unshiftFavFood);
console.log(favFood);

//Lv 1_9
console.log("%c --------Lv 1_9-------", "color: red");

let favDestination = ["Indien", "Neuseeland", "Irland", "Färöer"];
console.log(favDestination);

console.log(favDestination.slice(1, 3));

//Lv 1_10
console.log("%c --------Lv 1_10-------", "color: red");
const text =
	"It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

let wordsSplit = text.split(" ");
console.log(wordsSplit);

let charsSplit = text.split("");
console.log(charsSplit);

let sentenceSplit = text.split(".");
console.log(sentenceSplit);
