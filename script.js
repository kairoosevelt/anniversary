const startScreen = document.getElementById("start-screen");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("bg-music");
const daysCount = document.getElementById("days-count");
const heartsContainer = document.querySelector(".hearts-container");

/* START EXPERIENCE */
startScreen.addEventListener("click", () => {
  music.play();
  startScreen.style.display = "none";
  mainContent.classList.remove("hidden");
});

/* DAY COUNTER */
function updateDays() {
  const startDate = new Date("2025-04-15");
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  daysCount.textContent = diffDays;
}

updateDays();

/* FLOATING HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";
  heart.style.fontSize = 14 + Math.random() * 10 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 500);
