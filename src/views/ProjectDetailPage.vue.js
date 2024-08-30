import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ProjectDetails from '../components/ProjectDetails.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const projectId = ref(route.params.id); // Get the project ID from route parameters
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
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card p-5 shadow-2xl shadow- bg-white min-h-full") }, });
// @ts-ignore
[ProjectDetails,];
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(ProjectDetails, new ProjectDetails({ projectId: ((__VLS_ctx.projectId)), }));
const __VLS_1 = __VLS_0({ projectId: ((__VLS_ctx.projectId)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
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
            ProjectDetails: ProjectDetails,
            projectId: projectId,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
