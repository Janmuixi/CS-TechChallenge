<template>
    <div class="w-[492px]">
        <div class="h-[360px] rounded-[10px]">
            <div v-if="!selectedImage" class="h-[360px] rounded-[10px] bg-card-dark-no-car relative">
                <div class="p-6 text-white w-[420px]">
                    <p class="text-[32px]">Sports car with the best design and acceleration</p>
                    <p class="mt-4 text-[16px] w-[300px]">Safety and comfort while driving a futuristic and elegant sports car</p>
                </div>
                <img class="absolute bottom-0  left-[50%] translate-x-[-50%] h-[160px]" :src="defaultImage" alt="car-image">
            </div>
            <img v-else class="object-cover h-full rounded-[10px]" :src="selectedImage" alt="carrousel-image">
        </div>
        
        <div class="flex justify-between mt-[26px]">
            <div class="w-[148px] h-[124px] rounded-[10px] bg-card-dark-no-car relative" :class="{ 'border-blue-dark border-2 p-2': !selectedImage }" @click="setSelectedImage('')">
                <img class="absolute bottom-0  left-[50%] translate-x-[-50%] w-[148px]" :src="defaultImage" alt="car-image">
            </div>
            <img class="w-[148px] h-[124px] rounded-[10px]" :class="{ 'border-blue-dark border-2 p-1': selectedImage === props.extraImage1 }" :src="props.extraImage1" @click="setSelectedImage(props.extraImage1)">
            <img class="w-[148px] h-[124px] rounded-[10px]" :class="{ 'border-blue-dark border-2 p-1': selectedImage === props.extraImage2 }" :src="props.extraImage2" @click="setSelectedImage(props.extraImage2)">
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        defaultImage: { type: String, required: true },
        extraImage1: String,
        extraImage2: String
    })
    
    const selectedImage = ref('')
    
    const setSelectedImage = (url: string | undefined) => {
        if (url) selectedImage.value = url
        else selectedImage.value = ''
    }

</script>

<style>
    .car-pic-gradient {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
    }
</style>