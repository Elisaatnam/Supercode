const ul = document.getElementsByTagName("ul")[0];
console.log(ul);
const changeMeBtn = document.getElementsByTagName("li")[3];
console.log(changeMeBtn);
const home = document.getElementsByTagName("li")[0];
console.log(home);
const news = document.getElementsByTagName("li")[1];
console.log(news);
const contact = document.getElementsByTagName("li")[2];
console.log(contact);

changeMeBtn.addEventListener("click", () => {
	ul.style.backgroundColor = "#666";
	home.style.backgroundColor = "#f6c89f";
	news.style.backgroundColor = "#ffe7d1";
	contact.style.backgroundColor = "#4b8e8d";
	changeMeBtn.style.backgroundColor = "#396362";
});
