<template>
  <HeaderDash />
  <div class="admin-hero">
    <img src="../assets/images/admindash-hero.png" alt="" />
    <div class="hero-overlay">
      <div class="featured-count">
        {{ dynamicFeatured.length }} Featured Articles
      </div>
      <div class="welcome-admin fade-in">WELCOME ADMIN</div>
      <p class="started fade-in delay">
        Explore the Spotlight — Featured Articles
      </p>
    </div>
  </div>

  <div class="featured-wrapper">
    <!-- Create Form -->
    <h2>Publish New Featured Article</h2>
    <form @submit.prevent="submitFeatured" class="featured-form">
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

      <label>Title (Orange):</label>
      <input v-model="form.titleOrange" placeholder="Title Orange" required />

      <label>Title (Teal):</label>
      <input v-model="form.titleTeal" placeholder="Title Teal" required />

      <label>Category:</label>
      <select v-model="form.category" required>
        <option disabled value="">-- Select Category --</option>
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

      <label>Link Text:</label>
      <input v-model="form.linkText" placeholder="Read More" required />

      <button type="submit">Publish Featured Article</button>
    </form>

    <!-- Edit Form -->
    <div v-if="editing" class="edit-form">
      <h2>Edit Featured Article</h2>
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

        <label>Title (Orange):</label>
        <input v-model="editing.titleOrange" required />

        <label>Title (Teal):</label>
        <input v-model="editing.titleTeal" required />

        <label>Category:</label>
        <select v-model="editing.category" required>
          <option disabled value="">-- Select Category --</option>
          <option v-for="cat in categories" :key="cat" :value="cat">
            {{ cat }}
          </option>
        </select>

        <label>Description:</label>
        <textarea v-model="editing.description" required></textarea>

        <label>Date:</label>
        <input type="date" v-model="editing.date" required />

        <label>Link Text:</label>
        <input v-model="editing.linkText" required />

        <button type="submit">💾 Save Changes</button>
        <button type="button" @click="editing = null">Cancel</button>
      </form>
    </div>

    <!-- Display Grid -->
    <h2>Published Featured Articles</h2>
    <div class="featured-grid">
      <fieldset
        v-for="(article, idx) in dynamicFeatured"
        :key="article._id"
        class="my-grad"
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
              />
              {{ article.date }}
            </p>
            <router-link class="link" :to="article.link">
              <p>{{ article.linkText }}</p>
            </router-link>
          </div>

          <!-- Edit/Delete Buttons -->
          <div v-if="article._id" class="actions">
            <button @click="startEdit(article)">✏️ Edit</button>
            <button @click="deleteArticle(article._id)">🗑️ Delete</button>
          </div>
        </fieldset>
      </fieldset>
    </div>
    <button class="back-to-top" @click="scrollToTop">⬆ Back to Top</button>
  </div>
  <br /><br /><br />
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeaderDash from "../components/HeaderDash.vue";
import axios from "axios";

// Reactive state
const dynamicFeatured = ref([]);
const categories = ref([]);
const editing = ref(null);
const imageFile = ref(null);
const imagePreview = ref(null);
const editImageFile = ref(null);
const editImagePreview = ref(null);

// Form state
const form = ref({
  alt: "",
  titleOrange: "",
  titleTeal: "",
  category: "",
  description: "",
  date: "",
  linkText: "Read More",
  isFeatured: true,
});

// Fetch featured articles and categories
onMounted(async () => {
  try {
    const [articlesRes, categoriesRes] = await Promise.all([
      axios.get("/api/articles/featured"),
      axios.get("/api/articles/categories"),
    ]);

    dynamicFeatured.value = articlesRes.data;
    categories.value = categoriesRes.data;
  } catch (err) {
    console.error("Failed to fetch data:", err.response?.data || err.message);
  }
});

// Image upload handlers
function handleImageUpload(event) {
  const file = event.target.files[0];
  imageFile.value = file;
  imagePreview.value = URL.createObjectURL(file);
}

function handleEditImageUpload(event) {
  const file = event.target.files[0];
  editImageFile.value = file;
  editImagePreview.value = URL.createObjectURL(file);
}

// Submit new featured article
async function submitFeatured() {
  try {
    const formData = new FormData();
    formData.append("image", imageFile.value);
    formData.append("alt", form.value.alt);
    formData.append("titleOrange", form.value.titleOrange);
    formData.append("titleTeal", form.value.titleTeal);
    formData.append("category", form.value.category);
    formData.append("description", form.value.description);
    formData.append("date", form.value.date);
    formData.append("linkText", form.value.linkText);
    formData.append("isFeatured", "true");

    const res = await axios.post("/api/articles", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const created = res.data;
    await axios.put(`/api/articles/${created._id}`, {
      link: `/article/${created._id}`,
    });

    dynamicFeatured.value.unshift({
      ...created,
      link: `/article/${created._id}`,
    });

    form.value = {
      alt: "",
      titleOrange: "",
      titleTeal: "",
      category: "",
      description: "",
      date: "",
      linkText: "Read More",
      isFeatured: true,
    };
    imageFile.value = null;
    imagePreview.value = null;
  } catch (err) {
    console.error(
      "Failed to publish featured article:",
      err.response?.data || err.message
    );
  }
}

// Start editing
function startEdit(article) {
  editing.value = { ...article };
  editImageFile.value = null;
  editImagePreview.value = null;
}

// Update featured article
async function updateArticle() {
  try {
    let payload;
    const headers = {};

    if (editImageFile.value) {
      const formData = new FormData();
      formData.append("image", editImageFile.value);
      formData.append("alt", editing.value.alt);
      formData.append("titleOrange", editing.value.titleOrange);
      formData.append("titleTeal", editing.value.titleTeal);
      formData.append("category", editing.value.category);
      formData.append("description", editing.value.description);
      formData.append("date", editing.value.date);
      formData.append("linkText", editing.value.linkText);
      formData.append("isFeatured", "true");
      payload = formData;
      headers["Content-Type"] = "multipart/form-data";
    } else {
      payload = {
        alt: editing.value.alt,
        titleOrange: editing.value.titleOrange,
        titleTeal: editing.value.titleTeal,
        category: editing.value.category,
        description: editing.value.description,
        date: editing.value.date,
        linkText: editing.value.linkText,
        isFeatured: "true",
      };
    }

    const res = await axios.put(`/api/articles/${editing.value._id}`, payload, {
      headers,
    });

    const index = dynamicFeatured.value.findIndex(
      (a) => a._id === editing.value._id
    );
    dynamicFeatured.value[index] = { ...res.data };

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

// Delete article
async function deleteArticle(id) {
  try {
    await axios.delete(`/api/articles/${id}`);
    dynamicFeatured.value = dynamicFeatured.value.filter((a) => a._id !== id);
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

.featured-count {
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

.featured-wrapper {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  overflow-x: hidden;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.featured-grid > * {
  height: 100%;
}

.featured-form,
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

.featured-form label,
.edit-form label {
  font-weight: bold;
  color: #11222c;
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: "Merriweather", serif;
}

.featured-form input,
.featured-form select,
.featured-form textarea,
.edit-form input,
.edit-form select,
.edit-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #f69000;
  border-radius: 8px;
  background: #f8f6f0;
  font-family: "Merriweather", serif;
  font-size: 1rem;
  box-sizing: border-box;
}

.featured-form button,
.edit-form button {
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  background: #f69000;
  color: #11222c;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.5s ease;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  margin-left: 20px;
}

.featured-form button:hover,
.edit-form button:hover {
  background: #11222c;
  color: #f69000;
}

/* ========== CARD STYLING ========== */
.my-grad {
  background: linear-gradient(
    180deg,
    rgba(246, 144, 0, 0.2) 20.56%,
    rgba(83, 177, 177, 0.2) 61.59%
  );
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  min-width: 0;
}

.my-grad:hover {
  transform: translateY(-6px);
}

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

.featured-grid .my-grad .link p {
  font-weight: bold;
  color: #00312e;
  text-decoration: none;
  transition: color 0.2s ease;
  font-family: "Merriweather", serif;
}

.featured-grid .my-grad .link:hover p {
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
  padding: 1rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
}

.actions button:hover {
  color: #f8f6f0;
  background-color: #00312e;
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
