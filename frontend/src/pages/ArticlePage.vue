<template>
  <div id="top">
    <Header />

    <div class="container" v-if="article && article._id">
      <!-- Meta -->
      <div class="top-meta">
        <div class="latest-articles">Latest Articles</div>
        <div class="date">{{ article.date }}</div>
        <div class="category">{{ article.category }}</div>
        <div class="read-time">{{ article.readTime }}</div>
      </div>

      <!-- Title -->
      <h1>
        <span v-if="article.titleStart">{{ article.titleStart }}</span>
        <span v-if="article.titleEnd">{{ article.titleEnd }}</span>
        <span v-if="!article.titleStart && !article.titleEnd">{{
          article.title
        }}</span>
      </h1>

      <!-- Featured Titles -->
      <div
        class="featured-titles"
        v-if="article.titleOrange || article.titleTeal"
      >
        <h2 class="orange" v-if="article.titleOrange">
          {{ article.titleOrange }}
        </h2>
        <h2 class="teal" v-if="article.titleTeal">{{ article.titleTeal }}</h2>
      </div>

      <!-- Author -->
      <p class="author">by: {{ article.author }}</p>

      <!-- Image -->
      <img
        class="article-image"
        :src="
          article.image
            ? `http://localhost:3000${article.image}`
            : '/placeholder.png'
        "
        :alt="article.alt || 'No image'"
      />

      <!-- Description -->
      <p class="description" v-if="article.description">
        {{ article.description }}
      </p>

      <!-- Link -->
      <p v-if="article.link">
        <a :href="article.link" target="_blank">{{
          article.linkText || "Read More"
        }}</a>
      </p>

      <!-- Flags -->
      <div class="flags">
        <span v-if="article.isFeatured" class="flag featured">★ Featured</span>
        <span v-if="article.isLatest" class="flag latest">🕒 Latest</span>
        <span v-if="article.isPopular" class="flag popular">🔥 Popular</span>
        <span v-if="article.isBlog" class="flag blog">📝 Blog</span>
      </div>

      <!-- Body -->
      <div class="art">
        <div v-for="section in article.body" :key="section.heading">
          <h2>{{ section.heading }}</h2>
          <p v-for="(para, i) in section.paragraphs" :key="i">{{ para }}</p>
        </div>
      </div>

      <!-- References -->
      <div v-if="article.references?.length" class="references">
        <h3>REFERENCES</h3>
        <ul>
          <li v-for="ref in article.references" :key="ref.url">
            <a :href="ref.url" target="_blank">
              <span class="author-ref">{{ ref.author }}</span>
              <span class="date-ref">{{ ref.date }}</span>
              {{ ref.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Fallback + Comment Box -->
    <div v-if="!article && !isLoading">
      <div class="no-results">
        <p>Sorry, this article couldn't be loaded. Please try again later.</p>
      </div>

      <div class="comment-box">
        <textarea
          v-model="commentText"
          placeholder="Add comment..."
          class="editable"
        ></textarea>

        <div class="toolbar">
          <div class="toolbar-left">
            <!-- Bold Button -->
            <button id="boldBtn" onclick="formatText('bold', this)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 6a4 4 0 0 1 0 8H7V6h6zm0 8a4 4 0 1 1 0 8H7v-8h6z"
                />
              </svg>
            </button>

            <!-- Italic Button -->
            <button id="italicBtn" onclick="formatText('italic', this)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 4h9M5 20h9m1-16-6 16" />
              </svg>
            </button>

            <!-- Underline Button -->
            <button id="underlineBtn" onclick="formatText('underline', this)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 4v6a6 6 0 0 0 12 0V4M4 20h16" />
              </svg>
            </button>

            <div class="toolbar-separator"></div>

            <!-- File Attachment Button -->
            <label for="fileUpload">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.88605 3.36299C11.828 0.545994 16.586 0.545994 19.529 3.36299C22.49 6.19699 22.49 10.807 19.529 13.642L11.581 21.25C9.49105 23.25 6.11505 23.25 4.02505 21.25C3.52562 20.7797 3.12767 20.2123 2.85566 19.5825C2.58365 18.9527 2.44333 18.274 2.44333 17.588C2.44333 16.902 2.58365 16.2233 2.85566 15.5935C3.12767 14.9637 3.52562 14.3963 4.02505 13.926L11.859 6.42799C12.4629 5.85745 13.2623 5.53958 14.093 5.53958C14.9238 5.53958 15.7231 5.85745 16.327 6.42799C16.6247 6.70846 16.8619 7.04684 17.024 7.42233C17.1862 7.79782 17.2698 8.2025 17.2698 8.61149C17.2698 9.02049 17.1862 9.42517 17.024 9.80066C16.8619 10.1761 16.6247 10.5145 16.327 10.795L8.43705 18.349C8.36587 18.4172 8.28197 18.4706 8.19013 18.5063C8.09829 18.5421 8.00031 18.5594 7.90178 18.5572C7.80326 18.5551 7.70612 18.5336 7.61592 18.4939C7.52571 18.4542 7.4442 18.3972 7.37605 18.326C7.30789 18.2548 7.25442 18.1709 7.21869 18.0791C7.18296 17.9872 7.16567 17.8893 7.16781 17.7907C7.16994 17.6922 7.19146 17.5951 7.23114 17.5049C7.27082 17.4147 7.32787 17.3331 7.39905 17.265L15.289 9.71199C15.4401 9.57134 15.5606 9.40109 15.643 9.21184C15.7253 9.02258 15.7678 8.8184 15.7678 8.61199C15.7678 8.40559 15.7253 8.2014 15.643 8.01215C15.5606 7.8229 15.4401 7.65265 15.289 7.51199C14.9644 7.2088 14.5368 7.04016 14.0925 7.04016C13.6483 7.04016 13.2207 7.2088 12.896 7.51199L5.06205 15.01C4.70901 15.3402 4.42756 15.7394 4.23514 16.1829C4.04273 16.6263 3.94344 17.1046 3.94344 17.588C3.94344 18.0714 4.04273 18.5497 4.23514 18.9931C4.42756 19.4366 4.70901 19.8358 5.06205 20.166C6.57205 21.611 9.03405 21.611 10.544 20.166L18.492 12.558C20.836 10.314 20.836 6.68999 18.492 4.44599C16.129 2.18499 12.286 2.18499 9.92205 4.44599L3.51905 10.576C3.37543 10.7138 3.18297 10.7889 2.98399 10.7847C2.78501 10.7806 2.59583 10.6976 2.45805 10.554C2.32027 10.4104 2.24518 10.2179 2.24931 10.0189C2.25343 9.81996 2.33643 9.63077 2.48005 9.49299L8.88605 3.36299Z"
                  fill="#F69000"
                />
              </svg>
            </label>
            <input type="file" id="fileUpload" />

            <!-- Image Attachement Button -->
            <label for="imageUpload">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M13.3 3.80005C12.7961 3.80005 12.3128 4.00023 11.9565 4.35655C11.6002 4.71287 11.4 5.19614 11.4 5.70005C11.4 6.20396 11.6002 6.68723 11.9565 7.04355C12.3128 7.39987 12.7961 7.60005 13.3 7.60005C13.8039 7.60005 14.2872 7.39987 14.6435 7.04355C14.9998 6.68723 15.2 6.20396 15.2 5.70005C15.2 5.19614 14.9998 4.71287 14.6435 4.35655C14.2872 4.00023 13.8039 3.80005 13.3 3.80005Z"
                  fill="#F69000"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 1.9C0 1.39609 0.200178 0.912816 0.556497 0.556497C0.912816 0.200178 1.39609 0 1.9 0L17.1 0C17.6039 0 18.0872 0.200178 18.4435 0.556497C18.7998 0.912816 19 1.39609 19 1.9V17.1C19.0003 17.4138 18.9228 17.7228 18.7745 17.9993C18.6119 18.3019 18.3704 18.5548 18.0755 18.731C17.7806 18.9072 17.4435 19.0002 17.1 19H1.9C1.39609 19 0.912816 18.7998 0.556497 18.4435C0.200178 18.0872 0 17.6039 0 17.1L0 1.9ZM6.14333 3.97987L5.7 3.53653L1.26667 7.96987V1.9C1.26667 1.73203 1.33339 1.57094 1.45217 1.45217C1.57094 1.33339 1.73203 1.26667 1.9 1.26667H17.1C17.268 1.26667 17.4291 1.33339 17.5478 1.45217C17.6666 1.57094 17.7333 1.73203 17.7333 1.9V12.6667H14.8289L6.1484 3.98493L6.14333 3.97987Z"
                  fill="#F69000"
                />
              </svg>
            </label>
            <input type="file" id="imageUpload" accept="image/*" />

            <!-- Mention Button -->
            <button id="mentionBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M9.5 0C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19C11.4589 19 13.519 18.408 15.01 17.4167C15.2433 17.2616 15.4054 17.0203 15.4608 16.7457C15.5161 16.4711 15.4601 16.1858 15.3051 15.9525C15.1501 15.7192 14.9087 15.5571 14.6342 15.5017C14.3596 15.4464 14.0743 15.5024 13.841 15.6574C12.6975 16.4165 11.0358 16.8889 9.5 16.8889C8.03862 16.8889 6.61005 16.4555 5.39495 15.6436C4.17986 14.8317 3.2328 13.6777 2.67356 12.3276C2.11431 10.9775 1.96798 9.4918 2.25309 8.0585C2.53819 6.6252 3.24191 5.30862 4.27527 4.27527C5.30862 3.24191 6.6252 2.53819 8.0585 2.25309C9.4918 1.96798 10.9775 2.11431 12.3276 2.67356C13.6777 3.2328 14.8317 4.17986 15.6436 5.39495C16.4555 6.61005 16.8889 8.03862 16.8889 9.5C16.8889 10.3172 16.742 11.0024 16.4763 11.4308C16.2441 11.8038 15.9486 11.963 15.4815 11.963C15.0144 11.963 14.7188 11.8038 14.4866 11.4308C14.2227 11.0024 14.0741 10.3172 14.0741 9.5V5.98148C14.074 5.7282 13.983 5.48337 13.8174 5.29168C13.6519 5.09999 13.4229 4.97421 13.1723 4.9373C12.9218 4.90039 12.6663 4.95481 12.4525 5.09063C12.2387 5.22645 12.0809 5.43461 12.0078 5.67713C11.2821 5.20025 10.4356 4.93983 9.56727 4.92629C8.69898 4.91276 7.84477 5.14669 7.10451 5.60072C6.36426 6.05475 5.76854 6.71013 5.38702 7.49023C5.00549 8.27034 4.85392 9.14293 4.95002 10.006C5.04613 10.8691 5.38593 11.6869 5.92971 12.364C6.47349 13.0411 7.19877 13.5494 8.02077 13.8295C8.84277 14.1095 9.72751 14.1498 10.5716 13.9456C11.4156 13.7414 12.1841 13.3012 12.7872 12.6763C13.3968 13.5727 14.3212 14.0741 15.4815 14.0741C17.6515 14.0741 19 12.3219 19 9.5C18.9972 6.9813 17.9954 4.56656 16.2144 2.78557C14.4334 1.00458 12.0187 0.0027939 9.5 0ZM9.5 11.963C9.01287 11.963 8.53668 11.8185 8.13165 11.5479C7.72662 11.2772 7.41093 10.8926 7.22452 10.4425C7.0381 9.99249 6.98933 9.49727 7.08436 9.0195C7.1794 8.54173 7.41397 8.10287 7.75842 7.75842C8.10287 7.41397 8.54173 7.1794 9.0195 7.08436C9.49727 6.98933 9.99249 7.0381 10.4425 7.22452C10.8926 7.41093 11.2772 7.72662 11.5479 8.13165C11.8185 8.53668 11.963 9.01287 11.963 9.5C11.963 10.1532 11.7035 10.7797 11.2416 11.2416C10.7797 11.7035 10.1532 11.963 9.5 11.963Z"
                  fill="#F69000"
                />
              </svg>
            </button>
          </div>

          <button
            type="submit"
            id="submitBtn"
            class="submit-btn"
            @click="submitComment"
          >
            SUBMIT
          </button>
        </div>
      </div>

      <div class="gradient-separator" aria-hidden="true"></div>

      <!-- Comments -->
      <h3 class="comments-header">Comments</h3>
      <div id="commentsSection"></div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const article = ref(null);
const isLoading = ref(true);
const comments = ref([]);
const commentText = ref("");

// Load article on mount
onMounted(async () => {
  try {
    const res = await axios.get("/api/articles/some-article-id"); // Replace with dynamic ID if needed
    article.value = res.data.article || res.data;
    isLoading.value = false;

    if (article.value.comments) {
      comments.value = article.value.comments;
    }
  } catch (err) {
    console.error("Failed to load article:", err.response?.data || err.message);
    isLoading.value = false;
  }
});

// Rich text formatting
function formatText(command) {
  document.execCommand(command, false, null);
}

// Submit comment
function submitComment() {
  const text = commentText.value.trim();
  if (!text) return;

  const newComment = {
    text,
    author: "Anonymous",
    date: new Date().toISOString(),
  };

  comments.value.push(newComment);
  commentText.value = "";
}
</script>

<style scoped>
/* ========================================================================= ARTICLE ========================================================================= */
body {
  font-family: "Work Sans";
  background-color: #f8f6f0;
  color: #11222c;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* additional header */
header nav {
  margin-right: 10em;
}

.container {
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

/* Article Content */
.top-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-family: "Merriweather";
}

.latest-articles {
  background: #53b1b1;
  color: #f8f6f0;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  margin-top: 80px;
}

.date {
  font-size: 14px;
  color: gray;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 80px;
}

h1 {
  color: #f69000;
  text-transform: uppercase;
  font-size: 50px;
  font-family: "Work Sans", sans-serif;
}

h1 span {
  color: #53b1b1;
}

.author {
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 40px;
}

.article-image {
  width: 100%;
  max-width: 1000px;
  border-radius: 8px;
  margin: 0 auto 30px;
  display: block;
}

h2 {
  color: #f69000;
  margin-top: 30px;
  text-align: left;
  font-family: "Work Sans", sans-serif;
}

p {
  text-align: left;
  margin-bottom: 20px;
  font-family: "Merriweather";
  padding-bottom: 30px;
  color: #11222c;
}

.art {
  width: 95%;
  margin: 0 auto;
}

/* References */
.references {
  margin-top: 60px;
  text-align: left;
  padding: 20px;
}

.references h3 {
  font-family: "Bebas Neue";
  font-size: 50px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
  background: linear-gradient(to right, #f69000, #53b1b1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
}

.references ul {
  list-style-type: disc;
  padding-left: 20px;
  font-family: "Merriweather";
}

.references li {
  margin-bottom: 12px;
}

.references li::marker {
  color: #f69000;
}

.references a {
  text-decoration: none;
  color: inherit;
}

.references a:hover {
  text-decoration: underline;
}

.author-ref {
  color: #f69000;
  font-weight: bold;
}

.date-ref {
  color: #53b1b1;
  font-weight: bold;
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
  text-align: center;
  height: 3px;
}
/* Comment Box */
.comment-box {
  font-family: "Merriweather";
  margin-top: 60px;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid transparent;
  background: linear-gradient(#f8f6f0, #f8f6f0) padding-box,
    linear-gradient(to right, #f69000, #53b1b1) border-box;
  box-sizing: border-box;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

.comment-box .editable {
  width: 80%;
  min-height: 100px;
  padding: 10px;
  border: 1px solid #f8f6f0;
  border-radius: 5px;
  margin-bottom: 10px;
  resize: vertical;
  outline: none;
  background-color: #f8f6f0;
  font-family: "Merriweather", serif;
}

/* Format and Upload Tools */
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.toolbar-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.toolbar-left button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.toolbar-left svg {
  width: 22px;
  height: 22px;
  stroke-width: 2;
  color: #00312e;
}

.toolbar-left svg:hover {
  color: #53b1b1;
}

.toolbar-left button.active {
  border: 2px solid #53b1b1;
  border-radius: 6px;
  padding: 2px;
}

.toolbar-separator {
  width: 1px;
  height: 22px;
  background: #00312e;
}

input[type="file"] {
  display: none;
}

label[for="fileUpload"],
label[for="imageUpload"],
#mentionBtn {
  cursor: pointer;
}

/* Submit Button */
.submit-btn {
  background: #f69000;
  color: #f8f6f0;
  border: none;
  padding: 8px 18px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-family: "Work Sans", sans-serif;
}

.submit-btn:hover {
  background: #11222c;
  color: #f69000;
}

/* Gradient Line Separator */
.gradient-separator {
  height: 3px;
  border-top: 3px solid transparent;
  border-image: linear-gradient(to right, #f69000, #53b1b1) 1;
  margin: 40px auto;
  width: 75%;
  max-width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
}

/* Comment Section */
.comments-header {
  text-align: left;
  margin-left: 7.5em;
  margin-top: 40px;
  font-size: 22px;
  font-weight: bold;
  color: #53b1b1;
  font-family: "Work Sans", sans-serif;
}

.comment {
  border-bottom: 1px solid linear-gradient(to right, #f69000, #53b1b1);
  padding: 10px 0;
  text-align: left;
}

/* RESPONSIVE DESIGN */
@media (max-width: 1200px) {
  .container {
    width: 85%;
  }
  h1 {
    font-size: 42px;
  }
  .references h3 {
    font-size: 40px;
  }
}

/* Tablets */
@media (max-width: 900px) {
  .container {
    width: 90%;
    padding: 15px;
  }
  h1 {
    font-size: 36px;
  }
  .article-image {
    max-width: 100%;
  }
  .references h3 {
    font-size: 34px;
  }
  .top-meta {
    flex-direction: column;
    gap: 8px;
  }
  .latest-articles,
  .date {
    margin-top: 20px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .container {
    width: 95%;
    padding: 10px;
  }
  h1 {
    font-size: 28px;
    line-height: 1.2;
  }
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 15px;
    line-height: 1.6;
  }
  .author {
    font-size: 12px;
  }
  .article-image {
    max-width: 100%;
    border-radius: 5px;
  }
  .references h3 {
    font-size: 26px;
    text-align: center;
  }
  .references {
    padding: 10px;
  }
  .comment-box {
    padding: 15px;
  }
  .toolbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .submit-btn {
    align-self: flex-end;
  }
  .comment-box .editable {
    width: 94%;
  }
}

/* Extra small devices */
@media (max-width: 400px) {
  h1 {
    font-size: 22px;
  }
  .latest-articles {
    font-size: 11px;
    padding: 4px 10px;
  }
  .date {
    font-size: 12px;
  }
  .submit-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
