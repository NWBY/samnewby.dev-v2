<script setup>
import { useRoute } from 'vue-router';
</script>

<template>
    <div class="navbar">
        <router-link to="/">Sam Newby</router-link>
        <div class="right-nav">
            <router-link to="/content">Content</router-link>
            <router-link to="/content" class="hidden">About</router-link>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    @apply flex items-center py-5;
}
.right-nav {
    @apply flex items-center ml-auto;
}
</style>
