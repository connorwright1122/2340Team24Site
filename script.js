const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        behavior: 'smooth',
        top: target.offsetTop
      });
    }
  });
}
