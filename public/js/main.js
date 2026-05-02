document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.addEventListener('click', event => {
      if (link.hash) {
        event.preventDefault();
        document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Hero sections clickables solo en la página principal
  const heroSection = document.querySelector('.hero:not(.hero-clean)');
  
  if (heroSection) {
    const heroHw = heroSection.querySelector('.hero-hw');
    const heroSw = heroSection.querySelector('.hero-sw');

    if (heroHw) {
      heroHw.addEventListener('click', () => {
        window.location.href = '/hardware';
      });
    }

    if (heroSw) {
      heroSw.addEventListener('click', () => {
        const target = document.querySelector('#sw-detalles');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
});
