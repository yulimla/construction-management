import { createStore, MutationTree, ActionTree, GetterTree } from "vuex";
import { useToast } from "vue-toastification";
import { Project } from "../entities/Project";

const toast = useToast();

interface User {
  name: string;
  email: string;
  password: string;
}

interface ProjectsState {
  projects: Project[];
  user?: User;
  isProjectsLoaded: boolean;
}

// Initial state
const state: ProjectsState = {
  user: {
    name: "admin",
    email: "admin@admin.com",
    password: "admin123",
  },
  projects: [],
  isProjectsLoaded: false,
};

// Mutations
const mutations: MutationTree<ProjectsState> = {
  ADD_PROJECT(state, project: Project) {
    state.projects.push(project);
    toast.success("Project created successfully!");
  },
  UPDATE_PROJECT(state, updatedProject: Project) {
    const index = state.projects.findIndex(
      (project) => project.id === updatedProject.id
    );
    if (index !== -1) {
      state.projects[index] = updatedProject;
      toast.success("Project updated successfully!");
    }
  },
  DELETE_PROJECT(state, projectId: string) {
    state.projects = state.projects.filter(
      (project) => project.id !== projectId
    );
    toast.success("Project deleted successfully!");
  },
  SET_PROJECTS(state, projects: Project[]) {
    state.projects = projects;
    state.isProjectsLoaded = true;
  },
};

// Actions
const actions: ActionTree<ProjectsState, ProjectsState> = {
  addProject({ commit }, project: Project) {
    commit("ADD_PROJECT", project);
  },
  updateProject({ commit }, project: Project) {
    commit("UPDATE_PROJECT", project);
  },
  deleteProject({ commit }, projectId: string) {
    commit("DELETE_PROJECT", projectId);
  },
  async loadProjects({ state, commit }) {
    if (!state.isProjectsLoaded) {
      try {
        const response = await fetch("/data/projects.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const projects: Project[] = await response.json();
        commit("SET_PROJECTS", projects);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    }
  },
};

// Getters
const getters: GetterTree<ProjectsState, ProjectsState> = {
  allProjects: (state) => state.projects,
  getProjectById: (state) => (id: string) =>
    state.projects.find((project) => project.id === id),
};

// Store
export default createStore({
  state,
  mutations,
  actions,
  getters,
});
