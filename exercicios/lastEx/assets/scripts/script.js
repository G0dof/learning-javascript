let dados = [];

function criarBase() {
    const modelo = document.getElementById("modelo").value;
    const placa = document.getElementById("placa").value;
    const cor = document.getElementById("cor").value;
    const entrada = document.getElementById("entrada").value;
    const saida = document.getElementById("saida").value;

    const objeto = {
        modelo: `${modelo}`,
        placa: `${placa}`,
        cor: `${cor}`,
        entrada: `${entrada}`,
        saida: `${saida}`,
    };

    dados.push(objeto);
    console.log(dados);
}

function criarTabela() {
    dados.forEach((element) => {
        let tabela = document.getElementById("corpotabela");
        let tr = document.createElement("tr");

        tr.innerHTML = `
        <tr>
            <td>${element.modelo}</td>
            <td>${element.placa}</td>
            <td style="background-color:${element.cor}"></td>
            <td>${element.entrada}</td>
            <td>${element.saida}</td>
        </tr>
        `;

        tabela.appendChild(tr);
    });
}

function mostrarValor() {
    const placa = document.getElementById("placa").value;
    const saida = document.getElementById("saida").value;

    if (saida == "" || placa == "") {
        alert("Preencha todos os campos!");
    } else {
        dados.forEach((element) => {
            let horaEntrada = Number(element.entrada.substr(0, 2)
            );
            let horaSaida = Number(element.saida.substr(0, 2));
            let valor = 5 + (horaSaida - horaEntrada) * 2;
            alert(`O valor do veículo com a placa ${element.placa}\ndeverá pagar R$${valor}`);
        });
    }
}
