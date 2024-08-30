import { defineComponent } from "vue";
import { mapActions } from "vuex";
export default defineComponent({
    props: {
        project: {
            type: Object, // Specify the prop type correctly
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
            },
            errors: {},
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
            const errors = {};
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
                }
                else {
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
            };
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
;
let __VLS_ctx;
const __VLS_components = {
    ...{},
    ...{},
    ...{},
};
let __VLS_styleScopedClasses;
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-6 bg-white rounded-lg shadow-md") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-xl font-bold mb-4") }, });
(__VLS_ctx.isEdit ? 'Edit' : 'Create');
__VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitForm) }, ...{ class: ("space-y-4") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("label") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label-text") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.formData.name)), type: ("text"), ...{ class: ("input input-bordered") }, required: (true), maxlength: ("200"), });
if (__VLS_ctx.errors.name) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-error") }, });
    (__VLS_ctx.errors.name);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("label") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label-text") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.formData.location)), type: ("text"), ...{ class: ("input input-bordered") }, required: (true), maxlength: ("500"), });
if (__VLS_ctx.errors.location) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-error") }, });
    (__VLS_ctx.errors.location);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-4") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control w-1/2") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("label") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label-text") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.formData.stage)), ...{ class: ("select select-bordered") }, required: (true), });
__VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Concept"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Design & Documentation"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Pre-Construction"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Construction"), });
if (__VLS_ctx.errors.stage) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-error") }, });
    (__VLS_ctx.errors.stage);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control w-1/2") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("label") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label-text") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("date"), ...{ class: ("input input-bordered") }, required: (true), });
(__VLS_ctx.formData.startDate);
if (__VLS_ctx.errors.startDate) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-error") }, });
    (__VLS_ctx.errors.startDate);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("label") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label-text") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.formData.category)), ...{ class: ("select select-bordered") }, required: (true), });
__VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Education"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Health"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Office"), });
__VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Other"), });
if (__VLS_ctx.formData.category === 'Other') {
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.formData.otherCategory)), type: ("text"), ...{ class: ("input input-bordered mt-2") }, placeholder: ("Specify other category"), required: (true), });
}
if (__VLS_ctx.errors.category) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-error") }, });
    (__VLS_ctx.errors.category);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("label") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label-text") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ value: ((__VLS_ctx.formData.description)), ...{ class: ("textarea textarea-bordered") }, maxlength: ("2000"), });
if (__VLS_ctx.errors.description) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-error") }, });
    (__VLS_ctx.errors.description);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("btn btn-primary w-full") }, });
(__VLS_ctx.isEdit ? 'Update' : 'Create');
__VLS_styleScopedClasses['p-6'];
__VLS_styleScopedClasses['bg-white'];
__VLS_styleScopedClasses['rounded-lg'];
__VLS_styleScopedClasses['shadow-md'];
__VLS_styleScopedClasses['text-xl'];
__VLS_styleScopedClasses['font-bold'];
__VLS_styleScopedClasses['mb-4'];
__VLS_styleScopedClasses['space-y-4'];
__VLS_styleScopedClasses['form-control'];
__VLS_styleScopedClasses['label'];
__VLS_styleScopedClasses['label-text'];
__VLS_styleScopedClasses['input'];
__VLS_styleScopedClasses['input-bordered'];
__VLS_styleScopedClasses['text-error'];
__VLS_styleScopedClasses['form-control'];
__VLS_styleScopedClasses['label'];
__VLS_styleScopedClasses['label-text'];
__VLS_styleScopedClasses['input'];
__VLS_styleScopedClasses['input-bordered'];
__VLS_styleScopedClasses['text-error'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['gap-4'];
__VLS_styleScopedClasses['form-control'];
__VLS_styleScopedClasses['w-1/2'];
__VLS_styleScopedClasses['label'];
__VLS_styleScopedClasses['label-text'];
__VLS_styleScopedClasses['select'];
__VLS_styleScopedClasses['select-bordered'];
__VLS_styleScopedClasses['text-error'];
__VLS_styleScopedClasses['form-control'];
__VLS_styleScopedClasses['w-1/2'];
__VLS_styleScopedClasses['label'];
__VLS_styleScopedClasses['label-text'];
__VLS_styleScopedClasses['input'];
__VLS_styleScopedClasses['input-bordered'];
__VLS_styleScopedClasses['text-error'];
__VLS_styleScopedClasses['form-control'];
__VLS_styleScopedClasses['label'];
__VLS_styleScopedClasses['label-text'];
__VLS_styleScopedClasses['select'];
__VLS_styleScopedClasses['select-bordered'];
__VLS_styleScopedClasses['input'];
__VLS_styleScopedClasses['input-bordered'];
__VLS_styleScopedClasses['mt-2'];
__VLS_styleScopedClasses['text-error'];
__VLS_styleScopedClasses['form-control'];
__VLS_styleScopedClasses['label'];
__VLS_styleScopedClasses['label-text'];
__VLS_styleScopedClasses['textarea'];
__VLS_styleScopedClasses['textarea-bordered'];
__VLS_styleScopedClasses['text-error'];
__VLS_styleScopedClasses['btn'];
__VLS_styleScopedClasses['btn-primary'];
__VLS_styleScopedClasses['w-full'];
var __VLS_slots;
var __VLS_inheritedAttrs;
const __VLS_refs = {};
const __VLS_templateResult = { slots: __VLS_slots,
    refs: __VLS_refs,
    attrs: {},
};
let __VLS_internalComponent;
