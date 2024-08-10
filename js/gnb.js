const gnbItems = document.documentElement.querySelectorAll('.header .gnb-item');

let currentGnbItem;

gnbItems.forEach((item) => {
	item.addEventListener('click', showAndHideLnb);
});

function showAndHideLnb(e) {
	e.stopPropagation();
	if (e.target.closest('.gnb-item').classList.contains('link')) return;

	if (!currentGnbItem) {
		/* 선택된 gnb 없을 때 */
		currentGnbItem = e.target.closest('.gnb-item');
		changeAriaExpandedtoTrue();
		addClassListforCurrentGnbItem();

		/* 윈도우 클릭 이벤트 추가 */
		window.addEventListener('click', closeGnbItemonClilkingOutside);
	} else {
		/* 선택된 gnb 있을 때 */
		if (currentGnbItem === e.target.closest('.gnb-item')) {
			/* current 있고 타겟 같음 */
			changeAriaExpandedtoFalse();
			removeClassListforCurrentGnbItem();
			currentGnbItem = null;

			window.removeEventListener('click', closeGnbItemonClilkingOutside);
		} else {
			/* current 있고 타겟 다름 */
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
