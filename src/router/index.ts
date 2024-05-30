import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/search",
      name: "search",
      component: HomePage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "home") {
    next({ name: "search" }); // 重定向到 search 頁面
  } else {
    next(); // 繼續執行下一個路由鉤子
  }
});

export default router;
