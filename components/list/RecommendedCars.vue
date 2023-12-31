<template>
    <div v-if="store.cars.length !== 0">
        <div class="px-[20px] mt-[50px] flex justify-between">
            <div class="text-grey-standard">Recomendation Car</div>
        </div>
        <div class="mt-[32px] flex md:justify-start justify-center flex-wrap gap-8 mb-5 items-center">
            <CardCar :car="car" v-for="car in store.cars" :key="car.id"  @liked="store.setCarLiked(car.id)" />
        </div>
        <div v-if="store.currentPage < store.lastPage" class="flex justify-center mt-[56px]">
            <Button text="Show more car" @click="store.addNextPage()" />
        </div>
        
    </div>
    <div v-else class="mt-8 text-center text-[24px] text-grey-darker/60"> There is no cars that fit the parameters </div>
</template>
<script setup lang="ts">
    const store = useCarsStore()
</script>