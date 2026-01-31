<template>
  <div id="top">
    <Header />
    <section>
      <div class="carousel">
        <div class="carousel-images">
          <div class="image-container active">
            <img :src="homePage1" alt="featured article" />
            <div class="join-the-movement">
              <router-link :to="'#'" class="jn-movement-btn"
                >JOIN THE MOVEMENT</router-link
              >
            </div>
          </div>
          <div class="image-container">
            <img :src="homePage2" alt="featured article" />
            <div class="explore-the-issue">
              <router-link :to="'#'" class="explr-issue-btn"
                >EXPLORE THE ISSUE</router-link
              >
            </div>
          </div>
          <div class="image-container">
            <img :src="homePage3" alt="featured article" />
            <div class="meet-the-contributors">
              <router-link :to="'#'" class="mt-cntrbtrs-btn"
                >MEET THE CONTRIBUTORS</router-link
              >
            </div>
          </div>
        </div>

        <router-link to="#" class="hotspot"></router-link>
        <!-- HERO ARROWS -->
        <div class="arrow-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <path
              d="M11.1998 35C11.1998 21.84 21.8398 11.2 34.9998 11.2C48.1598 11.2 58.7998 21.84 58.7998 35C58.7998 48.16 48.1598 58.8 34.9998 58.8C21.8398 58.8 11.1998 48.16 11.1998 35ZM55.9998 35C55.9998 23.38 46.6198 14 34.9998 14C23.3798 14 13.9998 23.38 13.9998 35C13.9998 46.62 23.3798 56 34.9998 56C46.6198 56 55.9998 46.62 55.9998 35Z"
              fill="#F69000"
            />
            <path
              d="M32.6202 46.62L44.2402 35L32.6202 23.38L34.5802 21.42L48.1602 35L34.5802 48.58L32.6202 46.62Z"
              fill="#F69000"
            />
            <path d="M46.2002 33.6V36.4H22.4002V33.6H46.2002Z" fill="#F69000" />
          </svg>
        </div>

        <div class="arrow-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <path
              d="M58.8002 35C58.8002 21.84 48.1602 11.2 35.0002 11.2C21.8402 11.2 11.2002 21.84 11.2002 35C11.2002 48.16 21.8402 58.8 35.0002 58.8C48.1602 58.8 58.8002 48.16 58.8002 35ZM14.0002 35C14.0002 23.38 23.3802 14 35.0002 14C46.6202 14 56.0002 23.38 56.0002 35C56.0002 46.62 46.6202 56 35.0002 56C23.3802 56 14.0002 46.62 14.0002 35Z"
              fill="#F69000"
            />
            <path
              d="M37.3798 46.62L25.7598 35L37.3798 23.38L35.4198 21.42L21.8398 35L35.4198 48.58L37.3798 46.62Z"
              fill="#F69000"
            />
            <path d="M23.7998 33.6V36.4H47.5998V33.6H23.7998Z" fill="#F69000" />
          </svg>
        </div>
        <br /><br />
        <div class="Firstdots">
          <span class="Firstdot">●</span>
          <span class="Firstdot">●</span>
          <span class="Firstdot">●</span>
        </div>
      </div>
    </section>

    <section class="what-we-cover">
      <fieldset class="featured-section">
        <img
          src="../assets/images/feature.png"
          alt="featured articles"
          class="featured"
        />
        <div class="search-box">
          <img
            src="https://img.icons8.com/ios-filled/20/fa9d20/search--v1.png"
            alt="search icon"
          />
          <input
            type="text"
            id="articleSearch"
            placeholder="Search"
            v-model="searchQuery"
            style="border-radius: 3em"
          />
        </div>
      </fieldset>

      <!-- FEATURED ARTICLES -->
      <!-- ARROW RIGHT -->
      <div class="arrow-right" @click="scrollRight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        >
          <path
            d="M11.1998 35C11.1998 21.84 21.8398 11.2 34.9998 11.2C48.1598 11.2 58.7998 21.84 58.7998 35C58.7998 48.16 48.1598 58.8 34.9998 58.8C21.8398 58.8 11.1998 48.16 11.1998 35ZM55.9998 35C55.9998 23.38 46.6198 14 34.9998 14C23.3798 14 13.9998 23.38 13.9998 35C13.9998 46.62 23.3798 56 34.9998 56C46.6198 56 55.9998 46.62 55.9998 35Z"
            fill="#F69000"
          />
          <path
            d="M32.6202 46.62L44.2402 35L32.6202 23.38L34.5802 21.42L48.1602 35L34.5802 48.58L32.6202 46.62Z"
            fill="#F69000"
          />
          <path d="M46.2002 33.6V36.4H22.4002V33.6H46.2002Z" fill="#F69000" />
        </svg>
      </div>

      <!-- ARROW LEFT -->
      <div class="arrow-left" @click="scrollLeft">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        >
          <path
            d="M58.8002 35C58.8002 21.84 48.1602 11.2 35.0002 11.2C21.8402 11.2 11.2002 21.84 11.2002 35C11.2002 48.16 21.8402 58.8 35.0002 58.8C48.1602 58.8 58.8002 48.16 58.8002 35ZM14.0002 35C14.0002 23.38 23.3802 14 35.0002 14C46.6202 14 56.0002 23.38 56.0002 35C56.0002 46.62 46.6202 56 35.0002 56C23.3802 56 14.0002 46.62 14.0002 35Z"
            fill="#F69000"
          />
          <path
            d="M37.3798 46.62L25.7598 35L37.3798 23.38L35.4198 21.42L21.8398 35L35.4198 48.58L37.3798 46.62Z"
            fill="#F69000"
          />
          <path d="M23.7998 33.6V36.4H47.5998V33.6H23.7998Z" fill="#F69000" />
        </svg>
      </div>
      <br /><br />

      <!-- Featured Articles -->
      <div class="carousel-area">
        <div class="carousel-wrapper" ref="carouselWrapper">
          <fieldset
            v-for="(article, idx) in paginatedFeaturedArticles"
            :key="article._id"
            class="my-grad fade-item"
          >
            <img
              :src="`http://localhost:4000${article.image}`"
              :alt="article.alt"
              :class="['f1' + idx * 2]"
            />
            <fieldset :class="['f1' + (idx * 2 + 1)]">
              <h1>
                <span class="orange">{{ article.titleOrange }}</span>
                <span class="teal">{{ article.titleTeal }}</span>
              </h1>
              <p>{{ article.description }}</p>
              <div class="footer">
                <p class="icon">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/calendar--v1.png"
                    alt="calendar--v1"
                  />{{ article.date }}
                </p>
                <router-link class="link" :to="'#'">
                  <p>{{ article.linkText }}</p>
                </router-link>
              </div>
            </fieldset>
          </fieldset>
        </div>
      </div>
      <div class="dots">
        <span
          v-for="(dot, idx) in totalPages"
          :key="idx"
          class="dot"
          :class="{ active: idx === currentPage }"
        >
          ●
        </span>
      </div>
      <div v-if="filteredFeaturedArticles.length === 0" class="no-results">
        <p>No featured articles.</p>
      </div>
    </section>

    <!-- Latest Articles -->
    <section class="latest-articles">
      <div class="articles-sidebar-container">
        <div class="articles">
          <img :src="latest" alt="latest article" class="latest-title" />
          <article
            v-for="(article, index) in paginatedLatestArticles.slice(
              0,
              visibleCount
            )"
            :key="article._id"
            class="card fade-item"
          >
            <img
              :src="`http://localhost:4000${article.image}`"
              :alt="article.alt"
              class="img"
            />
            <div class="card-content">
              <p class="category">{{ article.category }}</p>
              <router-link :to="'#'">
                <h3 class="title-cat">{{ article.title }}</h3>
              </router-link>
              <div class="footer">
                <p class="icons">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/calendar--v1.png"
                    alt="calendar--v1"
                  />
                  {{ article.date }}
                </p>
                <p class="description">{{ article.description }}</p>
              </div>
            </div>
          </article>

          <div class="load-more-posts" id="loadToggle">
            <button
              class="load-btn"
              @click="visibleCount += 2"
              v-if="
                filteredLatestArticles.length > 0 &&
                visibleCount < filteredLatestArticles.length
              "
            >
              LOAD MORE POSTS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.9719 2.69375C12.5094 1.04375 10.3813 0 8 0C3.58125 0 0 3.58125 0 8H2C2 4.68437 4.68437 2 8 2C9.82812 2 11.45 2.82812 12.5469 4.11875L10.6656 6H16V0.665625L13.9719 2.69375ZM8 14C6.17188 14 4.55 13.1719 3.45312 11.8813L5.33437 10H0V15.3344L2.02813 13.3062C3.49062 14.9562 5.62187 16 8 16C12.4187 16 16 12.4187 16 8H14C14 11.3156 11.3156 14 8 14Z"
                  fill="#F69000"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Popular Posts -->
        <aside class="popular-posts">
          <h3>Popular Posts</h3>

          <div v-for="post in popularArticles" :key="post._id" class="post">
            <img
              :src="`http://localhost:4000${post.image}`"
              :alt="post.alt"
              class="img fade-item"
            />
            <div class="Pfooters">
              <router-link :to="'#'">
                <p class="title">{{ post.title }}</p>
              </router-link>
              <p class="icons">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/24/calendar--v1.png"
                  alt="calendar--v1"
                />
                {{ post.date }}
              </p>
              <p class="category">{{ post.category }}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
    <div v-if="filteredLatestArticles.length === 0" class="no-results">
      <p>No latest articles.</p>
    </div>

    <section class="read-more-section">
      <h2 class="read-more-title">READ MORE</h2>

      <fieldset class="read-more-entry">
        <div class="left">
          <router-link to="#" style="text-decoration: none"
            ><h3>MENTAL HEALTH MATTERS</h3></router-link
          >
          <p class="author">by: Maya Estrella</p>
        </div>
        <div class="right">
          <p>March 01, 2025 - by Shane C. Cordero</p>
          <p class="category">in Mental Health & Wellbeing</p>
        </div>
      </fieldset>

      <fieldset class="read-more-entry">
        <div class="left">
          <router-link to="#" style="text-decoration: none"
            ><h3>OFFLINE ISN'T SAFE EITHER</h3></router-link
          >
          <p class="author">by: Jalen Cruz</p>
        </div>
        <div class="right">
          <p>February 18, 2025 - by Satwinder R. Jeerh</p>
          <p class="category">in Digital Rights & Cybersecurity</p>
        </div>
      </fieldset>

      <fieldset class="read-more-entry">
        <div class="left">
          <router-link to="#" style="text-decoration: none"
            ><h3>WHO ARE WE?</h3></router-link
          >
          <p class="author">by: Theo Navarro</p>
        </div>
        <div class="right">
          <p>March 01, 2025 - by Karl Christian D. Guiao</p>
          <p class="category">in Youth Advocacy & Education</p>
        </div>
      </fieldset>

      <fieldset class="read-more-entry">
        <div class="left">
          <router-link to="#" style="text-decoration: none"
            ><h3>HEAR ME</h3></router-link
          >
          <p class="author">by: Amina Farouk</p>
        </div>
        <div class="right">
          <p>December 23, 2025 - by Kimberly Clarisse P. Puno</p>
          <p class="category">in Global Perspectives</p>
        </div>
      </fieldset>
    </section>

    <section class="faq-section">
      <img :src="faqs" alt="FAQ" />

      <div class="faq-item">
        <button class="faq-question">
          1. What is StandSpeakAct all about? <span class="toggle-icon">-</span>
        </button>
        <div class="faq-answer">
          We're a student-led platform amplifying voices, sharing stories, and
          sparking change through expressive design and purpose-driven content.
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          2. Who can join or contribute? <span class="toggle-icon">-</span>
        </button>
        <div class="faq-answer">
          Anyone passionate about truth, advocacy, and creativity—whether you're
          a student, writer, designer, or changemaker.
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          3. Is it free to sign up? <span class="toggle-icon">-</span>
        </button>
        <div class="faq-answer">
          Yes! Signing up is completely free. No credit card, no hidden
          fees—just meaningful updates and opportunities.
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          4. What kind of content do you publish?
          <span class="toggle-icon">-</span>
        </button>
        <div class="faq-answer">
          We cover global issues like climate change, cybersecurity, and
          misinformation, —through articles, visuals, and student perspectives.
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          5. Can I submit my own story or design?
          <span class="toggle-icon">-</span>
        </button>
        <div class="faq-answer">
          We cover global issues like climate change, cybersecurity, and
          misinformation, —through articles, visuals, and student perspectives.
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          6. How often will I receive updates?
          <span class="toggle-icon">-</span>
        </button>
        <div class="faq-answer">
          We cover global issues like climate change, cybersecurity, and
          misinformation, —through articles, visuals, and student perspectives.
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          7. Where is StandSpeakAct based? <span class="toggle-icon">-</span>
        </button>
        <div class="faq-answer">
          We're proudly rooted in HAU, Angeles City, Pampanga, but our mission
          is global. We connect voices across borders to build a more inclusive
          world.
        </div>
      </div>
    </section>
    <Dispatch />
    <transition name="fade">
      <button v-show="showBackToTop" class="the-top" @click="scrollToTop">
        ⬆ Back to Top
      </button>
    </transition>

    <Footer ref="footerRef" />
  </div>
</template>

<script setup>
import { onMounted, ref, computed, nextTick, watch } from "vue";
import axios from "axios";

// Static assets
import homePage1 from "../assets/images/home-page1.png";
import homePage2 from "../assets/images/home-page2.png";
import homePage3 from "../assets/images/home-page3.png";
import latest from "../assets/images/latest.png";
import faqs from "../assets/images/FAQS.png";

// DOM init
import { initBlogDOM } from "../script/index";

// Components
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Dispatch from "../components/Dispatch.vue";

// Dynamic article buckets
const dynamicFeatured = ref([]);
const dynamicLatest = ref([]);
const dynamicPopular = ref([]);

// Search and pagination
const searchQuery = ref("");
const visibleCount = ref(3);
const cardsPerPage = 3;
const currentPage = ref(0);

// Fetch all dynamic articles
onMounted(async () => {
  try {
    const [featuredRes, latestRes, popularRes] = await Promise.all([
      axios.get("/api/articles/featured"),
      axios.get("/api/articles/latest"),
      axios.get("/api/articles/popular"),
    ]);

    dynamicFeatured.value = featuredRes.data;
    dynamicLatest.value = latestRes.data;
    dynamicPopular.value = popularRes.data;
  } catch (err) {
    console.error(
      "Failed to fetch homepage articles:",
      err.response?.data || err.message
    );
  }

  nextTick(() => {
    initBlogDOM();
  });

  await nextTick();
  observeFadeItems();
});

// Computed buckets
const featuredArticles = computed(() => dynamicFeatured.value);
const latestArticles = computed(() => dynamicLatest.value);
const popularArticles = computed(() => dynamicPopular.value);

// Filtered by search
const filteredFeaturedArticles = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  return featuredArticles.value.filter((article) =>
    `${article.titleOrange} ${article.titleTeal}`.toLowerCase().includes(query)
  );
});

const filteredLatestArticles = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  return latestArticles.value.filter((article) =>
    article.title.toLowerCase().includes(query)
  );
});

// Paginated featured carousel
const totalPages = computed(() =>
  Math.ceil(filteredFeaturedArticles.value.length / cardsPerPage)
);

const paginatedFeaturedArticles = computed(() => {
  const start = currentPage.value * cardsPerPage;
  return filteredFeaturedArticles.value.slice(start, start + cardsPerPage);
});

const paginatedLatestArticles = computed(() =>
  filteredLatestArticles.value.slice(0, visibleCount.value)
);

function scrollRight() {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
  }
}

function scrollLeft() {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
}

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

watch([paginatedFeaturedArticles, paginatedLatestArticles], async () => {
  await nextTick();
  observeFadeItems();
});
</script>

<style>
/* ========================================================================= INDEX ========================================================================= */
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #f8f6f0;
  scroll-behavior: smooth;
  scrollbar-gutter: stable;
}

/* header */
.actions .b1 {
  margin-left: -12em;
}

header nav {
  margin-left: 5em;
  margin-right: 20em;
  text-align: center;
  justify-content: center;
  float: left;
}

/* Carousel */
.carousel {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.carousel-area {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-wrapper {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1rem 0;
  margin-left: 250px;
}

.carousel-wrapper fieldset {
  min-width: 300px;
  flex-shrink: 0;
}

.carousel-images {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  position: relative;
  z-index: 1;
}

.carousel-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
}

#carousel {
  overflow-x: scroll;
  scroll-behavior: smooth;
  cursor: grab;
}
#carousel.dragging {
  cursor: grabbing;
}

/* ARROWS */
.arrow-left,
.arrow-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 70px;
  height: 70px;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 10;
}

.arrow-left {
  left: 10px;
}

.arrow-right {
  right: 10px;
}

.arrow-left svg path,
.arrow-right svg path {
  transition: fill 0.4s ease, transform 0.3s ease;
  fill: #f69000;
}

.arrow-left:hover svg path,
.arrow-right:hover svg path {
  fill: #53b1b1;
  transform: scale(1.05);
}

.hotspot {
  margin-top: -100em;
  position: absolute;
  left: 175px;
  top: 2400px;
  width: 310px;
  height: 55px;
  display: block;
  z-index: 5;
}

.Firstdots {
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: relative;
  margin-top: -5rem;
  z-index: 10;
  margin-left: -3em;
}

.Firstdot {
  font-size: 2.5rem;
  color: #53b1b1;
  cursor: pointer;
  transition: all 0.3s;
}

.Firstdot.active {
  margin-top: -0.7rem;
  font-size: 3.5rem;
  color: #f69000;
}

/* Slide transition logic */
.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: transform 0.5s ease, opacity 0.5s ease;
  z-index: 0;
}

.image-container.active {
  opacity: 1;
  z-index: 1;
  transform: translateX(0);
}

.image-container.slide-out-left {
  transform: translateX(-100%);
  opacity: 0;
}

.image-container.slide-out-right {
  transform: translateX(100%);
  opacity: 0;
}

.image-container {
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Buttons */
.join-the-movement,
.explore-the-issue,
.meet-the-contributors {
  position: absolute;
  top: 85.5%;
  left: 9%;
  z-index: 5;
}

.join-the-movement {
  display: inline-block;
  padding: 2px;
  border-radius: 3px;
  background: linear-gradient(to right, #53b1b1, #f8f6f0, #3cbebe);
  transition: transform 0.3s ease;
}

.jn-movement-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 55px;
  font-weight: bold;
  text-transform: uppercase;
  color: #f8f6f0;
  background: #f69000;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: fill 0.4s ease, transform 0.3s ease;
  font-family: "Work Sans", "sans-serif";
  text-decoration: none;
}

.join-the-movement:hover {
  color: #f69000;
  transform: scale(1.05);
}

.explore-the-issue {
  position: absolute;
  top: 85%;
  left: 9%;
  z-index: 5;
}

.explore-the-issue {
  display: inline-block;
  padding: 2px;
  border-radius: 3px;
  background: linear-gradient(to right, #53b1b1, #f8f6f0, #3cbebe);
  transition: transform 0.3s ease;
}

.explr-issue-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 17px 57px;
  font-weight: bold;
  text-transform: uppercase;
  color: #f8f6f0;
  background: #f69000;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: fill 0.4s ease, transform 0.3s ease;
  font-family: "Work Sans", "sans-serif";
  text-decoration: none;
}

.explore-the-issue:hover {
  color: #f69000;
  transform: scale(1.05);
}

.meet-the-contributors {
  display: inline-block;
  padding: 2px;
  border-radius: 3px;
  background: linear-gradient(to right, #53b1b1, #f8f6f0, #3cbebe);
  transition: transform 0.3s ease;
}

.meet-the-contributors {
  position: absolute;
  top: 85%;
  left: 9%;
  z-index: 5;
}

.mt-cntrbtrs-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 35px;
  font-weight: bold;
  text-transform: uppercase;
  color: #f8f6f0;
  background: #f69000;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: fill 0.4s ease, transform 0.3s ease;
  font-family: "Work Sans", "sans-serif";
  text-decoration: none;
}

.meet-the-contributors:hover {
  color: #f69000;
  transform: scale(1.05);
}

/* Featured articles */
.what-we-cover {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  padding: 2em 0;
  font-family: Arial, sans-serif;
  overflow: hidden;
  overflow-x: hidden;
}

.carousel-wrapper {
  width: 100%;
  display: flex;
}

.carousel-area::-webkit-scrollbar {
  display: none;
}

.what-we-cover > fieldset:first-of-type {
  border: none;
  max-width: 800px;
  margin: 0 auto 3em auto;
}

.what-we-cover > fieldset:first-of-type p {
  font-size: 1em;
  color: #11222c;
  line-height: 1.5em;
  margin-top: 1em;
}

.what-we-cover > fieldset {
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 1em;
  margin-bottom: 3em;
  overflow-x: auto;
}

.my-grad {
  border-radius: 10px;
  border: none;
  background: linear-gradient(
    180deg,
    rgba(246, 144, 0, 0.2) 8%,
    rgba(83, 177, 177, 0.2) 84%
  );
  width: 100%;
  max-width: 24.5em;
  height: 40em;
  margin: 0 1em;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease,
    z-index 0.3s ease;
}

.my-grad:hover {
  transform: scale(1.08) translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  z-index: 9999;
}

.m1,
.m2,
.m3,
.m4 {
  margin-left: 0;
}

.f10,
.f12,
.f14,
.f16 {
  width: 100%;
  height: 18em;
  object-fit: cover;
}

.f10 img,
.f12 img,
.f14 img,
.f16 img {
  height: 10em;
  inset: 0;
  object-position: top;
}

.f11,
.f13,
.f15,
.f17 {
  border: none;
  padding: 1.5em 1em 1.5em 1em;
  width: 80%;
}

.orange {
  color: #f69000;
  font-weight: bold;
  font-family: "Work Sans", sans-serif;
}

.teal {
  color: #53b1b1;
  font-weight: bold;
  font-family: "Work Sans", sans-serif;
}

.f11 h1,
.f13 h1,
.f15 h1,
.f17 h1 {
  font-size: 1.7em;
  margin: 0 0 0.4em 0;
  line-height: 1.3em;
  width: 100%;
}

.f11 p,
.f13 p,
.f15 p,
.f17 p {
  font-size: 1.5em;
  font-family: "Merriweather", serif;
  color: #11222c;
  line-height: 1.5em;
  margin: 0;
  width: 100%;
}

.fd2 p {
  float: left;
}

.fd1,
.fd2 {
  margin-bottom: 1em;
}

.fcover {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  border: 1px solid #f8f6f0;
}

.cover-img {
  width: 28em;
  max-width: 100%;
  height: auto;
}

.fd2 p {
  margin-left: 2em;
  width: 100%;
}

.f11,
.f13,
.f15,
.f17 {
  padding: 3em;
}

.carousel-btn {
  color: #f8f6f0;
  border: none;
  padding: 0.6rem;
  cursor: pointer;
  font-size: 1.4rem;
  z-index: 10;
  width: 5rem;
  height: 5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.carousel-btn[disabled] {
  opacity: 0.35;
  cursor: default;
  pointer-events: none;
}

.carousel-btn.left {
  left: 0.5em;
}

.carousel-btn.right {
  right: 0.5em;
}

.my-grad fieldset {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
}

.my-grad fieldset h1,
.my-grad fieldset p {
  margin: 0.5em 0;
}

.my-grad fieldset h1 {
  font-size: 1.7em;
}
.my-grad fieldset p {
  font-size: 1.4em;
  width: 100%;
}

.my-grad fieldset .footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5em;
  gap: 0;
}

.my-grad fieldset .footer .icon {
  display: flex;
  align-items: center;
  margin-left: 0.5em;
}

.my-grad fieldset .footer .link p {
  margin: 0 5em 0 0;
  color: #11222c;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  width: 100%;
}

.my-grad fieldset .footer img {
  margin-right: 0.5em;
}

.my-grad fieldset .footer p {
  margin-right: -4em;
  font-size: 1em;
  width: 100%;
  white-space: nowrap;
  color: #11222c;
}

.my-grad fieldset .footer a {
  margin-right: -4em;
  color: #11222c;
}

.featured-section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  float: left;
  margin: 2em 0;
  padding: 0 1em;
}

.featured {
  margin-right: 5em;
  height: 5em;
  margin-top: 7em;
  margin-left: 6em;
}

.featured-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  border: none;
  margin: 0 auto 2em auto;
  max-width: 80%;
}

.search-box {
  float: right;
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 20px;
  background: linear-gradient(#f8f6f0, #f8f6f0) padding-box,
    linear-gradient(to right, #f69000, #53b1b1) border-box;
  padding: 1.2em 7em;
  gap: 0.5em;
  margin-top: 7em;
  margin-left: 22em;
  flex: 1;
}

.search-box img {
  width: 2em;
  height: 2em;
  margin-left: -5em;
}

.search-box input {
  font-family: "Libre Baskerville", serif;
  border: none;
  outline: none;
  font-size: 1em;
  background: transparent;
  color: #11222c;
  flex: 1;
}

.hidden {
  display: none !important;
}

.carousel-area {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 17em;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.dot {
  font-size: 2.5rem;
  color: #53b1b1;
  cursor: default;
  transition: color 0.3s;
}

.dot.active {
  margin-top: -0.7rem;
  font-size: 3.5em;
  color: #f69000;
}

/* Latest articles and popular posts */

section.latest-articles {
  display: flex;
  max-width: 1500px;
  margin: 80px auto;
  gap: 80px;
  padding: 0 60px;
  font-family: "Roboto", sans-serif;
  background-color: #f8f6f0;
  color: #11222c;
  width: 90%;
}

section.latest-articles img.latest-title {
  width: 25em;
  margin-bottom: 50px;
}

section.latest-articles .articles-sidebar-container .articles {
  flex: 3;
}

section.latest-articles .articles-sidebar-container .articles .card {
  display: flex;
  margin-top: -3em;
  gap: 40px;
  margin-bottom: 80px;
  padding-bottom: 40px;
  border-bottom: 1px solid transparent;
  background-image: linear-gradient(to right, #f69000, #53b1b1);
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 100% 5px;
}

section.latest-articles .articles-sidebar-container .articles .card .img {
  width: 350px;
  height: 300px;
  object-fit: cover;
  border-radius: 6px;
}

section.latest-articles .articles-sidebar-container .articles .card-content {
  flex: 1;
}

section.latest-articles
  .articles-sidebar-container
  .articles
  .card-content
  .footer
  .icons {
  font-family: "Merriweather", serif;
}

section.latest-articles
  .articles-sidebar-container
  .articles
  .card
  .card-content
  .footer
  img {
  margin-bottom: -0.4em;
  margin-right: 0.6em;
}

section.latest-articles
  .articles-sidebar-container
  .articles
  .card-content
  .category {
  font-size: 1.1rem;
  color: #53b1b1;
  margin-bottom: 8px;
  font-family: "Merriweather", serif;
}

section.latest-articles .articles-sidebar-container .articles .card-content h3 {
  font-family: "Work Sans", sans-serif;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #11222c;
  text-decoration: 3px underline;
}

section.latest-articles
  .articles-sidebar-container
  .articles
  .card-content
  h3:hover {
  color: #f69000;
  cursor: pointer;
}

section.latest-articles
  .articles-sidebar-container
  .articles
  .card-content
  .date {
  font-size: 0.85rem;
  color: gray;
  margin: 5px 0;
}

section.latest-articles
  .articles-sidebar-container
  .articles
  .card-content
  .description {
  font-family: "Merriweather", serif;
  font-size: 1.25rem;
  color: #11222c;
  margin-top: 3em;
  width: 80%;
}

section.latest-articles
  .articles-sidebar-container
  .articles
  .card:last-of-type {
  border-bottom: none;
  background-image: none;
}

section.latest-articles .loads {
  margin-left: 20em;
  margin-top: -5em;
  width: 20em;
}

.load-more-posts {
  display: inline-block;
  padding: 2px;
  border-radius: 3px;
  margin-left: 20em;
  background: linear-gradient(to right, #f69000, #53b1b1);
  transition: transform 0.3s ease;
}

.load-btn {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 30px;
  font-weight: bold;
  text-transform: uppercase;
  color: #53b1b1;
  background: #f8f6f0;
  transition: background 0.3s ease, color 0.3s ease;
  border: none;
}

.load-more-posts:hover {
  transform: scale(1.05);
}

.load-more-posts:hover .load-btn {
  color: #f69000;
}

.load-btn:hover svg path {
  fill: #53b1b1;
}

/* Popular Posts */
section.latest-articles .articles-sidebar-container {
  display: flex;
  align-items: flex-start;
  position: relative;
  gap: 3em;
}

section.latest-articles .articles-sidebar-container .popular-posts {
  flex: 1.5;
  border-radius: 8px;
  width: auto;
  margin-right: 2em;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  align-self: flex-start;
  max-height: none;
  overflow: visible;
}

section.latest-articles .articles-sidebar-container .popular-posts h3 {
  font-size: 1.8rem;
  color: #f8f6f0;
  background-color: #00312e;
  padding: 0.5em;
  border-radius: 5px;
  margin-bottom: 30px;
  margin-top: 1em;
  font-family: "Work Sans", sans-serif;
}

section.latest-articles .articles-sidebar-container .popular-posts p:hover {
  color: #f69000;
}

section.latest-articles .articles-sidebar-container .popular-posts .post {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 18px;
  border-bottom: 1px solid transparent;
  background-image: linear-gradient(to right, #f69000, #53b1b1);
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 100% 4px;
}

section.latest-articles
  .articles-sidebar-container
  .popular-posts
  .post
  .category {
  font-size: 15px;
  color: #53b1b1;
  margin-bottom: 8px;
  font-family: "Merriweather", serif;
}

section.latest-articles .articles-sidebar-container .popular-posts .post .img {
  width: 250px;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
}

section.latest-articles
  .articles-sidebar-container
  .popular-posts
  .post
  .title {
  font-weight: 700;
  font-size: 1.2rem;
  color: #11222c;
  text-decoration: 3px underline;
  width: 90%;
}

section.latest-articles
  .articles-sidebar-container
  .popular-posts
  .post
  .title:hover {
  color: #f69000;
}

.popular-posts .post .Pfooters .router-link-active,
.popular-posts .post .Pfooters .router-link-exact-active,
.popular-posts .post .Pfooters router-link,
.popular-posts .post .Pfooters a {
  text-decoration: none;
  color: inherit;
}

section.latest-articles
  .articles-sidebar-container
  .popular-posts
  .post
  .icons {
  font-size: 1rem;
  color: gray;
}

section.latest-articles
  .articles-sidebar-container
  .popular-posts
  .post:last-of-type {
  border-bottom: none;
  background-image: none;
}

section.latest-articles
  .articles-sidebar-container
  .popular-posts
  .post
  .Pfooters
  img {
  font-family: "Merriweather", serif;
  margin-bottom: -0.4em;
  margin-right: 0.5em;
}

section.latest-articles
  .articles-sidebar-container
  .popular-posts
  .post
  .Pfooters
  .icons {
  font-family: "Merriweather", serif;
}

/* For the loads more button */
.more-articles {
  display: none;
  transition: all 0.3s ease-in-out;
}

.loads {
  cursor: pointer;
  margin-top: 30px;
  display: block;
}

.loads.active {
  opacity: 0.8;
}

section.latest-articles
  .articles-sidebar-container
  .articles
  .more-articles
  .card {
  background-image: linear-gradient(to right, #f69000, #53b1b1),
    linear-gradient(to right, #f69000, #53b1b1);
  background-repeat: no-repeat;
  background-position: bottom left, top left;
  background-size: 100% 4px, 100% 4px;
}

section.latest-articles
  .articles-sidebar-container
  .articles
  .more-articles
  .card:first-of-type {
  margin-top: -5em;
}

section.latest-articles
  .articles-sidebar-container
  .articles
  .more-articles
  .card
  img {
  margin-top: 4em;
}

section.latest-articles
  .articles-sidebar-container
  .articles
  .more-articles
  .card
  .card-content
  p {
  margin-top: 4em;
}

section.latest-articles
  .articles-sidebar-container
  .articles
  .more-articles
  .card
  .card-content
  .footer
  .icons {
  margin-top: -3em;
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

/* For the read more section */
.read-more-section {
  background-color: #f8f6f0;
  padding: 40px 20px;
  max-width: 1500px;
  margin: 0 auto;
}

.read-more-title {
  font-family: "Work Sans", sans-serif;
  color: #f69000;
  font-size: 1.7rem;
  margin-left: 2em;
  margin-top: -1em;
  font-weight: bold;
  margin-bottom: 20px;
  padding-top: 2em;
  padding-bottom: 3em;
}

.read-more-entry {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  align-items: start;
  border: none;
  border-top: 0.5px solid #f8f6f0;
  padding: 4em 5em;
  background-image: linear-gradient(to right, #f69000, #53b1b1);
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 100% 2px;
}

.read-more-entry:last-of-type {
  border-bottom: none;
  background-image: none;
}

.read-more-entry:first-of-type {
  background-image: linear-gradient(to right, #f69000, #53b1b1),
    linear-gradient(to right, #f69000, #53b1b1);
  background-repeat: no-repeat;
  background-position: top left, bottom left;
  background-size: 100% 2px, 100% 2px;
}

.read-more-entry .left h3 {
  letter-spacing: 0.03em;
  font-size: 1.5rem;
  font-weight: 0;
  margin: 0 0 5px;
  color: #11222c;
  font-family: "Bebas Neue", sans-serif;
  text-decoration: none;
}

.read-more-entry .left h3:hover {
  color: #f69000;
  text-decoration: underline;
}

.read-more-entry .left .author {
  font-family: "Merriweather", serif;
  color: #53b1b1;
  font-size: 1.1rem;
  margin: 0;
}

.read-more-entry .right {
  font-family: "Merriweather", serif;
  text-align: left;
}

.read-more-entry .right p {
  margin: 0;
  font-size: 1rem;
  color: #11222c;
  width: 100%;
}

.read-more-entry .right .category {
  color: #11222c;
}

/* FAQS */
.faq-section {
  max-width: 1000px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  background: #f8f6f0;
  padding: 10rem 8rem;
  color: #00312e;
}

.faq-section img {
  display: block;
  margin: 0 auto 1.5rem 23em;
  width: 12.5em;
}

.faq-item {
  margin-bottom: 1.5rem;
  border: 3px solid #00312e;
  border-radius: 3px;
  background: #f8f6f0;
  box-shadow: 0 0 0 1px #f8f6f0 inset;
  padding: 0;
}

.faq-question {
  font-family: "Work Sans", sans-serif;
  width: 100%;
  background-color: #00312e;
  color: #f8f6f0;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 2em;
  margin: 0;
}

.faq-question .toggle-icon {
  font-weight: 700;
  font-size: 1.2rem;
  user-select: none;
}

.faq-answer {
  font-family: "Merriweather", serif;
  max-height: 0;
  overflow: hidden;
  padding: 0 2em;
  font-weight: 400;
  font-size: 0.95rem;
  color: #11222c;
  border-top: 1px solid #f8f6f0;
  transition: max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    padding 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  box-sizing: border-box;
}

.faq-answer.open {
  padding: 2em 2em 3.5em 2em;
}

.faq-answer.hidden {
  display: none;
}

/* For laptop monitors */
@media (max-width: 1440px) and (min-width: 1025px) {
  header nav {
    margin-left: 0em;
    text-align: center;
    justify-content: center;
    float: left;
  }

  /* Featured articles */
  .what-we-cover {
    position: relative;
    max-width: 90%;
    margin: 0 auto;
    padding: 2em 0;
    font-family: Arial, sans-serif;
    overflow: hidden;
  }

  .carousel-wrapper {
    overflow: hidden;
    width: 100%;
  }

  .what-we-cover > fieldset:first-of-type {
    border: none;
    max-width: 800px;
    margin: 0 auto 3em auto;
  }

  .what-we-cover > fieldset:first-of-type p {
    font-size: 1em;
    color: #333;
    line-height: 1.5em;
    margin-top: 1em;
  }

  .what-we-cover > fieldset {
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 1em;
    margin-bottom: 3em;
    overflow-x: auto;
  }

  .my-grad {
    border-radius: 10px;
    border: none;
    background: #f8f6f0;
    width: 18em;
    margin: 0 2.7em;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-shrink: 0;
    overflow: hidden;
    background: linear-gradient(
      180deg,
      rgba(246, 144, 0, 0.2) 8%,
      rgba(83, 177, 177, 0.2) 84%
    );
  }

  .m1,
  .m2,
  .m3,
  .m4 {
    margin-left: 0;
  }

  .f10,
  .f12,
  .f14,
  .f16 {
    width: 100%;
    height: 10em;
    object-fit: cover;
  }

  .f10 img,
  .f12 img,
  .f14 img,
  .f16 img {
    height: 5em;
    inset: 0;
    object-position: top;
  }

  .f11,
  .f13,
  .f15,
  .f17 {
    border: none;
    padding: 1.5em 1em 1.5em 1em;
    width: 80%;
  }

  .orange {
    color: #f69000;
    font-weight: bold;
  }

  .teal {
    color: #53b1b1;
    font-weight: bold;
  }

  .f11 h1,
  .f13 h1,
  .f15 h1,
  .f17 h1 {
    font-family: "Work Sans", sans-serif;
    font-size: 1.3em;
    margin: 0 0 0.4em 0;
    line-height: 1.3em;
    width: 100%;
  }

  .f11 p,
  .f13 p,
  .f15 p,
  .f17 p {
    font-size: 1em;
    font-family: "Merriweather", serif;
    color: #11222c;
    line-height: 1.5em;
    margin: 0;
    width: 100%;
  }

  .Plink {
    font-family: "Merriweather", serif;
  }

  .fd2 p {
    float: left;
  }

  .fd1,
  .fd2 {
    margin-bottom: 1em;
  }

  .fcover {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    border: 1px solid #ccc;
  }

  .cover-img {
    width: 28em;
    max-width: 100%;
    height: auto;
  }

  .fd2 p {
    margin-left: 2em;
    width: 100%;
  }

  .f11,
  .f13,
  .f15,
  .f17 {
    padding: 3em;
  }

  .carousel-btn {
    color: #f8f6f0;
    border: none;
    padding: 0.6rem;
    cursor: pointer;
    font-size: 1.4rem;
    z-index: 10;
    width: 5rem;
    height: 5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .carousel-btn[disabled] {
    opacity: 0.35;
    cursor: default;
    pointer-events: none;
  }

  .carousel-btn.left {
    left: 0.5em;
  }

  .carousel-btn.right {
    right: 0.5em;
  }

  .my-grad fieldset {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1em;
    box-sizing: border-box;
  }

  .my-grad fieldset h1,
  .my-grad fieldset p {
    margin: 0.5em 0;
  }

  .my-grad fieldset .footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .my-grad fieldset .footer .icon {
    display: flex;
    align-items: center;
    gap: 0.3em;
  }

  .my-grad fieldset .footer .link p {
    margin: 0;
    color: #11222c;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
    width: 100%;
  }

  .my-grad fieldset .footer p {
    margin-right: -4em;
    font-size: 1em;
    width: 100%;
    white-space: nowrap;
    color: #11222c;
  }

  .my-grad fieldset .footer a {
    margin-right: -4em;
    color: #11222c;
  }

  .featured-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    float: left;
    margin: 2em 0;
    padding: 0 1em;
  }

  .featured {
    margin-right: 5em;
    height: 5em;
    margin-top: 7em;
    margin-left: 3em;
  }

  .featured-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    border: none;
    margin: 0 auto 2em auto;
    max-width: 80%;
  }

  .search-box {
    float: right;
    display: flex;
    align-items: center;
    border: 2px solid transparent;
    border-radius: 20px;
    background: linear-gradient(#fff, #fff) padding-box,
      linear-gradient(to right, #fa9d20, #58b7a2) border-box;
    padding: 1.2em 7em;
    gap: 0.5em;
    margin-top: 7em;
    margin-left: 10em;
    flex: 1;
  }

  .NoMessage {
    display: none;
    text-align: center;
    margin-top: 1rem;
    font-size: 2em;
    color: #fa9d20;
    font-weight: bold;
    margin-left: 15em;
  }

  .search-box img {
    width: 2em;
    height: 2em;
    margin-left: -5em;
  }

  .search-box input {
    border: none;
    outline: none;
    font-size: 1em;
    background: transparent;
    color: #333;
    flex: 1;
  }

  .hidden {
    display: none !important;
  }

  .carousel-area {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin-top: 17em;
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .dot {
    font-size: 2.5rem;
    color: #53b1b1;
    cursor: default;
    transition: color 0.3s;
  }

  .dot.active {
    margin-top: -0.7rem;
    font-size: 3.5em;
    color: #f69000;
  }
}

/* For wide monitors */
@media (min-width: 1920px) {
  header nav {
    margin-right: 40em;
  }

  .search-box {
    display: flex;
    margin-right: 0em;
    margin-left: 40em;
    float: right;
  }
}

@media (max-width: 992px) {
  header nav {
    margin-right: 0em;
  }
}

@media (max-width: 768px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    position: relative;
  }

  header img {
    height: 4.5em;
    margin-right: 30em;
    margin-left: 1em;
  }

  header .menu {
    margin-top: 1.7em;
  }

  header nav {
    margin-top: 0;
    margin-bottom: -8em;
  }

  header button {
    margin-top: 10em;
  }

  .actions {
    margin-bottom: 10em;
  }

  .b1,
  .b2 {
    margin-bottom: -10em;
  }

  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    padding: 6px 10px;
    border: 2px solid #f69000;
    color: #f69000;
    background: transparent;
    border-radius: 6px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: -7em;
    margin-left: 12em;
  }
  .Plink {
    font-family: "Merriweather", serif;
  }
}

/* ================= Responsive: Tablet (<=1024px) ================= */
@media (max-width: 1024px) {
  header nav {
    margin-left: -2em;
  }
  .carousel {
    height: 40vh;
    max-width: 100%;
    margin: 0 auto;
  }

  .Firstdots {
    margin-top: -3rem;
    margin-left: 0;
  }

  .what-we-cover {
    max-width: 78%;
    margin: 0 auto;
  }

  .featured-section {
    gap: 0.5rem;
    max-width: 85%;
    margin: 0 auto 1em;
  }

  .featured {
    height: 2.5em;
    max-width: 60%;
    margin: 0.6em auto 0;
  }

  .search-box {
    float: none;
    margin: 0.75em auto 0 auto;
    width: auto;
    max-width: 280px;
    padding: 0.6em 0.9em;
  }

  .search-box img {
    margin-left: 1em;
  }

  .carousel-area {
    margin-top: 4.5em;
    position: relative;
    gap: 0;
  }

  .carousel-wrapper {
    flex: 1 1 auto;
    min-width: 0;
    margin-left: -2em;
  }

  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 3.25rem;
    height: 3.25rem;
  }

  .carousel-btn.left {
    left: 0.5rem;
  }

  .carousel-container {
    margin-left: 2.5rem;
  }

  .carousel-btn.right {
    right: 0.5rem;
  }

  .my-grad {
    max-width: 180px;
    margin: 0 0.2em;
  }

  .Plink {
    font-family: "Merriweather", serif;
  }

  .f11,
  .f13,
  .f15,
  .f17 {
    padding: 0.3em;
    width: 70%;
  }

  .f10,
  .f12,
  .f14,
  .f16 {
    height: 7.5em;
  }

  .f11 h1,
  .f13 h1,
  .f15 h1,
  .f17 h1 {
    font-family: "Work Sans", sans-serif;
    font-size: 0.95em;
  }

  .f11 p,
  .f13 p,
  .f15 p,
  .f17 p {
    font-family: "Merriweather", serif;
    font-size: 0.8em;
  }

  .my-grad fieldset .footer p {
    font-size: 0.7em;
  }

  section.latest-articles {
    gap: 40px;
    padding: 0 24px;
  }

  section.latest-articles .articles-sidebar-container {
    flex-direction: column;
  }

  section.latest-articles .articles-sidebar-container .popular-posts {
    position: static;
    top: auto;
    max-height: none;
    width: 100%;
    margin-right: 0;
  }

  section.latest-articles .articles-sidebar-container .articles .card {
    gap: 20px;
  }

  section.latest-articles .articles-sidebar-container .articles .card .img {
    width: 240px;
    height: 180px;
  }

  section.latest-articles img.latest-title {
    width: 18em;
  }

  section.latest-articles .loads {
    margin: 0 auto;
    display: block;
  }

  .read-more-section {
    padding: 24px 16px;
  }

  .read-more-entry {
    padding: 2em;
    grid-template-columns: 1fr 1fr;
  }

  .faq-section {
    padding: 6rem 2rem;
  }

  .faq-section img {
    margin: 0 auto 1.5rem;
  }

  .dispatches {
    flex-direction: column;
    text-align: center;
    padding-top: 2em;
    padding-bottom: 2em;
  }

  .fdispatches,
  .circle-imgs {
    width: 100%;
  }

  .about-titleses {
    margin-left: 0;
  }

  .fdispatches p {
    margin-left: 0;
    white-space: normal;
  }

  .fdispatches h1 {
    margin-left: 0;
    margin-right: 0;
  }

  .dispatches button {
    width: auto;
    margin-left: 0;
    align-self: center;
  }

  .circle-imgs {
    max-width: 520px;
    margin: 1.5em auto 0;
  }

  .hotspot {
    display: none;
  }

  .footer .link {
    margin-top: 3em;
    margin-right: 10em;
    margin-left: -10em;
    float: left;
  }

  .NoMessage {
    display: none;
    text-align: center;
    margin-top: 3rem;
    margin-left: 5em;
    font-size: 1.5em;
    color: #fa9d20;
    font-weight: bold;
  }

  .join-the-movement,
  .explore-the-issue,
  .meet-the-contributors {
    position: absolute;
    top: 80%;
    left: 7%;
    z-index: 5;
  }

  .jn-movement-btn {
    padding: 5px 20px;
  }

  .explr-issue-btn {
    padding: 5px 20px;
  }

  .mt-cntrbtrs-btn {
    padding: 5px 10px;
  }
}

/* =============== Mobile (<=768px) =============== */
@media (min-width: 481px) and (max-width: 768px) {
  .carousel {
    height: 10vh;
  }

  .Firstdot {
    font-size: 1.8rem;
  }

  .Firstdot.active {
    font-size: 2.2rem;
    margin-top: -0.4rem;
  }

  .carousel-btn {
    width: 3rem;
    height: 3rem;
  }

  .carousel-area {
    margin-top: 3em;
  }

  .featured {
    height: 2em;
    margin-top: 0.75em;
    max-width: 90%;
  }

  .search-box {
    padding: 0.6em 0.9em;
  }

  .carousel-wrapper {
    overflow: hidden;
  }

  .my-grad {
    width: 50%;
    margin: 0 0.5em;
  }

  .f11,
  .f13,
  .f15,
  .f17 {
    width: 100%;
    padding: 1em;
  }

  section.latest-articles {
    flex-direction: column;
    padding: 0 16px;
    gap: 32px;
    margin: 40px auto;
    width: 100%;
  }

  .Plink {
    font-family: "Merriweather", serif;
  }

  section.latest-articles .articles-sidebar-container .articles .card {
    flex-direction: column;
    margin-bottom: 40px;
    gap: 12px;
    padding-bottom: 24px;
  }

  section.latest-articles .articles-sidebar-container .articles .card .img {
    width: 100%;
    height: 220px;
  }

  section.latest-articles
    .articles-sidebar-container
    .articles
    .card-content
    .description {
    width: 100%;
    margin-top: 1em;
    font-size: 1rem;
  }

  section.latest-articles .articles-sidebar-container .popular-posts .post {
    align-items: flex-start;
  }

  section.latest-articles
    .articles-sidebar-container
    .popular-posts
    .post
    .img {
    width: 40%;
    min-width: 140px;
    height: 120px;
  }

  section.latest-articles img.latest-title {
    width: 14em;
  }

  .loads {
    width: 12em;
    margin: 0.5em auto 0;
  }

  .read-more-entry {
    grid-template-columns: 1fr;
    padding: 1.25em;
    gap: 8px;
  }

  .faq-section {
    padding: 4rem 1rem;
  }

  .faq-section img {
    width: 9em;
  }

  .faq-question {
    padding: 1rem;
  }

  .faq-answer {
    padding: 0 1rem;
  }

  .faq-answer.open {
    padding: 1rem 1rem 1.25rem 1rem;
  }

  .dispatches {
    padding: 1.5em 1em;
  }

  .about-titleses {
    font-size: 1.6rem;
  }

  .fdispatches p {
    font-size: 1.2rem;
  }

  .dispatches button {
    width: 100%;
    max-width: 340px;
  }
}

/* =============== Small mobile (<=480px) =============== */
@media (max-width: 480px) {
  .b1 {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .Plink {
    font-family: "Merriweather", serif;
    margin-right: 3em !important;
    margin-left: -5em;
  }

  .carousel {
    height: 25vh;
  }

  .carousel-container {
    display: flex;
    transition: transform 0.3s ease-in-out;
    width: 100%;
  }

  .carousel-wrapper {
    width: 100%;
  }

  .Firstdots {
    margin-top: -2rem;
  }

  .Firstdot {
    font-size: 1.5rem;
  }

  .Firstdot.active {
    font-size: 1.9rem;
  }

  .my-grad {
    width: 85vw;
    max-width: 260px;
    flex: 0 0 100%;
    margin: 0 0.5rem;
  }

  .footer .link {
    margin-right: 20em;
    margin-left: -20em;
  }

  .f11,
  .f13,
  .f15,
  .f17 {
    width: 90%;
    padding: 0.5em;
  }

  .f11 .footer .link p {
    margin-right: 3em;
  }

  .f10,
  .f12,
  .f14,
  .f16 {
    height: 7.5em;
  }

  .f11 h1,
  .f13 h1,
  .f15 h1,
  .f17 h1 {
    font-family: "Work Sans", sans-serif;
    font-size: 1em;
  }

  .f11 p,
  .f13 p,
  .f15 p,
  .f17 p {
    font-family: "Merriweather", serif;
    font-size: 0.85em;
  }

  section.latest-articles {
    padding: 0 12px;
    gap: 1rem;
  }

  .footer .icon .link p {
    margin-right: 5em;
  }

  section.latest-articles .articles-sidebar-container {
    flex-direction: column;
    width: 100%;
  }

  section.latest-articles .articles-sidebar-container .articles,
  section.latest-articles .articles-sidebar-container .popular-posts {
    width: 100%;
  }

  section.latest-articles .articles-sidebar-container .popular-posts .post {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  section.latest-articles
    .articles-sidebar-container
    .popular-posts
    .post
    .img {
    width: 100px;
    height: 90px;
    flex-shrink: 0;
    border-radius: 6px;
    object-fit: cover;
  }

  section.latest-articles .articles-sidebar-container .articles .card {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  section.latest-articles .articles-sidebar-container .articles .card .img {
    width: 80%;
    height: auto;
    max-height: 180px;
    border-radius: 6px;
    object-fit: cover;
    margin-top: 3em;
  }

  section.latest-articles
    .articles-sidebar-container
    .articles
    .card
    .card-content
    .footer
    .description {
    width: 80%;
  }

  section.latest-articles
    .articles-sidebar-container
    .articles
    .card
    .card-content
    .h3 {
    width: 60%;
  }

  section.latest-articles
    .articles-sidebar-container
    .articles
    .more-articles
    .card {
    padding: 0 !important;
    margin-top: -2em !important;
  }

  section.latest-articles
    .articles-sidebar-container
    .articles
    .card-content
    h3 {
    width: 90% !important;
    font-size: 1.8em;
  }

  .read-more-title {
    margin-left: 0;
    text-align: center;
  }

  .dots {
    display: none;
  }

  .featured-section {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 1rem !important;
    max-width: 90vw;
    margin: 0 auto;
  }

  .featured-section .featured {
    width: 100% !important;
    max-width: 280px !important;
    height: auto !important;
  }

  .search-box {
    width: 70% !important;
    max-width: 280px !important;
    margin: 0 auto !important;
  }

  .search-box input {
    width: 100% !important;
    box-sizing: border-box !important;
  }

  .faq-answer.open {
    padding-bottom: 5em;
  }

  .NoMessage {
    display: none;
    text-align: center;
    margin-top: 5rem;
    margin-left: 1em;
    color: #fa9d20;
    font-weight: bold;
  }

  .about-titleses {
    font-size: 0.8em;
  }

  .fdispatches h1 {
    font-size: 2em;
  }
  .join-the-movement,
  .explore-the-issue,
  .meet-the-contributors {
    position: absolute;
    top: 82%;
    left: 7%;
    z-index: 5;
  }

  .jn-movement-btn {
    padding: 2px 2px;
    font-size: 7px;
  }

  .explore-the-issue {
    position: absolute;
    top: 80%;
    left: 9%;
    z-index: 5;
  }

  .explr-issue-btn {
    padding: 2px 2px;
    font-size: 7px;
  }

  .meet-the-contributors {
    position: absolute;
    top: 80%;
    left: 9%;
    z-index: 5;
  }

  .mt-cntrbtrs-btn {
    padding: 2.5px 2px;
    font-size: 6px;
  }
}

/* No results */
.no-results {
  font-family: "Merriweather", serif;
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
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
