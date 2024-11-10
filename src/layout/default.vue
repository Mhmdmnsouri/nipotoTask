<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <div class="flex-grow">
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<style scoped></style>