<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-[#1E1E2F] text-white flex flex-col">
      <div class="h-16 flex items-center justify-center font-bold text-lg border-b border-gray-700">
        {{ role.toUpperCase() }} PANEL
      </div>
      <nav class="flex-1 p-4 space-y-2">
        <router-link
          v-for="link in sidebarLinks"
          :key="link.path"
          :to="link.path"
          class="block py-2 px-3 rounded hover:bg-gray-700"
          active-class="bg-gray-700"
        >
          {{ link.name }}
        </router-link>
      </nav>
      <button 
        @click="logout"
        class="m-4 bg-red-600 hover:bg-red-700 rounded px-3 py-2 text-sm"
      >
        Выйти
      </button>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col">
      <!-- Top bar -->
      <header class="h-16 bg-white shadow flex items-center justify-between px-6">
        <h1 class="text-lg font-semibold">{{ currentPageTitle }}</h1>
        <div>{{ role }}</div>
      </header>

      <!-- Page content -->
      <main class="flex-1 overflow-y-auto p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

// fake role - replace with auth store
const role = localStorage.getItem("role") || "user";

// Sidebar links based on role
const sidebarConfig = {
  admin: [
    { name: "Dashboard", path: "/admin" },
    { name: "Applications", path: "/admin/applications" },
    { name: "Users", path: "/admin/users" },
  ],
  city: [
    { name: "City Dashboard", path: "/city" },
    { name: "Reports", path: "/city/reports" },
  ],
  region: [
    { name: "Region Dashboard", path: "/region" },
    { name: "Statistics", path: "/region/stats" },
  ],
  user: [
    { name: "My Applications", path: "/user/applications" },
    { name: "Profile", path: "/user/profile" },
  ],
};

const sidebarLinks = computed(() => sidebarConfig[role] || []);

const currentPageTitle = computed(() => {
  const match = sidebarLinks.value.find((l) => l.path === route.path);
  return match ? match.name : "Dashboard";
});

const logout = () => {
  localStorage.removeItem("role");
  router.push("/");
};
</script>
