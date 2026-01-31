<template>
  <HeaderDash />
  <div class="admin-hero">
    <img src="../assets/images/admindash-hero.png" alt="" />
    <div class="hero-overlay">
      <div class="blog-count">{{ allBlogArticles.length }} Blog Articles</div>
      <div class="welcome-admin fade-in">WELCOME ADMIN</div>
      <p class="started fade-in delay">Creative Voices — Dive Into the Blog</p>
    </div>
  </div>

  <div class="blog-wrapper">
    <!-- Create Form -->
    <h2 class="mid">Publish New Blog Article</h2>
    <form @submit.prevent="submitBlog" class="blog-form">
      <label>Upload Image:</label>
      <input
        type="file"
        @change="handleImageUpload"
        accept="image/*"
        required
      />
      <div v-if="imagePreview">
        <img
          :src="imagePreview"
          alt="Preview"
          style="max-width: 200px; margin-bottom: 1rem"
        />
      </div>

      <label>Alt Text:</label>
      <input v-model="form.alt" placeholder="Alt description" required />

      <label>Title Start:</label>
      <input v-model="form.titleStart" placeholder="Title Start" required />

      <label>Title End:</label>
      <input v-model="form.titleEnd" placeholder="Title End" required />

      <label>Category:</label>
      <select v-model="form.category" @change="onCategoryChange" required>
        <option disabled value="" class="select-cat">
          -- Select Category --
        </option>
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>

      <label>Description:</label>
      <textarea
        v-model="form.description"
        placeholder="Short description"
        required
      ></textarea>

      <label>Date:</label>
      <input type="date" v-model="form.date" required />

      <label>Read Time:</label>
      <input v-model="form.readTime" placeholder="e.g. 5 min read" required />

      <label>Author:</label>
      <input v-model="form.author" placeholder="Author" required />

      <button type="submit">Publish Blog Article</button>
    </form>

    <!-- Edit Form -->
    <h2 v-if="editing" class="mid">Edit Blog Article</h2>
    <div v-if="editing" class="edit-form">
      <form @submit.prevent="updateArticle">
        <label>Current Image:</label>
        <img
          :src="`http://localhost:4000${editing.image}`"
          :alt="editing.alt"
          style="max-width: 200px; margin-bottom: 1rem"
        />

        <label>Replace Image:</label>
        <input type="file" @change="handleEditImageUpload" accept="image/*" />
        <div v-if="editImagePreview">
          <img
            :src="editImagePreview || `http://localhost:4000${editing.image}`"
            alt="Preview"
            style="max-width: 200px; margin-bottom: 1rem"
          />
        </div>

        <label>Alt Text:</label>
        <input v-model="editing.alt" required />

        <label>Title Start:</label>
        <input v-model="editing.titleStart" required />

        <label>Title End:</label>
        <input v-model="editing.titleEnd" required />

        <label>Category:</label>
        <input v-model="editing.category" required />

        <label>Description:</label>
        <textarea v-model="editing.description" required></textarea>

        <label>Date:</label>
        <input type="date" v-model="editing.date" required />

        <label>Read Time:</label>
        <input v-model="editing.readTime" required />

        <label>Author:</label>
        <input v-model="editing.author" required />

        <button type="submit">💾 Save Changes</button>
        <button type="button" @click="editing = null">Cancel</button>
      </form>
    </div>

    <!-- Blog -->
    <h2>Published Blog Articles</h2>
    <transition-group
      name="fade-slide"
      tag="div"
      class="voices-cards"
      ref="cardContainer"
    >
      <div
        v-for="post in allBlogArticles"
        :key="post._id || 'static-' + post.titleStart"
        class="voice-card"
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

        <!-- Edit/Delete Buttons -->
        <div v-if="post._id" class="actions">
          <button @click="startEdit(post)">✏️ Edit</button>
          <button @click="deleteArticle(post._id)">🗑️ Delete</button>
        </div>
      </div>
    </transition-group>
    <button class="back-to-top" @click="scrollToTop">⬆ Back to Top</button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import HeaderDash from "../components/HeaderDash.vue";
import axios from "axios";

const categories = ref([]);
const dynamicBlog = ref([]);
const editing = ref(null);
const imageFile = ref(null);
const imagePreview = ref(null);
const editImageFile = ref(null);
const editImagePreview = ref(null);
const featuredArticles = ref([]);
const latestArticles = ref([]);
const popularArticles = ref([]);

// Form state
const form = ref({
  alt: "",
  titleStart: "",
  titleEnd: "",
  category: "",
  description: "",
  date: "",
  readTime: "",
  author: "",
  isBlog: true,
});

// Fetch categories and blog articles
onMounted(async () => {
  try {
    const [articlesRes, categoriesRes, featuredRes, latestRes, popularRes] =
      await Promise.all([
        axios.get("/api/articles"),
        axios.get("/api/articles/categories"),
        axios.get("/api/articles/featured"),
        axios.get("/api/articles/latest"),
        axios.get("/api/articles/popular"),
      ]);

    dynamicBlog.value = articlesRes.data.filter((a) => a.isBlog);
    categories.value = categoriesRes.data;
    featuredArticles.value = featuredRes.data;
    latestArticles.value = latestRes.data;
    popularArticles.value = popularRes.data;
  } catch (err) {
    console.error("Failed to fetch data:", err.response?.data || err.message);
  }
});

// Handle image upload (create)
function handleImageUpload(event) {
  const file = event.target.files[0];
  imageFile.value = file;
  imagePreview.value = URL.createObjectURL(file);
}

// Handle image upload (edit)
function handleEditImageUpload(event) {
  const file = event.target.files[0];
  editImageFile.value = file;
  editImagePreview.value = URL.createObjectURL(file);
}

// Submit new blog article
async function submitBlog() {
  try {
    const formData = new FormData();
    formData.append("image", imageFile.value);
    formData.append("alt", form.value.alt);
    formData.append("titleStart", form.value.titleStart);
    formData.append("titleEnd", form.value.titleEnd);
    formData.append("category", form.value.category);
    formData.append("description", form.value.description);
    formData.append("date", form.value.date);
    formData.append("readTime", form.value.readTime);
    formData.append("author", form.value.author);
    formData.append("isBlog", "true");

    const res = await axios.post("/api/articles", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const created = res.data;
    await axios.put(`/api/articles/${created._id}`, {
      link: `/article/${created._id}`,
    });

    dynamicBlog.value.unshift({
      ...created,
      link: `/article/${created._id}`,
    });

    form.value = {
      alt: "",
      titleStart: "",
      titleEnd: "",
      category: "",
      description: "",
      date: "",
      readTime: "",
      author: "",
      isBlog: true,
    };
    imageFile.value = null;
    imagePreview.value = null;
  } catch (err) {
    console.error(
      "Failed to publish blog article:",
      err.response?.data || err.message
    );
  }
}

// Start editing
function startEdit(post) {
  editing.value = { ...post };
  editImageFile.value = null;
  editImagePreview.value = null;
}

// Update blog article
async function updateArticle() {
  try {
    let payload;
    const headers = {};

    if (editImageFile.value) {
      const formData = new FormData();
      formData.append("image", editImageFile.value);
      formData.append("alt", editing.value.alt);
      formData.append("titleStart", editing.value.titleStart);
      formData.append("titleEnd", editing.value.titleEnd);
      formData.append("category", editing.value.category);
      formData.append("description", editing.value.description);
      formData.append("date", editing.value.date);
      formData.append("readTime", editing.value.readTime);
      formData.append("author", editing.value.author);
      formData.append("isBlog", "true");
      payload = formData;
      headers["Content-Type"] = "multipart/form-data";
    } else {
      payload = {
        alt: editing.value.alt,
        titleStart: editing.value.titleStart,
        titleEnd: editing.value.titleEnd,
        category: editing.value.category,
        description: editing.value.description,
        date: editing.value.date,
        readTime: editing.value.readTime,
        author: editing.value.author,
        isBlog: "true",
      };
    }

    const res = await axios.put(`/api/articles/${editing.value._id}`, payload, {
      headers,
    });

    const index = dynamicBlog.value.findIndex(
      (a) => a._id === editing.value._id
    );
    dynamicBlog.value[index] = { ...res.data };

    editing.value = null;
    editImageFile.value = null;
    editImagePreview.value = null;
  } catch (err) {
    console.error(
      "Failed to update article:",
      err.response?.data || err.message
    );
  }
}

// Delete blog article
async function deleteArticle(id) {
  try {
    await axios.delete(`/api/articles/${id}`);
    dynamicBlog.value = dynamicBlog.value.filter((a) => a._id !== id);
  } catch (err) {
    console.error(
      "Failed to delete article:",
      err.response?.data || err.message
    );
  }
}

const allBlogArticles = computed(() => dynamicBlog.value);
function onCategoryChange() {
  console.log("Selected category:", form.value.category);
}

// Back to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
/* ========== HERO SECTION ========== */
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

.welcome-admin {
  font: bold 64px "Bebas Neue", sans-serif;
  color: #f8f6f0;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  margin-top: 10px;
}

.started {
  font: bold 36px "Work Sans", sans-serif;
  color: #f8f6f0;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  margin-top: 10px;
}

.blog-count {
  position: absolute;
  bottom: 20px;
  left: 30px;
  margin-bottom: 50px;
  margin-left: 50px;
  font: 500 24px "Merriweather", serif;
  color: #f8f6f0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}

/* ========== WRAPPER & GRID ========== */
.blog-wrapper {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  overflow-x: hidden;
}

.blog-grid,
.voices-cards {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.blog-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.voices-cards {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

/* ========== FORM STYLING ========== */
.blog-form,
.edit-form {
  display: grid;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  padding: 2rem;
  border-radius: 7px;
  background: linear-gradient(
    180deg,
    rgba(246, 144, 0, 0.2) 20.56%,
    rgba(83, 177, 177, 0.2) 61.59%
  );
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.blog-form label,
.edit-form label {
  font: bold 1rem "Merriweather", serif;
  color: #11222c;
  margin: 1rem 0 0.5rem;
  display: block;
}

.blog-form input,
.blog-form select,
.blog-form textarea,
.edit-form input,
.edit-form select,
.edit-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #f69000;
  border-radius: 8px;
  background: #f8f6f0;
  font: 1rem "Merriweather", serif;
  box-sizing: border-box;
}

.mid {
  text-align: center;
  font-size: 2rem;
  color: #f69000;
  letter-spacing: 1px;
}

/* ========== BUTTONS ========== */
button {
  font: bold 16px "Work Sans", sans-serif;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.blog-form button,
.edit-form button {
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  background: #f69000;
  color: #11222c;
  border: none;
  margin-left: 20px;
}

.blog-form button:hover,
.edit-form button:hover {
  background: #11222c;
  color: #f69000;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
}

.actions button {
  padding: 0.5rem 1rem;
  font-weight: 500;
  background-color: #f8f6f0;
  border: 2px solid #00312e;
  border-radius: 6px;
}

.actions button:hover {
  background-color: #00312e;
  color: #f8f6f0;
}

/* ========== TYPOGRAPHY ========== */
h1 {
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
  line-height: 1.3;
  word-break: break-word;
}

h2 {
  color: #f69000;
  font-family: "Work Sans", sans-serif;
  margin-top: 30px;
  padding-top: 50px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  word-break: break-word;
}

.orange {
  color: #f69000;
}

.teal {
  color: #53b1b1;
}

.category,
.card-category {
  font-weight: bold;
  color: #53b1b1;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  display: block;
  font-family: "Merriweather", serif;
}

select {
  font-family: "Merriweather", serif;
  color: #53b1b1;
  padding: 0.75rem;
  border: 2px solid #f69000;
  border-radius: 8px;
  background: #f8f6f0;
  font-size: 1rem;
  box-sizing: border-box;
}

/* ========== FOOTER & LINKS ========== */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.5rem;
  border-top: 1px solid #f8f6f0;
}

.footer .icon {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: #555;
}

.footer .icon img {
  width: 14px;
  height: 14px;
  object-fit: contain;
  margin-top: 1px;
}

.blog-grid .my-grad .link p {
  font-weight: bold;
  color: #00312e;
  text-decoration: none;
  transition: color 0.2s ease;
  font-family: "Merriweather", serif;
  margin: 0;
}

.blog-grid .my-grad .link:hover p {
  color: #f69000;
}

/* ========== VOICE CARDS ========== */
.voice-card {
  background: linear-gradient(
    180deg,
    rgba(246, 144, 0, 0.2) 20.56%,
    rgba(83, 177, 177, 0.2) 61.59%
  );
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.voice-card:hover {
  transform: translateY(-4px);
}

.voice-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-family: "Work Sans", sans-serif;
}

.card-title a {
  color: #00312e;
}

.card-title a:hover {
  color: #f69000;
}

.card-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: "Merriweather", serif;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Merriweather", serif;
}

.author-pic {
  width: 32px;
  height: 32px;
  background: #00312e;
  border-radius: 50%;
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
  font: bold 14px "Work Sans", sans-serif;
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
