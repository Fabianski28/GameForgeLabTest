        // fonction pour ajouter un paragraphe
        const conteneur = document.getElementById('conteneur');

        const btnAjouter = document.getElementById('bouton-ajouter');
        
        btnAjouter.addEventListener('click', () => {
            const nouveauParagraphe = document.createElement('p');
            nouveauParagraphe.textContent = "🎊 Nouveau paragraphe ajouté dynamiquement 🎊";
            conteneur.appendChild(nouveauParagraphe);
        });
        
        // fonction pour changer le titre
        const titrePrincipal = document.getElementById("titre");
        const btnChangeTitre = document.getElementById("changer-titre");
        btnChangeTitre.addEventListener('click', () => {
            titrePrincipal.textContent = "Nouveau Titre ! 😀";
        });