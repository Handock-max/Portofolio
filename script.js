const loadingOverlay = document.getElementById('loadingOverlay');

document.querySelectorAll('nav.nav a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // bloque la navigation immédiate

    const href = link.getAttribute('href');

    // Affiche l’overlay
    loadingOverlay.style.display = 'flex';

    // Charge la nouvelle page après un délai (700 ms ici)
    setTimeout(() => {
      window.location.href = href;
    }, 700);
  });
});
