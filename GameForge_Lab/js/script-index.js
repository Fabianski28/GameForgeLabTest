const conteneur = document.getElementById('conteneur');

const btnAjouter = document.getElementById('bouton-ajouter');

btnAjouter.addEventListener('click', () => {
    const nouveauParagraphe = document.createElement('p');
    nouveauParagraphe.textContent = "🎊 Nouveau paragraphe ajouté dynamiquement 🎊";
    conteneur.appendChild(nouveauParagraphe);
});

const titrePrincipal = document.getElementById("titre");
const btnChangeTitre = document.getElementById("changer-titre");
btnChangeTitre.addEventListener('click', () => {
    titrePrincipal.textContent = "Nouveau Titre ! 😀";
});

// Box au survol

const box1= document.querySelector('.box');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

box1.addEventListener('mouseover', () =>{
    box1.style.border = "solid 5px #FFA500 ";
    box1.style.transform = "scale(1.1)";
    box1.style.transition = "all 0.3s ease-in-out";
});

box1.addEventListener('mouseout', () => {
    box1.style.border = "solid 5px #ffffff ";
    box1.style.transform = "scale(1.0)";
    box1.style.transition = "all 0.3s ease-in-out";
});

box2.addEventListener('mouseover', () =>{
    box2.style.border = "solid 5px #FFA500 ";
    box2.style.transform = "scale(1.1)";
    box2.style.transition = "all 0.3s ease-in-out";
});

box2.addEventListener('mouseout', () => {
    box2.style.border = "solid 5px #ffffff ";
    box2.style.transform = "scale(1.0)";
    box2.style.transition = "all 0.3s ease-in-out";
});

box3.addEventListener('mouseover', () =>{
    box3.style.border = "solid 5px #FFA500 ";
    box3.style.transform = "scale(1.1)"
    box3.style.transition = "all 0.3s ease-in-out";
});

box3.addEventListener('mouseout', () => {
    box3.style.border = "solid 5px #ffffff ";
    box3.style.transform = "scale(1.0)"
    box3.style.transition = "all 0.3s ease-in-out";
});

