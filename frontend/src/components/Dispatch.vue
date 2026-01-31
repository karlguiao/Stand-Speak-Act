<template>
  <!-- Dispatch -->
  <section class="dispatches">
    <fieldset class="fdispatches">
      <h1 class="about-titleses">
        THE <span class="yellow">S</span><span class="blue">TAND</span
        ><span class="yellow">S</span><span class="blue">PEAK</span
        ><span class="yellow">A</span><span class="blue">CT</span> DISPATCH
      </h1>
      <p class="s11">Stories that inform. Voices that inspire.</p>
      <p class="s22">Updates that matter.</p>
      <div class="join-button">
        <router-link :to="''" class="jn-btn">
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
    </fieldset>
    <img :src="circleImgs" alt="people holding together" class="circle-imgs" />
  </section>
</template>

<script setup>
import circleImgs from "../assets/images/circle.png";
</script>

<style scoped>
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
  color: white;
}

.about-titleses .yellow {
  color: #f7931e;
}

.about-titleses .blue {
  color: #5bc0be;
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

/* Join Us Button */
.join-button {
  display: inline-block;
  align-self: flex-start;
  padding: 2px;
  border-radius: 3px;
  background: linear-gradient(to right, #53b1b1, #f8f6f0, #3cbebe);
  transition: transform 0.3s ease;
  margin-top: 50px;
  margin-left: 30em;
}

.jn-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 30px;
  font-weight: bold;
  text-transform: uppercase;
  color: #f8f6f0;
  background: #f69000;
  border: none;
  cursor: pointer;
  width: 178px;
  height: 47px;
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 3px;
  transition: fill 0.4s ease, transform 0.3s ease;
  flex: 1 1 100%;
  justify-content: center;
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

.fs2,
.fs4 {
  width: 90%;
}
</style>
