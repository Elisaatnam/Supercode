const A = "Susi is going to codingschool.";
const output = document.querySelector(".output");

output.innerHTML = `${A.slice(0, 4)} <br>`;
output.innerHTML += `${A.slice(5, 7)} <br>`;
output.innerHTML += `${A.slice(7, 16)} ${A.slice(-7, -1)} <br>`;
output.innerHTML += `${A.slice(-7, -1)} <br>`;
output.innerHTML += `${A.slice(0, 7)} ${A.slice(-7, -1)}`;
