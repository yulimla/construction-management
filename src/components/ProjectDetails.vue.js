import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card max-w-xl  bg-base-100 shadow-xl p-5 mx-auto text-left") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold mb-4") }, });
(__VLS_ctx.project.name);
__VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("mb-4 text-lg") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
(__VLS_ctx.project.id);
__VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
(__VLS_ctx.project.location);
__VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
(__VLS_ctx.project.stage);
__VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
(__VLS_ctx.project.category);
__VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
(__VLS_ctx.formattedStartDate);
__VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
(__VLS_ctx.project.description);
__VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.goBack) }, ...{ class: ("text-blue-500 hover:underline") }, });
__VLS_styleScopedClasses['card'];
__VLS_styleScopedClasses['max-w-xl'];
__VLS_styleScopedClasses['bg-base-100'];
__VLS_styleScopedClasses['shadow-xl'];
__VLS_styleScopedClasses['p-5'];
__VLS_styleScopedClasses['mx-auto'];
__VLS_styleScopedClasses['text-left'];
__VLS_styleScopedClasses['text-2xl'];
__VLS_styleScopedClasses['font-semibold'];
__VLS_styleScopedClasses['mb-4'];
__VLS_styleScopedClasses['mb-4'];
__VLS_styleScopedClasses['text-lg'];
__VLS_styleScopedClasses['text-blue-500'];
__VLS_styleScopedClasses['hover:underline'];
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
            project: project,
            formattedStartDate: formattedStartDate,
            goBack: goBack,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
