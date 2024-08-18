<script setup lang="ts">
import { ref } from 'vue';

const dataProducts = ref<{
  title: string,
  image: string,
  links?: {
    shopee?: string,
    blibli?: string,
    tokopedia?: string
  }
}[]>([
  {
    "title": "Calypso Panci Steamer Stainless Steel",
    "image": "https://down-id.img.susercontent.com/file/id-11134207-7r98z-ln11rm9g73z18d",
    "links": {
      "shopee": "https://s.shopee.co.id/2LEnA5Bv8t",
      "tokopedia": "https://tokopedia.link/hzzfHTrB8Lb"
    }
  },
  {
    "title": "Subron Wajan Mini Stainless",
    "image": "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lnr4ppq4mhvl32",
    "links": {
      "shopee": "https://s.shopee.co.id/8zlh6SfFmi",
      "tokopedia": "https://tokopedia.link/HrqZqjZD8Lb"
    }
  },
])
</script>

<template>
  <section class="flex flex-col justify-start items-center px-8 pb-10 pt-4 min-h-screen h-full">
    <div class="flex flex-col gap-5 max-w-[400px] w-full bg-white p-4 rounded shadow-sm">
      <!-- Searchbar -->
      <div>
      </div>
      <div class="grid gap-4 grid-cols-2">
        <article
          v-for="product in dataProducts"
          class="rounded shadow-sm">
          <img class="w-full h-[120px] object-cover" :src="product.image" :alt="product.title">
          <div class="flex flex-col gap-2 p-2">
            <h3 class="text-sm text-slate-900 font-semibold text-ellipsis">{{ product.title }}</h3>
            <div v-if="product.links" class="flex flex-col gap-1">
              <a v-if="product.links.blibli" :href="product.links.blibli" target="_blank" class="text-sm text-blue-500">Blibli</a>
              <a v-if="product.links.tokopedia" :href="product.links.tokopedia" target="_blank" class="text-sm text-green-500">Tokopedia</a>
              <a v-if="product.links.shopee" :href="product.links.shopee" target="_blank" class="text-sm text-orange-500">Shopee</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
