const sites = [
    {
        titulo: "Relógio Digital", 
        desc: "Um site feito em HTML, CSS & JS", 
        urlGitHub: "https://github.com/jooluisrm/relogio_digital", 
        urlSite: "https://jooluisrm.github.io/relogio_digital/"
    },
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