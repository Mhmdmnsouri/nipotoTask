<template>
    <div class="flex justify-center items-center mt-10 mb-20 text-2xl font-medium w-3/4 sm:w-1/2">
        <div class="relative w-full">
            <input type="text" v-model="query" placeholder="Search..." class="border p-2 rounded w-full pr-10" />
            <button @click="onSearch"
                class="absolute right-0 top-0 m-[5px] bg-red-500 p-2 rounded hover:bg-red-600 transition-colors">
                <Icon icon="mdi:search" class="text-white" />
            </button>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const query = ref('');

const emit = defineEmits(['onSearch']);

const onSearch = () => {
    console.log(query.value);

    emit('onSearch', query.value);
};
</script>

<style scoped></style>
