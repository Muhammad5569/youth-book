<script setup lang="ts">
import Carousel from './Carousel.vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const images = [
    'src/assets/04-min.d9bb1553.jpg',
    'src/assets/05-min.d0259791.jpg',
    'src/assets/06-min.e6ac3b44.jpg',
    'src/assets/06-min.e6ac3b45.jpg'
]

const login = () => {
    router.push('/login')
}

</script>

<template>
    <div class="max-w-[1440px] mx-auto mb-12">
        <div class="flex justify-between items-center mb-8">
            <div class="">
                <h1 class="text-[#0083fc] text-[21px] font-[600]">YOSHLAR DAFTARI</h1>
                <p class="text-[#000] text-[14px] font-[500] opacity-[0.5]">ELEKTRON PLATFORMASI</p>
            </div>
            <div class="flex justify-between items-center gap-[140px]">
                <button 
                    @onClick="login"
                    class="flex justify-center items-center py-[7px] px-[10px] rounded-sm text-white bg-[#0a58ca] hover:bg-[#0083fc]"
                >
                    Kirish
                </button>
            </div>
        </div>
        <Carousel  :images="images" :autoplay="true" :autoplay-interval="3000" />
    </div>
</template>