import { useStore } from 'vuex';
const store = useStore();
export default (await import('vue')).defineComponent({
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            const user = store.state.user;
            if (this.email === user.email && this.password === user.password) {
                this.$router.push('/projects');
            }
            else {
                alert('Invalid credentials');
            }
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
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center min-h-screen bg-gray-100") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full max-w-md p-8 bg-white rounded-lg shadow-md") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-bold mb-6 text-center") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.login) }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-gray-700") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), ...{ class: ("w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400") }, required: (true), placeholder: ("use admin@admin.com"), });
(__VLS_ctx.email);
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-6") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-gray-700") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), ...{ class: ("w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400") }, required: (true), placeholder: ("use admin123"), });
(__VLS_ctx.password);
__VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600") }, });
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['justify-center'];
__VLS_styleScopedClasses['min-h-screen'];
__VLS_styleScopedClasses['bg-gray-100'];
__VLS_styleScopedClasses['w-full'];
__VLS_styleScopedClasses['max-w-md'];
__VLS_styleScopedClasses['p-8'];
__VLS_styleScopedClasses['bg-white'];
__VLS_styleScopedClasses['rounded-lg'];
__VLS_styleScopedClasses['shadow-md'];
__VLS_styleScopedClasses['text-2xl'];
__VLS_styleScopedClasses['font-bold'];
__VLS_styleScopedClasses['mb-6'];
__VLS_styleScopedClasses['text-center'];
__VLS_styleScopedClasses['mb-4'];
__VLS_styleScopedClasses['block'];
__VLS_styleScopedClasses['text-gray-700'];
__VLS_styleScopedClasses['w-full'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-2'];
__VLS_styleScopedClasses['mt-2'];
__VLS_styleScopedClasses['border'];
__VLS_styleScopedClasses['rounded-lg'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['focus:ring-2'];
__VLS_styleScopedClasses['focus:ring-blue-400'];
__VLS_styleScopedClasses['mb-6'];
__VLS_styleScopedClasses['block'];
__VLS_styleScopedClasses['text-gray-700'];
__VLS_styleScopedClasses['w-full'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-2'];
__VLS_styleScopedClasses['mt-2'];
__VLS_styleScopedClasses['border'];
__VLS_styleScopedClasses['rounded-lg'];
__VLS_styleScopedClasses['focus:outline-none'];
__VLS_styleScopedClasses['focus:ring-2'];
__VLS_styleScopedClasses['focus:ring-blue-400'];
__VLS_styleScopedClasses['w-full'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-2'];
__VLS_styleScopedClasses['bg-blue-500'];
__VLS_styleScopedClasses['text-white'];
__VLS_styleScopedClasses['font-bold'];
__VLS_styleScopedClasses['rounded-lg'];
__VLS_styleScopedClasses['hover:bg-blue-600'];
var __VLS_slots;
var __VLS_inheritedAttrs;
const __VLS_refs = {};
const __VLS_templateResult = { slots: __VLS_slots,
    refs: __VLS_refs,
    attrs: {},
};
let __VLS_internalComponent;
