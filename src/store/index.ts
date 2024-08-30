import { createStore } from "vuex";
import { useToast } from "vue-toastification";
import { Project } from "../entities/Project";
const toast = useToast();
interface ProjectsState {
  projects: Project[];
}
export default createStore({
  state: {
    // Dummy state
    user: {
      name: "admin",
      email: "admin@admin.com",
      password: "admin123",
    },
    // Dummy state project
    projects: [],
    isProjectsLoaded: false, //  state to track if projects are loaded
  },
  mutations: {
    ADD_PROJECT(state, project) {
      state.projects.push(project);
      toast.success("Project created successfully!");
    },
    UPDATE_PROJECT(state, updatedProject) {
      const index = state.projects.findIndex(
        (project) => project.id === updatedProject.id
      );
      if (index !== -1) {
        state.projects[index] = updatedProject;
        toast.success("Project updated successfully!");
      }
    },
    DELETE_PROJECT(state, projectId) {
      state.projects = state.projects.filter(
        (project) => project.id !== projectId
      );
      toast.success("Project deleted successfully!");
    },
    SET_PROJECTS(state, projects) {
      state.projects = projects;
      state.isProjectsLoaded = true;

      // toast.success("Projects loaded successfully!");
    },
  },
  actions: {
    addProject({ commit }, project) {
      commit("ADD_PROJECT", project);
    },
    updateProject({ commit }, project) {
      commit("UPDATE_PROJECT", project);
    },
    deleteProject({ commit }, projectId) {
      commit("DELETE_PROJECT", projectId);
    },
    async loadProjects({ state, commit }) {
      if (!state.isProjectsLoaded) {
        try {
          const response = await fetch("/data/projects.json");
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const projects = await response.json();
          commit("SET_PROJECTS", projects);
        } catch (error) {
          console.error("Error loading projects:", error);
        }
      }
    },
  },
  getters: {
    allProjects: (state) => state.projects,
    getProjectById: (state) => (id) =>
      state.projects.find((project) => project.id === id),
  },
});
