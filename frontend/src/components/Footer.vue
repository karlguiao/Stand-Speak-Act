<template>
  <!-- FOOTER -->
  <footer>
    <div class="footer-container">
      <div class="footer-left">
        <img :src="footerLogo" alt="StandSpeakAct Logo" class="footer-logo" />
        <p>
          Empowering voices through clarity, creativity, and
          connection—StandSpeakAct is your platform for advocacy, insight, and
          meaningful dialogue.
        </p>

        <div class="social-media">
          <button class="fb-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="36"
              viewBox="0 0 37 36"
              fill="none"
            >
              <ellipse
                cx="18.1622"
                cy="17.8698"
                rx="18.1622"
                ry="17.8698"
                fill="#11222C"
              />
              <path
                d="M20.8672 7.81787C22.3185 7.81787 23.8379 8.04834 23.8379 8.04834V10.9517H22.1631C20.5151 10.9518 20.002 11.8646 20.002 12.7954V15.0073H23.6826L23.0908 18.4175H20.002V26.8042H15.8555V18.4175H12.4863V15.0073H15.8555V12.4077C15.8555 9.44936 17.8353 7.81804 20.8672 7.81787Z"
                fill="#F69000"
              />
              <path
                d="M20.8672 7.81787C22.3185 7.81787 23.8379 8.04834 23.8379 8.04834V10.9517H22.1631C20.5151 10.9518 20.002 11.8646 20.002 12.7954V15.0073H23.6826L23.0908 18.4175H20.002V26.8042H15.8555V18.4175H12.4863V15.0073H15.8555V12.4077C15.8555 9.44936 17.8353 7.81804 20.8672 7.81787Z"
                stroke="#F6C624"
              />
            </svg>
          </button>

          <button class="x-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="36"
              viewBox="0 0 38 36"
              fill="none"
            >
              <ellipse
                cx="19.0543"
                cy="17.8698"
                rx="18.1622"
                ry="17.8698"
                fill="#11222C"
              />
              <path
                d="M21.9517 9.50635C22.9043 9.01184 23.9963 8.83145 25.063 8.99268C26.1295 9.15393 27.1137 9.64758 27.8677 10.3999C29.0114 10.3769 30.1122 9.97191 30.9858 9.25244C30.6115 10.3868 29.8227 11.3477 28.769 11.9526C29.7547 11.9552 30.7192 11.6739 31.5405 11.1431C30.8447 12.073 30.0291 12.9126 29.1147 13.6411C29.2625 16.1359 28.6972 18.6217 27.481 20.8218C26.2647 23.022 24.4456 24.8504 22.2261 26.103C20.0066 27.3557 17.4738 27.9831 14.9097 27.9165C12.3455 27.8499 9.85049 27.0912 7.70264 25.7251C10.2672 25.7409 12.7863 25.064 14.979 23.7681C13.9408 23.7461 12.9353 23.4083 12.103 22.8032C11.2708 22.1981 10.6525 21.3555 10.3354 20.3921C11.0704 20.532 11.8287 20.509 12.5532 20.3247C11.4647 20.0831 10.4911 19.4925 9.7876 18.6479C9.08418 17.8035 8.69108 16.7539 8.67236 15.6665C9.3644 15.9879 10.1236 16.1497 10.8901 16.1392C9.87437 15.4532 9.15617 14.4239 8.87451 13.2515C8.59286 12.079 8.76791 10.8464 9.36572 9.79248C10.5874 11.265 12.1132 12.4708 13.8442 13.3315C15.5753 14.1922 17.4729 14.6887 19.4136 14.7886C19.1932 13.7591 19.3212 12.6873 19.7788 11.7349C20.2364 10.7825 20.9992 10.0008 21.9517 9.50635Z"
                fill="#F69000"
              />
              <path
                d="M21.9517 9.50635C22.9043 9.01184 23.9963 8.83145 25.063 8.99268C26.1295 9.15393 27.1137 9.64758 27.8677 10.3999C29.0114 10.3769 30.1122 9.97191 30.9858 9.25244C30.6115 10.3868 29.8227 11.3477 28.769 11.9526C29.7547 11.9552 30.7192 11.6739 31.5405 11.1431C30.8447 12.073 30.0291 12.9126 29.1147 13.6411C29.2625 16.1359 28.6972 18.6217 27.481 20.8218C26.2647 23.022 24.4456 24.8504 22.2261 26.103C20.0066 27.3557 17.4738 27.9831 14.9097 27.9165C12.3455 27.8499 9.85049 27.0912 7.70264 25.7251C10.2672 25.7409 12.7863 25.064 14.979 23.7681C13.9408 23.7461 12.9353 23.4083 12.103 22.8032C11.2708 22.1981 10.6525 21.3555 10.3354 20.3921C11.0704 20.532 11.8287 20.509 12.5532 20.3247C11.4647 20.0831 10.4911 19.4925 9.7876 18.6479C9.08418 17.8035 8.69108 16.7539 8.67236 15.6665C9.3644 15.9879 10.1236 16.1497 10.8901 16.1392C9.87437 15.4532 9.15617 14.4239 8.87451 13.2515C8.59286 12.079 8.76791 10.8464 9.36572 9.79248C10.5874 11.265 12.1132 12.4708 13.8442 13.3315C15.5753 14.1922 17.4729 14.6887 19.4136 14.7886C19.1932 13.7591 19.3212 12.6873 19.7788 11.7349C20.2364 10.7825 20.9992 10.0008 21.9517 9.50635Z"
                stroke="#F69000"
              />
            </svg>
          </button>

          <button class="insta-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="36"
              viewBox="0 0 38 36"
              fill="none"
            >
              <ellipse
                cx="18.9459"
                cy="17.8698"
                rx="18.1622"
                ry="17.8698"
                fill="#11222C"
              />
              <path
                d="M23.7129 7.31787C26.9365 7.31792 29.5596 9.9037 29.5596 13.105V22.6343C29.5596 25.8356 26.9365 28.4213 23.7129 28.4214H14.0762C10.8525 28.4214 8.22949 25.8356 8.22949 22.6343V13.105C8.22949 9.90367 10.8525 7.31787 14.0762 7.31787H23.7129Z"
                fill="#11222C"
                stroke="#F69000"
              />
              <path
                d="M18.894 12.6704C21.7895 12.6704 24.1468 14.9929 24.147 17.8696C24.147 20.7465 21.7896 23.0698 18.894 23.0698C15.9987 23.0696 13.6421 20.7464 13.6421 17.8696C13.6423 14.993 15.9988 12.6707 18.894 12.6704Z"
                fill="#11222C"
                stroke="#F69000"
              />
              <path
                d="M25.189 10.9185C25.6367 10.9185 26.0063 11.2768 26.0063 11.7271C26.0063 12.1773 25.6366 12.5356 25.189 12.5356C24.7414 12.5355 24.3717 12.1772 24.3716 11.7271C24.3716 11.2768 24.7414 10.9186 25.189 10.9185Z"
                fill="#11222C"
                stroke="#F69000"
                stroke-width="0.5"
              />
            </svg>
          </button>

          <button class="linkedin-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M18.0002 0.720215C8.45662 0.720215 0.720215 8.45662 0.720215 18.0002C0.720215 27.5438 8.45662 35.2802 18.0002 35.2802C27.5438 35.2802 35.2802 27.5438 35.2802 18.0002C35.2802 8.45662 27.5438 0.720215 18.0002 0.720215ZM13.7702 25.1624H10.271V13.9016H13.7702V25.1624ZM11.999 12.5192C10.8938 12.5192 10.1792 11.7362 10.1792 10.7678C10.1792 9.77961 10.9154 9.02001 12.044 9.02001C13.1726 9.02001 13.8638 9.77961 13.8854 10.7678C13.8854 11.7362 13.1726 12.5192 11.999 12.5192ZM26.5502 25.1624H23.051V18.9218C23.051 17.4692 22.5434 16.4828 21.278 16.4828C20.3114 16.4828 19.7372 17.1506 19.4834 17.7932C19.3898 18.0218 19.3664 18.3458 19.3664 18.668V25.1606H15.8654V17.4926C15.8654 16.0868 15.8204 14.9114 15.7736 13.8998H18.8138L18.974 15.464H19.0442C19.505 14.7296 20.6336 13.646 22.5218 13.646C24.824 13.646 26.5502 15.1886 26.5502 18.5042V25.1624Z"
                fill="#11222C"
              />
            </svg>
          </button>
        </div>

        <div class="back-to-top" @click="scrollToTop">
          <button class="bck-to-tp-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
            >
              <path
                d="M4.25075 22H26.7514C26.9792 21.9993 27.2025 21.9355 27.3973 21.8155C27.592 21.6956 27.7508 21.5239 27.8567 21.3192C27.9625 21.1144 28.0113 20.8842 27.9978 20.6533C27.9843 20.4225 27.9091 20.1997 27.7802 20.009L16.5299 3.51296C16.0636 2.82901 14.9411 2.82901 14.4735 3.51296L3.22322 20.009C3.093 20.1993 3.01664 20.4222 3.00242 20.6534C2.98821 20.8846 3.0367 21.1154 3.14261 21.3206C3.24853 21.5258 3.40782 21.6977 3.60319 21.8175C3.79856 21.9372 4.02252 22.0004 4.25075 22Z"
                fill="#F69000"
              />
            </svg>
            Back To Top
          </button>
        </div>
      </div>

      <div class="footer-right">
        <div class="footer-section-grid">
          <div class="footer-section">
            <h1>ABOUT</h1>
            <p>
              <router-link to="/about" class="a">Meet the Authors</router-link>
            </p>
            <p><router-link to="/about" class="a">Mission</router-link></p>
            <p><router-link to="/about" class="a">Vision</router-link></p>
          </div>
          <div class="footer-section">
            <h1>DISCOVER</h1>
            <p>
              <router-link to="/blog" class="a">Featured Topics</router-link>
            </p>
            <p>
              <router-link to="/blog" class="a">New Articles</router-link>
            </p>
            <p>
              <router-link to="/blog" class="a">Trending Reads</router-link>
            </p>
          </div>
          <div class="footer-section">
            <h1>INSIGHTS</h1>
            <p>
              <router-link to="/blog" class="a"
                >Study Tips & Guides</router-link
              >
            </p>
            <p>
              <router-link to="/blog" class="a"
                >Research Highlights</router-link
              >
            </p>
            <p>
              <router-link to="/blog" class="a">Expert Opinions</router-link>
            </p>
          </div>
          <div class="footer-section">
            <h1>CONNECT</h1>
            <p>
              <router-link to="/contact" class="a"
                >Join the Discussion</router-link
              >
            </p>
            <p>
              <router-link to="/contact" class="a"
                >Share Your Story</router-link
              >
            </p>
            <p>
              <router-link to="/contact" class="a"
                >Contact the Team</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <fieldset class="bottom">
    <p>
      © 2025 StandSpeakAct. All rights reserved. <br />Sharing Knowledge with
      Purpose
    </p>
  </fieldset>
</template>
<script setup>
import footerLogo from "../assets/images/footer-logo.png";

function scrollToTop() {
  const topElement = document.getElementById("top");
  if (topElement) {
    topElement.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
</script>

<style scoped>
footer {
  margin-top: 5em;
  padding: 7em 40px 7em 40px;
  background-color: #11222c;
  color: #f8f6f0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-left {
  flex: 1;
}

.footer-logo {
  max-width: 25em;
  margin-bottom: 20px;
  margin-left: 10em;
}

.footer-left p {
  font-family: "Merriweather", serif;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: #53b1b1;
  width: 80%;
  margin-left: 10em;
}

/* SOCIAL MEDIA ICONS */
.social-media {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 4em;
  margin-left: 10em;
}

.social {
  width: 2.5em;
  height: 2.5em;
}

.fb-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fb-btn svg ellipse,
.fb-btn svg path {
  transition: fill 0.3s ease, stroke 0.3s ease;
}

.fb-btn svg ellipse {
  fill: #f69000;
}

.fb-btn svg path {
  fill: #11222c;
  stroke: #11222c;
}

.fb-btn:hover svg ellipse {
  fill: #11222c;
}

.fb-btn:hover svg path {
  fill: #f69000;
  stroke: #f69000;
}

/* TWITTER ICON */
.x-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.x-btn svg ellipse,
.x-btn svg path {
  transition: fill 0.3s ease, stroke 0.3s ease;
}

.x-btn svg ellipse {
  fill: #f69000;
}

.x-btn svg path {
  fill: #11222c;
  stroke: #11222c;
}

.x-btn:hover svg ellipse {
  fill: #11222c;
}

.x-btn:hover svg path {
  fill: #f69000;
  stroke: #f69000;
}

/* INSTAGRAM ICON */
.insta-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.insta-btn svg ellipse,
.insta-btn svg path {
  transition: fill 0.3s ease, stroke 0.3s ease;
}

.insta-btn svg ellipse {
  fill: #f69000;
}

.insta-btn svg path {
  fill: #f69000;
  stroke: #11222c;
}

.insta-btn:hover svg ellipse {
  fill: #11222c;
}

.insta-btn:hover svg path {
  fill: #11222c;
  stroke: #f69000;
}

/* LINKEDIN ICON */
.linkedin-btn {
  background-color: #11222c;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.linkedin-btn svg path {
  fill: #f69000;
  transition: fill 0.3s ease;
}

.linkedin-btn:hover {
  background-color: #f69000;
}

.linkedin-btn:hover svg path {
  fill: #11222c;
}

.back-to-top {
  display: inline-block;
}

.to-top {
  width: 12em;
  height: 3.5em;
  margin-left: 10em;
  margin-top: 4em;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.to-top:hover {
  transform: scale(1.1);
}

.footer-right {
  flex: 2;
  background: #11222c;
  padding: 4em 3em;
}

.footer-section-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.footer-section {
  text-align: center;
}

.footer-section h1 {
  font-family: "Bebas Neue";
  font-weight: 400;
  color: #f69000;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
}

.footer-section h1::after {
  content: "";
  display: block;
  width: 40px;
  height: 3px;
  background-color: #f69000;
  margin: 6px auto 0;
}

.footer-section p {
  margin: 5px 0;
}

.footer-section a {
  color: #53b1b1;
  text-decoration: none;
  font-family: "Work Sans";
}

.footer-section a:hover {
  text-decoration: underline;
}

.bottom {
  text-align: center;
  margin-left: 0em;
  width: 100%;
  padding: 0;
  border: 0;
  background-color: #1c5858;
}

.bottom p {
  font-family: "Merriweather", serif;
  color: #f6c624;
  padding: 0;
  font-size: 1em;
  text-align: center;
}

footer .footer-container .footer-right .footer-section-grid .footer-section {
  text-align: center;
}

footer .footer-container .footer-right .footer-section-grid .footer-section h1 {
  margin-left: -0.4em;
}

.back-to-top {
  display: inline-block;
  padding: 2px;
  border-radius: 3px;
  background: linear-gradient(to right, #f69000, #53b1b1);
  transition: transform 0.3s ease;
  margin-left: 10em;
  margin-top: 2em;
}

.bck-to-tp-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: #f69000;
  background: #11222c;
  border: none;
  cursor: pointer;
  width: 190px;
  height: 46.931px;
  flex-shrink: 0;
  font-family: "Work Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 3px;
  transition: fill 0.4s ease, transform 0.3s ease;
}

.back-to-top:hover {
  color: #f69000;
  transform: scale(1.05);
}

/* Responsive Footer */
@media (max-width: 1200px) {
  footer {
    padding: 4em 24px;
  }
  .footer-logo {
    max-width: 18em;
    margin-left: 2em;
  }
  .footer-left p,
  .social-media,
  .to-top {
    margin-left: 2em;
  }
  .footer-section-grid {
    gap: 20px;
  }
}

@media (max-width: 992px) {
  .footer-container {
    flex-direction: column;
    gap: 2.5em;
  }
  .footer-left p {
    width: 100%;
    margin-left: 0;
  }
  .footer-logo {
    margin-left: 0;
    max-width: 16em;
  }
  .social-media,
  .to-top {
    margin-left: 0;
  }
  .footer-right {
    width: 100%;
  }
  .footer-section-grid {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  .footer-section {
    margin: 0;
  }
}

@media (max-width: 600px) {
  footer {
    padding: 3em 16px;
  }
  .footer-section-grid {
    grid-template-columns: 1fr;
    gap: 1.5em;
  }
  .footer-section h1 {
    margin: 0;
    text-align: center;
  }
  .footer-section p {
    text-align: center;
  }
  .to-top {
    width: 10em;
    height: 3em;
    margin: 0 auto;
    text-align: center;
  }
  .bottom p {
    margin-left: 0;
    font-size: 0.95em;
  }
}
</style>
