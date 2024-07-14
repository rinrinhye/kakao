const header = document.querySelector('.header');

window.addEventListener('scroll', toggleClassListforHeader);

function toggleClassListforHeader() {
  if (window.scrollY > 0) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
}
