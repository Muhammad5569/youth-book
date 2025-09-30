<template>
    <div class="max-w-[1440px] mx-auto mb-12">
        <Carousel  :images="images" :autoplay="true" :autoplay-interval="3000" />
    </div>
</template>

<script setup lang="ts">
    import Carousel from './Carousel.vue';
    const images = [
        '/images/04-min.d9bb1553.jpg',
        '/images/05-min.d9bb1553.jpg',
        '/images/06-min.e6ac3b44.jpg',
        '/images/06-min.e6ac3b45.jpg'
    ]
</script>