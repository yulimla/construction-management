<template>
            <div class="card p-5 shadow-2xl shadow- bg-white min-h-full">
            <ProjectForm :project="project"  />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Project } from '../entities/Project';
import ProjectForm from '../components/ProjectForm.vue';
import { useStore } from 'vuex';
const store = useStore();

const route = useRoute();
const project = ref<Project | null>(null);

onMounted(() => {
    const projectId = route.params.id as string;
    // Fetch the project details using Vuex getter
    project.value = store.getters['getProjectById'](projectId);
});

</script>

<style scoped>
/* Add your styles here */
</style>
