<!-- src/components/ProjectList.vue -->
<template>
    <div class="container mx-auto p-4">
        <div class="flex justify-between items-center">
            <h1 class="text-3xl font-bold mb-6">Project List</h1>
            <router-link to="/projects/new" class=" btn btn-outline btn-primary  rounded flex">
                Add Project
            </router-link>
        </div>
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr class="bg-red-500 text-white text-sm">
                        <th class="px-4 py-5">ID</th>
                        <th class="px-4 py-5">Name</th>
                        <th class="px-4 py-5">Stage</th>
                        <th class="px-4 py-5">Category</th>
                        <th class="px-4 py-5">Start Date</th>
                        <th class="px-4 py-5  w-[250px] text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="project in projects" :key="project.id">
                        <td class="border px-4 py-3">{{ project.id }}</td>
                        <td class="border px-4 py-3">{{ project.name }}</td>
                        <td class="border px-4 py-3">{{ project.stage }}</td>
                        <td class="border px-4 py-3">{{ project.category }}</td>
                        <td class="border px-4 py-3">{{ formatDate(project.startDate) }}</td>
                        <td class="border px-4 py-3 flex space-x-2   flex-wrap">
                            <router-link :to="`/projects/${project.id}`" class="btn btn-primary btn-sm">View</router-link>
                            <router-link :to="`/projects/edit/${project.id}`"
                                class="btn btn-secondary btn-sm">Edit</router-link>
                            <button @click="handleDeleteProject(project.id)" class="btn bg-black text-white btn-sm hover:text-black">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
// import { useToast } from "vue-toastification";

import { Project } from '@/entities/Project';

export default defineComponent({
    data() {
        return {
            projects: [] as Project[],
        };
    },
    computed: {
        ...mapGetters(['allProjects']),
    },
    methods: {
        ...mapActions(['loadProjects','addProject', 'updateProject', 'deleteProject']),
        // loadProjects() {
        //     this.projects = this.loadProjects;
        // },
        formatDate(date: Date) {
            return new Date(date).toLocaleDateString();
        },
        handleDeleteProject(id: string) {
            this.deleteProject(id);
        },
    },
    // mounted() {
    //     this.loadProjects(); // Load the projects when the component is mounted
    // },
    created() {
        this.loadProjects(); // Ensure projects are loaded when component is created
    },
     watch: {
        allProjects: {
            handler(newVal) {
                this.projects = newVal;
            },
            immediate: true,
        },
    },
});
</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
