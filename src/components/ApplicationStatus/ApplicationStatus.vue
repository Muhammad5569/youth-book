<template>
  <div class="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-center text-lg font-semibold text-gray-800">
      Ariza holatini tekshirish
    </h2>

    <!-- thin hr -->
    <hr class="h-px bg-gray-300 border-0 my-4" />

    <!-- Input 1 -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">
        <span class="text-red-500">*</span> Ariza ID raqami
      </label>
      <input
        type="number"
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      />
    </div>

    <!-- Input 2 -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">
        <span class="text-red-500">*</span> Tekshirish kodi
      </label>
      <input
        type="number"
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      />
    </div>

    <!-- hr before button -->
    <hr class="h-px bg-gray-300 border-0 my-4" />

    <!-- Button -->
    <button
      class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
    >
      Tekshirish
    </button>
  </div>
</template>
