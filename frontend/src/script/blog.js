export function initCarousel() {
  const slides = document.querySelectorAll('.carousel input[type="radio"]');
  if (slides.length === 0) return;

  let index = 0;

  function autoNext() {
    slides[index].checked = false;
    index = (index + 1) % slides.length;
    slides[index].checked = true;
  }

  let carouselInterval = setInterval(autoNext, 6000);

  slides.forEach((slide, i) => {
    slide.addEventListener("click", () => {
      clearInterval(carouselInterval);
      index = i;
      carouselInterval = setInterval(autoNext, 3000);
    });
  });
}

// Search Filter
export const categories = [
  "All",
  "Climate & Environment",
  "Digital Rights & Cybersecurity",
  "Media & Misinformation",
  "Mental Health & Wellbeing",
  "Equity & Inclusion",
  "Youth Advocacy & Education",
  "Global Perspectives",
  "Design for Change",
  "Public Health Challenges",
];
