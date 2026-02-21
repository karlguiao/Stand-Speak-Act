
// Mobile menu
(function(){
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();


// Footer back to top
document.addEventListener("DOMContentLoaded", () => {
    const backToTopLink = document.querySelector(".back-to-top");

    if (backToTopLink) {
      backToTopLink.addEventListener("click", function (e) {
        e.preventDefault(); 
        window.scrollTo({
          top: 0,
          behavior: "smooth" 
        });
      });
    }
  });