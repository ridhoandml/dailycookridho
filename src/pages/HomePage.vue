<script setup lang="ts">
import { reactive } from 'vue';

const links = reactive([
  {
    "title": "Instagram",
    "url": "https://instagram.com/dailycookridho",
    "isExternal": true
  },
  {
    "title": "Tiktok",
    "url": "https://www.tiktok.com/@dailycookridhoo",
    "isExternal": true
  },
  {
    "title": "Cookpad",
    "url": "https://cookpad.com/id/pengguna/108140896",
    "isExternal": true
  }
])
</script>

<template>
  <section class="flex flex-col justify-start items-center px-8 pb-10 pt-4 min-h-screen h-full">
    <div class="flex flex-col gap-5 max-w-[400px] w-full bg-white p-8 rounded shadow-sm">
      <div class="flex flex-col items-center gap-2">
        <img class="w-20 h-20 rounded-full" src="../assets/img/profile-picture.jpg" alt="@dailycookridho">
        <p class="text-slate-500 text-sm">@dailycookridho</p>
      </div>
      <div class="flex flex-col gap-4">
        <a
          v-for="link in links"
          :href="link.url"
          class="flex flex-row justify-between items-center px-4 py-3 text-sm text-slate-900 bg-yellow-100 rounded">
          <span>{{ link.title }}</span>
          <i v-if="link.isExternal" class="bx bx-link-external"></i>
        </a>
      </div>
    </div>
  </section>
</template>
