// router.js
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue"; 

const routes = [
  { path: "/", name: "home", pages: HomePage },
  { path: "/login", name: "LoginPage", pages: LoginPage },
  { path: "/:catchAll(.*)", name: "notFound", pages: HomePage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;