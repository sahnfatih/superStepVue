// router.js
import { createRouter, createWebHashHistory } from "vue-router";
import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue"; 

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/login", name: "login", component: LoginPage },
  { path: "/:catchAll(.*)", name: "notFound", component: HomePage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
