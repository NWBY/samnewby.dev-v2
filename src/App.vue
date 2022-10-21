<script setup>
import Navbar from './components/nav/Navbar.vue';
</script>

<template>
    <div class="px-5 md:px-0 md:w-2/3 xl:w-2/5 mx-auto">
        <Navbar />
        <RouterView />
    </div>
</template>
