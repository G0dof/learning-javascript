// for (let cont = 0; cont < 10; cont++) console.log(`=> ${cont}`);

console.log("\n============ FOR ============\n");

for (let i = 1; i <= 10; i++) console.log(`${i} x 5 = ${i * 5}`);

console.log("\n============ WHILE ============\n");

let cont = 1;

while (cont <= 10) {
    console.log(`-> ${cont}`);
    cont++;
}

console.log("\n============ DO WHILE ============\n");

let i = 1;

do {
    console.log(`=> ${i}`);
    i++;
} while (i <= 10);

console.log("\n========================\n");

let line = "";

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
    line = "";
}
