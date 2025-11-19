/**
 * Animation du menu burger
 * Ce script gère l'animation et l'interaction avec le menu de navigation
 */

// Sélection des éléments du DOM
const links = document.querySelector('.links');  // Conteneur des liens
const line = document.querySelector('.line');    // Ligne d'animation

/**
 * Gestion du survol des liens
 * La ligne se déplace en fonction du lien survolé
 */
if (links && line) {  // Vérification que les éléments existent
    // Calcul initial de la position de la ligne
    const lineWidth = line.offsetWidth;
    const linkWidth = links.querySelector('a').offsetWidth;
    const offset = (linkWidth - lineWidth) / 2;

    /**
     * Met à jour la position de la ligne d'animation
     * @param {number} index - L'index du lien survolé (1-based)
     */
    function updateLinePosition(index) {
        if (!index) return;
        const position = linkWidth * (index - 1) + offset;
        line.style.transform = `translateX(${position}px)`;
    }

    // Écoute des événements de survol sur les liens
    links.querySelectorAll('a').forEach((link, i) => {
        link.addEventListener('mouseover', () => {
            updateLinePosition(i + 1);
            line.style.opacity = '1';
        });

        link.addEventListener('mouseout', () => {
            line.style.opacity = '0';
        });
    });
}

// Sélection du bouton hamburger et de la navigation
const humburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");

/**
 * Gestion du menu hamburger
 * Active/désactive le menu de navigation mobile
 */
humburgerButton.addEventListener("click", toggleNav);

/**
 * Bascule l'état du menu
 * Ajoute/supprime la classe 'active' sur le bouton et la navigation
 */
function toggleNav() {
    humburgerButton.classList.toggle("active");  // Animation du bouton
    navigation.classList.toggle("active");       // Affichage/masquage du menu
}

