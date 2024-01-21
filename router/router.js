// router.js
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue';
import LoginPage from "@/pages/LoginPage.vue"; 

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/login", name: "LoginPage", component:LoginPage},
  { path: "/:catchAll(.*)", name: "notFound", component: HomePage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;