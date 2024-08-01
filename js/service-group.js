const serviceGroups = document.querySelectorAll('.service-group');

serviceGroups.forEach((serviceGroup) => {
  serviceGroup.addEventListener('click', (e) => {
    const serviceGroup = e.target.closest('.service-group');

    serviceGroup.classList.toggle('is-active');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    serviceGroups.forEach((serviceGroup) => {
      serviceGroup.classList.remove('is-active');
    });
  }
});
