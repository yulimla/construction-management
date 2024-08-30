import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import LoginPage from "../views/LoginPage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import ProjectDetailPage from "../views/ProjectDetailPage.vue";
import ProjectEditPage from "../views/ProjectEditPage.vue";
import ProjectNewPage from "../views/ProjectNewPage.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/projects",
    component: Layout,
    children: [
      { path: "", name: "ProjectPage", component: ProjectPage },
      { path: "new", component: ProjectNewPage }, // For adding a new project
      { path: "edit/:id", component: ProjectEditPage }, // For editing an existing project
      { path: ":id", component: ProjectDetailPage }, // For viewing detail project
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
