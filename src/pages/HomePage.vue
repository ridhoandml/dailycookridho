<script setup lang="ts">
import { reactive } from 'vue';
import socialMediaLink from '../data/socialMediaLink.json'
import recipeLink from '../data/recipeLink.json'

const socialMediaLinks = reactive(socialMediaLink)
const recipeLinks = reactive(recipeLink)
</script>

<template>
  <section class="flex gap-4 flex-col justify-start items-center px-8 pb-10 pt-4 min-h-screen h-full">
    <div class="flex flex-col gap-5 max-w-[400px] w-full bg-white p-4 rounded shadow-sm">
      <div class="flex flex-col items-center gap-2">
        <img class="w-20 h-20 rounded-full" src="../assets/img/profile-picture.jpg" alt="@dailycookridho">
        <p class="text-slate-500 text-sm">@dailycookridho</p>
      </div>
      <div class="flex flex-col gap-4">
        <a
          v-for="link in socialMediaLinks"
          :href="link.link"
          class="flex flex-row justify-between items-center px-4 py-3 text-sm font-medium text-slate-900 bg-yellow-100 rounded">
          <span>{{ link.title }}</span>
          <i v-if="link.isExternal" class="bx bx-link-external"></i>
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-4 max-w-[400px] w-full bg-white p-4 rounded shadow-sm">
      <p class="text-slate-500 text-sm">Cookpad Latest</p>
      <a
        v-for="link in recipeLinks"
        :href="link.link"
        class="flex flex-row justify-between items-center px-4 py-3 text-sm font-medium text-slate-900 bg-yellow-100 rounded">
        <span>{{ link.title }}</span>
      </a>
    </div>
  </section>
</template>
