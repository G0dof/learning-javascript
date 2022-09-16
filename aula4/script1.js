/* 

// Function

function soma(valor1, valor2) {
    return valor1 + valor2;
}

console.log(`Somando... ${soma(53, 32)}`);

function subtracao(valor1, valor2) {
    return valor1 - valor2;
}

console.log(`Subtraindo... ${subtracao(781, 704)}`);

function multiplicacao(valor1, valor2) {
    return valor1 * valor2;
}

console.log(`Multiplicando... ${multiplicacao(6, 3)}`);

function divisao(valor1, valor2) {
    return valor1 / valor2;
}

console.log(`Dividindo... ${divisao(25, 5)}`);

function mediaFaculdade(provaRegimental, provaParcial, exercicios) {
    return (provaRegimental + provaParcial + exercicios) / 3;
}

console.log(`Média da faculdade: ${mediaFaculdade(7, 8, 9).toFixed(2)}`);


// Fórmula de bhaskara

function bhaskara(a, b, c) {
    let delta = b ** 2 - 4 * a * c;
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)

    return `\x1b[1;31mDelta:\x1b[0m ${delta}
\x1b[1;32mValor x1:\x1b[0m ${x1}
\x1b[1;34mValor x2:\x1b[0m ${x2}`;
}

console.log(bhaskara(1,12,-13));
*/

// Arrow function

let soma = (a,b) => a + b;
console.log(`Somando... ${soma(53, 32)}`);

let subtracao = (a,b) => a - b;
console.log(`Subtraindo... ${subtracao(781, 704)}`);

let multiplicacao = (a,b) => a * b;
console.log(`Multiplicando... ${multiplicacao(6, 3)}`);

let divisao = (a,b) => a / b;
console.log(`Dividindo... ${divisao(25, 5)}`);