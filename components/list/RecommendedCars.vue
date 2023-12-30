<template>
    <div>
        <div class="px-[20px] mb-[30px] flex justify-between">
            <div class="text-grey-standard">Popular Cars</div>
            <div class="text-blue-dark font-semibold cursor-pointer">View All</div>
        </div>
        <div class="flex mb-8 justify-between flex-wrap">
            <CardCar class="mt-8" :car="car" v-for="car in store.cars" :key="car.id"  @liked="setAsLiked(car.id)" />
        </div>
        
    </div>
</template>
<script setup lang="ts">
    const store = useCarsStore()

    const setAsLiked = (id: string) => {
        store.setCarLiked(id)
    }
</script>