<template>
  <HeaderDash />
  <div class="admin-hero">
    <img src="../assets/images/admindash-hero.png" alt="" />
    <div class="hero-overlay">
      <div class="popular-count">
        {{ allPopularArticles.length }} Popular Articles
      </div>
      <div class="welcome-admin fade-in">WELCOME ADMIN</div>
      <p class="started fade-in delay">Trending Now — Most Popular Picks</p>
    </div>
  </div>

  <div class="popular-wrapper">
    <!-- Create Form -->
    <h2>Publish New Popular Article</h2>
    <form @submit.prevent="submitPopular" class="popular-form">
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

      <label>Title:</label>
      <input v-model="form.title" placeholder="Link Title" required />

      <label>Date:</label>
      <input type="date" v-model="form.date" required />

      <label>Category:</label>
      <select v-model="form.category" required>
        <option disabled value="" class="select-cat">
          -- Select Category --
        </option>
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>

      <button type="submit">Publish Popular Article</button>
    </form>

    <!-- Edit Form -->
    <div v-if="editing" class="edit-form">
      <h2>Edit Popular Article</h2>
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

        <label>Title:</label>
        <input v-model="editing.title" required />

        <label>Date:</label>
        <input type="date" v-model="editing.date" required />
        <label>Category:</label>
        <select v-model="editing.category" required>
          <option disabled value="" class="select-cat">
            -- Select Category --
          </option>
          <option v-for="cat in categories" :key="cat" :value="cat">
            {{ cat }}
          </option>
        </select>

        <button type="submit">💾 Save Changes</button>
        <button type="button" @click="editing = null">Cancel</button>
      </form>
    </div>

    <!-- Display Grid -->
    <h2>Published Popular Articles</h2>
    <aside class="popular-posts">
      <div
        v-for="(post, index) in allPopularArticles"
        :key="post._id || 'static-' + index"
        class="post"
      >
        <img
          :src="`http://localhost:4000${post.image}`"
          :alt="post.alt"
          class="img"
        />
        <div class="Pfooters">
          <router-link :to="post.link">
            <p class="title">{{ post.title }}</p>
          </router-link>
          <p class="icons">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/calendar--v1.png"
              alt="calendar"
            />
            {{ post.date }}
          </p>
        </div>

        <!-- Edit/Delete Buttons -->
        <div v-if="post._id" class="actions">
          <button @click="startEdit(post)">✏️ Edit</button>
          <button @click="deleteArticle(post._id)">🗑️ Delete</button>
        </div>
      </div>
    </aside>
    <button class="back-to-top" @click="scrollToTop">⬆ Back to Top</button>
  </div>
  <br /><br /><br />
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import HeaderDash from "../components/HeaderDash.vue";
import axios from "axios";

// Reactive state
const dynamicPopular = ref([]);
const editing = ref(null);
const imageFile = ref(null);
const imagePreview = ref(null);
const editImageFile = ref(null);
const editImagePreview = ref(null);

const categories = ref([]);
const form = ref({
  alt: "",
  title: "",
  date: "",
  category: "",
  isPopular: true,
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

// Submit new popular article
async function submitPopular() {
  try {
    const formData = new FormData();
    formData.append("image", imageFile.value);
    formData.append("alt", form.value.alt);
    formData.append("title", form.value.title);
    formData.append("date", form.value.date);
    formData.append("category", form.value.category);
    formData.append("isPopular", "true");

    const res = await axios.post("/api/articles", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const created = res.data;
    await axios.put(`/api/articles/${created._id}`, {
      link: `/article/${created._id}`,
    });

    dynamicPopular.value.unshift({
      ...created,
      link: `/article/${created._id}`,
    });

    form.value = {
      alt: "",
      title: "",
      date: "",
      category: "",
      isPopular: true,
    };
    imageFile.value = null;
    imagePreview.value = null;
  } catch (err) {
    console.error(
      "Failed to publish popular article:",
      err.response?.data || err.message
    );
  }
}

// Fetch popular articles on mount
onMounted(async () => {
  try {
    const [articlesRes, categoriesRes] = await Promise.all([
      axios.get("/api/articles/popular"),
      axios.get("/api/articles/categories"),
    ]);

    dynamicPopular.value = articlesRes.data;
    categories.value = categoriesRes.data;
  } catch (err) {
    console.error("Failed to fetch data:", err.response?.data || err.message);
  }
});

// Computed list
const allPopularArticles = computed(() => dynamicPopular.value);

// Edit logic
function startEdit(post) {
  editing.value = { ...post };
  editImageFile.value = null;
  editImagePreview.value = null;
}

// Update article
async function updateArticle() {
  try {
    let payload;

    if (editImageFile.value) {
      const formData = new FormData();
      formData.append("image", editImageFile.value);
      formData.append("alt", editing.value.alt);
      formData.append("title", editing.value.title);
      formData.append("date", editing.value.date);
      formData.append("category", editing.value.category);
      formData.append("isPopular", "true");
      payload = formData;
    } else {
      payload = {
        alt: editing.value.alt,
        title: editing.value.title,
        date: editing.value.date,
        category: editing.value.category,
        isPopular: "true",
      };
    }

    const res = await axios.put(`/api/articles/${editing.value._id}`, payload, {
      headers: editImageFile.value
        ? { "Content-Type": "multipart/form-data" }
        : {},
    });

    const index = dynamicPopular.value.findIndex(
      (a) => a._id === editing.value._id
    );
    dynamicPopular.value[index] = { ...res.data };
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

// Delete logic
async function deleteArticle(id) {
  try {
    await axios.delete(`/api/articles/${id}`);
    dynamicPopular.value = dynamicPopular.value.filter((a) => a._id !== id);
  } catch (err) {
    console.error(
      "Failed to delete article:",
      err.response?.data || err.message
    );
  }
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

.popular-count {
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
.popular-wrapper {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  overflow-x: hidden;
}

.popular-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.popular-posts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

/* ========== POST & CARD STYLING ========== */
.post,
.my-grad {
  background: linear-gradient(
    180deg,
    rgba(246, 144, 0, 0.2) 20.56%,
    rgba(83, 177, 177, 0.2) 61.59%
  );
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1.2rem;
  transition: transform 0.3s ease;
}

.my-grad {
  background: linear-gradient(to right, #f8f6f0, #f8f6f0);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  min-width: 0;
}

.post:hover,
.my-grad:hover {
  transform: translateY(-4px);
}

.post img.img,
.my-grad img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  min-width: 0;
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

.orange {
  color: #f69000;
}

.teal {
  color: #53b1b1;
}

.category {
  font-weight: bold;
  color: #53b1b1;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  word-break: break-word;
}

.title,
.title-cat {
  font-weight: bold;
  font-size: 18px;
  font-family: "Merriweather", serif;
  text-decoration: underline;
  transition: color 0.2s ease;
}

.title {
  color: #00312e;
}

.title:hover {
  color: #f69000;
}

.title-cat {
  color: #f69000;
}

.title-cat:hover {
  color: #53b1b1;
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

/* ========== FOOTER & ICONS ========== */
.footer,
.Pfooters {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 0.5rem;
  border-top: 1px solid #f8f6f0;
}

.footer .icon,
.icons {
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

/* ========== FORM STYLING ========== */
.popular-form,
.edit-form form {
  border-radius: 7px;
  background: linear-gradient(
    180deg,
    rgba(246, 144, 0, 0.2) 20.56%,
    rgba(83, 177, 177, 0.2) 61.59%
  );
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.popular-form label,
.edit-form label {
  font: bold 1rem "Merriweather", serif;
  color: #11222c;
  display: block;
  margin: 1rem 0 0.5rem;
}

.popular-form input,
.popular-form select,
.popular-form textarea,
.edit-form input,
.edit-form select,
.edit-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #f69000;
  border-radius: 8px;
  background: #f8f6f0;
  font: 1rem "merriweather", serif;
  box-sizing: border-box;
}

/* ========== BUTTONS ========== */
.popular-form button,
.edit-form button,
.actions button {
  padding: 1rem 1.5rem;
  font: bold 16px "Work Sans", sans-serif;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  border: none;
}

.popular-form button,
.edit-form button {
  margin-top: 1.5rem;
  background: #f69000;
  color: #11222c;
  margin-left: 20px;
}

.popular-form button:hover,
.edit-form button:hover {
  background: #11222c;
  color: #f69000;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

.actions button {
  background-color: #f8f6f0;
  border: 2px solid #00312e;
}

.actions button:hover {
  background-color: #00312e;
  color: #f8f6f0;
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
