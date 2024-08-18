<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const links = reactive([
  {
    "url": "/",
    "title": "Beranda",
  },
  {
    "url": "/recommendations",
    "title": "Rekomendasi",
  },
])
</script>

<template>
  <nav class="flex flex-col justify-start items-center px-8 pt-4">
    <div class="flex gap-4 max-w-[400px] py-2 px-5 w-full bg-white rounded-full">
      <RouterLink
        v-for="link in links"
        :to="link.url"
        active-class="bg-yellow-100"
        class="flex-1 text-center text-sm text-slate-900 p-2 rounded-full">
        {{ link.title }}
      </RouterLink>
    </div>
  </nav>
  <RouterView />
  <img class="absolute top-0 left-0 h-screen -z-10 scale-150 opacity-40" src="./assets/img/background.svg" alt="">
</template>

<style lang="postcss">
body {
  @apply bg-gradient-to-br from-orange-200 to-yellow-500 via-amber-400
  bg-[length:200%_200%] animate-gradient-x;
}
#app {
  @apply min-h-screen relative;
}
</style>
