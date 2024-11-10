<template>
    <div class="flex flex-col bg-[#f3f3f3] w-[250px] hover:translate-y-[-5px] transition-transform">
        <div class="relative">
            <img :src="imgSrc" alt="product image">
            <Icon class="absolute top-3 left-3 text-[20px]" color="red" icon="mdi-light:heart"></Icon>
        </div>
        <div class="p-2">
            <h2 class="font-medium text-xl">{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    }
});
</script>

<style scoped></style>
