import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../page/Welcome/index.vue"),
  },
  {
    path: "/interactive",
    component: () => import("../page/Interactive/index.vue"),
  },
  { path: "/service", component: () => import("../page/Serivce/index.vue") },
  { path: "/register", component: () => import("../page/Register/index.vue") },
];

export default createRouter({
  history: createMemoryHistory(),
  routes,
});
