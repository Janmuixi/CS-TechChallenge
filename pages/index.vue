<template>
    <div class="my-8 mx-16 flex justify-center mt-[var(--header-height)] min-h-[2000px]">
        <div class="max-w-[1312px] mt-[30px]">
            <div class="flex flex-wrap gap-8 justify-center items-center">
                <CardBanner
                    :theme="CardThemes.light"
                    :title="'The Best Platform for Car Rental'"
                    :description="'Ease of doing a car rental safely and reliably. Of course at a low price.'"
                />
                <CardBanner
                    :theme="CardThemes.dark"
                    :title="'Easy way to rent a car at a low price'"
                    :description="'Providing cheap car rental services and safe and comfortable facilities.'"
                />
            </div>
            <ListPopularCars v-if="!store.searchText" class="mt-7" />
            <ListRecommendedCars class="mt-7" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { CardThemes } from '~/components/enums/components.enums';

const store = useCarsStore()

</script>