<template>
    <div>
        <div class="px-[20px] mt-[50px] flex justify-between">
            <div class="text-grey-standard">Recomendation Car</div>
        </div>
        <div class="mb-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
            <CardCar class="mt-8" :car="car" v-for="car in store.cars" :key="car.id"  @liked="setAsLiked(car.id)" />
        </div>
        <div v-if="store.currentPage < store.lastPage" class="flex justify-center mt-[56px]">
            <Button text="Show more car" @click="store.addNextPage()" />
        </div>
        
    </div>
</template>
<script setup lang="ts">
    const store = useCarsStore()

    const setAsLiked = (id: string) => {
        store.setCarLiked(id)
        // for (const obj of store.cars) {
        //     const value = obj['id'];

        //     if (seenValues.has(value)) {
        //     // Property is repeated
        //         console.log(true);
        //     }

        //     seenValues.add(value);
        // }

        // // Property is not repeated
        // console.log(false)
    }

    const seenValues = new Set();

   
</script>