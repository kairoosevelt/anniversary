const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    btn.textContent = "⏸ pause music";
  } else {
    music.pause();
    btn.textContent = "▶ play music";
  }
  isPlaying = !isPlaying;
});
