       // Récupère le modal
       var modal = document.getElementById("myModal");
       var modalImg = document.getElementById("img01");
       var captionText = document.getElementById("caption");
   
       // Récupère toutes les images de la galerie
       var images = document.querySelectorAll("#multimedia-galerie img");
   
       // Ajoute un événement click à chaque image
       images.forEach(function(img) {
           img.onclick = function() {
               modal.style.display = "block";
               modalImg.src = this.src;
               captionText.innerHTML = this.alt;
           }
       });
   
       // Récupère le bouton de fermeture
       var span = document.getElementsByClassName("close")[0];
   
       // Ferme le modal lorsqu'on clique sur le bouton
       span.onclick = function() {
           modal.style.display = "none";
       }

       const video = document.getElementById("ma-video");

if (video) {
  // Survol = lecture
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
  });

  // Observer de visibilité
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        video.pause();
      }
    });
  }, {
    threshold: 0.1 // détection dès que 10% de la vidéo sort de l'écran
  });

  observer.observe(video);
}