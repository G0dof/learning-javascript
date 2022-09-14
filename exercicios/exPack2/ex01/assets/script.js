let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");

for (let i = 1; i <= idade; i++) {
    document.write(`<p>${i} - ${nome}</p>`);
}
