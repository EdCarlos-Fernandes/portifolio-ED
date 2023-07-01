"use strict";

const condicaoLink = (x) => {
    if (x.className === "cabecalho--botao--link0") {
        x.setAttribute("href","index.html");
    } else if (x.className === "cabecalho--botao--link1") {
        x.setAttribute("href","projetos.html");
    }
}
const condicaoNomes = (x, y) => {
    if (x === 0) {
        y.innerHTML = "HOME";
        y.setAttribute("title", "Home");
    } else if (x === 1) {
        y.innerHTML = "PROJETOS";
        y.setAttribute("title", "Projetos");
    } else if (x === 2) {
        y.innerHTML = "CONTATO";
        y.setAttribute("title", "Contato");
    } else if (x === 3) {
        y.innerHTML = "LINKEDIN";
        y.setAttribute("title", "Linkedin");
    } else if (x === 4) {
        y.innerHTML = "GITHUB";
        y.setAttribute("title", "Github");
    }
}

const repeticao = (x) => {
    for (let i = 0; i <= 4; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("class", "cabecalho--botao--link" + i);

        condicaoLink(a);
        condicaoNomes(i, a);

        li.appendChild(a);
        x.appendChild(li);
    }
}

const header = (pagina) => {
    let header = document.createElement("div");
    header.setAttribute("class", "cabecalho");

    let logo = document.createElement("img");
    logo.setAttribute("class", "cabecalho--logo");
    logo.setAttribute("src", "../IMGS/eddy.png");

    let nav = document.createElement("ul");
    nav.setAttribute("class", "cabecalho--botao");

    repeticao(nav)


    header.appendChild(logo);
    header.appendChild(nav);
    pagina.appendChild(header);
}

header(document.querySelector("body"));


export default repeticao;
