<script setup lang="ts">
import FilterCondition from "@/components/FilterCondition/FilterCondition.vue";
import SearchResult from "@/views/HomePage/components/SearchResult.vue";
</script>
<template>
  <div class="flex mt-4">
    <div class="w-[20%]">
      <!-- 篩選元件 -->
      <FilterCondition />
    </div>
    <div class="w-[80%]">
      <SearchResult />
    </div>
  </div>
</template>
