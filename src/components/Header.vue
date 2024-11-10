<template>
    <header class="flex justify-between bg-gradient-to-tr from-[#ff9270] to-[#ff5252] px-10 py-5">
        <router-link :to="isFavoritePage ? '/' : '/favorite'"
            class="px-4 py-2 bg-white text-[#ff5252] rounded-md font-medium flex items-center gap-1" tag="button">
            <Icon :icon="isFavoritePage ? 'mdi:home' : 'mdi:heart'" />
            <span class="text-[18px]">{{ isFavoritePage ? 'Home' : 'Favorites' }}</span>
        </router-link>

        <img src="../assets/images/logo.svg" alt="NipotoLogo" />
    </header>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const isFavoritePage = computed(() => route.path === '/favorite');
</script>

<style scoped></style>
