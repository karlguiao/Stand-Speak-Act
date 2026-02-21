// under the header
const images = document.querySelector('.carousel-images');
const totalSlides = document.querySelectorAll('.carousel-images img').length;
const firstDots = document.querySelectorAll('.Firstdot');
let index = 0;

function updateFirstDots() {
  firstDots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

updateFirstDots();

document.querySelector('.arrow.left').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  images.style.transform = `translateX(-${index * 100}%)`;
  updateFirstDots();
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  images.style.transform = `translateX(-${index * 100}%)`;
  updateFirstDots();
});




// ----------------------------------------------------------------------

// Mobile hamburger menu
(function(){
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();


// For the loads more button
const toggleBtn = document.getElementById("loadToggle");
const moreArticles = document.querySelector(".more-articles");
let isVisible = false;

toggleBtn.addEventListener("click", () => {
  isVisible = !isVisible;
  moreArticles.style.display = isVisible ? "block" : "none";

  toggleBtn.classList.toggle("active", isVisible);
});

// FAQS
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.toggle-icon');

    if (answer.classList.contains('open')) {
      answer.style.maxHeight = null;
      answer.classList.remove('open');
      icon.textContent = '+';
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.classList.add('open');
      icon.textContent = '-';
    }
  });
});

// footer back to top

document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.querySelector(".bck-to-tp-btn");

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function (e) {
      e.preventDefault(); 
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
