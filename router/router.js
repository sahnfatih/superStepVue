// router.js
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue';
import LoginPage from "@/pages/LoginPage.vue";
import indirimVue from "~/pages/indirim.vue";
import cartVue from "~/pages/cart.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/login", name: "LoginPage", component:LoginPage},
  { path: "/:catchAll(.*)", name: "notFound", component: HomePage },
  { path: "/indirim", name: "indirim", component: indirimVue },
  { path: "/cart", name: "cart", component: cartVue },


];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;