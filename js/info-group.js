const infoGroups = document.querySelectorAll('.info-group.is-closed');

let currentInfoGroup = null;

infoGroups.forEach((infoGroup) => {
  infoGroup.addEventListener('click', (e) => {
    const infoGroup = e.target.closest('.info-group');
    if (currentInfoGroup === null) {
      infoGroup.classList.add('is-active');
      infoGroup.classList.remove('is-closed');
      currentInfoGroup = infoGroup;
    } else if (currentInfoGroup !== infoGroup) {
      currentInfoGroup.classList.add('is-closed');
      currentInfoGroup.classList.remove('is-active');
      infoGroup.classList.remove('is-closed');
      infoGroup.classList.add('is-active');
      currentInfoGroup = infoGroup;
    } else if (currentInfoGroup === infoGroup) {
      currentInfoGroup.classList.add('is-closed');
      currentInfoGroup.classList.remove('is-active');
      currentInfoGroup = null;
    }
  });
});
