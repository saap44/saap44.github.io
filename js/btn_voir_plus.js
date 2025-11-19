/**
 * Script pour gérer l'affichage progressif des produits
 * 
 * Ce script permet de :
 * - Charger plus de produits quand l'utilisateur clique sur "Voir plus"
 * - Afficher un nombre fixe de produits à chaque clic
 * - Cacher le bouton quand tous les produits sont affichés
 */

// Configuration
const PRODUCTS_PER_LOAD = 6;  // Nombre de produits à afficher par chargement

// Sélection des éléments du DOM
const plusProduits = document.querySelectorAll('.plusProduits');  // Tous les produits cachés
const btnPlusProduits = document.getElementById('button_produit');  // Bouton "Voir plus"

// Variable pour suivre l'index du dernier produit affiché
let currentIndex = 0;

/**
 * Affiche plus de produits lorsque le bouton est cliqué
 * Affiche PRODUCTS_PER_LOAD produits à la fois
 * Cache le bouton quand tous les produits sont affichés
 */
function showMoreProducts() {
    // Définit les limites de la prochaine série de produits
    const start = currentIndex;  // Index de début pour cette série
    const end = Math.min(currentIndex + PRODUCTS_PER_LOAD, plusProduits.length);  // Index de fin
    
    // Affiche les produits un par un
    for (let i = start; i < end; i++) {
        plusProduits[i].classList.remove('hidden');  // Retire la classe qui cache le produit
    }
    
    // Met à jour l'index pour le prochain chargement
    currentIndex = end;  // Met à jour l'index pour la prochaine série
    
    // Cache le bouton si tous les produits sont affichés
    if (currentIndex >= plusProduits.length) {
        btnPlusProduits.style.display = 'none';
    }
}

// Ajoute l'écouteur d'événement uniquement si le bouton existe
if (btnPlusProduits) {
    btnPlusProduits.addEventListener('click', showMoreProducts);
}