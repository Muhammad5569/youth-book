<template>
  <div>
    <h2 class="text-xl font-bold mb-4">City Reports</h2>
    <table class="w-full bg-white shadow rounded">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 text-left">ID</th>
          <th class="p-2 text-left">City</th>
          <th class="p-2 text-left">Applications</th>
          <th class="p-2 text-left">Approved</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in reports" :key="item.id" class="border-t">
          <td class="p-2">{{ item.id }}</td>
          <td class="p-2">{{ item.city }}</td>
          <td class="p-2">{{ item.applications }}</td>
          <td class="p-2">{{ item.approved }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { cityReports as reports } from "../../data/cityData";
</script>
