const hamburgerButton = document.querySelector('.header .hamburger-btn');
const sidebarGnb = document.querySelector('.sidebar-gnb');
const closeButton = sidebarGnb.querySelector('.close-button');
const sidebarGnbItems = sidebarGnb.querySelectorAll('.gnb-item');

let currentGnbItems = [];

hamburgerButton.addEventListener('click', openSidebarGnb);
closeButton.addEventListener('click', closeSidebarGnb);

function openSidebarGnb() {
  sidebarGnb.classList.add('is-active');
  document.body.style.overflowY = 'hidden';
}

function closeSidebarGnb() {
  sidebarGnb.classList.remove('is-active');
  document.body.style.overflowY = 'auto';

  sidebarGnbItems.forEach((item) => {
    const gnbLink = item.querySelector('.gnb-link');
    item.classList.remove('is-active');
    gnbLink.ariaExpanded = false;
  });
}

sidebarGnbItems.forEach((item) => {
  item.addEventListener('click', () => toggleSidebarGnbItem(item));
});

function toggleSidebarGnbItem(item) {
  const gnbLink = item.querySelector('.gnb-link');

  if (!currentGnbItems.includes(item)) {
    currentGnbItems = [...currentGnbItems, item];
    item.classList.add('is-active');

    gnbLink.ariaExpanded = 'true';
  } else if (currentGnbItems.includes(item)) {
    currentGnbItems = currentGnbItems.filter((currentItem) => {
      return currentItem !== item;
    });
    item.classList.remove('is-active');
    gnbLink.ariaExpanded = 'false';
  }
}
