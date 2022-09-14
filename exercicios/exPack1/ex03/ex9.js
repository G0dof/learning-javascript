let nome = prompt("Digite seu nome: ");
let data = parseInt(prompt("Digite o ano de nascimento: "));
let anoAtual = parseInt(prompt("Digite o ano atual: "));
let idade = anoAtual - data;
document.write(`Nome: ${nome} <br>Idade: ${idade}`);
