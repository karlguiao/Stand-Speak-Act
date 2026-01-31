export function initBlogDOM() {
  if (document.querySelectorAll(".carousel").length === 0) {
  }

  // CAROUSEL: simple smooth slide using transform on the track
  document.querySelectorAll(".carousel").forEach((carousel) => {
    if (carousel.dataset.carouselInit === "true") return;
    carousel.dataset.carouselInit = "true";

    const track = carousel.querySelector(".carousel-images");
    if (!track) return;

    const slides = Array.from(track.querySelectorAll(".image-container"));
    if (slides.length === 0) return;

    // ensure track layout for sliding (these inline styles are safe fallback)
    track.style.display = track.style.display || "flex";
    track.style.transition =
      track.style.transition || "transform 0.5s cubic-bezier(0.4,0,0.2,1)";
    track.style.willChange = "transform";
    track.style.width = `${slides.length * 100}%`;
    slides.forEach((s) => {
      s.style.flex = `0 0 ${100 / slides.length}%`;
      s.style.maxWidth = `${100 / slides.length}%`;
    });

    const leftArrow = carousel.querySelector(".arrow-left");
    const rightArrow = carousel.querySelector(".arrow-right");
    const dots = Array.from(carousel.querySelectorAll(".Firstdot, .dot"));

    let current = 0;
    let isSliding = false;
    const TRANSITION_MS = 500;
    let autoplayTimer = null;
    const AUTOPLAY_MS = 6000;

    function updateTrack() {
      const shift = (current * 100) / slides.length;
      track.style.transform = `translateX(-${shift}%)`;
      slides.forEach((s, i) => s.classList.toggle("active", i === current));
      dots.forEach((d, i) => d.classList.toggle("active", i === current));
    }

    function goTo(index) {
      if (isSliding) return;
      isSliding = true;

      carousel.classList.add("sliding");

      current = (index + slides.length) % slides.length;

      dots.forEach((d, i) => d.classList.toggle("active", i === current));
      slides.forEach((s, i) => s.classList.toggle("active", i === current));

      updateTrack();

      setTimeout(() => {
        carousel.classList.remove("sliding");
        isSliding = false;
      }, TRANSITION_MS + 10);
    }

    function next() {
      goTo(current + 1);
    }

    function prev() {
      goTo(current - 1);
    }

    if (rightArrow) {
      rightArrow.addEventListener("click", (e) => {
        e.preventDefault();
        next();
        stopAutoplay();
      });
    }
    if (leftArrow) {
      leftArrow.addEventListener("click", (e) => {
        e.preventDefault();
        prev();
        stopAutoplay();
      });
    }

    dots.forEach((dot) => {
      dot.style.cursor = "default";
      dot.style.pointerEvents = "none";
    });

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(() => next(), AUTOPLAY_MS);
    }
    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", startAutoplay);

    updateTrack();
    startAutoplay();
  });

  // MOBILE MENU TOGGLE
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobileMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // FAQS TOGGLE
  document.querySelectorAll(".faq-question").forEach((button) => {
    if (button.dataset.faqInit === "true") return;
    button.dataset.faqInit = "true";

    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const icon = button.querySelector(".toggle-icon");

      if (!answer) return;

      if (answer.classList.contains("open")) {
        answer.style.maxHeight = null;
        answer.classList.remove("open");
        if (icon) icon.textContent = "+";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.classList.add("open");
        if (icon) icon.textContent = "-";
      }
    });
  });
}

// FEATURED ARTICLES SCROLL
export function scrollCarouselByCards(wrapperEl, direction = 1, cards = 3) {
  if (!wrapperEl) return;
  const firstCard = wrapperEl.querySelector(".my-grad");
  if (!firstCard) return;
  const style = getComputedStyle(firstCard);
  const marginRight = parseFloat(style.marginRight) || 0;
  const cardWidth = firstCard.getBoundingClientRect().width + marginRight;
  wrapperEl.scrollBy({
    left: cardWidth * cards * direction,
    behavior: "smooth",
  });
}
