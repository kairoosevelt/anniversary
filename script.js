const startScreen = document.getElementById("start-screen");
const main = document.getElementById("main");
const music = document.getElementById("bg-music");
const daysEl = document.getElementById("days");
const heartsContainer = document.querySelector(".hearts-container");

/* START */
startScreen.addEventListener("click", () => {
  music.play();
  startScreen.style.display = "none";
  main.classList.remove("hidden");
});

/* DAY COUNTER */
const startDate = new Date("2025-04-15");
const today = new Date();
const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
daysEl.textContent = diff;

/* FLOATING HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 12 + "px";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 600);

/* MODAL */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  };
});

modal.onclick = () => modal.style.display = "none";
