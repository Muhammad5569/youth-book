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
      router.push("/user-dashboard")
      break
    case "city":
      router.push("/city-dashboard")
      break
    case "region":
      router.push("/region-dashboard")
      break
    case "admin":
      router.push("/admin")
      break
  }
  localStorage.setItem("role", role)
  emit("close") // close window after success
}
</script>

<template>
  <div v-if="show" class="fixed top-24 left-1/2 -translate-x-1/2 z-50">
    <div class="bg-white border rounded-lg shadow-md w-96 p-6 relative">
      <!-- close button -->
      <button
        @click="emit('close')"
        class="absolute top-2 right-2 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h2 class="text-xl font-semibold mb-4 text-center">Login</h2>

      <div class="mb-3">
        <label class="block text-sm mb-1">Username</label>
        <input
          v-model="username"
          type="text"
          class="w-full border rounded px-3 py-2"
          placeholder="Enter role (user, city, region, admin)"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm mb-1">Password</label>
        <input
          v-model="password"
          type="password"
          class="w-full border rounded px-3 py-2"
          placeholder="Enter password"
        />
      </div>

      <button
        @click="handleLogin"
        class="w-full bg-blue-600 text-white py-2 rounded"
      >
        Login
      </button>
    </div>
  </div>
</template>
