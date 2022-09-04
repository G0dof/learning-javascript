let degrau = parseInt(prompt("Digite a altura do degrau da escada (em metros): "));
let altura = parseInt(prompt("Digite a altura a ser alcançada (em metros): "));
let resultado = altura/degrau
document.write(`O pedreiro deverá subir ${Math.ceil(resultado)} degraus para alcançar seu objetivo`)