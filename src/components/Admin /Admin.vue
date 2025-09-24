<script setup>
const applications = [
  {
    id: 1,
    pin: "14454545454d45",
    passport: "AB4554545",
    birth_date: "26-02-2000",
    university: "TATU",
    field: "Computer Science",
    description: "Test application",
    status: "Pending",
  },
  {
    id: 2,
    pin: "9988776655aa",
    passport: "AA1234567",
    birth_date: "15-07-1999",
    university: "SamDU",
    field: "Law",
    description: "Second application",
    status: "Approved",
  },
  {
    id: 3,
    pin: "1122334455bb",
    passport: "CC9876543",
    birth_date: "01-01-2001",
    university: "AndMI",
    field: "Medicine",
    description: "Third application",
    status: "Rejected",
  },
]
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-2xl font-semibold mb-4">Applications</h1>

    <table class="w-full border border-gray-300 border-collapse text-sm">
      <thead>
        <tr>
          <th class="border border-gray-300 px-3 py-2 text-left">ID</th>
          <th class="border border-gray-300 px-3 py-2 text-left">PIN</th>
          <th class="border border-gray-300 px-3 py-2 text-left">Passport</th>
          <th class="border border-gray-300 px-3 py-2 text-left">Birth Date</th>
          <th class="border border-gray-300 px-3 py-2 text-left">University</th>
          <th class="border border-gray-300 px-3 py-2 text-left">Field</th>
          <th class="border border-gray-300 px-3 py-2 text-left">Description</th>
          <th class="border border-gray-300 px-3 py-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="app in applications" :key="app.id">
          <td class="border border-gray-300 px-3 py-2">{{ app.id }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ app.pin }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ app.passport }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ app.birth_date }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ app.university }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ app.field }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ app.description }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ app.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
