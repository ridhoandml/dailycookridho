<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const links = reactive([
  {
    "url": "/",
    "title": "Home",
  },
  {
    "url": "/recommendations",
    "title": "Recommendations",
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
</template>

<style lang="postcss">
body {
  @apply bg-gradient-to-br	from-orange-200 to-yellow-500;
}
#app {
  min-height: 100vh;
}
</style>
