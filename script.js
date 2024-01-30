const btnPlayPause = document.getElementById("play-pause");
const btnForward = document.getElementById("forward-track");
const btnBackward = document.getElementById("backward-track");
const audioChapter = document.getElementById("audio-chapter");
const nameChapter = document.getElementById("chapter");
const numberChapters = 10;

let isPlay;
let currentChapter = 1;

function play() {
  audioChapter.play();
  isPlay = true;
  btnPlayPause.classList.remove("bi-play-circle-fill");
  btnPlayPause.classList.add("bi-pause-circle-fill");
}

function pause() {
  isPlay = false;
  audioChapter.pause();
  btnPlayPause.classList.remove("bi-pause-circle-fill");
  btnPlayPause.classList.add("bi-play-circle-fill");
}

function playOrPause() {
  isPlay ? pause() : play();
}

function forwardChapter() {
  if (currentChapter === numberChapters) {
    currentChapter = 1;
  } else {
    currentChapter = currentChapter + 1;
  }
  changeNameChapter();
  pause();
  audioChapter.src = `./books/dom-casmurro/${currentChapter}.mp3`;
}

function backwardChapter() {
  if (currentChapter === 1) {
    currentChapter = 10;
  } else {
    currentChapter = currentChapter - 1;
  }
  changeNameChapter();
  pause();
  audioChapter.src = `./books/dom-casmurro/${currentChapter}.mp3`;
}

function changeNameChapter() {
  nameChapter.innerHTML = `Capítulo ${currentChapter}`;
}

btnBackward.addEventListener("click", backwardChapter);
btnForward.addEventListener("click", forwardChapter);
btnPlayPause.addEventListener("click", playOrPause);
audioChapter.addEventListener("ended", forwardChapter);
