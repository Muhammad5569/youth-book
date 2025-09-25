<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Admin Applications</h2>
    <table class="w-full bg-white shadow rounded">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 text-left">ID</th>
          <th class="p-2 text-left">User</th>
          <th class="p-2 text-left">Status</th>
          <th class="p-2 text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in applications" :key="item.id" class="border-t">
          <td class="p-2">{{ item.id }}</td>
          <td class="p-2">{{ item.user }}</td>
          <td class="p-2">{{ item.status }}</td>
          <td class="p-2">{{ item.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { adminApplications as applications } from "../../data/adminData";
</script>
