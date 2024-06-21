const sites: any = [
    {   
        img: "assets/img/relogioDigital.png",
        titulo: "Relógio Digital", 
        desc: "Um site feito em HTML, CSS & JS", 
        urlGitHub: "https://github.com/jooluisrm/relogio_digital", 
        urlSite: "https://jooluisrm.github.io/relogio_digital/"
    },
    {   
        img: "assets/img/veterinarioLoja.png",
        titulo: "Uma loja virtual de veterinario", 
        desc: "Um site feito em HTML, CSS", 
        urlGitHub: "https://github.com/jooluisrm/PetShoop", 
        urlSite: "https://jooluisrm.github.io/PetShoop/"
    },
    {   
        img: "assets/img/zairtonLoja.png",
        titulo: "Loja Virtual", 
        desc: "Um site feito em HTML, CSS & JS", 
        urlGitHub: "https://github.com/jooluisrm/Zaitron", 
        urlSite: "https://jooluisrm.github.io/Zaitron/"
    }
];

const meuPerfil = {
    name: "João Luís R. de Moura",
    img: "assets/img/fotoPerfil.jpeg"
};


// script do header

let perfil = document.querySelector('.header-perfil') as HTMLElement;
let nomePerfil = document.querySelector('.perfil-nome') as HTMLElement;
let imgPerfil: any = document.querySelector('.header-perfil img');

function carregarPerfil() {
    nomePerfil.innerHTML = meuPerfil.name;
    imgPerfil.src = `${meuPerfil.img}`;
}
carregarPerfil();

perfil.addEventListener('mouseenter', () => {
    nomePerfil.innerHTML = 'Visualizar Perfil';
    imgPerfil.style.transform = 'scale(1.1)';
    perfil.style.gap = '15px';
    perfil.style.cursor = 'pointer';
    nomePerfil.style.transform = 'translateX(55px)';
});
perfil.addEventListener('mouseleave', () => {
    nomePerfil.innerHTML = `${meuPerfil.name}`;
    imgPerfil.style.transform = 'scale(1.0)';
    perfil.style.gap = '10px';
    nomePerfil.style.transform = 'translateX(0)';
});



// script para abrir e fechar o Meu Perfil + esconder Main

let mainProjct = document.querySelector('main') as HTMLElement; 
let sobreMim = document.querySelector('.sobreMim') as HTMLElement;
let fecharX = document.querySelector('.buttonX') as HTMLElement;
let meuNome = document.querySelector('.meuNome') as HTMLElement;
let minhaFoto: any = document.querySelector('.foto-perfil');

perfil.addEventListener('click', () => {
    if(sobreMim.style.display !== 'none') {
        sobreMim.style.display = 'none';
    };
    sobreMim.style.display = 'block';
    if(mainProjct.style.display !== 'none') {
        mainProjct.style.display = 'none';
    };


    meuNome.innerHTML = meuPerfil.name;
    minhaFoto.src = meuPerfil.img;
    
});
fecharX.addEventListener('click', () => {
    if(sobreMim.style.display === 'block') {
        sobreMim.style.display = 'none';
    };
    if(mainProjct.style.display === 'none') {
        mainProjct.style.display = 'block';
    }
});

// Carregar Projetos

let gridContainer = document.querySelector('.grid-container') as HTMLElement;

function carregarProjetos() {
    let newGrids;
    for(let i = 0; i < sites.length; i++) {                  // Cria as divs do projeto dinamicamete 
        newGrids = document.createElement('div');
        newGrids.setAttribute('class', 'grid-projetos');
        newGrids.setAttribute('data-key', `${i}`);
        newGrids.innerHTML = `<img src="${sites[i].img}" alt="">`;
        newGrids.innerHTML += `<h2>${sites[i].titulo}</h2>`;
        newGrids.innerHTML += `<p>${sites[i].desc}</p>`;

        gridContainer.appendChild(newGrids);
    };

    document.querySelectorAll('.grid-projetos').forEach((gridProjeto) => {      // difefencia as dives atraves do "data-key" para manipular qual div foi clicada
        gridProjeto.addEventListener('click', (e: any) => {
            const dataKey = e.currentTarget.dataset.key;
            console.log('Data key:', dataKey, "URL: ", sites[dataKey].urlSite);
        });
    });

}
carregarProjetos();