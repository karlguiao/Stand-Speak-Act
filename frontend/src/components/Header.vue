<template>
  <header>
    <router-link to="/"
      ><img src="../assets/images/SSA Logo.png" alt="logo"
    /></router-link>
    <button
      class="menu-toggle"
      aria-label="Open menu"
      aria-expanded="false"
      aria-controls="mobileMenu"
    >
      &#9776;
    </button>
    <div id="mobileMenu" class="menu">
      <nav>
        <router-link to="/">HOME</router-link>
        <router-link to="/blog">BLOG</router-link>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/contact">CONTACT</router-link>
      </nav>
      <div class="actions">
        <router-link v-if="!user" to="/signup" class="b1">SIGN-UP</router-link>
        <router-link v-if="!user" to="/login" class="b2">LOG IN</router-link>
        <button v-if="user" @click="handleLogout" class="b2">LOG OUT</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref(null);

onMounted(() => {
  const stored = localStorage.getItem("user") || sessionStorage.getItem("user");
  user.value = stored ? JSON.parse(stored) : null;
});

function handleLogout() {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  user.value = null;
  router.push("/");
}
</script>

<style scoped>
/* ========================================================================= HEADER ========================================================================= */
header {
  z-index: 1000;
  font-family: "Work Sans", sans-serif;
  background-color: #11222c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
}

header img {
  height: 10em;
  margin-left: 2em;
}

nav {
  display: flex;
  gap: 60px;
}

nav a {
  text-decoration: none;
  color: #f69000;
  font-weight: 700;
  font-size: 21px;
}

nav a:hover {
  text-decoration: underline;
  color: #53b1b1;
}

header button {
  padding: 12px 12px;
  border: none;
  border-radius: 10px;
  background: #f69000;
  color: black;
  font-weight: 600;
  cursor: pointer;
  min-width: 8em;
}

header button:hover {
  background: transparent;
  border: 2px solid #f69000;
  color: #f69000;
}

.b1,
.b2 {
  display: inline-block;
  text-align: center;
  padding: 12px 12px;
  border-radius: 10px;
  font-weight: 1000;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  min-width: 8em;
  transition: all 0.3s ease;
  border: 2px solid transparent; /* 👈 prevents layout shift */
}

/* SIGN-UP solid */
.b1 {
  background: #f69000;
  color: #11222c;
}

.b1:hover {
  background: transparent;
  border-color: #f69000;
  color: #f69000;
}

/* LOG IN outlined */
.b2 {
  background: transparent;
  border-color: #f69000;
  color: #f69000;
}

.b2:hover {
  background: #f69000;
  color: black;
}

/* New header menu structure */
header .menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

header .actions {
  display: flex;
  align-items: center;
  gap: 30px;
}

.menu-toggle {
  display: none;
  background: transparent;
  border: 2px solid #f69000;
  color: #f69000;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 24px;
  cursor: pointer;
}

/* Large screen adjustments */
@media (max-width: 1200px) {
  header {
    padding: 10px 20px;
  }
  header img {
    height: 7em;
    margin-left: 1em;
  }
  nav {
    gap: 24px;
  }
  nav a {
    font-size: 18px;
  }
  header button {
    min-width: auto;
    padding: 10px 12px;
  }
}

/* Tablet */
@media (max-width: 992px) {
  header {
    flex-wrap: wrap;
    align-items: flex-start;
  }

  header img {
    height: 8em;
    margin-left: 1em;
  }

  header .menu {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
  }

  header nav {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 16px;
  }

  header .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .menu-toggle {
    display: none;
  }
}

/* Mobile */
@media (max-width: 600px) {
  header {
    position: relative;
    padding: 8px 12px;
  }

  header img {
    height: 6em;
    margin-left: 0.5em;
  }

  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border: 2px solid #f69000;
    color: #f69000;
    background: transparent;
    border-radius: 6px;
    width: 36px;
    height: 36px;
    cursor: pointer;
  }

  header .menu {
    display: none;
    position: absolute;
    top: 60px;
    right: 12px;
    background: #0c1a22;
    border: 1px solid rgba(246, 144, 0, 0.3);
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    width: 200px;
    padding: 10px;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
    transition: 0.3s ease;
  }

  header .menu.open {
    display: flex;
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  nav {
    flex-direction: column;
    gap: 0;
  }

  nav a {
    font-size: 14px;
    padding: 8px 4px;
    border-top: 1px solid rgba(246, 144, 0, 0.2);
  }

  nav a:first-child {
    border-top: none;
  }

  header .actions {
    flex-direction: column;
    gap: 6px;
  }

  header button {
    width: 100%;
    font-size: 14px;
  }
}
</style>
