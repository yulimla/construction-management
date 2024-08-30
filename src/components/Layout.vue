<template>
    <div class="h-screen flex">

        <Sidebar></Sidebar>
        <!-- Main content -->
        <div class="flex-1 flex flex-col">
            <!-- Navbar -->
            <header class="bg-white p-4 shadow-lg mb-2" >
                <div class="flex justify-between items-center">
                    <div class="text-xl font-semibold">Construction Project Management</div>
                    <div class="space-x-4">
                        <!-- Add user profile, notifications, etc. here -->
                        <button class="btn btn-ghost">Welcome back {{ this.$store.state.user.name ?? "" }}</button>
                        <button class="btn btn-ghost">Logout</button>
                    </div>
                </div>
            </header>

            <!-- Content -->
            <main class="flex-1 p-6 bg-base-100 overflow-y-auto mt-3">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Sidebar from './SideBar.vue'
</script>

<style scoped>
/* Additional styles can go here */
</style>
