let valor = parseFloat(prompt("Digite o valor da TV: "));
let tipoPagamento = prompt(`Digite o tipo de pagamento: 

1 - À vista
2 - Cartão
3 - Débito
4 - Cheque
`);

switch (tipoPagamento) {
    case "1":
        document.write(
            `<p>Com o pagamento á vista, você pagará ${
                valor - valor * 0.15
            } reais</p>`
        );
        break;

    case "2":
        document.write(
            `<p>Com o pagamento no cartão, você pagará R$${
                valor - valor * 0.05
            } reais</p>`
        );
        break;

    case "3":
        document.write(
            `<p>Com o pagamento no débito, você pagará R$${
                valor - valor * 0.1
            } reais</p>`
        );
        break;

    case "4":
        document.write(
            `<p>Com o pagamento no cheque, você pagará R$${
                valor - valor * 0.5
            } reais</p>`
        );
        break;

    default:
        document.write("<p>Opção inválida</p>");
        break;
}
