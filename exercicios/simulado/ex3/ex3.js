window.onload = function () {
    let btn = document.getElementById("botao");
    btn.onclick = function () {
        const data = new Date();
        let hora = data.getHours();
        let nome = document.getElementById("nome").value

        if (hora > 0 && hora < 5)
            document.getElementById("res").value = `Bom madrugada ${nome}`
        else if (hora > 6 && hora < 11)
            document.getElementById("res").value = `Bom dia ${nome}`
        else if (hora > 12 && hora < 17)
            document.getElementById("res").value = `Bom tarde ${nome}`
        else if (hora > 18 && hora < 23)
            document.getElementById("res").value = `Bom noite ${nome}`
    };
};