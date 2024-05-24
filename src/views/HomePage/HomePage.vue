<script setup lang="ts">
import IconButton from "@/components/IconButton/IconButton.vue";
</script>
<template>
  <div class="flex">
    <div class="w-[30%]">
      <div class="flex items-center">
        <IconButton
          :icon="'bi bi-menu-button-wide'"
          :icon-size="'large'"
          :icon-color="'text-black'"
        />
        <p>條件篩選</p>
      </div>
    </div>
    <div class="w-[70%]">456</div>
  </div>
</template>
