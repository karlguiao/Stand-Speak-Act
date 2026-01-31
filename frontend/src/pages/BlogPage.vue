<template>
  <div id="top">
    <Header />

    <!-- Caroursel Images -->
    <section class="carousel">
      <!-- Radio buttons -->
      <input type="radio" name="carousel" id="slide1" checked />
      <input type="radio" name="carousel" id="slide2" />
      <input type="radio" name="carousel" id="slide3" />

      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-slide slide1">
          <div class="overlay"></div>
          <div class="carousel-content">
            <div class="text-left">
              <span class="category fade-in">Mental Health & Wellbeing</span>
              <h1 class="fade-in">
                <a href="#" class="slide-title-link">The Wellness Gap</a>
              </h1>
              <p class="fade-in delay">
                Explores disparities in healthcare access and emotional support
                systems.
              </p>
            </div>
            <div class="author-info">
              <div class="author-pic"></div>
              <div class="author-text">
                <h4 class="fade-in delay">Amara Velasquez</h4>
                <p class="fade-in delay">
                  Sept 29, 2025 • <span>10 mins read</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-slide slide2">
          <div class="overlay"></div>
          <div class="carousel-content">
            <div class="text-left">
              <span class="category fade-in">Global Perspectives</span>
              <h1 class="fade-in">
                <a href="#" class="slide-title-link">Borders & Belonging</a>
              </h1>
              <p class="fade-in delay">
                Exploring the emotional and political realities of migration,
                displacement, and the fight for identity in unfamiliar lands.
              </p>
            </div>
            <div class="author-info">
              <div class="author-pic"></div>
              <div class="author-text">
                <h4 class="fade-in delay">Ravi Okoye</h4>
                <p class="fade-in delay">
                  Sept 29, 2025 • <span>10 mins read</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-slide slide3">
          <div class="overlay"></div>
          <div class="carousel-content">
            <div class="text-left">
              <span class="category fade-in">Media & Misinformation</span>
              <span class="category fade-in">Global Perspectives</span>
              <h1 class="fade-in">
                <a href="#" class="slide-title-link">Power, Interrupted</a>
              </h1>
              <p class="fade-in delay">
                Unpacking how corruption erodes trust, silences voices, and
                fuels resistance—from local councils to global institutions.
              </p>
            </div>
            <div class="author-info">
              <div class="author-pic"></div>
              <div class="author-text">
                <h4 class="fade-in delay">Lina Farouk</h4>
                <p class="fade-in delay">
                  Sept 29, 2025 • <span>10 mins read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Indicators (labels for radio) -->
      <div class="carousel-indicators">
        <label for="slide1" class="indicator"></label>
        <label for="slide2" class="indicator"></label>
        <label for="slide3" class="indicator"></label>
      </div>
    </section>

    <section class="voices-section">
      <h1 class="section-title fade-item">VOICES IN MOTION</h1>

      <p class="section-subtitle fade-item">
        Stories from every corner—amplifying truth, challenging systems, and
        sparking change across borders.
      </p>

      <div class="filter-top">
        <!-- Sort Dropdown -->
        <div class="sort-options">
          <label for="sortSelect">Sort by:</label>
          <select id="sortSelect" v-model="sortOrder">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>

        <!-- Search -->
        <div class="search-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            id="searchInput"
            placeholder="Search"
            v-model="searchTerm"
          />
        </div>
      </div>

      <!-- Filter Menu -->
      <div class="filter-menu">
        <button
          v-for="category in categories"
          :key="category"
          :data-category="category.toLowerCase()"
          :class="{ active: activeCategory === category.toLowerCase() }"
          @click="setActiveCategory(category.toLowerCase())"
        >
          {{ category }}
        </button>
      </div>

      <!-- CARDS -->
      <transition-group
        name="fade-slide"
        tag="div"
        class="voices-cards"
        ref="cardContainer"
      >
        <div
          v-for="post in paginatedPosts"
          :key="post._id"
          class="voice-card fade-item"
          :data-date="post.date"
        >
          <img :src="`http://localhost:4000${post.image}`" :alt="post.alt" />
          <span class="card-category">{{ post.category }}</span>
          <div class="card-content">
            <div class="card-meta">
              <span class="date">{{ post.date }}</span>
              <span class="read-time">{{ post.readTime }}</span>
            </div>
            <h3 class="card-title">
              <router-link :to="`/article/${post._id}`" class="title-link">
                <span class="voice-title-color">{{ post.titleStart }}</span>
                {{ post.titleEnd }}
              </router-link>
            </h3>

            <p class="card-description">{{ post.description }}</p>
            <div class="author-info">
              <div class="author-pic"></div>
              <p class="author">{{ post.author }}</p>
            </div>
          </div>
        </div>
        <div
          v-for="n in missingPlaceholders"
          :key="'placeholder-' + n"
          class="voice-card placeholder-card"
        >
          &nbsp;
        </div>
      </transition-group>

      <div v-if="paginatedPosts.length === 0" class="no-results">
        <p>No blog articles.</p>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <button
          class="page-btn"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          «
        </button>

        <span
          v-for="page in totalPages"
          :key="page"
          class="page-num"
          :class="{ active: currentPage === page }"
          @click="goToPage(page)"
        >
          {{ page }}
        </span>

        <button
          class="page-btn"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          »
        </button>
      </div>
    </section>

    <!-- Dispatch Section -->
    <div class="dispatch-section">
      <div class="dispatch-grid">
        <!-- Left Top -->
        <div class="dispatch-card left-top">
          <h2 class="dispatch-title">
            The <span class="yellow">S</span><span class="blue">tand</span
            ><span class="yellow">S</span><span class="blue">peak</span
            ><span class="yellow">A</span><span class="blue">ct</span> Dispatch
          </h2>
          <p class="dispatch-subtitle">
            Stories that inform. Voices that inspire. <br />
            Updates that matter.
          </p>
          <div class="join-button">
            <router-link :to="'#'" class="jn-btn">
              JOIN US NOW!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="0 0 12 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1569 12.7106L4.49994 18.3676L3.08594 16.9536L8.03594 12.0036L3.08594 7.05365L4.49994 5.63965L10.1569 11.2966C10.3444 11.4842 10.4497 11.7385 10.4497 12.0036C10.4497 12.2688 10.3444 12.5231 10.1569 12.7106Z"
                  fill="#F8F6F0"
                />
              </svg>
            </router-link>
          </div>
        </div>

        <!-- Left Bottom -->
        <div class="dispatch-card left-bottom">
          <p class="article-label">Article Available</p>
          <p class="article-count">50</p>
        </div>

        <!-- Right (only ONE card) -->
        <div class="dispatch-card right">
          <p class="right-text">
            Beyond headlines, we craft stories that stay.<br />
            From global challenges to everyday resistance, each post<br />
            is a step toward clarity, connection, and lasting impact.
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from "vue";
import { initCarousel } from "../script/blog";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { categories as categoryList } from "../script/blog";
import axios from "axios";

// Reactive state
const fetchedPosts = ref([]);
const activeCategory = ref("all");
const searchTerm = ref("");
const sortOrder = ref("newest");
const currentPage = ref(1);
const itemsPerPage = 9;
const cardContainer = ref(null);
const categories = ref(categoryList);

// Fetch blog articles only (isBlog: true)
onMounted(async () => {
  initCarousel();

  try {
    const res = await axios.get("/api/articles");
    const list = Array.isArray(res.data) ? res.data : res.data?.data || [];

    fetchedPosts.value = list
      .filter((post) => post.isBlog)
      .map((post) => ({
        ...post,
        _id: post._id || post.id,
        id: post.id || post._id,
        titleStart:
          post.titleStart || (post.title ? post.title.split(" ")[0] : ""),
        titleEnd: post.titleEnd || post.title || "",
        date: post.date || post.createdAt || "",
        image: post.image || post.img || "",
        description: post.description || "",
        category: post.category || "Uncategorized",
        readTime: post.readTime || "",
        author: post.author || "Anonymous",
      }));
  } catch (err) {
    console.error("Error fetching blog articles:", err?.response || err);
  }
});

// Scroll to cards
function scrollToCards() {
  nextTick(() => {
    cardContainer.value?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// Category filter
function setActiveCategory(category) {
  activeCategory.value = category;
  currentPage.value = 1;
}

// Pagination controls
function goToPage(page) {
  currentPage.value = page;
  scrollToCards();
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    scrollToCards();
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    scrollToCards();
  }
}

// Filtered and sorted posts
const filteredAndSortedPosts = computed(() => {
  const query = searchTerm.value.toLowerCase().trim();
  const category = activeCategory.value.toLowerCase();

  let posts = fetchedPosts.value.filter((post) => {
    const title = `${post.titleStart} ${post.titleEnd}`.toLowerCase();
    const description = post.description.toLowerCase();
    const postCategory = post.category.toLowerCase();

    const matchesSearch =
      title.includes(query) ||
      description.includes(query) ||
      postCategory.includes(query);

    const matchesCategory =
      category === "all" || postCategory.includes(category);

    return matchesSearch && matchesCategory;
  });

  const value = sortOrder.value;
  posts.sort((a, b) => {
    const titleA = `${a.titleStart} ${a.titleEnd}`.toLowerCase();
    const titleB = `${b.titleStart} ${b.titleEnd}`.toLowerCase();
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (value === "az") return titleA.localeCompare(titleB);
    if (value === "za") return titleB.localeCompare(titleA);
    if (value === "newest") return dateB - dateA;
    if (value === "oldest") return dateA - dateB;

    return 0;
  });

  return posts;
});

// Pagination
const totalPages = computed(() =>
  Math.ceil(filteredAndSortedPosts.value.length / itemsPerPage)
);

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredAndSortedPosts.value.slice(start, end);
});

const missingPlaceholders = computed(() => {
  const missing = itemsPerPage - paginatedPosts.value.length;
  return missing > 0 ? missing : 0;
});

// Animation
function observeFadeItems() {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const items = document.querySelectorAll(".fade-item:not(.visible)");
  if (items.length === 0) return;
  items.forEach((item) => observer.observe(item));
}

watch(paginatedPosts, async () => {
  await nextTick();
  observeFadeItems();
});
</script>

<style scoped>
/* ========================================================================= BLOG ========================================================================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}

html,
body {
  overflow-x: hidden;
}

header nav {
  margin-right: 10em;
}

/* Carousel Base */
.carousel {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: "Work Sans", sans-serif;
  margin-bottom: 100px;
}

.carousel input[type="radio"] {
  display: none;
}

.carousel-inner {
  display: flex;
  height: 100%;
  transition: transform 1s ease-in-out;
  animation: autoSlide 18s infinite;
}

.carousel-slide {
  flex: 0 0 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 60px;
  color: #f8f6f0;
}

.carousel-content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}

/* Left text */
.text-left {
  max-width: 600px;
}

.text-left .category {
  font-family: "Merriweather";
  display: inline-block;
  padding: 10px 14px;
  background: #53b1b1cc;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.text-left h1 {
  font-family: "Bebas Neue";
  font-weight: 400;
  font-size: 3.5rem;
  margin: 10px 0;
  color: #f69000;
}

.text-left p {
  font-family: "Merriweather", serif;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Author */
.author-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 25px;
}

.author-pic {
  width: 40px;
  height: 40px;
  background: #f8f6f0;
  border-radius: 50%;
}

.author-text h4 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.author-text p {
  font-family: "Merriweather";
  font-size: 0.8rem;
  margin: 0;
  color: #53b1b1;
}

.author-text span {
  color: #f6c624;
}

/* Indicators */
.carousel-indicators {
  position: absolute;
  bottom: 30px;
  left: 60px;
  display: flex;
  gap: 8px;
  z-index: 3;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #53b1b1;
  cursor: pointer;
  transition: background 0.3s ease;
}

input#slide1:checked ~ .carousel-indicators label[for="slide1"],
input#slide2:checked ~ .carousel-indicators label[for="slide2"],
input#slide3:checked ~ .carousel-indicators label[for="slide3"] {
  background: #f8f6f0;
}

/* Manual control of slides */
input#slide1:checked ~ .carousel-inner {
  transform: translateX(0);
  animation: none;
}

input#slide2:checked ~ .carousel-inner {
  transform: translateX(-100%);
  animation: none;
}

input#slide3:checked ~ .carousel-inner {
  transform: translateX(-200%);
  animation: none;
}

/* Background Images */
.slide1 {
  background-image: url("../assets/images/wellnessgap.png");
}

.slide2 {
  background-image: url("../assets/images/borders_belonging.png");
}

.slide3 {
  background-image: url("../assets/images/power_interrupted.png");
}

/* Title Clickable */
.slide-title-link {
  font-family: "Bebas Neue";
  text-decoration: none;
  color: #f69000;
  transition: color 0.3s;
}

/* Voices in Motion Section */
.voices-section {
  font-family: "Work Sans", sans-serif;
  padding: 60px 20px;
  margin: 40px auto;
  max-width: 1200px;
}

/* Gradient Heading */
.section-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(to right, #f69000, #53b1b1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.section-subtitle {
  font-family: "Merriweather";
  font-size: 16px;
  color: #11222c;
  margin-bottom: 40px;
}

/* Top Row */
.filter-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

/* Dropdown */
.sort-options {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sort-options label {
  font-weight: 600;
  font-size: 14px;
  color: #11222c;
}

.sort-options select {
  padding: 8px 14px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #f69000;
  background: linear-gradient(#f8f6f0, #f8f6f0) padding-box,
    linear-gradient(to right, #f69000, #53b1b1) border-box;
  border: 2px solid transparent;
}

/* Search Box */
.search-box {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 320px;
}

/* Input Field */
.search-box input {
  width: 100%;
  font-family: "Merriweather", serif;
  padding: 10px 14px 10px 42px;
  border: 2px solid transparent;
  border-radius: 15px;
  outline: none;
  font-size: 15px;
  background: linear-gradient(#f8f6f0, #f8f6f0) padding-box,
    linear-gradient(to right, #f69000, #53b1b1) border-box;
  box-sizing: border-box;
}

/* Search Icon */
.search-box svg {
  position: absolute;
  left: 14px;
  width: 18px;
  height: 18px;
  stroke: #f69000;
  pointer-events: none;
}

/* Filter Menu */
.filter-menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 25px;
}

.filter-menu button {
  border: none;
  background: none;
  font-weight: 700;
  font-size: 15px;
  color: #00312e;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  transition: 0.3s;
}

/* Hover effect */
.filter-menu button:hover {
  background-color: #f69000;
  color: #f8f6f0;
}

/* Active button */
.filter-menu .active {
  background-color: #f69000;
  color: #f8f6f0;
}

/* Voice Cards Section */
.voices-section {
  padding: 60px 20px;
  background: #f8f6f0;
}

.voices-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.voice-card {
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
}

.voice-card img {
  width: 100%;
  object-fit: cover;
  flex-shrink: 0;
}

.voice-card .card-content {
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  background: linear-gradient(
    to bottom,
    rgba(252, 163, 17, 0.2),
    rgba(56, 189, 248, 0.2)
  );
}

.card-title {
  font-size: 30px !important;
  font-weight: 700;
  margin: 6px 0;
  color: #53b1b1;
}

.voice-title-color {
  color: #f69000;
}

.card-category {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #f8f6f0;
  font-family: "Merriweather";
  display: inline-block;
  padding: 10px 14px;
  background: #53b1b1cc;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 15px;
}

.card-content {
  padding: 16px;
}

.card-meta {
  font-family: "Merriweather", serif;
  font-size: 12px;
  color: #666;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
}

.card-meta .date,
.read-time {
  font-family: "Merriweather", serif;
}

.card-title {
  font-size: 1.5em;
  font-weight: 700;
  margin: 6px 0;
  color: #53b1b1;
  min-height: 2.8em;
  max-height: 2.8em;
  line-height: 1.4em;
}

.card-description {
  font-family: "Merriweather", serif;
}

.card-excerpt {
  font-family: "Merriweather", serif;
  font-size: 14px;
  color: #444;
  margin-bottom: 12px;
}

.author {
  font-size: 16px;
  font-weight: 400;
  color: #00312e;
}

.title-link {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  transition: color 0.3s ease;
}

.title-link:hover .voice-title-color {
  color: #53b1b1;
}

.voice-title-color {
  color: #f69000;
  font-weight: bold;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 30px;
  font-family: "Work Sans", sans-serif;
}

.page-btn {
  font-size: 16px;
  padding: 6px 10px;
  border: 2px solid transparent;
  border-radius: 6px;
  background: linear-gradient(#f8f6f0, #f8f6f0) padding-box,
    linear-gradient(to bottom right, #f69000, #53b1b1) border-box;
  color: #f69000;
  cursor: pointer;
  transition: 0.3s ease;
}

.page-num {
  font-size: 16px;
  font-weight: 600;
  color: #00312e;
  cursor: pointer;
  transition: 0.3s ease;
}

.page-num:hover {
  color: #f69000;
}

.page-num.active {
  background: #f69000;
  color: #f8f6f0;
  padding: 5px 10px;
  border-radius: 6px;
}

/* Dispatch Section */
.dispatch-section {
  padding: 40px 20px;
}

.dispatch-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
}

/* Dispatch Cards Styling */
.dispatch-card {
  position: relative;
  border-radius: 12px;
  color: #f8f6f0;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}

/* Left Top Card */
.left-top {
  background-image: url("../assets/images/blog_dispatch.png");
  min-height: 350px;
  grid-column: 1;
  grid-row: 1;
}

.dispatch-title {
  font-family: "Bebas Neue";
  font-size: 50px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 10px;
  padding-left: 30px;
}

.yellow {
  font-family: "Bebas Neue";
  color: #f69000;
}

.blue {
  font-family: "Bebas Neue";
  color: #53b1b1;
}

.dispatch-subtitle {
  font-family: "Merriweather", serif;
  font-size: 22px;
  padding-left: 30px;
}

/* Join Us Button */
.join-button {
  display: inline-block;
  align-self: flex-start;
  padding: 2px;
  border-radius: 3px;
  background: linear-gradient(to right, #53b1b1, #f8f6f0, #3cbebe);
  transition: transform 0.3s ease;
  margin-left: 30px;
  margin-top: 50px;
}

.jn-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: #f8f6f0;
  background: #f69000;
  border: none;
  cursor: pointer;
  width: 178px;
  height: 47px;
  font-family: "Work Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 3px;
  transition: fill 0.4s ease, transform 0.3s ease;
}

.join-button:hover {
  color: #f69000;
  transform: scale(1.05);
}

.jn-btn,
.jn-btn:hover,
.jn-btn:focus,
.jn-btn:active {
  text-decoration: none;
}

/* Left Bottom Card */
.left-bottom {
  background-image: url("../assets/images/article_available.png");
  min-height: 180px;
  grid-column: 1;
  grid-row: 2;
}

.article-label {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
  font-family: "Work Sans", sans-serif;
}

.article-count {
  font-size: 48px;
  font-weight: 600;
  line-height: 1.2;
}

/* Right Side Card */
.right {
  background-image: url("../assets/images/beyond_headlines.png");
  grid-column: 2;
  grid-row: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 30px;
  width: 100%;
  margin: 0;
}

/* Right Card Text */
.right-text {
  font-size: 25px;
  font-weight: 700;
  line-height: 1.6;
  max-width: 90%;
}

/* Pagination Container */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
  flex-wrap: wrap;
}

/* Page Number Buttons */
.page-num {
  display: inline-block;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 600;
  color: #444;
  background-color: #f8f6f0;
  border: 1px solid #00312e;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-num:hover {
  background-color: #f69000;
  color: #f8f6f0;
  border-color: #f69000;
}

/* Active Page */
.page-num.active {
  background-color: #f69000;
  color: #f8f6f0;
  border-color: #f69000;
}

/* Prev/Next Buttons */
.page-btn {
  padding: 8px 14px;
  font-size: 16px;
  font-weight: bold;
  background-color: #53b1b1;
  color: #f69000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.page-btn:hover {
  background-color: #3cbebe;
  transform: scale(1.05);
}

.page-btn:disabled {
  background-color: #f8f6f0;
}

/* Articles animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Animation on Texts */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 0.8s ease-out forwards;
}

.fade-in.delay {
  animation-delay: 0.4s;
}

@keyframes fadeSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* No results */
.no-results {
  font-size: 16px;
  font-weight: 400;
  color: #00312e;
  text-align: center;
  margin: 40px auto;
  padding: 20px;
  max-width: 600px;
  background: linear-gradient(to right, #f8f6f0, #f8f6f0);
  border: 1px dashed #f69000;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.no-results p {
  margin: 0;
  line-height: 1.6;
  letter-spacing: 0.3px;
  font-family: "Merriweather", serif;
}

/* Articles animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-item {
  opacity: 0;
  transform: translateY(20px);
  visibility: hidden;
}

.fade-item.visible {
  visibility: visible;
  animation: fadeInUp 0.6s ease forwards;
}
/* Responsive Adjustments */
@media (max-width: 600px) {
  .pagination {
    gap: 6px;
  }

  .page-num,
  .page-btn {
    padding: 6px 10px;
    font-size: 13px;
  }
}

/* Responsive */
/* Tablets (1024px and below) */
@media (max-width: 1024px) {
  /* Carousel */
  .carousel {
    height: 70vh;
  }

  .carousel-slide {
    padding: 30px;
    justify-content: center;
    text-align: center;
  }

  .carousel-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .text-left h1 {
    font-size: 2.5rem;
  }

  .author-info {
    justify-content: center;
  }

  /* Voices Section */
  .voices-cards {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }

  /* Dispatch Section */
  .dispatch-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .dispatch-card.right {
    grid-column: 1;
    grid-row: auto;
    font-size: 24px;
    padding: 20px;
  }

  .dispatch-title {
    font-size: 36px;
  }

  .right-text {
    font-size: 24px;
  }
}

/* Mobile (600px and below) */
@media (max-width: 600px) {
  /* Carousel */
  .carousel {
    height: 60vh;
  }

  .carousel-slide {
    padding: 20px;
  }

  .text-left h1 {
    font-size: 2rem;
  }

  .text-left p {
    font-size: 0.9rem;
  }

  .carousel-indicators {
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Voices Section */
  .voices-section {
    padding: 30px 15px;
  }

  .section-title {
    font-size: 32px;
  }

  .filter-top {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .search-box input {
    width: 100%;
  }

  .voices-cards {
    grid-template-columns: 1fr;
  }

  /* Dispatch Section */
  .dispatch-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .dispatch-title {
    font-size: 28px;
    padding-left: 0;
  }

  .dispatch-subtitle {
    font-size: 16px;
    padding-left: 0;
  }

  .jn-btn {
    width: 100%;
  }

  .right-text {
    font-size: 18px;
    line-height: 1.4;
  }
}

/* CARDS ANIMATION SLIDING */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
