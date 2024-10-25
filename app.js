function playSound(e) {
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // key does not have an associated audio and stops function from running

  key.classList.add('playing');

  audio.currentTime = 0; // rewind to start time
  audio.play();

  // console.log(audio);
  // console.log(key);
}

function removeTransition(e) {
  console.log(e);
  if (e.propertyName !== 'transform') return; 
  this.classList.remove('playing');
}

const Keys = document.querySelectorAll('.key');

Keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// console.log(Keys);

Keys.forEach(key => {
  key.addEventListener('click', (e) => {
    const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);

    audio.currentTime = 0; 
    audio.play();

    key.classList.add('playing');
    removeTransition(e);
  });
})

window.addEventListener('keydown', playSound);


