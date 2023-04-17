// Récupère tous les liens de navigation
const navLinks = document.querySelectorAll('nav a');

// Parcourt chaque lien de navigation
navLinks.forEach(link => {
  // Ajoute un écouteur d'événements pour le clic sur chaque lien de navigation
  link.addEventListener('click', event => {
    // Empêche le comportement par défaut du clic sur le lien (la navigation vers la page spécifiée dans href)
    event.preventDefault();

    // Récupère l'ID de la section de destination depuis la propriété href du lien
    const sectionId = link.getAttribute('href');

    // Sélectionne l'élément HTML correspondant à l'ID de la section de destination
    const section = document.querySelector(sectionId);

    // Fait défiler la page jusqu'à la section de destination en utilisant la méthode scrollIntoView()
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
