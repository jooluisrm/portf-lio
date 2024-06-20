"use strict";
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
let perfil = document.querySelector('.header-perfil');
let nomePerfil = document.querySelector('.perfil-nome');
let imgPerfil = document.querySelector('.header-perfil img');
function carregarPerfil() {
    imgPerfil.src = `${meuPerfil.img}`;
}
carregarPerfil();
perfil.addEventListener('mouseenter', () => {
    nomePerfil.innerHTML = 'Visualizar Perfil';
    imgPerfil.style.transform = 'scale(1.1)';
    perfil.style.gap = '15px';
    perfil.style.cursor = 'pointer';
});
perfil.addEventListener('mouseleave', () => {
    nomePerfil.innerHTML = `${meuPerfil.name}`;
    imgPerfil.style.transform = 'scale(1.0)';
    perfil.style.gap = '10px';
});
