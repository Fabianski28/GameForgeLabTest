// fonction pour afficher plus ou moins
function toggleArticle(button) {
  const collapsible = button.previousElementSibling; // recupère le collapsible

  collapsible.classList.toggle("expanded"); // ajoute ou retire la classe expanded

  if (collapsible.classList.contains("expanded")) { // si le collapsible est ouvert
    button.textContent = "Afficher moins"; // change le texte du bouton
  } else {
    button.textContent = "Afficher plus"; // change le texte du bouton
  }
}

// fonction pour rechercher un article
const input = document.getElementById("searchInput"); // recupère l'input
const articles = document.querySelectorAll(".article"); // recupère tous les articles

input.addEventListener("keyup", function(){ // ecoute l'input
  const filter = input.value.toLowerCase(); // recupère la valeur de l'input

  articles.forEach(article => { // parcourt tous les articles
    const text = article.textContent.toLowerCase(); // recupère le texte de l'article
    article.style.display = text.includes(filter) ? "block" : "none"; // affiche ou masque l'article
  });
});

