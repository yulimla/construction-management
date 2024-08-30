<template>
    <!-- Sidebar -->
    <aside class="w-64 bg-[#f6f6f6] p-5 sidebar">
        <div class="flex flex-col">
            <div class="text-xl font-semibold p-4">
                <img src="/BCI-Central-Logo.png" class="h-[70px] mx-auto" alt="">
            </div>
            <nav>
                <ul>
                    <li class="mb-3">
                        <router-link to="/projects" class="flex px-2 py-3 rounded-2xl bg-primary text-gray-100 hover:bg-red-700">
                            <HomeIcon class="w-5 mr-2" /> Projects
                        </router-link>
                    </li>
                    <!-- //this just example menu -->
                        <li class="mb-3">
                            <router-link to="#" class="flex px-2 py-3 rounded-2xl text-black hover:bg-red-500 hover:text-white">
                            <ComputerDesktopIcon class="w-5 mr-2" /> Menu Alternative 1
                        </router-link>
                    </li>
                        <li class="mb-3">
                            <router-link to="#" class="flex px-2 py-3 rounded-2xl text-black hover:bg-red-500 hover:text-white">
                            <GlobeAltIcon class="w-5 mr-2" /> Menu Alternative 2
                        </router-link>
                    </li>
                        <li class="mb-3">
                            <router-link to="#" class="flex px-2 py-3 rounded-2xl text-black hover:bg-red-500 hover:text-white">
                            <InboxArrowDownIcon class="w-5 mr-2" /> Menu Alternative 3
                        </router-link>
                    </li>
                        <li class="mb-3">
                            <router-link to="#" class="flex px-2 py-3 rounded-2xl text-black hover:bg-red-500 hover:text-white">
                            <MapPinIcon class="w-5 mr-2" /> Menu Alternative 4
                        </router-link>
                    </li>
                        <li class="mb-3">
                            <router-link to="#" class="flex px-2 py-3 rounded-2xl text-black hover:bg-red-500 hover:text-white">
                            <NewspaperIcon class="w-5 mr-2" /> Menu Alternative 5
                        </router-link>
                    </li>
                        <li class="mb-3">
                            <router-link to="#" class="flex px-2 py-3 rounded-2xl text-black hover:bg-red-500 hover:text-white">
                            <QueueListIcon class="w-5 mr-2" /> Menu Alternative 6
                        </router-link>
                    </li>

                    <!-- Add more navigation items here -->
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script setup lang="ts">
import {
    HomeIcon, ComputerDesktopIcon, GlobeAltIcon, InboxArrowDownIcon, MapPinIcon, NewspaperIcon , QueueListIcon

} from '@heroicons/vue/24/outline'

</script>