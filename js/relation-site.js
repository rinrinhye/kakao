const relationSiteButton = document.querySelector('.relation-group');

relationSiteButton.addEventListener('click', toggleSiteList);

function toggleSiteList() {
  relationSiteButton.classList.toggle('is-active');
}
