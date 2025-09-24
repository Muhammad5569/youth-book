<script setup>
import { ref } from 'vue'

// variables for inputs
const docType = ref('')
const docNumber = ref('')
const birthDate = ref('')

// optional: log values on button click
const handleCheck = () => {
    window.alert('Tekshirish tugmasi bosildi!')
    console.log('Doc Type:', docType.value)
    console.log('Doc Number:', docNumber.value)
    console.log('Birth Date:', birthDate.value)
}
</script>

<template>
    <div class="max-w-[1280px] mx-auto p-[20px]  my-[100px] [box-shadow:0_0_20px_rgba(0,0,0,0.2)]">
        <h1 class="text-[32px] text-[#00264d] mb-[30px] mt-[10px] font-semibold text-center">
            Ariza holatini tekshirish
        </h1>

        <div class="flex justify-between items-center gap-4 w-full"> 
            <div class="flex mt-[80px] mb-[80px] justify-around items-center gap-4 w-full">
                <input 
                    v-model="docNumber" 
                    label="Pinfl"
                    type="text" 
                    placeholder="##############"
                    class="border-gray-200 mt-[10px] border-[0.5px] py-1 px-2 rounded-sm"
                />
                <button 
                    @click="handleCheck"
                    class="flex text-white bg-[#80a2e7] py-2 px-4 rounded-[4px] justify-center gap-2 items-center"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5"
                        stroke="currentColor" 
                        class="size-4"
                    >
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
                        />
                    </svg>
                    <p class="text-[14px]">Tekshirish</p>
                </button>
            </div>
        </div>
    </div>

    <hr class="h-px bg-blue-500 border-0" />

</template>
