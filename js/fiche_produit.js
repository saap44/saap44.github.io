/**
 * Gestion de la fenêtre modale des produits
 * Ce script gère l'affichage et l'interaction avec la popup
 * de détails des produits
 */

// Sélection des éléments de la popup
const popup = document.getElementById('productPopup');            // Conteneur principal
const popupTitle = document.getElementById('popupTitle');        // Titre du produit
const popupImage = document.getElementById('popupImage');        // Image du produit
const popupPrice = document.getElementById('popupPrice');        // Prix du produit
const popupDescription = document.getElementById('popupDescription'); // Description
const popupDimensions = document.getElementById('popupDimensions');  // Dimensions
const closeBtn = document.querySelector('.close-btn');           // Bouton de fermeture

// Sélection de tous les boutons d'ouverture de popup
const openButtons = document.querySelectorAll('.openPopupBtn');

/**
 * Gestion de l'ouverture de la popup pour chaque produit
 * Récupère les données du produit depuis les attributs data-*
 * et les affiche dans la popup
 */
openButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const name = productCard.dataset.name;
    const price = productCard.dataset.price;
    const image = productCard.dataset.image;
    const dimensions = productCard.dataset.dimensions;
    const references = productCard.dataset.references;  // <-- ajout

    popupTitle.textContent = name;
    popupPrice.textContent = price;
    popupImage.src = image;
    popupDimensions.textContent = dimensions;
    popupReferences.textContent = references;  // <-- ajout

    popup.style.display = 'flex';
  });
});

/**
 * Gestion de la fermeture de la popup
 * Deux moyens de fermer :
 * 1. En cliquant sur le bouton de fermeture
 * 2. En cliquant en dehors de la popup
 */
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';  // Cache la popup
});

// Fermeture en cliquant en dehors de la popup
window.addEventListener('click', (e) => {
  if (e.target === popup) {      // Si le clic est sur le fond
    popup.style.display = 'none'; // Cache la popup
  }
});
