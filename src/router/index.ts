import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue";
import task from "../views/task.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: index,
    },
    {
      path: "/task",
      name: "Task",
      component: task,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/index.vue"),
    },
  ],
});

export default router;
