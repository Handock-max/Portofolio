document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // empêcher la navigation immédiate
    const url = link.getAttribute('href');
    
    const overlay = document.querySelector('.loading-overlay');
    overlay.classList.add('show');

    // délai avant navigation (ex : 800ms)
    setTimeout(() => {
      window.location.href = url;
    }, 800);
  });
});
