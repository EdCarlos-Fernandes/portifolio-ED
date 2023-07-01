class Projeto {
    constructor(imagem, titulo, descricao, acesso, login, senha, site, codigo) {
        this.imagem = imagem;
        this.titulo = titulo;
        this.descricao = descricao;
        this.acesso = acesso;
        this.login = login;
        this.senha = senha;
        this.site = site;
        this.codigo = codigo;
    }
}

const trabalhos = [
    new Projeto(
        "../IMGS/delivery.jpeg",
        "Delivery com painel admin completo",
        "O nosso aplicativo de delivery é uma solução prática e eficiente para gerenciar pedidos e estoque. Com um painel admin completo, você pode gerenciar o estoque e os pedidos de forma eficiente. Além disso, a tecnologia PWA permite que você instale o app no celular sem precisar consumir espaço a mais como outros APPs, este projeto esta atualmente em produção e sendo utilizado.",
        "Experimente agora e veja como está na prática!",
        "LOGIN: admin@admin.com",
        "SENHA: admin@admin.com",
        "https://devfernandes.com.br/projetos/delivery-app/login/",
        ""
    ),
    new Projeto(
        "../IMGS/tabuada.jpeg",
        "Tabuada",
        "Descubra uma forma envolvente de explorar a multiplicação! Com uma estética elegante e botões neumórficos intuitivos, você poderá desvendar a tabuada de maneira cativante. Clicando nos botões, mergulhe em um mundo de multiplicação fascinante. Aprender a tabuada nunca foi tão visual e divertido. Explore essa experiência interativa e deixe que a magia dos números se revele diante dos seus olhos.",
        "",
        "",
        "",
        "https://devfernandes.com.br/projetos/Tabuada-main/index.html",
        "https://github.com/EdCarlos-Fernandes/Tabuada"
    ),
    new Projeto(
        "../IMGS/lista.jpg",
        "Lista to do, CRUD",
        "Um aplicativo de lista de tarefas com funcionalidades de criação, manipulação e pesquisa. Ele representa um sistema interativo no qual os usuários podem adicionar itens à lista digitando palavras ou números em um campo de entrada. O aplicativo também oferece recursos como contar as teclas digitadas, selecionar itens da lista para exibir seu conteúdo em um alerta, pesquisar itens na lista e exibir uma mensagem indicando se o item pesquisado está presente ou não. Além disso, os itens adicionados são exibidos em uma lista, onde os usuários podem selecioná-los e excluir individualmente usando um ícone de lixeira. No geral, o aplicativo fornece uma maneira prática de gerenciar tarefas, adicionar novos itens e realizar pesquisas dentro da lista",
        "",
        "",
        "",
        "",
        "https://github.com/EdCarlos-Fernandes/lista-to-do-CRUD"
    ),
    new Projeto(
        "",
        "Joguinho da sorte",
        "Ao abrir o joguinho, um alert irá aparecer perdindo um número qualquer para o primeiro player Logo após outro alert irá aparecer perdindo mais um número qualquer para o segundo player Uma moeda de sorte será lançada Caso dê CARA quem digitou o menor número irá ganhar Caso dê COROA quem digitou o maior número irá ganhar No fim irá aparecer uma mensagem informando qual valor a moeda deu e também quem foi o vencedor",
        "",
        "",
        "",
        "",
        "https://github.com/EdCarlos-Fernandes/Joguinho-de-sorte"
    ),
    new Projeto(
        "../IMGS/paginaDeLogin.png",
        "Painel De Login",
        "Este painel de login foi inspirado em um template do Figma, usando somente HTML e CSS. O painel de login tem um design minimalista e moderno, com uma caixa centralizada com os campos de usuário e senha, e um botão de entrar. O painel de login também oferece opções para fazer login com redes sociais.",
        "",
        "",
        "",
        "",
        "https://github.com/EdCarlos-Fernandes/painelDeLogin"
    ),
    new Projeto(
        "../IMGS/siteApple.png",
        "site Apple(Institucional)",
        "Neste projeto, proponho recriar o site da Apple com base em uma Landing Page retirada da internet em formato PSD. Utilizarei o arquivo PSD como referência, garantindo que todas as medidas e elementos sejam reproduzidos com precisão em HTML e CSS. Meu objetivo é criar uma versão fiel e responsiva do site, garantindo uma experiência de usuário consistente em diferentes dispositivos. Farei uso das melhores práticas de codificação, assegurando que o site seja rápido, acessível e visualmente atraente. Ao final do projeto, você terá um site totalmente funcional e responsivo, baseado no design da Landing Page fornecida. Estarei comprometido em entregar um produto de alta qualidade que atenda às suas expectativas e reflita a essência da marca Apple.",
        "",
        "",
        "",
        "",
        "https://github.com/EdCarlos-Fernandes/siteApple"
    ),
    new Projeto(
        "../IMGS/buscador.jpg",
        "Buscador De Cep",
        "Este é um buscador de CEP feito em JavaScript que consome uma API para buscar CEPs. Com ele, você pode facilmente encontrar informações sobre endereços em todo o Brasil. Basta digitar o CEP desejado e o buscador retornará as informações correspondentes.",
        "",
        "",
        "",
        "",
        "https://github.com/EdCarlos-Fernandes/BuscadorDeCep"
    )
];

export default trabalhos;