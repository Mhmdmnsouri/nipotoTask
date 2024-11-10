<template>
    <div class="flex flex-col bg-[#f3f3f3] w-[250px] hover:translate-y-[-5px] transition-transform">
        <div class="relative">
            <img :src="imgSrc" alt="product image">
            <Icon class="absolute top-3 left-3 text-[25px] cursor-pointer" :color="isFavorite ? 'red' : 'gray'"
                :icon="isFavorite ? 'mdi-heart' : 'mdi-light:heart'" @click="toggleFavorite"></Icon>
        </div>
        <div class="p-2">
            <h2 class="font-medium text-xl">{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import { defineProps, ref, onMounted, watch } from 'vue';

const props = defineProps({
    title: String,
    description: String,
    imgSrc: String,
    id: Number
});

const isFavorite = ref(false);

onMounted(() => {
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    isFavorite.value = favoriteItems.includes(props.id);
});

const toggleFavorite = () => {
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];

    if (isFavorite.value) {
        const index = favoriteItems.indexOf(props.id);
        if (index > -1) {
            favoriteItems.splice(index, 1);
        }
    } else {
        favoriteItems.push(props.id);
    }

    isFavorite.value = !isFavorite.value;
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
};

watch(isFavorite, (newValue) => {
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    if (newValue) {
        if (!favoriteItems.includes(props.id)) {
            favoriteItems.push(props.id);
        }
    } else {
        const index = favoriteItems.indexOf(props.id);
        if (index > -1) {
            favoriteItems.splice(index, 1);
        }
    }
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
});
</script>

<style scoped></style>