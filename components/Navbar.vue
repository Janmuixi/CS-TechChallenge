<template>
    <nav class='fixed w-full top-0 h-[var(--header-height)] bg-white flex flex-row items-center justify-center border-b border-grey-dark/40 z-10'>
        <NuxtLink to="/" class="text-blue-dark text-3xl font-bold mr-[64px] flex justify-center cursor-pointer ml-5 lg:ml-0"><span>DM</span></NuxtLink>
        <Searchbar class="mr-[32px]" />
        <div class="size-11 border rounded-full border-grey-dark/40 flex justify-center items-center mr-5 lg:mr-0">
            <img class="size-6 cursor-pointer transition-all hover:size-7" src="@/assets/images/heart-empty.svg" alt="close-button">
        </div>
    </nav>
</template>