/* ==================================================
   HAMBURGER MENU
================================================== */
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");

function toggleMenu() {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ==================================================
   SCROLL REVEAL ANIMATIONS
================================================== */
const revealElements = document.querySelectorAll(
  "section, .experience-item, .skills-card, .details-container"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-show");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => {
  el.classList.add("reveal-hidden"); // initial hidden state
  revealObserver.observe(el);
});

/* ==================================================
   DARK / LIGHT MODE TOGGLE
================================================== */
const themeToggle = document.createElement("button");
themeToggle.innerText = "🌙";
themeToggle.id = "theme-toggle";
document.body.appendChild(themeToggle);

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.innerText = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    themeToggle.innerText = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.innerText = "🌙";
  }
});

/* ==================================================
   SCROLL TO TOP BUTTON
================================================== */
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆️";
scrollBtn.id = "scroll-top-btn";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ==================================================
   PROJECT IMAGE MODAL PREVIEW
================================================== */
const projectImages = document.querySelectorAll("#projects img");

const modal = document.createElement("div");
modal.id = "img-modal";
modal.innerHTML = `<span id="close-modal">&times;</span><img id="modal-img" />`;
document.body.appendChild(modal);

const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

projectImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
