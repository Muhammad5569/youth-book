<template>
    <el-form class="max-w-96 mx-auto mt-24" label-position="top">
        <el-card class="bg-white border rounded-lg shadow-md p-6 relative">
            <h2 class="text-xl font-semibold mb-4 text-center">Login</h2>
            <el-form-item label="username">
                <el-input v-model="username"/>
            </el-form-item>
            <el-form-item label="password">
                <el-input v-model="password" />
            </el-form-item>
            <button @click="handleLogin" class="w-full bg-blue-600 text-white py-2 rounded">
                Login
            </button>
        </el-card>
    </el-form>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const props = defineProps({
    show: Boolean,
})
const emit = defineEmits(["close"])

const router = useRouter()

const username = ref("")
const password = ref("")

// static passwords for roles
const credentials = {
    user: "pass123",
    city: "city456",
    region: "region789",
    admin: "admin999"
}

const handleLogin = () => {
    const role = username.value.toLowerCase()

    if (!credentials[role]) {
        alert("Unknown user")
        return
    }

    if (password.value !== credentials[role]) {
        alert("Invalid password")
        return
    }

    // ✅ redirect based on role
    switch (role) {
        case "user":
            router.push("/user")
            break
        case "city":
            router.push("/city")
            break
        case "region":
            router.push("/region")
            break
        case "admin":
            router.push("/admin")
            break
    }
    localStorage.setItem("role", role)
    emit("close") // close window after success
}
</script>