/* PASSWORD */
const PASSWORD = "bebe";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === PASSWORD) {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("enter-screen").classList.remove("hidden");
  } else {
    alert("wrong password 🤍");
  }
}

/* ENTER SITE */
function enterSite() {
  document.getElementById("enter-screen").classList.add("hidden");
  document.querySelectorAll(".hidden-content").forEach(el => {
    el.style.display = "block";
  });

  document.getElementById("bg-music").play();
  startHearts();
}

/* COUNTER */
const startDate = new Date("2025-04-15");
const today = new Date();
const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
document.getElementById("counter").innerText =
  `${diffDays} days of loving you 💕`;

/* FLOATING HEARTS */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 6 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }, 500);
}

/* IMAGE MODAL */
function openModal(img) {
  document.getElementById("modal-img").src = img.src;
  document.getElementById("image-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("image-modal").style.display = "none";
}
