<template>
            <div class="card p-5 shadow-2xl shadow- bg-white min-h-full">
            <ProjectDetails :projectId="projectId" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ProjectDetails from '../components/ProjectDetails.vue';

const route = useRoute();
const projectId = ref(route.params.id); // Get the project ID from route parameters
</script>

<style scoped>
/* Add your styles here */
</style>
