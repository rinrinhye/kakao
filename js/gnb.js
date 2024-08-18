const gnbItems = document.documentElement.querySelectorAll('.header .gnb-item');

let currentGnbItem;

gnbItems.forEach((item) => {
  item.addEventListener('click', showAndHideLnb);
});

function showAndHideLnb(e) {
  e.stopPropagation();
  if (e.target.closest('.gnb-item').classList.contains('link')) return;

  if (!currentGnbItem) {
    currentGnbItem = e.target.closest('.gnb-item');
    changeAriaExpandedtoTrue();
    addClassListforCurrentGnbItem();

    window.addEventListener('click', closeGnbItemonClilkingOutside);
  } else {
    if (currentGnbItem === e.target.closest('.gnb-item')) {
      changeAriaExpandedtoFalse();
      removeClassListforCurrentGnbItem();
      currentGnbItem = null;

      window.removeEventListener('click', closeGnbItemonClilkingOutside);
    } else {
      changeAriaExpandedtoFalse();
      removeClassListforCurrentGnbItem();
      currentGnbItem = e.target.closest('.gnb-item');
      changeAriaExpandedtoTrue();
      addClassListforCurrentGnbItem();
    }
  }
}

function removeClassListforCurrentGnbItem() {
  currentGnbItem.classList.remove('is-active');
}

function addClassListforCurrentGnbItem() {
  currentGnbItem.classList.add('is-active');
}

function changeAriaExpandedtoTrue() {
  currentGnbItem.firstElementChild.setAttribute('aria-expanded', 'true');
}
function changeAriaExpandedtoFalse() {
  currentGnbItem.firstElementChild.setAttribute('aria-expanded', 'false');
}

function closeGnbItemonClilkingOutside(e) {
  if (!e.target.contains(currentGnbItem)) {
    currentGnbItem.firstElementChild.setAttribute('aria-expanded', 'false');
    removeClassListforCurrentGnbItem();
    currentGnbItem = null;

    window.removeEventListener('click', closeGnbItemonClilkingOutside);
  }
}
