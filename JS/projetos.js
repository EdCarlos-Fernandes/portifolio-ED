import trabalhos from "./projetosConstructor.js";

function createProjectElement(project) {
    const div = document.createElement("div");
    div.classList.add("container--row");

    const containerRowImage = document.createElement("div");
    containerRowImage.classList.add("container--row--image");

    const containerRowBox = document.createElement("div");
    containerRowBox.classList.add("container--row--box");

    const h2 = document.createElement("h2");
    h2.classList.add("container--row--box--titulo");
    h2.textContent = project.titulo;

    const div1 = document.createElement("div");
    div1.classList.add("container--row1");

    const p1 = document.createElement("p");
    p1.classList.add("container--row--box--descricao");
    p1.textContent = project.descricao;

    const h4 = document.createElement("h4");
    h4.classList.add("container--row--box--descricao1");
    h4.textContent = project.acesso;

    const p2 = document.createElement("p");
    p2.classList.add("container--row--box--descricao2");
    p2.textContent = project.login;

    const p3 = document.createElement("p");
    p3.classList.add("container--row--box--descricao3");
    p3.textContent = project.senha;

    const botoes = document.createElement("div");
    botoes.classList.add("container--row--box--botoes");

    const botao1 = document.createElement("a");
    botao1.classList.add("container--row--box--botoes1");
    botao1.target = "_blank";
    botao1.textContent = "Site";
    botao1.href = project.site;

    const botao2 = document.createElement("a");
    botao2.classList.add("container--row--box--botoes2");
    botao2.target = "_blank";
    botao2.textContent = "Código";
    botao2.href = project.codigo;

    containerRowImage.style.backgroundImage = `url(${project.imagem})`;

    div.appendChild(containerRowImage);
    containerRowImage.appendChild(containerRowBox);
    containerRowBox.appendChild(h2);
    containerRowBox.appendChild(div1);
    div1.appendChild(p1);
    div1.appendChild(h4);
    div1.appendChild(p2);
    div1.appendChild(p3);
    containerRowBox.appendChild(botoes);
    botoes.appendChild(botao1);
    botoes.appendChild(botao2);

    return div;
}

function renderProjects() {
    const container = document.createElement("div");
    container.classList.add("container");

    const titulo = document.createElement("h1");
    titulo.classList.add("container--titulo");
    titulo.textContent = "Projetos";

    const pagina = document.querySelector("#pagina2");
    pagina.appendChild(titulo);
    pagina.appendChild(container);

    trabalhos.map((projeto) => {
        const projectElement = createProjectElement(projeto);
        container.appendChild(projectElement);
    });
}

function addScrollToTopButton() {
    const button = document.createElement("a");
    button.classList.add("btn-fixed");
    button.href = "#top";

    const span = document.createElement("span");
    span.classList.add("material-icons");
    span.textContent = "⇪";

    button.appendChild(span);

    const pagina = document.querySelector("#pagina2");
    pagina.appendChild(button);
}

renderProjects();
addScrollToTopButton();



window.addEventListener("scroll", () => {
    let a = document.querySelector(".btn-fixed");
    if (window.scrollY === 0) {
        a.classList.remove("visible");
    } else {
        a.classList.add("visible");
    }
});