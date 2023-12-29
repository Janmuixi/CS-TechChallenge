<template>
    <div class="w-[120px] h-[44px] rounded-[4px] flex items-center cursor-pointer" :class="buttonColor()">
        <div class="px-5 text-white text-[16px]">
            {{text}}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { ButtonThemes } from './components.enums';

const props = defineProps({ 
    color: String as PropType<ButtonThemes>,
    text: String
})

const buttonColor = () => {
    return props.color === ButtonThemes.light ? 'bg-blue-light' : 'bg-blue-dark'
}
</script>