<template>
  <div class="relative inline-block text-left">
    <!-- Selected Language -->
    <button
      @click="toggleDropdown"
      class="flex items-center gap-2 px-3 py-2 rounded-md transition"
    >
      <img
        :src="selected.flag"
        alt="flag"
        class="w-5 h-4 object-cover"
      />
      <span>{{ selected.label }}</span>
      <svg
        class="w-4 h-4 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown -->
    <div
      v-if="open"
      class="absolute mt-2 w-40 bg-white border rounded-md shadow-lg z-50"
    >
      <ul class="py-1">
        <li
          v-for="lang in languages"
          :key="lang.code"
          @click="selectLanguage(lang)"
          class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer transition"
        >
          <img :src="lang.flag" alt="flag" class="w-5 h-4 object-cover" />
          <span>{{ lang.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageDropdown",
  data() {
    return {
      open: false,
      selected: {
        code: "uz",
        label: "O'zbek",
        flag: "https://flagcdn.com/w20/uz.png",
      },
      languages: [
        { code: "uz", label: "O'zbek", flag: "https://flagcdn.com/w20/uz.png" },
        { code: "en", label: "Ingliz", flag: "https://flagcdn.com/w20/us.png" },
        { code: "kaa", label: "Qoraqalpoq", flag: "https://flagcdn.com/w20/uz.png" },
        { code: "ru", label: "Rus", flag: "https://flagcdn.com/w20/ru.png" },
      ],
    };
  },
  created() {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      const found = this.languages.find(l => l.code === savedLang);
      if (found) this.selected = found;
    }
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
    selectLanguage(lang) {
      this.selected = lang;
      this.open = false;
      localStorage.setItem("lang", lang.code); // Save choice
      this.$emit("change-lang", lang.code);
    },
  },
};
</script>
