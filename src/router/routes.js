import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/index.vue";
import Favorite from "../pages/favorite.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: Favorite,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
