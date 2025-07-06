document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();

    const content = document.querySelector('.content');
    const targetSectionId = button.getAttribute('data-target');

    // Afficher overlay + loader
    content.classList.add('loading');

    // Simuler délai de chargement (800ms)
    setTimeout(() => {
      // Cacher loader
      content.classList.remove('loading');

      // Afficher la bonne section et cacher les autres
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
      });
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
      }
    }, 800);
  });
});
