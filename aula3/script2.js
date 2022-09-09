// --------- Hora do dia ---------

let hora = 15;

if (hora <= 12) console.log("Bom dia");
else if (hora <= 18) console.log("Boa tarde");
else console.log("Boa noite");

console.log();
console.log("=========================");
console.log();

// --------- Entrar na baladinha ---------

let idade = 60;

if (idade < 18) console.log("Não pode entrar aqui não menó!");
else if (idade >= 18 && idade < 60) console.log("Pode entrar meu consagras");
else if (idade >= 60) console.log("Aqui não é baile da terceira idade não!");

console.log();
console.log("=========================");
console.log();

// --------- Aposentadoria de homens ---------

idade = 87;
let contribuicao = 54;

if ((idade >= 62 && contribuicao >= 15) || contribuicao >= 35)
    console.log("Você tem direito a aposentadoria");
else console.log("Você NÃO tem direito a aposentadoria");

console.log();
console.log("=========================");
console.log();

// --------- Aposentadoria de homens ---------
idade = 17;
let mensagem = idade >= 18 ? "Poder entrar" : "Pica a mula";
console.log(mensagem);
