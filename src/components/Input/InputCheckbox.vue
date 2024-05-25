<script setup lang="ts">
import { computed } from "vue";
import type { InputCheckboxGroupItem } from "./interface";

const props = defineProps<InputCheckboxGroupItem>();

/** 外部傳進來的-主要用來抓選取後的key值 */
const model = defineModel<string[]>();
/** 判斷是否已選取 */
const checked = computed(() => model.value?.includes(props.id));
/** checkbox選取事件 */
function handleClick(): void {
  checked.value
    ? (model.value = model.value?.filter((v) => v !== props.id))
    : (model.value = [...(model.value ?? []), props.id]);
}
</script>
<template>
  <div class="flex items-center my-4 cursor-pointer" @click.stop="handleClick">
    <input
      :id="id"
      type="checkbox"
      class="form-checkbox h-4 w-4 text-blue-600 cursor-pointer"
      :value="value"
      :name="id"
      :checked="checked"
    />
    <p class="text-sm ml-2">{{ value }}</p>
  </div>
</template>
