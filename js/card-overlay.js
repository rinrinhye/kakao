const overlays = document.querySelectorAll('.share-overlay');

const shareButtons = document.querySelectorAll('.info .share-button');

const slideArrowButtons = document.querySelectorAll(
  '.news-card-slide-wrap .news-card-slide-arrows'
);

const closeButtons = document.documentElement.querySelectorAll(
  '.share-overlay .close-button'
);

shareButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    button.classList.add('is-disabled');

    let overlay = button.parentElement.parentElement
      .closest('.card')
      .querySelector('.share-overlay');

    overlay.classList.add('is-active');
  });
});

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', (e) => {
    let overlay = e.target.closest('.share-overlay');
    let shareButton = overlay.parentElement.querySelector('.share-button');
    shareButton.classList.remove('is-disabled');
    overlay.classList.remove('is-active');
  });
});
