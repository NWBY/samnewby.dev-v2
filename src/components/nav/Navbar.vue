<script setup>
import { useRoute } from 'vue-router';
</script>

<template>
    <div class="navbar">
        <router-link to="/" class="font-semibold text-3xl text-black">Sam Newby</router-link>
        <div class="right-nav">
            <router-link to="/content" class="right-nav-item">Content</router-link>
            <router-link to="/content" class="right-nav-item hidden">About</router-link>
        </div>
    </div>
    <p class="text-lg font-light text-slate-800">
    Full-Stack Software Engineer at Tails.com from the UK, working with Python, JavaScript. Currently focused on learning Rust, improving my Python skills and building more serverless projects.
    </p>
</template>

<style scoped>
.navbar {
    @apply flex items-center py-5 md:pt-20;
}
.right-nav {
    @apply flex items-center ml-auto;
}
.right-nav-item {
    @apply text-green-600 font-light hover:font-normal text-sm;
}
</style>
