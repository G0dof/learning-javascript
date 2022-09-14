let num1 = prompt("Digite um número:");
let num2 = prompt("Digite outro número:");

if (num1 > num2) document.write(`<p>${num1} é maior que ${num2}</p>`);
else if (num1 < num2) document.write(`<p>${num2} é maior que ${num1}</p>`);
else document.write(`<p>${num1} e ${num2} são iguais</p>`);
