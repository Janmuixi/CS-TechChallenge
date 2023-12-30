<template>
    <div class="my-8 mx-16 flex justify-center mt-[var(--header-height)] min-h-[2000px]">
        <div class="w-[1312px] mt-[30px]">
            <div class="flex justify-start items-center">
                <CardBanner
                    :theme="CardThemes.light"
                    :title="'The Best Platform for Car Rental'"
                    :description="'Ease of doing a car rental safely and reliably. Of course at a low price.'"
                    class="mr-8"
                />
                <CardBanner
                    :theme="CardThemes.dark"
                    :title="'Easy way to rent a car at a low price'"
                    :description="'Providing cheap car rental services and safe and comfortable facilities.'"
                />
            </div>
            <ListPopularCars class="mt-7" />
            <ListRecommendedCars class="mt-7" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { CardThemes } from '~/components/enums/components.enums';
</script>