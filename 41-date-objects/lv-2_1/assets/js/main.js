const output = document.querySelector("body");
const date = new Date();

const html = `<p>${date.getDate()}/${date.toLocaleString("default", {
	month: "long",
})}/${date.getFullYear()}</p>`;

output.insertAdjacentHTML("afterbegin", html);
