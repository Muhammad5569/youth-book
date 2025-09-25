<template>
  <div class="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
    <!-- Header Section -->
    <div class="bg-gradient-to-r from-blue-600 to-blue-500 p-6">
      <h2 class="text-center text-xl font-semibold text-white">
        📋 Ariza holatini tekshirish
      </h2>
    </div>

    <!-- Form Section -->
    <div class="p-6 space-y-6">
      <!-- Ariza ID Input -->
      <div class="space-y-2">
        <label class="flex items-center text-sm font-medium text-gray-700">
          <span class="text-red-500 mr-1">*</span>
          Ariza ID raqami
        </label>
        <div class="relative">
          <input
            type="number"
            placeholder="Ariza ID ni kiriting"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          />
          <div class="absolute inset-y-0 right-3 flex items-center">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Tekshirish Kodi Input -->
      <div class="space-y-2">
        <label class="flex items-center text-sm font-medium text-gray-700">
          <span class="text-red-500 mr-1">*</span>
          Tekshirish kodi
        </label>
        <div class="relative">
          <input
            type="number"
            placeholder="Tekshirish kodini kiriting"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          />
          <div class="absolute inset-y-0 right-3 flex items-center">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-gray-500">Tasdiqlash</span>
        </div>
      </div>

      <!-- Submit Button -->
      <button
        class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
      >
        🔍 Tekshirish
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>