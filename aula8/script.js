function consultaEndereco() {
    let cep = document.querySelector("#cep").value;

    if (cep.length != 8) alert("IP Inválido");

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            mostrarEndereco(data);
        });
    });
}

function mostrarEndereco(dados) {
    let resultado = document.querySelector("#resultado");

    if (dados.erro) {
        resultado.innerHTML = `<p>Não foi possível localizar o endereço 😭</p>`;
    } else {
        resultado.innerHTML = 
        `
        <p><b>Endereço</b>: ${dados.logradouro}</p>
        <p><b>Complemento</b>: ${dados.complemento}</p>
        <p><b>Bairro</b>: ${dados.bairro}</p>
        <p><b>Cidade</b>: ${dados.localidade} - ${dados.uf}</p>
        `;
    }
}
