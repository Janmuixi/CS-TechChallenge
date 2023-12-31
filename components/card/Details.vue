<template>
    <div class="flex justify-between">
            <Carrousel :default-image="details.img" :extra-image1="details.images[0].url" :extra-image2="details.images[1].url" />
            <div class="w-[788px] h-[508px] rounded-[10px] p-6 bg-white relative">
                <div class="text-3xl font-bold">{{ details.name }}</div>
                <div class="mt-4 flex justify-start">
                    <img v-for="x in 4" :key="x" src="@/assets/images/star-filled.svg" alt="star-filled">
                    <img src="@/assets/images/star-empty.svg" alt="star-filled" class="mr-2">
                    <p>440+ Reviewer</p>
                </div>
                <div class="mt-9 text-xl leading-[200%] text-grey-darker line-clamp-4">{{ details.description }}</div>
                <div class="mt-9 flex gap-6 justify-start flex-nowrap text-xl">
                    <div class="flex gap-4 justify-between"><p class="text-grey-standard">Type Car</p><p class="text-grey-darker font-semibold">{{ details.type }}</p></div>
                    <div class="flex gap-4 justify-between"><p class="text-grey-standard">Capacity</p><p class="text-grey-darker font-semibold">{{ `${details.people} People` }}</p></div>
                    <div class="flex gap-4 justify-between"><p class="text-grey-standard">Gasoline</p><p class="text-grey-darker font-semibold">{{ `${details.gasolineLiter} L` }}</p></div>
                    <div class="flex gap-4 justify-between"><p class="text-grey-standard">Steering</p><p class="text-grey-darker font-semibold">{{ details.kindOfTransition }}</p></div>
                </div>
                <div class="absolute p-[20px] w-full left-[0px] right-[40px] bottom-[4px] flex justify-between items-center">
                    <div><span class="text-[28px] font-bold">${{ details.pricePerDay }}/</span><span class="text-[14px] font-bold text-grey-standard">day</span></div>
                    <Button :text="'Rent Now'" />
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
    import type { CarDetails } from '~/services/interfaces/cars.interface';

    const props = defineProps({
        details: { type: Object as PropType<CarDetails>, required: true }
    })
</script>

<style>
    .car-pic-gradient {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
    }
</style>