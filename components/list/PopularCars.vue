<template>
    <div>
        <div class="px-[20px] mb-[30px] flex justify-between">
            <div class="text-grey-standard">Popular Cars</div>
            <div class="text-blue-dark font-semibold cursor-pointer">View All</div>
        </div>
        <div class="flex md:justify-start justify-center flex-wrap gap-8 mb-5 items-center">
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