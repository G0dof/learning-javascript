let nota1 = parseFloat(prompt("Digite a nota 1: "));
let nota2 = parseFloat(prompt("Digite a nota 2: "));
let nota3 = parseFloat(prompt("Digite a nota 3: "));
let media = (nota1 + nota2 + nota3) / 3;
document.write(
    `A média das notas ${nota1}, ${nota2} e ${nota3} é ${media.toFixed(1)}`
);
