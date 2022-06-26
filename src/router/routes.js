const routes = [
  {
    path: "/",
    redirect: { name: "Home" },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageError404",
    component: () => import("../views/PageError404.vue"),
  },
];

export default routes;
