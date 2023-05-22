const output = document.querySelector("body");

let date = new Date(2022, 4, 22, 13, 4, 45);
date.setFullYear(2222);
output.innerHTML = `${date}<br>`;

date.setFullYear(2123);
date.setDate(2);
date.setMonth(10);
output.innerHTML += `${date}`;
