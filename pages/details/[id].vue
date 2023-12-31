<template>
    <div class="my-8 mx-16 flex justify-center mt-[var(--header-height)] min-h-[2000px]">
        <div class="max-w-[1312px] mt-[30px]">
            <CardDetails :details="carDetails" />
            <ListRecommendedCars class="mt-7" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CarsService from '~/services/cars.service';

const store = useCarsStore()
const route = useRoute()
const carDetails = await CarsService.getCarDetails(route.params.id as string)  

onMounted(()=> {
    store.searchText = ""
})
</script>