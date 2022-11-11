let dados = [];

function criarBase() {
    const nome = document.getElementById("nome").value;
    const rgm = document.getElementById("rgm").value;
    const faltas = document.getElementById("faltas").value;
    const objeto = {
        nome: `${nome}`,
        rgm: `${rgm}`,
        faltas: `${faltas}`,
    };
    dados.push(objeto);
    console.log(dados);
}

function criarTabela() {
    dados.forEach((element) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${element.nome}</td>
            <td>${element.rgm}</td>
            <td>${element.faltas}</td>
        `;
    });
}
