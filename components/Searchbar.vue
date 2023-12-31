<template>
    <div class='w-[60%] h-[44px] border lg:rounded-full  rounded-[10px] border-grey-dark/40 flex justify-start items-center'>
        <img class="ml-[20px] size-6 cursor-pointer transition-all hover:size-7" src="@/assets/images/search-normal.svg" alt="search-button">
        <input 
            id="searchbar-cross"
            placeholder="Search something here" 
            class="p-3 lg:w-[90%] w-[60%] h-full border-none outline-none lg:rounded-full  rounded-[10px]" 
            type="text"
            v-model="store.searchText"
            @keyup="searchTimeOut()"
        >
        <img v-if="store.searchText" class="ml-[20px] size-6 cursor-pointer transition-all hover:size-7" src="@/assets/images/icons8-close.svg" alt="close-button" @click="emptySearchText">
    </div>
</template>

<script setup lang="ts">
const store = useCarsStore()
let timer: any

const emptySearchText = () => {
    store.searchText = ''
    fetchCars()
    document.getElementById('searchbar-cross')?.focus()
} 

const fetchCars = () => {
    store.currentPage = 1
    store.cars = []
    store.getAllCars()
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