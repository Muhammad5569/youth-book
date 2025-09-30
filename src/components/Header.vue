<template>
  <div class=" fixed w-full z-50 bg-white">
    <div class="max-w-[1440px] py-[10px] mx-auto flex justify-between items-center py-">
      <div class="py-[6px]">
        <a href="/">
          <img src="/images/logo.png" alt="logo" class="w-full h-[52px]"></img>
        </a>
      </div>
      <div class="flex items-center py-[10px] gap-4">
        <div class="flex justify-between items-center gap-[140px]">
          <button @click="login"
            class="flex justify-center items-center py-[7px] px-[10px] rounded-sm text-white bg-[#0a58ca] hover:bg-[#0083fc]">Kirish</button>
        </div>
      </div>
    </div>
    <hr class="border-t border-gray-300 w-full" />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import LanguageToggle from './LanguageToggle.vue';
import { ref } from 'vue';
import LoginWindow from './HeroSection/LoginWindow.vue';

const router = useRouter()
const login = () => {
  router.push('/login')
}
const showLogin = ref(false)
</script>