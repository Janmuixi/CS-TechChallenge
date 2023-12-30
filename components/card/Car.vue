<template>
    <div class="w-[304px] h-[388px] rounded-[10px] bg-white p-6">
        <div class="flex justify-between">
            <div class="w-[200px] font-bold size-5">{{ props.car.name }}</div>
            <img v-if="!props.car.liked" src="@/assets/images/Like.svg" alt="like-button" @click="$emit('liked')">
            <img v-else src="@/assets/images/heart-filled.svg" alt="like-button" @click="$emit('liked')">
        </div>
        <div class="text-sm mt-1 text-grey-standard">{{ props.car.type }}</div>
        <div class="h-[130px] relative">
            <img class="mt-[60px]" :src="props.car.img" alt="car-image">
            <div class="car-pic-gradient absolute bottom-0 left-0 w-full h-[70%]"></div>
        </div>
        
        <div class="mt-[20px] flex justify-between text-[14px] text-grey-standard">
            <div class="flex items-center">
                <img class="mr-1" src="@/assets/images/gas-station.svg" alt="gas-station">
                {{ props.car.gasolineLiter }} L
            </div>
            <div class="flex items-center">
                <img class="mr-1" src="@/assets/images/car-wheel.svg" alt="car-wheel">
                {{ props.car.kindOfTransition }}
            </div>
            <div class="flex items-center">
                <img class="mr-1" src="@/assets/images/user.svg" alt="user">
                {{ props.car.people }} people
            </div>
        </div>
        <div class="mt-[24px] flex justify-between items-center">
            <div><span class="text-[20px] font-bold">${{ props.car.pricePerDay }}/</span><span class="text-[14px] font-bold text-grey-standard">day</span></div>
            <Button :text="'Rent Now'" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Car } from '~/services/interfaces/cars.interface';

const props = defineProps({
    car: { type: Object as PropType<Car>, required: true }
})

const store = useCarsStore()

</script>

<style>
.car-pic-gradient {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
}
</style>