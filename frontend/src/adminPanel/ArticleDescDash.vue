<template>
  <HeaderDash />
  <div class="admin-hero">
    <img src="../assets/images/admindash-hero.png" alt="" />
    <div class="hero-overlay">
      <div class="welcome-admin">WELCOME ADMIN</div>
      <p class="started">Refine & Publish — Article Descriptions</p>
    </div>
  </div>

  <div class="desc-editor">
    <h2>Edit Full Article Description</h2>

    <!-- Article Selector -->
    <label>Select Article:</label>
    <select v-model="selectedId">
      <option disabled value="">-- Choose an article --</option>
      <option v-for="a in articles" :key="a._id || a.title" :value="a._id">
        {{ a.title }}
      </option>
    </select>

    <!-- Editable Form -->
    <div v-if="article" class="article-preview">
      <!-- Titles -->
      <section class="form-section">
        <h3>Title</h3>
        <div class="title-group">
          <input
            v-model="article.titleStart"
            placeholder="Title Start"
            class="title-input"
          />
          <input
            v-model="article.titleEnd"
            placeholder="Title End"
            class="title-input"
          />
        </div>
      </section>

      <!-- Author -->
      <section class="form-section">
        <h3>Author</h3>
        <input v-model="article.author" placeholder="Author Name" />
      </section>

      <!-- Image -->
      <section class="form-section">
        <h3>Image</h3>
        <label>Current Image:</label>
        <img
          class="article-image"
          :src="
            article.image
              ? `http://localhost:3000${article.image}`
              : '/placeholder.png'
          "
          :alt="article.alt || 'No image'"
          v-if="article.image"
        />
        <input
          v-model="article.image"
          placeholder="Image Path (e.g. /uploads/filename.png)"
        />
        <input v-model="article.alt" placeholder="Alt Text" />
      </section>

      <!-- Body Sections -->
      <section class="form-section">
        <h3>Body Sections</h3>
        <div
          v-for="(section, i) in article.body"
          :key="i"
          class="section-block"
        >
          <input v-model="section.heading" placeholder="Section Heading" />
          <div v-for="(para, j) in section.paragraphs" :key="j">
            <textarea
              v-model="section.paragraphs[j]"
              placeholder="Paragraph"
            ></textarea>
          </div>
          <button @click="addParagraph(i)">+ Add Paragraph</button>
        </div>
        <button @click="addSection">+ Add Section</button>
      </section>

      <!-- References -->
      <section class="form-section">
        <h3>References</h3>
        <div v-for="(ref, i) in article.references" :key="i" class="ref-block">
          <input v-model="ref.title" placeholder="Title" />
          <input v-model="ref.author" placeholder="Author" />
          <input type="date" v-model="ref.date" />
          <input v-model="ref.url" placeholder="URL" />
        </div>
        <button @click="addReference">Add Reference</button>
      </section>

      <!-- Save -->
      <section class="form-section">
        <button @click="saveDescription" :disabled="isSaving">
          {{ isSaving ? "Saving..." : "Save Description" }}
        </button>
      </section>
    </div>

    <button class="back-to-top" @click="scrollToTop">⬆ Back to Top</button>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import HeaderDash from "../components/HeaderDash.vue";
import axios from "axios";

const articles = ref([]);
const selectedId = ref("");
const article = reactive({});
const isSaving = ref(false);

// Load a specific article
async function loadArticle(id) {
  try {
    const res = await axios.get(`/api/articles/${id}`);
    const data = res.data.article || res.data;

    // Clear and assign fields to reactive object
    Object.keys(article).forEach((key) => delete article[key]);
    Object.assign(article, data);

    // Ensure body and references are arrays
    if (!article.body) article.body = [];
    if (!article.references) article.references = [];
  } catch (err) {
    console.error("Failed to load article:", err.response?.data || err.message);
  }
}

// Fetch all articles and auto-load first
onMounted(async () => {
  try {
    const res = await axios.get("/api/articles");
    articles.value = res.data;

    if (articles.value.length > 0) {
      selectedId.value = articles.value[0]._id;
      await loadArticle(selectedId.value);
    }
  } catch (err) {
    console.error(
      "Failed to fetch articles:",
      err.response?.data || err.message
    );
  }
});

// Watch for selection changes
watch(selectedId, async (id) => {
  if (id) await loadArticle(id);
});

// Add a new body section
function addSection() {
  article.body.push({ heading: "", paragraphs: [""] });
}

// Add a new paragraph to a section
function addParagraph(index) {
  article.body[index].paragraphs.push("");
}

// Add a new reference
function addReference() {
  article.references.push({ title: "", author: "", date: "", url: "" });
}

// Save the edited article
async function saveDescription() {
  if (!article._id) return;
  isSaving.value = true;
  try {
    await axios.put(`/api/articles/${article._id}`, article);
    alert("Article description saved successfully!");
  } catch (err) {
    console.error("Save failed:", err.response?.data || err.message);
    alert("Failed to save article. Please try again.");
  } finally {
    isSaving.value = false;
  }
}

// Scroll to top of page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
.admin-hero {
  position: relative;
  text-align: center;
}

.admin-hero img {
  width: 100%;
  height: auto;
  display: block;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  flex-direction: column;
}

.welcome-admin {
  font-weight: bold;
  color: #f8f6f0;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  margin-top: 10px;
  font-family: "Bebas Neue", sans-serif;
  font-size: 64px;
}

.started {
  font-size: 36px;
  font-weight: bold;
  color: #f8f6f0;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  margin-top: 10px;
  font-family: "Work Sans", sans-serif;
}

.blog-count {
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

/* ========== BACK TO TOP ========== */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #f69000;
  color: #11222c;
  border: none;
  border-radius: 50px;
  padding: 0.8rem 1.2rem;
  font-weight: bold;
  font-family: "Work Sans", sans-serif;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 999;
  transition: background 0.3s ease;
}

.back-to-top:hover {
  background: #11222c;
  color: #f69000;
}
</style>
