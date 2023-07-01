"use estrict";
const index = (pagina) => {
    let caixa = document.createElement("div");
    caixa.setAttribute("class", "caixa");

    let caixaContainer = document.createElement("div");
    caixaContainer.setAttribute("class", "caixa--container");

    let titulo = document.createElement("h1");
    titulo.setAttribute("class", "caixa--container--titulo");
    titulo.innerHTML = "Ed Fernandes";

    let subtitulo = document.createElement("h2");
    subtitulo.setAttribute("class", "caixa--container--subtitulo");
    subtitulo.innerHTML = "Front-End Developer";

    let texto = document.createElement("p");
    texto.setAttribute("class", "caixa--container--texto");
    texto.innerHTML = "Olá! Meu nome é Ed Carlos e sou desenvolvedor web. Neste site, eu quero compartilhar com você as minhas paixões e os meus projetos. Eu amo criar sites dinâmicos, responsivos e interativos, usando o JavaScript como minha principal ferramenta. Aqui você pode ver alguns dos meus sites e projetos  favoritos que eu ja fiz e também os que estou criando. O objetivo do meu portfólio é mostrar o meu potencial como desenvolvedor web e conquistar novas oportunidades de trabalho. Obrigado pela visita e espero que goste!"


    caixaContainer.appendChild(titulo);
    caixaContainer.appendChild(subtitulo);
    caixaContainer.appendChild(texto);

    caixa.appendChild(caixaContainer);

    pagina.appendChild(caixa);
}

index(document.getElementById("pagina1"));
