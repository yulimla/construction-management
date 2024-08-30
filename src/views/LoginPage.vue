<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Welcome Back !</h2>
            <form @submit.prevent="login">
                <div class="mb-4">
                    <label class="block text-gray-700">Email Address</label>
                    <input v-model="email" type="email"
                        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                        placeholder="use admin@admin.com"
                         />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700">Password</label>
                    <input v-model="password" type="password"
                        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required 
                        placeholder="use admin123"
                        />
                </div>
                <button type="submit"
                    class="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">Login</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();

        return {
            store,
        };
    },
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            const user = this.store.state.user;
            if (this.email === user.email && this.password === user.password) {
                this.$router.push('/projects');
            } else {
                alert('Invalid credentials');
            }
        },
    },
};
</script>
