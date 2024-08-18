const overlays = document.querySelectorAll('.share-overlay');

const shareButtons = document.querySelectorAll('.card .share-button');

const slideArrowButtonGroup = document.querySelector(
  '.news-card-slide-wrap .news-card-slide-arrows'
);

const closeButtons = document.documentElement.querySelectorAll(
  '.share-overlay .close-button'
);

function openShareOverlay(button) {
  button.classList.add('is-disabled');

  const card = button.parentElement.closest('.card');
  const overlay = card.querySelector('.share-overlay');
  const buttons = overlay.querySelectorAll('button, a');

  overlay.classList.add('is-active');
  buttons.forEach((button) => {
    button.tabIndex = 0;
  });

  if (window.innerWidth < 1024) {
    if (card.classList.contains('news-card')) {
      slideArrowButtonGroup.classList.add('is-disabled');
    }
  }
}

function closeShareOverlay(e) {
  const card = e.target.closest('.card');
  const overlay = e.target.closest('.share-overlay');
  const shareButton = overlay.parentElement.querySelector('.share-button');
  const buttons = overlay.querySelectorAll('button, a');

  shareButton.classList.remove('is-disabled');
  overlay.classList.remove('is-active');
  buttons.forEach((button) => {
    button.tabIndex = -1;
  });

  if (window.innerWidth < 1024) {
    if (card.classList.contains('news-card')) {
      slideArrowButtonGroup.classList.remove('is-disabled');
    }
  }
}

shareButtons.forEach((button) => {
  button.addEventListener('click', () => openShareOverlay(button));
});

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', closeShareOverlay);
});

window.addEventListener('resize', () => {
  if (
    window.innerWidth >= 1024 &&
    slideArrowButtonGroup.classList.contains('is-disabled')
  ) {
    slideArrowButtonGroup.classList.remove('is-disabled');
  }
});
