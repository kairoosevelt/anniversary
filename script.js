/* COUNTER DAYS */
const startDate = new Date("2025-04-15");
const today = new Date();
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("counter").innerText =
  `${diffDays} days of loving you 💕`;

/* FLOATING HEARTS */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 6 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}, 450);
