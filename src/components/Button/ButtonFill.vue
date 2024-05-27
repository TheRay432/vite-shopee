<script setup lang="ts">
import type { IButtonProps } from "./class/index-obj";

withDefaults(defineProps<IButtonProps>(), {
  bgColor: "bg-orange",
});

const emit = defineEmits<{
  /** 按鈕點擊事件 */
  clickEvent: [];
}>();
</script>
<template>
  <button
    class="w-full text-white border bg-orange rounded-md py-2 px-3 flex items-center justify-center"
    @click.stop="emit('clickEvent')"
  >
    <i v-if="!!dataOption.icon" class="text-lg" :class="dataOption.icon"></i>
    <p>{{ dataOption.content }}</p>
  </button>
</template>
