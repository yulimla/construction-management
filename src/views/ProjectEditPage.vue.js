import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ProjectForm from '../components/ProjectForm.vue';
import { useStore } from 'vuex';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const route = useRoute();
const project = ref(null);
onMounted(() => {
    const projectId = route.params.id;
    // Fetch the project details using Vuex getter
    project.value = store.getters['getProjectById'](projectId);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
let __VLS_ctx;
let __VLS_name;
const __VLS_components = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_styleScopedClasses;
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card p-5 shadow-2xl shadow- bg-white min-h-full") }, });
// @ts-ignore
[ProjectForm,];
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(ProjectForm, new ProjectForm({ project: ((__VLS_ctx.project)), }));
const __VLS_1 = __VLS_0({ project: ((__VLS_ctx.project)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_styleScopedClasses['card'];
__VLS_styleScopedClasses['p-5'];
__VLS_styleScopedClasses['shadow-2xl'];
__VLS_styleScopedClasses['shadow-'];
__VLS_styleScopedClasses['bg-white'];
__VLS_styleScopedClasses['min-h-full'];
var __VLS_slots;
var __VLS_inheritedAttrs;
const __VLS_refs = {};
const __VLS_templateResult = { slots: __VLS_slots,
    refs: __VLS_refs,
    attrs: {},
};
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            ProjectForm: ProjectForm,
            project: project,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
