// Sélectionne le bouton de retour en haut
const btn = document.querySelector('.btn-up');

// Ajoute un événement de clic sur le bouton pour remonter en haut de la page
btn.addEventListener('click', () => {
    // Fait défiler la page vers le haut avec une animation fluide
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

// Gestion de l'affichage/masquage du bouton en fonction du défilement
window.addEventListener('scroll', function () {
  const button = document.querySelector('.btn-up');

  // Affiche le bouton si on a défilé de plus de 300px
  if (window.scrollY >= 300) {
    button.style.display = 'block'; 
  } else {
    // Masque le bouton si on est en haut de la page
    button.style.display = 'none'; 
  }
});