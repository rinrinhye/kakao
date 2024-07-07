const overlays = document.querySelectorAll(
  ".news-card-slide-wrap .share-overlay-group"
);

const shareButtons = document.querySelectorAll(
  ".news-card-slide-wrap .share-button"
);

const slideArrowButtons = document.querySelectorAll(
  ".news-card-slide-wrap .news-card-slide-arrows"
);

const closeButtons = document.documentElement.querySelectorAll(
  ".share-overlay-group .close-button"
);

// shareButtons.addEventListener("click", (e) => {
//   e.target.classList.toggle("is-disabled");
//   console.log(e.target);
//   overlay.classList.toggle("is-active");
//   // slideArrowButtons.classList.toggle("is-disabled");
// });

shareButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    button.classList.add("is-disabled");
    let overlay = e.target.closest(".share-button").nextElementSibling;
    overlay.classList.add("is-active");
  });
});

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", (e) => {
    let overlay = e.target.closest(".share-overlay-group");
    let shareButton = overlay.previousElementSibling;
    shareButton.classList.remove("is-disabled");
    overlay.classList.remove("is-active");
  });
});
