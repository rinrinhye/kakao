const sectionStory = document.querySelector('.section-story');
const storySlideWrapper = sectionStory.querySelector('.story-slide-wrapper');
const button = sectionStory.querySelector('.slide-button');
const storySlideList = document.querySelector('.story-slide-list');
const cloneStorySlideList = storySlideList.cloneNode(true);
storySlideList.after(cloneStorySlideList);

const storySlideLists = document.querySelectorAll('.story-slide-list');

let click = false;

button.addEventListener('click', () => {
  if (button.classList.contains('is-paused')) {
    play();
  } else {
    puased();
  }
  click = !click;
});

function puased() {
  button.classList.add('is-paused');
  storySlideLists.forEach((list) => {
    list.style.animationPlayState = 'paused';
  });
}

function play() {
  button.classList.remove('is-paused');
  storySlideLists.forEach((list) => {
    list.style.animationPlayState = 'running';
  });
}

storySlideWrapper.addEventListener('mouseenter', () => {
  if (click) return;
  else {
    puased();
  }
});

storySlideWrapper.addEventListener('mouseleave', () => {
  if (click) return;
  else {
    play();
  }
});
