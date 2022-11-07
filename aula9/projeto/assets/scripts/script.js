/* function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bd = `{
    "alunos": [
        {
            "nome": "Ronaldo",
            "rgm": 123,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Caio.jpg"
        },
        {
            "nome": "Messi",
            "rgm": 299,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Joao.jpg"
        },
        {
            "nome": "Neymar",
            "rgm": 456,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Felipe.jpg"
        },
        {
            "nome": "Roger",
            "rgm": 976,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Gabriel.jpg"
        },
        {
            "nome": "Iniesta",
            "rgm": 567,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Tiago.jpg"
        },
        {
            "nome": "Silvio",
            "rgm": 263,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Mario.jpg"
        },
        {
            "nome": "Andrey",
            "rgm": 290,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Osmar.jpg"
        },
        {
            "nome": "Pedro",
            "rgm": 452,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Roberto.jpg"
        },
        {
            "nome": "Gabriel",
            "rgm": 356,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Silvio.jpg"
        },
        {
            "nome": "Carlos",
            "rgm": 436,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Valdir.jpg"
        },
        {
            "nome": "Lara",
            "rgm": 323,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Andreia.jpg"
        },
        {
            "nome": "Bruna",
            "rgm": 599,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Cleide.jpg"
        },
        {
            "nome": "Julius",
            "rgm": 459,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Cris.jpg"
        },
        {
            "nome": "Fernanda",
            "rgm": 156,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Dilma.jpg"
        },
        {
            "nome": "Vanessa",
            "rgm": 906,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Gabriela.jpg"
        },
        {
            "nome": "Gabriela",
            "rgm": 103,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Julia.jpg"
        },
        {
            "nome": "Bianca",
            "rgm": 209,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Juliana.jpg"
        },
        {
            "nome": "Beatriz",
            "rgm": 856,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Maria.jpg"
        },
        {
            "nome": "Daiane",
            "rgm": 756,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Mariana.jpg"
        },
        {
            "nome": "Franciele",
            "rgm": 556,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Patricia.jpg"
        },
        {
            "nome": "Ana",
            "rgm": 223,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Sonia.jpg"
        },
        {
            "nome": "Rayssa",
            "rgm": 399,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Veronica.jpg"
        },
        {
            "nome": "Laiane",
            "rgm": 159,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Vitoria.jpg"
        },
        {
            "nome": "Clóvis",
            "rgm": 151,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "img/Vitor.jpg"
        },
        {
            "nome": "Bob",
            "rgm": 152,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 4)},
            "img": "img/Fabricio.jpg"
        }
    ]
}`;
 */

const alunos = `https://raw.githubusercontent.com/G0dof/learning-javascript/main/aula9/projeto/assets/scripts/alunos.json`;

fetch(alunos).then((response) => {
    response.json().then((data) => {
        console.log(data);
        exibirAlunos(data.alunos);
    });
});

function exibirAlunos(data) {
    const objs = JSON.parse(data);

    let resultado = document.getElementById("resultado");

    objs.alunos.forEach((element) => {
        let status = "";
        media =
            element.avaliacaoParcial +
            element.exercicio +
            element.avaliacaoRegimental;
        if (media >= 6) status = "<br>Aprovado";
        else if (media >= 2 && media < 6) status = "<br>Avaliação Final";
        else if (media < 2) status = "<br>Reprovado";

        resultado.innerHTML += `
        <div class="container">
            <img width="200" height="200" src="${element.img}">
            <p><b>Nome:</b> ${element.nome}</p>
            <p><b>RGM:</b> ${element.rgm}</p>
            <p><b>Av. Parcial:</b> ${element.avaliacaoParcial}</p>
            <p><b>Exercícios:</b> ${element.exercicio}</p>
            <p><b>Av. Regimental:</b> ${element.avaliacaoRegimental}</p>
            <p><b>Média:</b> ${Math.round(media)}</p>
            <p><b>Status:</b> ${status}</p>
        </div>`;
    });
}
