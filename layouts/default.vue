<template>
    <div class='bg-grey-light'>
        <Navbar />
        <slot />
    </div>
</template>
<script setup lang="ts">
    const store = useCarsStore()
    store.getStartingData()
</script>