import { createWebHistory, createRouter, Router } from "vue-router";
import middleware from "@/middleware";

// middlewares
import log from "@/middleware/log";

// routes
import Home from "../pages/index.vue";
import About from "../pages/about.vue";

// config
const routes: any = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    components: {
      default: About,
    },
    meta: {
      middleware: [log],
    },
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(middleware());

export default router;
