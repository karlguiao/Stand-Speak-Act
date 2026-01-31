// Hamburger Menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobileMenu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });
  }
});
