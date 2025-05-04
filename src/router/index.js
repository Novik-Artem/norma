import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "@/views/LoginPage.vue";
import SelectRolesPage from "@/views/SelectRolesPage.vue";
import Ticker from "@/views/Ticker.vue";

const routes = [
  {
    path: "/",
    redirect: () => {
      return "/login";
    },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
    meta: { title: " | Авторизация" },
  },
  {
    path: "/select-roles",
    component: SelectRolesPage,
    name: "roles",
    meta: { title: " | Выберите должность" },
  },
  {
    path: "/ticker",
    component: Ticker,
    name: "ticker",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
