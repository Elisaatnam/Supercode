const text = "Sam is going to codingschool";

const text2 = text.toUpperCase();
document.write(text2 + "<br>");

const text3 = text.toLowerCase();
document.write(text3 + "<br>");

document.write(
	text3.replace("sam", "SAM").replace("codingschool", "CODINGSCHOOL") + "<br>",
);

document.write(text3.replace("is going to", "IS GOING TO") + "<br>");

document.write(
	text3.replace("sam is going to codingschool", "Sam Is Going To Codingschool"),
);
