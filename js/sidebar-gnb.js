const hamburgerButton = document.querySelector('.header .hamburger-btn');
const sidebarGnb = document.querySelector('.sidebar-gnb');
const closeButton = sidebarGnb.querySelector('.close-button');
const sidebarGnbItems = sidebarGnb.querySelectorAll('.gnb-item');

hamburgerButton.addEventListener('click', openSidebarGnb);
closeButton.addEventListener('click', closeSidebarGnb);

function openSidebarGnb() {
  if (!sidebarGnb.classList.contains('link')) {
    sidebarGnb.classList.add('is-active');
    document.body.style.overflowY = 'hidden';
  }
}

function closeSidebarGnb() {
  if (!sidebarGnb.classList.contains('link')) {
    sidebarGnb.classList.remove('is-active');
    document.body.style.overflowY = 'auto';
  }
}

sidebarGnbItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('is-active');
  });
});
