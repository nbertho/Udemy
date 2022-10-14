import { createRouter, createWebHashHistory } from "vue-router";

// Lazy load page view
const HomeView = () => import("@/views/HomeView");

const JobResultsView = () =>
  import(/* webpackChunkName: "jobs" */ "@/views/JobResultsView");

const JobView = () => import(/* webpackChunkName: "jobs" */ "@/views/JobView");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "job-results",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "job-results-view",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
