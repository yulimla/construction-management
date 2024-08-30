import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
export default defineComponent({
    data() {
        return {
            projects: [],
        };
    },
    computed: {
        ...mapGetters(['allProjects']),
    },
    methods: {
        ...mapActions(['loadProjects', 'addProject', 'updateProject', 'deleteProject']),
        // loadProjects() {
        //     this.projects = this.loadProjects;
        // },
        formatDate(date) {
            return new Date(date).toLocaleDateString();
        },
        handleDeleteProject(id) {
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
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mx-auto p-4") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between items-center") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-3xl font-bold mb-6") }, });
const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
/** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/projects/new"), ...{ class: (" btn btn-outline btn-primary  rounded flex") }, }));
const __VLS_2 = __VLS_1({ to: ("/projects/new"), ...{ class: (" btn btn-outline btn-primary  rounded flex") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_nonNullable(__VLS_5.slots).default;
const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overflow-x-auto") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("table table-zebra w-full") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
__VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ ...{ class: ("bg-red-500 text-white text-sm") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-4 py-5") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-4 py-5") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-4 py-5") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-4 py-5") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-4 py-5") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-4 py-5  w-[250px] text-center") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
for (const [project] of __VLS_getVForSourceType((__VLS_ctx.projects))) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((project.id)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("border px-4 py-3") }, });
    (project.id);
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("border px-4 py-3") }, });
    (project.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("border px-4 py-3") }, });
    (project.stage);
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("border px-4 py-3") }, });
    (project.category);
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("border px-4 py-3") }, });
    (__VLS_ctx.formatDate(project.startDate));
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("border px-4 py-3 flex space-x-2   flex-wrap") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ((`/projects/${project.id}`)), ...{ class: ("btn btn-primary btn-sm") }, }));
    const __VLS_8 = __VLS_7({ to: ((`/projects/${project.id}`)), ...{ class: ("btn btn-primary btn-sm") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ((`/projects/edit/${project.id}`)), ...{ class: ("btn btn-secondary btn-sm") }, }));
    const __VLS_14 = __VLS_13({ to: ((`/projects/edit/${project.id}`)), ...{ class: ("btn btn-secondary btn-sm") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleDeleteProject(project.id);
            } }, ...{ class: ("btn bg-black text-white btn-sm hover:text-black") }, });
}
__VLS_styleScopedClasses['container'];
__VLS_styleScopedClasses['mx-auto'];
__VLS_styleScopedClasses['p-4'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['justify-between'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['text-3xl'];
__VLS_styleScopedClasses['font-bold'];
__VLS_styleScopedClasses['mb-6'];
__VLS_styleScopedClasses['btn'];
__VLS_styleScopedClasses['btn-outline'];
__VLS_styleScopedClasses['btn-primary'];
__VLS_styleScopedClasses['rounded'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['overflow-x-auto'];
__VLS_styleScopedClasses['table'];
__VLS_styleScopedClasses['table-zebra'];
__VLS_styleScopedClasses['w-full'];
__VLS_styleScopedClasses['bg-red-500'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['text-sm'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-5'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-5'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-5'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-5'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-5'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-5'];
__VLS_styleScopedClasses['w-[250px]'];
__VLS_styleScopedClasses['text-center'];
__VLS_styleScopedClasses['border'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['border'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['border'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['border'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['border'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['border'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-3'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['space-x-2'];
__VLS_styleScopedClasses['flex-wrap'];
__VLS_styleScopedClasses['btn'];
__VLS_styleScopedClasses['btn-primary'];
__VLS_styleScopedClasses['btn-sm'];
__VLS_styleScopedClasses['btn'];
__VLS_styleScopedClasses['btn-secondary'];
__VLS_styleScopedClasses['btn-sm'];
__VLS_styleScopedClasses['btn'];
__VLS_styleScopedClasses['bg-black'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['btn-sm'];
__VLS_styleScopedClasses['hover:text-black'];
var __VLS_slots;
var __VLS_inheritedAttrs;
const __VLS_refs = {};
const __VLS_templateResult = { slots: __VLS_slots,
    refs: __VLS_refs,
    attrs: {},
};
let __VLS_internalComponent;
