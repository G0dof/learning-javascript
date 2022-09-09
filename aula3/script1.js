let a = 15;
let b = "texto";
let c = a + b;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log((a = 15));
console.log(a == 15);
console.log(a == "15");
console.log(a === "15");

a + 5;
console.log(a);
a += 5;
console.log(a);

let d = 2;
let e = 7;

console.log(!(d > 5) && e > 5);
console.log(d > 5 || e > 5);
