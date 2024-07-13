const gnbItem = document.documentElement.querySelectorAll('.gnb-item');

let currentGnbItem;

gnbItem.forEach((item) => {
  item.addEventListener('click', showAndHideLnb);
});

function showAndHideLnb(e) {
  if (!currentGnbItem) {
    /* 선택된 gnb 없을 때 */
    currentGnbItem = e.target;
    addClassListforCurrentGnbItem();

    /* 윈도우 클릭 이벤트 추가 */
    window.addEventListener('click', closeGnbItemonClilkingOutside);
  } else {
    /* 선택된 gnb 있을 때 */
    if (currentGnbItem === e.target) {
      /* current 있고 타겟 같음 */
      removeClassListforCurrentGnbItem();
      currentGnbItem = null;

      window.removeEventListener('click', closeGnbItemonClilkingOutside);
    } else {
      /* current 있고 타겟 다름 */
      removeClassListforCurrentGnbItem();
      currentGnbItem = e.target;
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

function closeGnbItemonClilkingOutside(e) {
  if (!e.target.contains(currentGnbItem)) {
    removeClassListforCurrentGnbItem();
    currentGnbItem = null;

    window.removeEventListener('click', closeGnbItemonClilkingOutside);
  }
}
