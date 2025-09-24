<script setup lang="ts">
import LanguageToggle from './LanguageToggle.vue';

</script>

<template>
  <div class="py-[15px]">
    <div class="max-w-[1440px] mx-auto flex justify-between items-center py-">
      <div class="py-[6px]">
        <a href="/">
          <img src="../assets/logo.png" alt="logo" class="w-full h-[52px]"></img>
        </a>
      </div>
      <div class="flex items-center py-[10px] gap-4">
        <LanguageToggle />
        <div class="flex justify-between items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
            <path fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clip-rule="evenodd" />
          </svg>
          <p>1093</p>
        </div>
        <button
          class="flex justify-center items-center border-black border-1 py-[7px] px-[10px] rounded-sm hover:bg-[#6c757d] hover:text-white">Mas'ul
          xodimlar uchun</button>
      </div>
    </div>
    <hr class="border-t-4 border-gray-300 w-full" />
  </div>
</template>