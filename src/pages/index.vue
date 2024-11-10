<template>
    <div class="flex flex-col items-center my-10">
        <SearchBox @onSearch="handleSearch" :value="savedQuery" />

        <div v-if="loading">
            <Icon class="text-[50px] text-[#ff5252]" icon="svg-spinners:3-dots-scale"></Icon>
        </div>

        <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <CardBox v-for="post in filteredPosts" :key="post.id" :title="post.title" :description="post.body"
                :id="post.id" :imgSrc="postImage(post.id)" />
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SearchBox from '../components/SearchBox.vue';
import CardBox from '../components/CardBox.vue';
import axios from 'axios';
import { Icon } from '@iconify/vue/dist/iconify.js';

const posts = ref([]);
const photos = ref([]);
const filteredPosts = ref([]);
const searchQuery = ref('');
const loading = ref(true);

const fetchData = async () => {
    try {
        const [postsResponse, photosResponse] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/photos')
        ]);

        posts.value = postsResponse.data;
        photos.value = photosResponse.data;

        const savedQuery = localStorage.getItem('searchQuery');
        const savedFilteredPosts = localStorage.getItem('filteredPosts');

        if (savedQuery && savedFilteredPosts) {
            searchQuery.value = savedQuery;
            filteredPosts.value = JSON.parse(savedFilteredPosts);
        } else {
            filteredPosts.value = posts.value;
        }

        loading.value = false;
    } catch (error) {
        console.error('Error fetching data:', error);
        loading.value = false;
    }
};

const postImage = (postId) => {
    const photo = photos.value.find(photo => photo.albumId === postId);
    return photo ? photo.url : 'https://via.placeholder.com/150';
};

const normalizeText = (text) => {
    return text.replace(/\n/g, ' ').trim().toLowerCase();
};

const handleSearch = (query) => {
    searchQuery.value = query;

    filteredPosts.value = posts.value.filter(post => {
        const normalizedTitle = normalizeText(post.title);
        const normalizedBody = normalizeText(post.body);

        return normalizedTitle.includes(query.toLowerCase()) || normalizedBody.includes(query.toLowerCase());
    });

    localStorage.setItem('searchQuery', query);
    localStorage.setItem('filteredPosts', JSON.stringify(filteredPosts.value));
};

onMounted(fetchData);
</script>

<style scoped>
.animate-spin {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>