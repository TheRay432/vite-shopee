<script setup lang="ts">
import type { IconButtonProps } from "./class/index-obj";

withDefaults(defineProps<IconButtonProps>(), {
  isNeedBorder: false,
  iconSize: "normal",
  iconColor: "text-white",
});
const emit = defineEmits(["clickEvent"]);
</script>
<template>
  <i
    class="p-2 rounded-md w-12 text-center cursor-pointer mx-2"
    :class="{
      border: isNeedBorder,
      [icon]: !!icon,
      [iconSize]: true,
      [iconColor]: true,
    }"
    @click.prevent="() => emit('clickEvent')"
  >
  </i>
</template>
<style scoped lang="scss">
.normal {
  @apply text-lg;
}
.large {
  @apply text-2xl;
}
</style>
