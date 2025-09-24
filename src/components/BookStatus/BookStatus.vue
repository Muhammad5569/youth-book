<script setup>
import { ref } from 'vue'

// variables for inputs
const docType = ref('')
const docNumber = ref('')
const birthDate = ref('')

// optional: log values on button click
const handleCheck = () => {
    console.log('Doc Type:', docType.value)
    console.log('Doc Number:', docNumber.value)
    console.log('Birth Date:', birthDate.value)
}
</script>

<template>
    <div class="flex justify-between items-center mb-8 max-w-[1440px] mx-auto">
        <div class="">
            <h1 class="text-[#0083fc] text-[21px] font-[600]">YOSHLAR DAFTARI</h1>
            <p class="text-[#000] text-[14px] font-[500] opacity-[0.5]">ELEKTRON PLATFORMASI</p>
        </div>
    </div>

    <div class="max-w-[1280px] mx-auto p-[20px]  my-[100px] [box-shadow:0_0_20px_rgba(0,0,0,0.2)]">
        <h1 class="text-[32px] text-[#00264d] mb-[30px] mt-[10px] font-semibold text-center">
            "Yoshlar daftari" dagi holatini tekshirish
        </h1>

        <div class="flex justify-between items-center gap-4">
            <div>
                <p>Hujjat turini tanlang</p>
                <input v-model="docType" type="text" placeholder="Pasport va tug'ilgan sana"
                    class="border-gray-200 my-[10px] border-1 py-1 px-2 rounded-sm" />
            </div>

            <div>
                <p>Password</p>
                <input v-model="docNumber" type="text" placeholder="AA0000000"
                    class="border-gray-200 mt-[10px] border-[0.5px] py-1 px-2 rounded-sm" />
            </div>

            <div>
                <p>Tug'ilgan sana</p>
                <input v-model="birthDate" type="date" placeholder="dd.mm.yyyy"
                    class="border-gray-200 placehoolder-gray-400 mt-[10px] border-1 py-1 px-2 rounded-sm" />
            </div>
        </div>

        <button @click="handleCheck"
            class="flex text-white bg-[#80a2e7] py-2 px-4 mt-[80px] rounded-[4px] justify-center gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <p class="text-[14px]">Tekshirish</p>
        </button>
    </div>

    <hr class="h-px bg-blue-500 border-0" />

</template>
