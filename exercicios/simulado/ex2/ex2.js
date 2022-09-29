let sorteio = [];
for (let i = 1; i <= 6; i++) {
    let num = Math.floor(Math.random() * 100);
    if (num < 10) sorteio.push("0"+num)
    else sorteio.push(num);
}

console.log(`\nO resultado do sorteio da Mega-Sena foi:

${sorteio.join(" ")}`)