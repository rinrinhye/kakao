const hamburgerButton = document.querySelector('.header .hamburger-btn');
const sidebarGnb = document.querySelector('.sidebar-gnb');
const closeButton = sidebarGnb.querySelector('.close-button');
const sidebarGnbItems = sidebarGnb.querySelectorAll('.gnb-item');

let currentGnbItems = [];

function openSidebarGnb() {
  sidebarGnb.classList.add('is-active');
  document.body.classList.add('open-sidebar-gnb');
}

function closeSidebarGnb() {
  sidebarGnb.classList.remove('is-active');
  document.body.classList.remove('open-sidebar-gnb');
  currentGnbItems = [];

  sidebarGnbItems.forEach((item) => {
    const gnbLink = item.querySelector('.gnb-link');
    item.classList.remove('is-active');
    gnbLink.ariaExpanded = false;
  });
}

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

hamburgerButton.addEventListener('click', openSidebarGnb);
closeButton.addEventListener('click', closeSidebarGnb);

sidebarGnbItems.forEach((item) => {
  item.addEventListener('click', () => toggleSidebarGnbItem(item));
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    closeSidebarGnb();
  }
});
