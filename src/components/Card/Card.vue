<script setup lang="ts">
import Banner from "@/components/Banner/Banner.vue";
import type { CardProps } from "./class/index-obj";

defineProps<CardProps>();
</script>
<template>
  <div
    class="w-[calc(20%-1rem)] h-full bg-white border border-gray-300 rounded-md card-item cursor-pointer relative"
  >
    <img
      :src="data.productImage"
      class="object-contain w-full h-full rounded-tl-md rounded-tr-md"
    />
    <div class="p-2">
      <h1 class="text-orange text-xl min-h-6 my-2">${{ data.price }}</h1>
      <p class="text-black text-sm truncate-2-lines">
        {{ data.productName }}
      </p>
      <div class="text-end w-full my-2">
        <p class="text-black text-xs">已售出 {{ data.sold }}</p>
      </div>
    </div>
    <Banner v-if="data.banner" :content="data.banner" />
  </div>
</template>
