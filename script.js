const PASSWORD = "150425";

/* PASSWORD */
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === PASSWORD) {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("enter-screen").classList.remove("hidden");
  } else {
    alert("wrong password 🤍");
  }
}

/* ENTER */
function enterSite() {
  document.getElementById("enter-screen").classList.add("hidden");
  document.querySelectorAll(".hidden-content").forEach(el => el.style.display="block");
  document.getElementById("bg-music").play();
  startHearts();
  fadeOnScroll();
}

/* COUNTER */
const startDate = new Date("2025-04-15");
const today = new Date();
const days = Math.floor((today-startDate)/(1000*60*60*24));
document.getElementById("counter").innerText =
  `${days} days of loving you 💕`;

/* HEARTS */
function startHearts(){
  setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤";
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=5+Math.random()*5+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),10000);
  },500);
}

/* FADE ON SCROLL */
function fadeOnScroll(){
  const sections=document.querySelectorAll(".fade-section");
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("show");
      }
    });
  },{threshold:0.15});
  sections.forEach(s=>observer.observe(s));
}

/* MODAL */
function openModal(img){
  document.getElementById("modal-img").src=img.src;
  document.getElementById("image-modal").style.display="flex";
}
function closeModal(){
  document.getElementById("image-modal").style.display="none";
}
