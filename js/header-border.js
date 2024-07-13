const header = document.documentElement.querySelector('.header');
const BORDERCOLOR = '#EEE';

window.addEventListener('scroll', addBorder);

function addBorder() {
  if (window.scrollY > 0) {
    header.style.borderBottom = `1px solid ${BORDERCOLOR}`;
  } else {
    header.style.border = `0`;
  }
}
