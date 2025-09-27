<template>
    <div class="max-w-5xl mt-12 mx-auto p-6 bg-white shadow rounded">
        <h2 class="text-xl font-bold mb-6">Ariza Yaratish</h2>

        <form @submit.prevent="handleSubmit" class="grid grid-cols-2 gap-6">
            
            <div class="flex items-center space-x-3">
                <label class="w-32 text-sm font-medium">PIN</label>
                <input v-model="form.pin" type="text" class="flex-1 border p-2 rounded" placeholder="PIN kiriting" />
            </div>
            <div class="flex items-center space-x-3">
                <label class="w-32 text-sm font-medium">Passport</label>
                <input v-model="form.passport" type="text" class="flex-1 border p-2 rounded"
                    placeholder="Passport raqami" />
            </div>
            <div class="flex items-center space-x-3">
                <label class="w-32 text-sm font-medium">Tug‘ilgan sana</label>
                <input v-model="form.birth_date" type="date" class="flex-1 border p-2 rounded" />
            </div>
            <div class="flex items-center space-x-3">
                <label class="w-32 text-sm font-medium">Universitet</label>
                <input v-model="form.university" type="text" class="flex-1 border p-2 rounded"
                    placeholder="Universitet nomi" />
            </div>
            <div class="flex items-center space-x-3">
                <label class="w-32 text-sm font-medium">Yo‘nalish</label>
                <input v-model="form.field" type="text" class="flex-1 border p-2 rounded" placeholder="Yo‘nalish" />
            </div>

            <div class="flex items-center col-span-2 space-x-3">
                <label class="w-32 text-sm font-medium">Izoh</label>
                <textarea v-model="form.description" class="flex-1 border p-2 rounded"
                    placeholder="Izoh yozing"></textarea>
            </div>

            <div class="col-span-2 flex justify-center">
                <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
                    Yaratish
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import Footer from "../Footer.vue";
import Header from "../Header.vue";

const form = reactive({
    pin: "",
    passport: "",
    birth_date: "",
    university: "",
    field: "",
    description: "",
});

function handleSubmit() {
    // check if any field is empty
    for (const [key, value] of Object.entries(form)) {
        if (!value.trim()) {
            alert(`Iltimos, ${key} maydonini to‘ldiring!`);
            return;
        }
    }

    // if all good
    alert("✅ Ariza yuborildi:\n" + JSON.stringify(form, null, 2));
}
</script>
