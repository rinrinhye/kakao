const infoGroups = document.querySelectorAll('.info-group.is-closed');

let currentInfoGroup = null;

function closeCurrentInfoGroup() {
  currentInfoGroup.classList.remove('is-active');
  currentInfoGroup.classList.add('is-closed');
}

function openNewInfoGroup(newInfoGroup) {
  newInfoGroup.classList.remove('is-closed');
  newInfoGroup.classList.add('is-active');
}

infoGroups.forEach((infoGroup) => {
  infoGroup.addEventListener('click', (e) => {
    const newInfoGroup = e.target.closest('.info-group');
    if (currentInfoGroup === null) {
      openNewInfoGroup(newInfoGroup);
      currentInfoGroup = infoGroup;
    } else if (currentInfoGroup !== newInfoGroup) {
      closeCurrentInfoGroup();
      openNewInfoGroup(newInfoGroup);
      currentInfoGroup = newInfoGroup;
    } else if (currentInfoGroup === newInfoGroup) {
      closeCurrentInfoGroup();
      currentInfoGroup = null;
    }
  });
});
