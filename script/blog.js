// Auto Next Animation
const slides = document.querySelectorAll('.carousel input[type="radio"]');
let index = 0;

function autoNext() {
  slides[index].checked = false;
  index = (index + 1) % slides.length;
  slides[index].checked = true;
}

setInterval(autoNext, 6000);

// Blog Functions
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const categoryButtons = document.querySelectorAll(".filter-menu button");
const cardsContainer = document.querySelector(".voices-cards");
const cards = Array.from(document.querySelectorAll(".voice-card"));

// Pagination Setup
const itemsPerPage = 9;
let currentPage = 1;
let activeCategory = "all";

// Default Sort
if (sortSelect) {
  sortSelect.value = "oldest";
}

// Main Render Function (Filter, Sort, Paginate)
function renderCards() {
  const query = searchInput.value.toLowerCase().trim();

  // Filter by Search and Category
  let filtered = cards.filter((card) => {
    const title =
      card.querySelector(".card-title")?.textContent.toLowerCase() || "";
    const category =
      card.querySelector(".card-category")?.textContent.toLowerCase() || "";
    const description =
      card.querySelector(".card-description")?.textContent.toLowerCase() || "";

    const matchSearch =
      title.includes(query) ||
      category.includes(query) ||
      description.includes(query);
    const matchCategory =
      activeCategory === "all" || category.includes(activeCategory);

    return matchSearch && matchCategory;
  });

  // Sorting
  if (sortSelect) {
    const value = sortSelect.value;
    filtered.sort((a, b) => {
      const titleA =
        a.querySelector(".card-title")?.textContent.toLowerCase() || "";
      const titleB =
        b.querySelector(".card-title")?.textContent.toLowerCase() || "";
      const dateA = new Date(a.dataset.date || "2000-01-01");
      const dateB = new Date(b.dataset.date || "2000-01-01");

      if (value === "az") return titleA.localeCompare(titleB);
      if (value === "za") return titleB.localeCompare(titleA);
      if (value === "newest") return dateB - dateA;
      if (value === "oldest") return dateA - dateB;
      return 0;
    });
  }

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  if (currentPage > totalPages) currentPage = 1;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginated = filtered.slice(start, end);

  // Render
  cardsContainer.innerHTML = "";
  paginated.forEach((card) => cardsContainer.appendChild(card));

  // Fill placeholders if less results
  if (currentPage === 1 && paginated.length < itemsPerPage) {
    const missing = itemsPerPage - paginated.length;
    for (let i = 0; i < missing; i++) {
      const placeholder = document.createElement("div");
      placeholder.classList.add("voice-card", "placeholder-card");
      placeholder.innerHTML = "&nbsp;";
      cardsContainer.appendChild(placeholder);
    }
  }

  renderPagination(totalPages);
}

// Pagination Renderer
function renderPagination(totalPages) {
  const paginationContainer = document.querySelector(".pagination");
  if (!paginationContainer) return;

  paginationContainer.innerHTML = "";

  // Prev Button
  const prevBtn = document.createElement("button");
  prevBtn.className = "page-btn";
  prevBtn.textContent = "«";
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderCards();
    }
  });
  paginationContainer.appendChild(prevBtn);

  // Page Numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageNum = document.createElement("span");
    pageNum.className = "page-num";
    if (i === currentPage) pageNum.classList.add("active");
    pageNum.textContent = i;
    pageNum.addEventListener("click", () => {
      currentPage = i;
      renderCards();
    });
    paginationContainer.appendChild(pageNum);
  }

  // Next Button
  const nextBtn = document.createElement("button");
  nextBtn.className = "page-btn";
  nextBtn.textContent = "»";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderCards();
    }
  });
  paginationContainer.appendChild(nextBtn);
}

// Event Listeners
if (searchInput) {
  searchInput.addEventListener("input", () => {
    currentPage = 1;
    renderCards();
  });
}

if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    renderCards();
  });
}

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category || "all";
    currentPage = 1;
    renderCards();
  });
});

//  Initialize
renderCards();
