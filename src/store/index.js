import { createStore } from "vuex";
import { useToast } from "vue-toastification";
const toast = useToast();
// Initial state
const state = {
    user: {
        name: "admin",
        email: "admin@admin.com",
        password: "admin123",
    },
    projects: [],
    isProjectsLoaded: false,
};
// Mutations
const mutations = {
    ADD_PROJECT(state, project) {
        state.projects.push(project);
        toast.success("Project created successfully!");
    },
    UPDATE_PROJECT(state, updatedProject) {
        const index = state.projects.findIndex((project) => project.id === updatedProject.id);
        if (index !== -1) {
            state.projects[index] = updatedProject;
            toast.success("Project updated successfully!");
        }
    },
    DELETE_PROJECT(state, projectId) {
        state.projects = state.projects.filter((project) => project.id !== projectId);
        toast.success("Project deleted successfully!");
    },
    SET_PROJECTS(state, projects) {
        state.projects = projects;
        state.isProjectsLoaded = true;
    },
};
// Actions
const actions = {
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
            }
            catch (error) {
                console.error("Error loading projects:", error);
            }
        }
    },
};
// Getters
const getters = {
    allProjects: (state) => state.projects,
    getProjectById: (state) => (id) => state.projects.find((project) => project.id === id),
};
// Store
export default createStore({
    state,
    mutations,
    actions,
    getters,
});
