const container = document.getElementById('container');
const replayButton = document.getElementById('replayButton');
const playButton = document.getElementById('playPauseButton');
const fastSpeedButton = document.getElementById('fastSpeedButton');
const slowSpeedButton = document.getElementById('slowSpeedButton');

function resetAnimation() {
  container.classList.add('reset-animation');
  playButton.innerHTML = "Pause";

  setTimeout(function(){
    container.classList.remove('reset-animation');
  }, 10);

  const animatingElements = document.querySelectorAll('.word, .word *');
  let style;

  for (let i = 0; i < animatingElements.length; i++) {
    style = animatingElements[i].style;
    style.webkitAnimationPlayState = 'running';
  }
}


function togglePlayPause() {
  if (playButton.innerHTML === 'Pause') {
    playButton.innerHTML = "Play";
  } else {
    playButton.innerHTML = "Pause";
  }

  const animatingElements = document.querySelectorAll('.word, .word *');
  let style;

  for (let i = 0; i < animatingElements.length; i++) {
    style = animatingElements[i].style;
    if (style.webkitAnimationPlayState != 'paused') {
      console.log('a');
      style.webkitAnimationPlayState = 'paused';
    } else {
      console.log('b');
      style.webkitAnimationPlayState = 'running';
    }
  }
}


function slowSpeed() {
  resetAnimation();

  if (!container.classList.contains('animate-slow')) {
    container.classList.add("animate-slow");

    fastSpeedButton.classList.remove("active");
    slowSpeedButton.classList.add("active");
  }

}

function fastSpeed() {
  resetAnimation();

  if (container.classList.contains('animate-slow')) {
    container.classList.remove("animate-slow");

    fastSpeedButton.classList.add("active");
    slowSpeedButton.classList.remove("active");
  }
}


// document ready
{
  const animatingElements = document.querySelectorAll('.word, .word *');
  let style;

  for (let i = 0; i < animatingElements.length; i++) {
    style = animatingElements[i].style;
    style.webkitAnimationPlayState = 'running';
  }
}