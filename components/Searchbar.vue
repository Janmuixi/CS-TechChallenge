<template>
    <div class='w-[1032px] h-[44px] border rounded-full border-grey-dark/40 flex justify-start items-center'>
        <img class="ml-[20px] size-6 cursor-pointer transition-all hover:size-7" src="@/assets/images/search-normal.svg" alt="search-button">
        <input 
            id="searchbar-cross"
            placeholder="Search something here" 
            class="p-3 w-[90%] h-full rounded-full border-none outline-none" 
            type="text"
            v-model="searchText"
            @keyup="searchTimeOut()"
        >
        <img v-if="searchText" class="ml-[20px] size-6 cursor-pointer transition-all hover:size-7" src="@/assets/images/icons8-close.svg" alt="close-button" @click="emptySearchText">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchText = ref('')
let timer: any

const emptySearchText = () => {
    searchText.value = ''
    document.getElementById('searchbar-cross')?.focus()
} 

const fetchCars = () => {
    console.log('fetch cars')
}

const searchTimeOut = () => {  
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    timer = setTimeout(() => {
        fetchCars()
    }, 500);
}
</script>