<template>
    <div class="flex justify-center items-center mt-4">
        <div class="relative w-3/4 sm:w-1/2">
            <input type="text" v-model="query" placeholder="Search..." class="border p-2 rounded w-full pr-10" />
            <button class="absolute right-0 top-0 mt-1 mr-1 bg-red-500 p-2 rounded hover:bg-red-600 transition-colors">
                <Icon icon="mdi:search" class="text-white" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const query = ref('');
</script>

<style scoped></style>