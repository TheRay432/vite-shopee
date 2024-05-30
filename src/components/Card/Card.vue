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
      class="object-contain inset-y-0 w-full h-full rounded-tl-md rounded-tr-md"
    />
    <div class="p-2">
      <h1 class="text-orange text-xl min-h-6 my-2">${{ data.price }}</h1>
      <p class="text-black text-sm truncate-2-lines break-words min-h-[2.5rem]">
        {{ data.productName }}
      </p>
      <div class="text-end w-full my-4">
        <p class="text-black text-xs">已售出 {{ data.sold }}</p>
      </div>
    </div>
    <Banner v-if="data.banner" :content="data.banner" />
  </div>
</template>
<style scoped lang="scss">
.truncate-2-lines {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 限制兩行 */
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
