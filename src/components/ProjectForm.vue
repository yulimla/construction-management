<template>
    <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-xl font-bold mb-4">{{ isEdit ? 'Edit' : 'Create' }} Project</h3>
        <form @submit.prevent="submitForm" class="space-y-4">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Project Name</span>
                </label>
                <input v-model="formData.name" type="text" class="input input-bordered" required maxlength="200" />
                <span v-if="errors.name" class="text-error">{{ errors.name }}</span>
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Project Location</span>
                </label>
                <input v-model="formData.location" type="text" class="input input-bordered" required maxlength="500" />
                <span v-if="errors.location" class="text-error">{{ errors.location }}</span>
            </div>
            <div class="flex gap-4">
                <div class="form-control w-1/2">
                    <label class="label">
                        <span class="label-text">Project Stage</span>
                    </label>
                    <select v-model="formData.stage" class="select select-bordered" required>
                        <option value="Concept">Concept</option>
                        <option value="Design & Documentation">Design & Documentation</option>
                        <option value="Pre-Construction">Pre-Construction</option>
                        <option value="Construction">Construction</option>
                    </select>
                    <span v-if="errors.stage" class="text-error">{{ errors.stage }}</span>
                </div>

                <div class="form-control w-1/2">
                    <label class="label">
                        <span class="label-text">Construction Start Date</span>
                    </label>
                    <input v-model="formData.startDate" type="date" class="input input-bordered" required />
                    <span v-if="errors.startDate" class="text-error">{{ errors.startDate }}</span>
                </div>
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Project Category</span>
                </label>
                <select v-model="formData.category" class="select select-bordered" required>
                    <option value="Education">Education</option>
                    <option value="Health">Health</option>
                    <option value="Office">Office</option>
                    <option value="Other">Other</option>
                </select>
                <input v-if="formData.category === 'Other'" v-model="formData.otherCategory" type="text"
                    class="input input-bordered mt-2" placeholder="Specify other category" required />
                <span v-if="errors.category" class="text-error">{{ errors.category }}</span>
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Project Description</span>
                </label>
                <textarea v-model="formData.description" class="textarea textarea-bordered" maxlength="2000"></textarea>
                <span v-if="errors.description" class="text-error">{{ errors.description }}</span>
            </div>
            <button type="submit" class="btn btn-primary w-full">
                {{ isEdit ? 'Update' : 'Create' }} Project
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { Project } from "@/entities/Project";
import { useRouter } from 'vue-router'

export default defineComponent({
    props: {
      project: {
            type: Object as () => Project | null, // Specify the prop type correctly
            default: null // Default value for project is null
        },
    },
    data() {
        return {
            formData: this.project || {
                id: this.generateUniqueId(),
                name: "",
                location: "",
                stage: "Concept",
                category: "Education",
                startDate: new Date(),
                description: "",
                otherCategory: "",
                creatorId: "", // This should be set based on the logged-in user
            } as Project,
            errors: {} as { [key: string]: string },
        };
    },
    computed: {
        isEdit() {
            return !!this.project;
        },
    },
    methods: {
        ...mapActions(["addProject", "updateProject"]),
        generateUniqueId() {
            return Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6 digit ID
        },
        validateForm() {
            const errors: { [key: string]: string } = {};

            if (!this.formData.name || this.formData.name.length > 200) {
                errors.name = "Project name is required and should not exceed 200 characters.";
            }
            if (!this.formData.location || this.formData.location.length > 500) {
                errors.location = "Project location is required and should not exceed 500 characters.";
            }
            if (!this.formData.stage) {
                errors.stage = "Project stage is required.";
            }
            if (!this.formData.category) {
                errors.category = "Project category is required.";
            }
            if (this.formData.stage !== "Construction" && new Date(this.formData.startDate) <= new Date()) {
                errors.startDate = "Start date must be in the future for stages Concept, Design & Documentation, or Pre-Construction.";
            }
            if (!this.formData.description || this.formData.description.length > 2000) {
                errors.description = "Project description is required and should not exceed 2000 characters.";
            }

            this.errors = errors;
            return Object.keys(errors).length === 0;
        },
        submitForm() {
            if (this.validateForm()) {
                if (this.isEdit) {
                    this.updateProject({ ...this.formData });
                } else {
                    this.addProject({
                        ...this.formData,
                        id: this.generateUniqueId(),
                    });
                    
                }
                this.resetForm(); // clear form
                this.$router.push({ name: 'ProjectPage' }); //redirect to 


            }
        },
        resetForm() {
            this.formData = {
                id: this.generateUniqueId(),
                name: "",
                location: "",
                stage: "Concept",
                category: "Education",
                startDate: new Date(),
                description: "",
                otherCategory: "",
                creatorId: "",
            } as Project;
            this.errors = {};
        },
    },
    watch: {
        project: {
            immediate: true,
            handler(newValue) {
                if (newValue) {
                    this.formData = { ...newValue }; // Populate formData with project details
                }
            },
        },
    },
});
</script>

<style scoped>
.text-error {
    color: red;
    font-size: 0.875rem;
    text-align: left;
}
</style>
