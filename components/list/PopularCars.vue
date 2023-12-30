<template>
    <div>
        <div class="px-[20px] mb-[30px] flex justify-between">
            <div class="text-grey-standard">Popular Cars</div>
            <div class="text-blue-dark font-semibold cursor-pointer">View All</div>
        </div>
        <div class="flex justify-between mb-5">
            <CardCar :car="car" v-for="car in store.popularCars" :key="car.id" @liked="setAsLiked(car.id)" />
        </div>
        
    </div>
</template>
<script setup lang="ts">
    const store = useCarsStore()

    const setAsLiked = (id: string) => {
        store.setPopularCarLiked(id)
    }
</script>