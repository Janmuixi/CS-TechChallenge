<template>
    <div class="w-[640px] h-[360px] rounded-[10px]" :class="cardBg()">
        <div class="p-6 text-white w-[354px]">
            <p class="text-[32px]">{{title}}</p>
            <p class="mt-4 text-[16px]">{{description}}</p>
            <Button class="mt-5" :text="'Rental Car'" :color="buttonColor()" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { CardThemes, ButtonThemes } from '../enums/components.enums';

export interface Props { 
    theme: CardThemes,
    title: string,
    description: string
}

const props = withDefaults(defineProps<Props>(), {
    theme: CardThemes.light,
    title: '',
    description: ''
})

const cardBg = () => props.theme === CardThemes.dark ? 'bg-card-dark' : 'bg-card-light'
const buttonColor = () => props.theme === CardThemes.dark ? ButtonThemes.light : ButtonThemes.dark
</script>