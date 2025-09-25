<template>
  <div>
    <h2 class="text-xl font-bold mb-4">My Applications</h2>
    <table class="w-full bg-white shadow rounded">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 text-left">ID</th>
          <th class="p-2 text-left">Title</th>
          <th class="p-2 text-left">Status</th>
          <th class="p-2 text-left">Submitted</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in applications" :key="item.id" class="border-t">
          <td class="p-2">{{ item.id }}</td>
          <td class="p-2">{{ item.title }}</td>
          <td class="p-2">{{ item.status }}</td>
          <td class="p-2">{{ item.submitted }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { userApplications as applications } from "../../data/userData";
</script>
