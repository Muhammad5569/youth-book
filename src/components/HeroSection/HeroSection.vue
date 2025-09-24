<script setup lang="ts">
import Carousel from './Carousel.vue';
import { useRouter } from 'vue-router';
import LoginWindow from './LoginWindow.vue';
import { ref } from 'vue';
const router = useRouter()
const images = [
    'src/assets/04-min.d9bb1553.jpg',
    'src/assets/05-min.d0259791.jpg',
    'src/assets/06-min.e6ac3b44.jpg',
    'src/assets/06-min.e6ac3b45.jpg'
]

const goToBookStatus = () => {
    router.push('/tekshirish')
}
const showLogin = ref(false)
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
                    @click="goToBookStatus" 
                    class="flex justify-center items-center border-black border-1 py-[7px] px-[10px] rounded-sm hover:bg-[#6c757d] hover:text-white">Daftar Holatini tekshirish</button>
                <button 
                    @click="showLogin = true" 
                    class="flex justify-center items-center py-[7px] px-[10px] rounded-sm text-white bg-[#0a58ca] hover:bg-[#0083fc]">Kirish</button>
            </div>
        </div>
         <LoginWindow v-if="showLogin" :show="showLogin" @close="showLogin = false" />
        <Carousel  :images="images" :autoplay="true" :autoplay-interval="3000" />
    </div>
</template>