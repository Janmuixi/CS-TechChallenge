<template>
    <div class="my-8 mx-16 flex justify-center mt-[var(--header-height)] min-h-[2000px]">
        <div class="w-[1312px] mt-[30px]">
            <CardDetails />
            <ListRecommendedCars class="mt-7" />
        </div>
    </div>
</template>

<script setup lang="ts">

    const store = useCarsStore()
    const route = useRoute()

    
</script>