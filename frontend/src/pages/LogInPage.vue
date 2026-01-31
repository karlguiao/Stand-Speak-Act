<template>
  <div class="container">
    <!-- LEFT SIDE -->
    <div class="left">
      <div>
        <div class="logo">
          <router-link to="/">
            <img src="../assets/images/footer_logo.png" alt="Logo"
          /></router-link>
        </div>

        <div class="welcome">
          <h2>Welcome Back!</h2>
          <p>Reconnect. Reflect. Reignite.</p>
        </div>

        <button class="btn-google">
          <img
            src="../assets/images/loginwithgoogle.png"
            alt="Login with Google"
          />
        </button>

        <div class="separator">or</div>

        <form @submit="handleLogin">
          <div class="input-group">
            <label for="email">Email</label>
            <div class="input-wrapper">
              <img
                src="../assets/images/icon_mail.png"
                alt="Email Icon"
                class="input-icon"
              />
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email Here!"
                required
                v-model="email"
              />
            </div>
          </div>

          <div class="input-group">
            <label for="password">Password</label>
            <div class="input-wrapper">
              <img
                src="../assets/images/icon_lock.png"
                alt="Password Icon"
                class="input-icon"
              />
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password Here!"
                required
                v-model="password"
              />
            </div>
          </div>

          <div class="form-options">
            <label
              ><label>
                <input type="checkbox" v-model="remember" />
                Remember
              </label>
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" class="btn-login">
            <img src="../assets/images/login.png" alt="Login" />
          </button>
        </form>
      </div>

      <div class="footer">
        Don't have an account?
        <router-link to="/signup" class="signup-link"
          >Sign up here.</router-link
        >
      </div>
    </div>

    <!-- RIGHT SIDE -->
    <div class="right">
      <div class="overlay-text">
        <h2>Let's Keep the <br />Conversation Going.</h2>
        <p>
          Log in to continue exploring stories, sharing insights, and amplifying
          change. We're glad you're here.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

// Form fields
const email = ref("");
const password = ref("");
const remember = ref(false);

async function handleLogin(e) {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:4000/api/users/login", {
      email: email.value,
      password: password.value,
    });

    const user = res.data.user;

    // Store user info based on "Remember Me"
    const storage = remember.value ? localStorage : sessionStorage;
    storage.setItem("user", JSON.stringify(user));

    // Redirect based on role
    if (user.role === "admin") {
      router.push("/dashboard");
    } else {
      router.push("/blog");
    }
  } catch (err) {
    console.error("Login failed:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Login failed. Please try again.");
  }
}
</script>

<style scoped>
/* ========================================================================= LOGIN ========================================================================= */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Merriweather", sans-serif;
}

body {
  display: flex;
  min-height: 100vh;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  gap: 0;
}

.welcome h2,
.right h2 {
  font-family: "Work Sans", sans-serif;
}

/* Left Side */
.left {
  background-color: #11222c;
  color: #f8f6f0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.logo {
  margin-bottom: 30px;
  text-align: left;
}

.logo img {
  max-width: 400px;
  height: auto;
}

.welcome p {
  color: #f8f6f0;
  margin-bottom: 20px;
  font-size: 15px;
  margin-left: 11em;
}

.welcome h2 {
  color: #f8f6f0;
  margin-bottom: 20px;
  font-size: 36px;
  margin-left: 4em;
}

/* Buttons Styling */
.btn-google,
.btn-login {
  width: 100%;
  max-width: 400px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.btn-google img,
.btn-login img {
  width: 100%;
  height: auto;
  display: block;
}

.btn-google:hover,
.btn-login:hover {
  transform: scale(1.05);
}

/* Gradient Separator */
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  color: #94a3b8;
  font-size: 14px;
}

.separator::before,
.separator::after {
  content: "";
  flex: 1;
  margin: 0 10px;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, #f69000, #53b1b1cc) 1;
}

/* Form Section */
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
}

label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  text-align: left;
}

input {
  padding: 12px;
  border: 1px solid #475569;
  border-radius: 6px;
  background: #11222c;
  color: #f8f6f0;
  width: 100%;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.input-icon {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  pointer-events: none;
  opacity: 0.8;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #475569;
  border-radius: 6px;
  background-color: #11222c;
  color: #f8f6f0;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.form-options label {
  display: flex;
  align-items: center;
  gap: 6px;
}

.form-options a {
  color: #f69000;
  text-decoration: none;
}

.form-options a:hover {
  text-decoration: underline;
}

/* Log in Here */
.footer {
  text-align: left;
  font-size: 13px;
  margin-top: 20px;
}

.footer a {
  color: #f69000;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

/* Right Side */
.right {
  background: url("../assets/images/login_signup_image.png") center/cover
    no-repeat;
  display: flex;
  align-items: flex-end;
  padding: 40px;
  color: #f8f6f0;
  height: 100%;
  width: 100%;
}

.right .overlay-text {
  max-width: 700px;
  padding: 20px;
  border-radius: 8px;
}

.right h2 {
  text-align: left;
  font-size: 35px;
  margin-bottom: 10px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 1);
  color: #f8f6f0;
  white-space: nowrap;
}

.right p {
  font-size: 20px;
  line-height: 1.4;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 1);
  width: 100%;
}

/* Responsive */
@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
  }
  .right {
    display: none;
  }
}
</style>
