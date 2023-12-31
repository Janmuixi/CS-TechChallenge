<template>
    <div class='bg-grey-light'>
        <Navbar />
        <slot />
        <MainFooter />
    </div>
</template>
<script setup lang="ts">
    const store = useCarsStore()
    store.getStartingData()

    useHead({
        title: 'CommonShare car catalog',
        meta: [{
            name: 'description',
            content: 'This is a car catalog developed in Nuxt3'
        }]
    })
</script>