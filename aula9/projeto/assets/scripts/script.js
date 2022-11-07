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
            "img": "assets/imgs/Caio.jpg"
        },
        {
            "nome": "Messi",
            "rgm": 299,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Joao.jpg"
        },
        {
            "nome": "Neymar",
            "rgm": 456,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Felipe.jpg"
        },
        {
            "nome": "Roger",
            "rgm": 976,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Gabriel.jpg"
        },
        {
            "nome": "Iniesta",
            "rgm": 567,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Tiago.jpg"
        },
        {
            "nome": "Silvio",
            "rgm": 263,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Mario.jpg"
        },
        {
            "nome": "Andrey",
            "rgm": 290,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Osmar.jpg"
        },
        {
            "nome": "Pedro",
            "rgm": 452,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Roberto.jpg"
        },
        {
            "nome": "Gabriel",
            "rgm": 356,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Silvio.jpg"
        },
        {
            "nome": "Carlos",
            "rgm": 436,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Valdir.jpg"
        },
        {
            "nome": "Lara",
            "rgm": 323,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Andreia.jpg"
        },
        {
            "nome": "Bruna",
            "rgm": 599,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Cleide.jpg"
        },
        {
            "nome": "Julius",
            "rgm": 459,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Cris.jpg"
        },
        {
            "nome": "Fernanda",
            "rgm": 156,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Dilma.jpg"
        },
        {
            "nome": "Vanessa",
            "rgm": 906,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Gabriela.jpg"
        },
        {
            "nome": "Gabriela",
            "rgm": 103,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Julia.jpg"
        },
        {
            "nome": "Bianca",
            "rgm": 209,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Juliana.jpg"
        },
        {
            "nome": "Beatriz",
            "rgm": 856,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Maria.jpg"
        },
        {
            "nome": "Daiane",
            "rgm": 756,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Mariana.jpg"
        },
        {
            "nome": "Franciele",
            "rgm": 556,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Patricia.jpg"
        },
        {
            "nome": "Ana",
            "rgm": 223,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Sonia.jpg"
        },
        {
            "nome": "Rayssa",
            "rgm": 399,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Veronica.jpg"
        },
        {
            "nome": "Laiane",
            "rgm": 159,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Vitoria.jpg"
        },
        {
            "nome": "Clóvis",
            "rgm": 151,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 5)},
            "img": "assets/imgs/Vitor.jpg"
        },
        {
            "nome": "Bob",
            "rgm": 152,
            "avaliacaoParcial": ${random(0, 3)},
            "exercicio": ${random(0, 1)},
            "avaliacaoRegimental": ${random(0, 4)},
            "img": "assets/imgs/Fabricio.jpg"
        }
    ]
}`;
 */

let controle = 0;
function consultarAlunos() {
    controle++;
    const alunos = `https://raw.githubusercontent.com/G0dof/learning-javascript/main/aula9/projeto/assets/scripts/alunos.json`;

    fetch(alunos).then((response) => {
        response.json().then((data) => {
            console.log(data);
            exibirAlunos(data.alunos);
        });
    });
}
function exibirAlunos(data) {
    if (controle == 1) {
        const objs = data;

        let resultado = document.getElementById("resultado");

        objs.forEach((element) => {
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
}
