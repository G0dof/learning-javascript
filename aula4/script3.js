window.onload = function () {
    let btn = document.getElementById("botao");
    btn.addEventListener("click", function () {
        let valor1 = parseFloat(document.getElementById("valora").value);
        let valor2 = parseFloat(document.getElementById("valorb").value);
        document.getElementById("res").value = valor1 + valor2;
    });
};
