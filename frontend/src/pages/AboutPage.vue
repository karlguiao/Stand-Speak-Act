<template>
  <div id="top">
    <Header />
    <div class="d1">
      <img :src="aboutHero" alt="background img" />
      <h1 class="fade-in">
        STAND FOR SOMETHING. SPEAK WITH PURPOSE. ACT WITH IMPACT.
      </h1>
      <p class="fade-in delay">
        This is where advocacy meets expression and purpose finds its voice.
        Every story—spoken, written, or designed—can shift perspectives, spark
        dialogue, and drive change.
      </p>
    </div>

    <div>
      <div class="d2 fade-item">
        <h1 class="about-title">
          ABOUT <span class="yellow">S</span><span class="blue">TAND</span
          ><span class="yellow">S</span><span class="blue">PEAK</span
          ><span class="yellow">A</span><span class="blue">CT</span>
        </h1>
        <p>
          StandSpeakAct is a socially-driven educational blog platform built to
          combat misinformation and amplify awareness of global issues. From
          climate change and teenage pregnancy to cyberbullying and data
          privacy, we provide a space for truth, empathy, and advocacy.
        </p>
        <p>
          We believe in empowering users to engage with factual content, share
          perspectives, and foster meaningful dialogue. Whether you're here to
          learn, speak out, or support others, your voice matters—and it belongs
          here.
        </p>
      </div>
    </div>

    <div class="my-gradient-div">
      <div class="d3 fade-item">
        <img :src="mission" alt="mission" class="mission-img" />
        <p>
          To empower individuals through accessible, factual, and expressive
          content that fosters awareness, empathy, and action. We aim to combat
          misinformation, elevate underrepresented voices, and create a safe
          space for learning, storytelling, and advocacy. Through thoughtful
          design and inclusive dialogue, we help users become informed
          contributors to social change.
        </p>
      </div>
      <div class="image-row fade-item">
        <div class="image-card">
          <img :src="mission1" alt="Image 1" />
        </div>
        <div class="image-card">
          <img :src="mission2" alt="Image 2" />
        </div>
        <div class="image-card">
          <img :src="mission3" alt="Image 3" />
        </div>
      </div>

      <div class="container">
        <div class="d4 fade-item">
          <img :src="vision" alt="vision" />
          <p>
            We envision a digital community where knowledge is shared with
            purpose, creativity fuels connection, and every voice—regardless of
            background—is heard, respected, and amplified. StandSpeakAct strives
            to be a catalyst for meaningful conversations, a hub for
            collaborative learning, and a platform where advocacy becomes
            action.
          </p>
          <p>
            We aim to nurture a space where curiosity leads to understanding and
            expression becomes a force for change. Together, we build a movement
            that values truth, empathy, and the power of collective voices.
          </p>
        </div>
        <div class="d5 fade-item">
          <img :src="vision1" alt="vision" />
        </div>
      </div>
    </div>

    <section class="story-section fade-item">
      <div class="story-text">
        <img :src="ourStory" alt="Our Story" class="store" />
        <div class="impact-overlay">
          <p>
            <span class="orange a1">Voice,</span><br />
            <span class="teal a1">Vision,</span><br />
            <span class="black a1">Impact</span>
          </p>
        </div>

        <p>
          We're a group of college students who believe that truth deserves a
          louder voice. In a world flooded with misinformation and noise, we
          created StandSpeakAct to cut through the confusion and spark real
          conversations. What started as a class project quickly grew into a
          purpose-driven platform—one that empowers people to speak up, stand
          together, and act with clarity.
        </p>
      </div>

      <div class="story-image fade-item">
        <img :src="story" alt="Hands together" />
      </div>
      <p class="story-conclusion">
        We're not just building a website—we're building a movement. A space
        where facts matter, stories resonate, and every voice contributes to
        something bigger. Because awareness is the first step toward change, and
        we believe that even as students, we have the power to make an impact.
      </p>
    </section>

    <section class="developers fade-item">
      <img :src="developers" alt="meet the developers" class="dev-img" />
      <fieldset class="f1">
        <div class="person1">
          <img :src="person1" alt="Person 1" class="dev1" />
          <h2>Gania, Elisha Claire A.</h2>
          <p>Project Leader & Backend Developer</p>
        </div>
        <div class="person2">
          <img :src="person2" alt="Person 2" class="dev2" />
          <h2>Cordero, Shane C.</h2>
          <p>Backend Developer</p>
        </div>
        <div class="person3">
          <img :src="person3" alt="Person 3" class="dev3" />
          <h2>Guiao, Karl Christian D.</h2>
          <p>Frontend Developer</p>
        </div>
      </fieldset>
      <fieldset class="f2">
        <div class="person4">
          <img :src="person4" alt="Person 4" class="dev4" />
          <h2>Jeerh, Satwinder R.</h2>
          <p>Frontend Developer</p>
        </div>
        <div class="person5">
          <img :src="person5" alt="Person 5" class="dev5" />
          <h2>Puno, Kimberly Clarisse P.</h2>
          <p>Backend Developer</p>
        </div>
      </fieldset>
    </section>

    <section class="what-we-cover fade-item">
      <fieldset class="fcover">
        <div class="fd1">
          <img :src="cover" alt="what we cover" class="cover-img" />
        </div>
        <div class="fd2">
          <p>
            At StandSpeakAct, we tackle urgent global issues that shape lives,
            challenge systems, and demand attention. Our platform is built to
            inform, empower, and spark meaningful dialogue around topics that
            matter most.
          </p>
        </div>
      </fieldset>
      <fieldset class="fade-item">
        <fieldset class="my-grad">
          <img :src="pic1" alt="broken houses" class="f10" />
          <fieldset class="f11">
            <h1>
              <span class="orange">POVERTY:</span>
              <span class="teal"> See How Poverty Affects Lives</span>
            </h1>
            <p>
              We shed light on the realities of economic inequality and its
              ripple effects on education, health, and opportunity. Our goal is
              to amplify stories and solutions that drive equity and compassion.
            </p>
          </fieldset>
        </fieldset>
        <fieldset class="my-grad">
          <img :src="pic2" alt="cybersecurity tips" class="f12" />
          <fieldset class="f13">
            <h1>
              <span class="orange">CYBERSECURITY:</span>
              <span class="teal"> Explore Digital Safety Tips</span>
            </h1>
            <p>
              We explore how digital threats impact privacy, safety, and freedom
              online. From data breaches to ethical tech, we advocate for
              secure, informed, resilient, and inclusive digital spaces.
            </p>
          </fieldset>
        </fieldset>
      </fieldset>
      <fieldset>
        <fieldset class="my-grad">
          <img :src="pic3" alt="climate change" class="f14" />
          <fieldset class="f15">
            <h1>
              <span class="orange">CLIMATE CHANGE:</span>
              <span class="teal"> Learn what's heating up</span>
            </h1>
            <p>
              We cover the causes and consequences of a warming planet—from
              extreme weather to environmental justice. Through facts and
              advocacy, we push for awareness and sustainable action.
            </p>
          </fieldset>
        </fieldset>
        <fieldset class="my-grad">
          <img :src="pic4" alt="fake news" class="f16" />
          <fieldset class="f17">
            <h1>
              <span class="orange">FAKE NEWS:</span>
              <span class="teal"> Uncover the truth behind headlines</span>
            </h1>
            <p>
              We confront the spread of misinformation and its impact on truth,
              trust, and public discourse. StandSpeakAct promotes media literacy
              and fact-based storytelling to empower informed voices.
            </p>
          </fieldset>
        </fieldset>
      </fieldset>
    </section>

    <Dispatch />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import aboutHero from "../assets/images/about_hero.png";
import mission from "../assets/images/mission.png";
import mission1 from "../assets/images/mission1.png";
import mission2 from "../assets/images/mission2.png";
import mission3 from "../assets/images/mission3.png";
import vision from "../assets/images/vision.png";
import vision1 from "../assets/images/vision1.png";
import ourStory from "../assets/images/our-story.png";
import story from "../assets/images/story.png";
import developers from "../assets/images/developers.png";
import person1 from "../assets/images/claire.jpg";
import person2 from "../assets/images/shane.jpg";
import person3 from "../assets/images/karl.jpg";
import person4 from "../assets/images/satwinder.jpg";
import person5 from "../assets/images/kim.jpg";

import cover from "../assets/images/cover.png";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import pic4 from "../assets/images/pic4.png";

import Header from "../components/Header.vue";
import Dispatch from "../components/Dispatch.vue";
import Footer from "../components/Footer.vue";

onMounted(() => {
  observeFadeItems();
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
</script>

<style scoped>
/* ========================================================================= ABOUT ========================================================================= */
html,
body {
  padding: 0;
  margin: 0;
  background-color: #f8f6f0;
  padding: 0;
  overflow-x: hidden;
}

body div img {
  display: block;
  max-width: 100%;
  width: 100%;
  height: auto;
}

header nav {
  margin-left: 5em;
  margin-right: 10em;
  text-align: center;
  justify-content: center;
  float: left;
}

header nav a {
  font-size: 1.3em;
}

header .b1,
header .b2 {
  font-size: 0.8em;
  padding: 0.9em;
}

header .b2 {
  margin-right: 0em;
}

.d1 {
  position: relative;
  width: 100%;
  height: 50em;
  overflow: hidden;
  z-index: 0;
}

.d1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  display: block;
}

.d1 h1 {
  font-family: "Bebas Neue", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 1000;
  margin: 0;
  margin-top: -1.5em;
  padding: 0 1rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #f8f6f0;
  font-weight: 500;
  font-size: 4em;
  z-index: 1000;
}

.d1 p {
  font-family: "Work Sans", sans-serif;
  position: absolute;
  top: 50%;
  width: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  margin: 0;
  padding: 0 1rem;
  letter-spacing: 1px;
  color: #f8f6f0;
  font-weight: 300;
  font-size: 2.1em;
  z-index: 1000;
  text-align: center;
}

/*code for the about standspeakact*/
.about-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: 4rem;
  font-weight: 500;
  margin: 0;
  padding-bottom: 0.3rem;
  display: inline-block;
  margin-left: 7em;
  margin-top: 2em;
}

.about-title .yellow {
  color: #f69000;
}

.about-title .blue {
  color: #53b1b1;
}

p {
  font-family: "Merriweather", serif;
  width: 50%;
  text-align: left;
  margin-left: 26em;
  font-size: 1.2em;
  justify-content: center;
}

.d2 {
  padding-bottom: 10em;
}

/* mission and vision */
.my-gradient-div {
  background: linear-gradient(
    180deg,
    rgba(246, 144, 0, 0.2) 8%,
    rgba(83, 177, 177, 0.2) 84%
  );
  color: #f8f6f0;
  padding: 2rem;
  padding-bottom: 10em;
}

.d3 {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  max-width: 1450px;
  margin: 0 auto;
  padding: 2rem 5rem;
}

.mission-img {
  height: 4.1rem;
  width: auto;
  margin-top: 10em;
  margin-left: 3.5em;
}

.d3 p {
  font-family: "Merriweather", serif;
  font-size: 1.4rem;
  line-height: 1.6;
  width: 100%;
  margin: 0;
  margin-top: 5.5em;
  color: #11222c;
}

.image-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem auto;
  margin-bottom: 10em;
}

.image-card {
  border-radius: 10px;
  overflow: hidden;
  border: 5px solid transparent;
  width: 450px;
  height: 450px;
}

.image-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.d4,
.d5 {
  display: inline-block;
  vertical-align: top;
}

.d4 {
  width: 55%;
  padding: 2rem;
}

.d4 img {
  width: 300px;
  margin-left: 15em;
  margin-bottom: 1rem;
  display: block;
}

.d4 p {
  font-family: "Merriweather", serif;
  font-size: 1.4rem;
  line-height: 1.6;
  color: #11222c;
  width: 70%;
  margin-bottom: 1rem;
  margin-left: 11em;
  margin-top: 2em;
}

.d5 {
  margin: 0 auto;
  width: 40%;
  padding: 2rem;
}

.d5 img {
  width: 90%;
  height: 90%;
  border-radius: 8px;
  display: block;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-left: -10em;
}

/*code for the our story*/
.story-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 8rem 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
}

.story-text {
  flex: 1 1 500px;
  position: relative;
}

.story-text img {
  display: block;
  margin-bottom: 0;
  width: 250px;
}

.story-text p span.orange {
  font-family: "Work Sans", sans-serif;
  color: #f69000;
  font-size: 5em;
  margin-left: 1.5em;
}

.story-text p span.teal {
  font-family: "Work Sans", sans-serif;
  color: #53b1b1;
  font-size: 5em;
  margin-left: 3.5em;
}

.story-text p span.black {
  font-family: "Work Sans", sans-serif;
  color: #11222c;
  font-size: 5em;
  margin-left: 2.8em;
  font-weight: bold;
}

.story-text p {
  font-family: "Merriweather", serif;
  font-size: 1.1rem;
  margin: 1.5rem 0;
  width: 72%;
}

.story-image {
  flex: 1 1 400px;
}

.story-image img {
  width: 100%;
  border-radius: 8px;
  margin-left: -7em;
}

.story-conclusion {
  font-size: 1.1rem;
  margin-top: -1rem;
  width: 90%;
  margin-left: 11em;
  margin-left: -7em;
}

.story-conclusion p {
  font-family: "Merriweather", serif;
}

.impact-overlay {
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  padding: 1rem;
  pointer-events: none;
}

/* Meet the developers section */
.developers {
  text-align: center;
  padding: 2em;
}

.dev-img {
  display: block;
  margin: 0 auto 2em auto;
  width: 35em;
  height: auto;
}

.developers fieldset {
  border: none;
  display: flex;
  justify-content: center;
  gap: 6em;
  margin: 3em auto;
  flex-wrap: wrap;
}

.developers div {
  text-align: center;
  max-width: 350px;
}

.developers div img {
  width: 100%;
  max-width: 300px;
  height: auto;
  display: block;
  margin: 0 auto 1.5em auto;
  border-radius: 7px;
  padding: 4px;
  background: linear-gradient(to right, #f69000, #53b1b1);
  border: none;
}

.developers h2 {
  font-size: 1.4em;
  margin: 0.6em 0 0.3em 0;
}

.developers p {
  font-size: 1.2em;
  color: #11222c;
  margin: 0;
}

.f1 p,
.f2 p {
  text-align: center;
  white-space: nowrap;
}

.person2 p,
.person3 p,
.person4 p,
.person5 p {
  margin: 0 4em;
}

/* What we cover section */
.what-we-cover {
  text-align: center;
  padding: 10em 2em 2em 2em;
  font-family: Arial, sans-serif;
}

.what-we-cover > fieldset:first-of-type {
  border: none;
  max-width: 1200px;
  margin: 0 auto 3em auto;
}

.what-we-cover > fieldset:first-of-type p {
  font-size: 1.5em;
  color: #11222c;
  line-height: 1.5em;
  margin-top: -1em;
  margin-bottom: -1em;
}

.what-we-cover > fieldset {
  border: none;
  display: flex;
  justify-content: center;
  gap: 2em;
  margin-bottom: 3em;
}

.my-grad {
  background: linear-gradient(
    180deg,
    rgba(246, 144, 0, 0.2) 8%,
    rgba(83, 177, 177, 0.2) 84%
  );
  border-radius: 10px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
  max-width: 500px;
}

.my-grad:hover {
  transform: translateY(-7px);
}

/* Image block */
.my-grad img {
  width: 100%;
  object-fit: cover;
  flex-shrink: 0;
}

/* Text block */
.my-grad fieldset {
  border: none;
  padding: 2em;
}

.my-grad h1 {
  font-family: "Work Sans", sans-serif;
  font-size: 2em;
  margin-bottom: 0.5em;
  line-height: 1.4;
}

.my-grad p {
  font-size: 1.2em;
  font-family: "Merriweather", serif;
  color: #11222c;
  line-height: 1.75;
  margin: 0;
}

/* Color accents */
.orange {
  color: #f69000;
}

.teal {
  color: #53b1b1;
}

.f10,
.f12,
.f14,
.f16 {
  position: relative;
  width: 100%;
  height: 450px;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.f10 img,
.f12 img,
.f14 img,
.f16 img {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.f11,
.f13,
.f15,
.f17 {
  border: none;
}

.f11 h1,
.f13 h1,
.f15 h1,
.f17 h1 {
  font-family: "Work Sans", sans-serif;
  font-size: 2em;
  margin: 0 0 0.5em 0;
  line-height: 1.4em;
}

.f11 p,
.f13 p,
.f15 p,
.f17 p {
  font-size: 1.2em;
  font-family: "Merriweather", serif;
  color: #11222c;
  line-height: 1.75em;
  margin: 0;
  width: 100%;
}

.my-grad {
  background: linear-gradient(
    180deg,
    rgba(246, 144, 0, 0.2) 8%,
    rgba(83, 177, 177, 0.2) 84%
  );
}

.fd2 {
  flex: 1;
  overflow: visible;
  height: auto;
}

.fd2 p {
  margin: 0;
  width: 100%;
  overflow: visible;
  max-height: none;
  float: none;
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

.f11,
.f13,
.f15,
.f17 {
  padding: 3em;
}

/* The standspeakact dispatch */
.about-titles {
  font-family: "Bebas Neue", sans-serif;
  font-size: 4rem;
  font-weight: 500;
  margin: 0;
  padding-bottom: 0.3rem;
  display: inline-block;
  margin-left: 7em;
  margin-top: 2em;
  color: #f8f6f0;
}

.about-titles .yellow {
  color: #f7931e;
}

.about-titles .blue {
  color: #53b1b1;
}

.dispatch {
  background-color: #00312e;
  color: #f8f6f0;
}

.dispatch button {
  padding: 1em;
  background-color: #f69000;
  color: #f8f6f0;
  border: 2px solid #53b1b1;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 20%;
  margin-top: 1em;
  margin-left: 40em;
}

.dispatch button:hover {
  background-color: #f69000;
}

.dispatch button:active {
  transform: scale(0.97);
  background-color: #f69000;
}

.dispatch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00312e;
  color: #f8f6f0;
}

.fdispatch {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  border: none;
  padding: 0;
}

.fdispatch p {
  font-size: 1.7rem;
  max-width: 100%;
  margin: 0;
  white-space: nowrap;
  margin-left: 4em;
  font-weight: 0;
  font-family: "Merriweather", serif;
}

.fdispatch h1 {
  font-family: "Bebas Neue", sans-serif;
  margin-top: 0em;
  font-size: 4em;
  margin-right: -3em;
  margin-left: 1.2em;
}

.fdispatch button:hover {
  background-color: #f69000;
  transform: scale(1.1);
}

.circle-img {
  width: 50%;
  height: auto;
  object-fit: contain;
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

/* FOOTER */
.footer-section p {
  margin-left: 7.5em;
}

.footer-section h1 {
  margin-right: -2em;
}

.bottom p {
  margin: 0 auto;
  padding: 1em 0;
}

@media (max-width: 992px) {
  header nav {
    margin-right: 0em;
  }

  header nav a {
    font-size: 1.1em;
  }

  header img {
    margin-right: -10em;
    margin-left: 2em;
    height: 16vh;
    width: 30%;
    max-height: 200px;
  }

  header .b1,
  header .b2 {
    font-size: 0.8em;
    padding: 0.7em 1em;
  }

  header .b2 {
    margin-right: 1em;
  }

  .d1 img {
    margin-top: -3.5em;
    margin-left: -1em;
  }
  .d1 {
    height: auto;
    padding: 4em 1em;
    text-align: center;
  }

  .d1 h1 {
    font-size: 2.2em;
    top: 50%;
  }

  .d1 p {
    font-size: 1.4em;
    width: 90%;
    top: 60%;
  }

  /* About Title */
  .about-title {
    margin-left: 2em;
    font-size: 3rem;
  }

  p {
    width: 85%;
    margin-left: 2em;
    font-size: 1em;
  }

  /* Mission / Vision Section */
  .d3 {
    flex-direction: column;
    padding: 2rem 2rem;
    align-items: center;
  }

  .d3 p {
    margin-top: 2em;
    font-size: 1.1rem;
  }

  .mission-img {
    margin: 2em auto 1em auto;
    height: 3rem;
  }

  .container {
    flex-direction: column;
    padding: 2rem;
  }

  .d4,
  .d5 {
    width: 100%;
    padding: 1rem;
  }

  .d4 img {
    margin: 0 auto 1em auto;
  }

  .d4 p {
    width: 90%;
    margin: 1em auto;
  }

  .d5 img {
    width: 90%;
    margin: 0 auto;
  }

  /* Story Section */
  .story-section {
    flex-direction: column;
    padding: 4rem 2rem;
  }

  .story-text,
  .story-image {
    width: 100%;
  }

  .story-image img {
    margin: 0 auto;
  }

  .story-text p span {
    font-size: 3em !important;
    margin-left: 0 !important;
  }

  .story-text p {
    font-size: 1em;
    width: 100%;
  }

  .story-conclusion {
    width: 90%;
    margin: 1em auto;
  }

  /* Developers */
  .dev-img {
    width: 100%;
  }

  .developers fieldset {
    flex-direction: column;
    gap: 2em;
  }

  .developers .f1 div,
  .developers .f2 div {
    margin: 0 auto;
    justify-content: center;
    text-align: center;
  }
  .person2 p,
  .person3 p,
  .person4 p,
  .person5 p,
  .person6 p {
    margin-left: 1.2em;
  }

  /* What We Cover */
  .what-we-cover > fieldset {
    flex-direction: column;
    gap: 2em;
  }

  .my-grad {
    width: 100%;
    margin: 0;
  }

  .fcover {
    flex-direction: column;
  }

  .cover-img {
    width: 100%;
  }

  .f11,
  .f13,
  .f15,
  .f17 {
    padding: 2em;
  }

  /* Dispatch Section */
  .dispatch {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2em 1em;
  }

  .fdispatch {
    width: 100%;
    margin: 0 auto;
  }

  .fdispatch p {
    margin: 0 auto;
    font-size: 1.2rem;
  }

  .fdispatch h1 {
    font-size: 3em;
    margin: 0.5em 0;
  }

  .dispatch button {
    width: 60%;
    margin: 2em auto 0 auto;
  }

  /* Footer */
  .footer-section p {
    margin-left: 2em;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .my-grad img {
    height: 10%;
  }

  header .nav {
    font-size: 5em !important;
  }

  header img {
    font-size: 10em !important;
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
  /* Hero Section */
  .d1 {
    height: 28em;
    padding: 0 0.5em;
  }

  .d1 img {
    margin-left: -0.5em;
  }
  .d1 h1 {
    width: 100%;
    font-size: 1.8em;
    white-space: normal;
    max-width: 85vw;
    text-align: center;
    line-height: 1.2;
    top: 36%;
    padding: 0 0.25em;
  }
  .d1 p {
    margin-left: -0.5em;
    font-size: 1em;
    width: 90%;
    top: 66%;
  }

  /* About Title & Intro */
  .about-title {
    margin-left: 1em;
    font-size: 2.6rem;
  }
  .d2 p {
    width: 90%;
    margin: 0.5em auto;
    font-size: 1em;
  }

  /* Mission / Vision Section */
  .d3 {
    flex-direction: column;
    padding: 1.5rem 1rem;
    align-items: center;
  }
  .d3 p {
    margin-top: 1.2em;
    font-size: 1rem;
  }
  .mission-img {
    margin: 1em auto 0.5em auto;
    height: 2.5rem;
  }
  .image-row {
    flex-direction: column;
    gap: 1em;
    padding: 0 1em;
  }
  .image-card {
    width: 100%;
    height: auto;
  }
  .image-card img {
    height: auto;
  }
  .container {
    flex-direction: column;
    padding: 1rem;
  }
  .d4,
  .d5 {
    width: 100%;
    padding: 1rem;
  }
  .d4 img {
    margin: 0 auto 1em auto;
  }
  .d4 p {
    width: 100%;
    font-size: 1rem;
    margin: 0.5em auto;
  }
  .d5 img {
    width: 100%;
    margin: 0 auto;
  }

  /* Story Section */
  .story-section {
    text-align: center;
    padding: 3rem 1rem;
  }
  .story-text,
  .story-image {
    width: 100%;
    text-align: center;
  }

  .store {
    margin: 0 auto;
  }
  .story-image img {
    text-align: center;
    margin: 0 auto;
  }
  .story-text p span {
    font-size: 2.2em !important;
    margin-left: 0 !important;
  }
  .story-text p {
    text-align: center;
    font-size: 0.95em;
    width: 100%;
  }
  .story-conclusion {
    width: 92%;
    margin: 1em auto;
  }

  /* Developers */
  .dev-img {
    width: 90%;
  }
  .developers fieldset {
    gap: 1.2em;
  }
  .person2 p,
  .person3 p,
  .person4 p,
  .person5 p {
    margin: 0;
  }

  /* What We Cover */
  .what-we-cover {
    padding: 4em 1em 1em;
  }
  .what-we-cover > fieldset {
    flex-direction: column;
    gap: 1.2em;
  }
  .my-grad {
    width: 90%;
    margin: 0;
  }
  .f11,
  .f13,
  .f15,
  .f17 {
    padding: 1.2em;
  }

  /* standspeak dispatch code */
  .about-titleses {
    font-family: "Bebas Neue", sans-serif;
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    padding-bottom: 0.3rem;
    display: inline-block;
    margin-left: 7em;
    margin-top: 2em;
    color: #f8f6f0;
  }

  .about-titleses .yellow {
    color: #f69000;
  }

  .about-titleses .blue {
    color: #53b1b1;
  }

  .dispatches {
    background-color: #00312e;
    color: #f8f6f0;
  }

  .dispatches {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #00312e;
    color: #f8f6f0;
  }

  .fdispatches {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    border: none;
    padding: 0;
  }

  .fdispatches p {
    font-size: 1.7rem;
    max-width: 100%;
    margin: 0;
    white-space: nowrap;
    margin-left: 4em;
    font-weight: 0;
    font-family: "Merriweather", serif;
  }

  .fdispatches h1 {
    font-family: "Bebas Neue", sans-serif;
    margin-top: 0em;
    font-size: 5em;
    margin-right: 0em;
    margin-left: 1.3em;
  }

  .circle-imgs {
    width: 50%;
    height: auto;
    object-fit: contain;
  }

  .join-button {
    display: inline-block;
    padding: 2px;
    border-radius: 3px;
    width: 23.5%;
    margin-left: 30em;
    background: linear-gradient(to right, #53b1b1, #f8f6f0, #3cbebe);
    transition: transform 0.3s ease;
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
    float: right;
    border-radius: 3px;
    transition: fill 0.4s ease, transform 0.3s ease;
  }

  .join-button:hover {
    color: #f69000;
    transform: scale(1.05);
  }

  .fs2,
  .fs4 {
    width: 90%;
  }
}
</style>
