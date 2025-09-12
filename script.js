function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelectorAll(".article-container.double-img img").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoomed"); // toggle zoom on/off
  });
});
