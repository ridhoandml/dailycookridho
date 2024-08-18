<script setup lang="ts">
import type { ProductLink } from '@/types';
import { computed, ref } from 'vue';
import productsLink from '@/data/productsLink.json'

const dataProducts = ref<ProductLink[]>(productsLink)
const input = ref("")
const filtered = computed(() => {
  return dataProducts.value.filter( product => product.title.toLowerCase().includes(input.value))
})
</script>

<template>
  <section class="flex flex-col justify-start items-center px-8 pb-10 pt-4 min-h-screen h-full">
    <div class="flex flex-col gap-5 max-w-[400px] w-full bg-white p-4 rounded shadow-sm">
      <div class="flex flex-row items-center gap-2">
        <input class="flex-1 h-10 border border-slate-200 rounded text-sm px-2 focus:outline-slate-500" type="text" placeholder="Cari produk" v-model="input">
        <button class="h-10 w-20 bg-slate-700 text-white px-3 text-sm rounded hover:bg-slate-800 active:bg-slate-900 transition">Cari</button>
      </div>
      <div class="grid gap-4 grid-cols-2">
        <article
          v-for="product in filtered"
          class="rounded shadow-sm">
          <img class="w-full h-[120px] object-cover rounded-t" :src="product.image" :alt="product.title">
          <div class="flex flex-col items-start p-3">
            <span class="capitalize text-slate-500 text-[10px]">{{ product.category }}</span>
            <h3 class="text-sm text-slate-900 font-medium text-ellipsis mb-2">{{ product.title }}</h3>
            <div v-if="product.links" class="flex flex-col gap-2 text-xs font-medium">
              <a v-if="product.links.blibli" :href="product.links.blibli" target="_blank" class="text-blue-500">
                <img class="h-4" src="../assets/img/ecommerce/blibli.svg" alt="blibli logo">
              </a>
              <a v-if="product.links.tokopedia" :href="product.links.tokopedia" target="_blank" class="text-green-500">
                <img class="h-4" src="../assets/img/ecommerce/tokopedia.svg" alt="tokopedia logo">
              </a>
              <a v-if="product.links.shopee" :href="product.links.shopee" target="_blank" class="text-orange-500">
                <img class="h-4" src="../assets/img/ecommerce/shopee.svg" alt="shopee logo">
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
