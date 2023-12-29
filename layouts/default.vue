<template>
    <div class='h-screen bg-grey-light'>
        <Navbar />
        <slot />
    </div>
</template>
<script lang="ts">
    const store = useCarsStore()
    store.getStartingData()
</script>