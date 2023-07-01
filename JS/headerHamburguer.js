import repeticao from './header.js'


const headerHamburguer = (pagina) => {
    let div = document.createElement('div');
    div.setAttribute("class","header-hamburguer");


    let nav = document.createElement("ul");
    nav.setAttribute("class", "cabecalho--botao");
    repeticao(nav);

    let btn = document.createElement("img");
    btn.setAttribute("class", "cabecalho--botao--hamburguer");
    btn.setAttribute("src", "../IMGS/menu.png");
    pagina.appendChild(btn);


    let remover = document.createElement("img");
    remover.setAttribute("class", "cabecalho--botao--hamburguer--remover");
    remover.setAttribute("src", "../IMGS/remover.png");
    div.appendChild(remover);


    btn.addEventListener("click", () => {
        div.classList.toggle("header-hamburguer1");
    });

    remover.addEventListener("click", () => {
        div.classList.toggle("header-hamburguer1");
    });



    pagina.appendChild(div);
    div.appendChild(nav);
}
headerHamburguer(document.querySelector("body"));