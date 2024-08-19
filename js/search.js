const searchButton = document.querySelector('.header .search-btn');
const searchModal = document.querySelector('.search-modal');
const closeButton = searchModal.querySelector('.close-button');

function openSearchModal() {
  searchModal.classList.add('is-active');
  document.body.classList.add('open-search');
}

function closeSearchModal() {
  searchModal.classList.remove('is-active');
  document.body.classList.remove('open-search');
}

searchButton.addEventListener('click', openSearchModal);
closeButton.addEventListener('click', closeSearchModal);
