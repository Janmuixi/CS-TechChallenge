<template>
    <div class="my-8 mx-16 flex justify-center">
        <div class="w-[1312px]">
            <div class="flex justify-start items-center">
                <CardsBanner
                    :title="'The Best Platform for Car Rental'"
                    :description="'Ease of doing a car rental safely and reliably. Of course at a low price.'"
                    class="mr-8"
                />
                <CardsBanner
                    :theme="CardThemes.dark"
                    :title="'Easy way to rent a car at a low price'"
                    :description="'Providing cheap car rental services and safe and comfortable facilities.'"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CardThemes } from '~/components/components.enums';
</script>