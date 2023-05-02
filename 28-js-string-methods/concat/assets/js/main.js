const output = document.querySelector(".output");

const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "and";

output.innerHTML = text1 + text3.concat(" to the movie theater <br>");

output.innerHTML += text1.replace("codingschool", "the movie theater <br>");

output.innerHTML += `${text2} ${text3} ${text1
	.slice(0, 3)
	.concat(" are going to school <br>")}`;

output.innerHTML += `${text2} ${text3} ${text1
	.slice(0, 3)
	.concat(" are going to the gym and the movie theater <br>")}`;

output.innerHTML += `${text1.replace("Sam", text2)} ${text3.concat(
	" to the movie theater",
)}`;
