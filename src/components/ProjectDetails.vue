<template>
    <div class="card max-w-xl  bg-base-100 shadow-xl p-5 mx-auto text-left">
        <h2 class="text-2xl font-semibold mb-4">{{ project.name }}</h2>
        <ul class="mb-4 text-lg">
            <li><strong>Project ID:</strong> {{ project.id }}</li>
            <li><strong>Location:</strong> {{ project.location }}</li>
            <li><strong>Stage:</strong> {{ project.stage }}</li>
            <li><strong>Category:</strong> {{ project.category }}</li>
            <li><strong>Construction Start Date:</strong> {{ formattedStartDate }}</li>
            <li><strong>Description:</strong> {{ project.description }}</li>
        </ul>
        <button @click="goBack" class="text-blue-500 hover:underline">Back to List</button>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();

const projectId = route.params.id;
const project = store.getters.getProjectById(projectId);

const formattedStartDate = computed(() => {
    return new Date(project.startDate).toLocaleDateString();
});

const goBack = () => {
    router.push({ name: 'ProjectPage' });
};
</script>

<style scoped>
.project-details {
    /* max-width: 600px; */
    margin: auto;
}
</style>
