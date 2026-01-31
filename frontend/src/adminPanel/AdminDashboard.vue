<template>
  <div>
    <HeaderDash />
    <div class="admin-hero">
      <img src="../assets/images/admindash-hero.png" alt="Admin Hero" />

      <div class="hero-overlay">
        <div class="article-count">
          <template v-if="articles.length > 0">
            {{ articles.length }} Articles
          </template>
          <template v-else> No articles found </template>
        </div>
        <div class="welcome-message fade-in">WELCOME ADMIN</div>
        <p class="started fade-in delay">Let's Get Started!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import HeaderDash from "../components/HeaderDash.vue";

const articles = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get("/api/articles");
    articles.value = res.data;
  } catch (err) {
    console.error(
      "Failed to fetch articles:",
      err.response?.data || err.message
    );
  }
});
</script>

<style scoped>
.admin-hero {
  position: relative;
  text-align: center;
  height: 800px;
}

.admin-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.started {
  font-size: 36px;
  font-weight: bold;
  color: #f8f6f0;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  margin-top: 10px;
  font-family: "Work Sans", sans-serif;
}

.welcome-message {
  font-weight: bold;
  color: #f8f6f0;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  margin-top: 10px;
  font-family: "Bebas Neue", sans-serif;
  font-size: 64px;
}

.article-count {
  position: absolute;
  bottom: 20px;
  left: 30px;
  font-size: 24px;
  color: #f8f6f0;
  font-weight: 500;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  font-family: "Merriweather", serif;
  margin-bottom: 50px;
  margin-left: 50px;
}

/* ========== ANIMATION ========== */
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
</style>
