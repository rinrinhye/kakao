const overlays = document.querySelectorAll('.share-overlay');

const shareButtons = document.querySelectorAll('.info .share-button');

const slideArrowButtonGroup = document.querySelector(
  '.news-card-slide-wrap .news-card-slide-arrows'
);

const closeButtons = document.documentElement.querySelectorAll(
  '.share-overlay .close-button'
);

shareButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    button.classList.add('is-disabled');

    const card = button.parentElement.parentElement.closest('.card');

    const overlay = card.querySelector('.share-overlay');
    overlay.classList.add('is-active');

    if (window.innerWidth < 1024) {
      if (card.classList.contains('news-card')) {
        slideArrowButtonGroup.classList.add('is-disabled');
      }
    }
  });
});

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    console.log(card);
    const overlay = e.target.closest('.share-overlay');
    const shareButton = overlay.parentElement.querySelector('.share-button');
    shareButton.classList.remove('is-disabled');
    overlay.classList.remove('is-active');

    if (window.innerWidth < 1024) {
      if (card.classList.contains('news-card')) {
        slideArrowButtonGroup.classList.remove('is-disabled');
      }
    }
  });
});

window.addEventListener('resize', () => {
  if (
    window.innerWidth >= 1024 &&
    slideArrowButtonGroup.classList.contains('is-disabled')
  ) {
    slideArrowButtonGroup.classList.remove('is-disabled');
  }
});
