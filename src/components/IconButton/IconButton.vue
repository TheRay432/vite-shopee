<script setup lang="ts">
import type { IconButtonProps } from "./class/index-obj";

withDefaults(defineProps<IconButtonProps>(), {
  isNeedBorder: false,
});
const emit = defineEmits(["clickEvent"]);
</script>
<template>
  <i
    class="text-white p-2 rounded-md w-12 text-center cursor-pointer mx-2"
    :class="{
      border: isNeedBorder,
      [icon]: !!icon,
    }"
    @click.prevent="() => emit('clickEvent')"
  >
  </i>
</template>
