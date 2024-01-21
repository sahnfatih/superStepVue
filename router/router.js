// router.js
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue';
import LoginPage from "@/pages/LoginPage.vue"; 
import FavoriPage from '@/pages/FavoriPage.vue';

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/login", name: "LoginPage", component:LoginPage},
  { path: "/:catchAll(.*)", name: "notFound", component: HomePage },
  { path: "/favori", name: "favori", component: FavoriPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;