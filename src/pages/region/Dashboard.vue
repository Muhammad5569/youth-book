<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Region Statistics</h2>
    <table class="w-full bg-white shadow rounded">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 text-left">ID</th>
          <th class="p-2 text-left">Region</th>
          <th class="p-2 text-left">Applications</th>
          <th class="p-2 text-left">Approved</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in stats" :key="item.id" class="border-t">
          <td class="p-2">{{ item.id }}</td>
          <td class="p-2">{{ item.region }}</td>
          <td class="p-2">{{ item.applications }}</td>
          <td class="p-2">{{ item.approved }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { regionStats as stats } from "../../data/regionData";
</script>
