import { createRouter, createWebHistory } from "vue-router";
// PAGES
import HomePage from "../pages/HomePage.vue";
import BlogPage from "../pages/BlogPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ArticlePage from "../pages/ArticlePage.vue";
import LogInPage from "../pages/LogInPage.vue";
import SignUpPage from "../pages/SignUpPage.vue";

// ADMIN PANEL
import AdminDashboard from "../adminPanel/AdminDashboard.vue";
import FeaturedArticleDash from "../adminPanel/FeaturedArticleDash.vue";
import LatestArticleDash from "../adminPanel/LatestArticleDash.vue";
import PopularArticleDash from "../adminPanel/PopularArticleDash.vue";
import BlogArticleDash from "../adminPanel/BlogArticleDash.vue";
import ArticleDescDash from "../adminPanel/ArticleDescDash.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/blog", component: BlogPage },
    { path: "/about", component: AboutPage },
    { path: "/contact", component: ContactPage },
    { path: "/article/:id", component: ArticlePage },
    { path: "/login", component: LogInPage },
    { path: "/signup", component: SignUpPage },
    {
      path: "/dashboard",
      component: AdminDashboard,
      meta: { requiresAdmin: true },
    },
    {
      path: "/dashboard/featured",
      component: FeaturedArticleDash,
      meta: { requiresAdmin: true },
    },
    {
      path: "/dashboard/latest",
      component: LatestArticleDash,
      meta: { requiresAdmin: true },
    },
    {
      path: "/dashboard/popular",
      component: PopularArticleDash,
      meta: { requiresAdmin: true },
    },
    {
      path: "/dashboard/blog",
      component: BlogArticleDash,
      meta: { requiresAdmin: true },
    },
    {
      path: "/dashboard/article-desc",
      component: ArticleDescDash,
      meta: { requiresAdmin: true },
    },
  ],
});

export default router;
