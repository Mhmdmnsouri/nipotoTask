<template>
    <div class="flex justify-center items-center mb-20 text-2xl font-medium w-3/4 sm:w-1/2">
        <div class="relative w-full">
            <input type="text" v-model="query" placeholder="Search..." class="border p-2 rounded w-full pr-12" />
            <button @click="onSearch"
                class="absolute right-0 top-0 m-[5px] bg-red-500 p-2 rounded hover:bg-red-600 transition-colors">
                <Icon icon="mdi:search" class="text-white" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';

const query = ref('');
const emit = defineEmits(['onSearch']);

onMounted(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
        query.value = savedQuery;
    }
});

const onSearch = () => {
    emit('onSearch', query.value);
    localStorage.setItem('searchQuery', query.value);
};
</script>

<style scoped></style>
