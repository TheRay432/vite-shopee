<script setup lang="ts">
import { ref } from "vue";
import {
  SearchButtonGroupEnum,
  stringToSearchButtonGroupEnum,
} from "../enum/index-enum";
import IconButton from "@/components/IconButton/IconButton.vue";
import ButtonFill from "@/components/Button/ButtonFill.vue";
import ButtonGroup from "@/components/Button/ButtonGroup.vue";
import type { ButtonGroupOption } from "@/components/Button/class/index-obj";
import Card from "@/components/Card/Card.vue";
import { CardObj } from "@/components/Card/class/index-obj";
import { onMounted } from "vue";

/** 頁籤 - 預設為綜合排名 */
const tab = ref(SearchButtonGroupEnum.Composite);

/** 頁籤切換事件 */
function handleTabChange(type: SearchButtonGroupEnum) {
  tab.value = type;
}

const tabList = ref<ButtonGroupOption[]>([
  { id: stringToSearchButtonGroupEnum("composite"), content: "綜合排名" },
  { id: stringToSearchButtonGroupEnum("new"), content: "最新商品" },
  { id: stringToSearchButtonGroupEnum("popular"), content: "熱銷商品" },
]);

const productList = ref<CardObj[]>([]);

onMounted(() => {
  productList.value = new Array(18).fill("0").map((_, index) => {
    return new CardObj(
      index.toString(),
      "這是一罐沐浴乳這是一罐沐浴乳這是一罐沐浴乳",
      "https://bruce-fe-ec.web.app/images/item.png",
      (2000 + index).toString(),
      (1000 + index).toString(),
      index % 2 === 0 ? "雙11優惠" : ""
    );
  });
});
</script>
<template>
  <!-- 搜尋結果 -->
  <div class="flex items-center">
    <IconButton
      :icon="'bi bi-lightbulb'"
      :icon-size="'large'"
      :icon-color="'text-black'"
    />
    <p><span class="text-orange me-1 font-bold">沐浴乳</span>的搜尋結果</p>
  </div>
  <!-- 按鈕群組區域 -->
  <ButtonGroup
    class="mx-2"
    :data="tabList"
    :tab="tab"
    @tab-change="(type) => handleTabChange(type)"
  />

  <div class="-mx-2 ml-2 my-4 flex gap-4 flex-wrap">
    <template v-for="item in productList" :key="item.productId">
      <Card :data="item" />
    </template>
  </div>
</template>
<style scoped lang="scss">
.truncate-2-lines {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 限制行数为2 */
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5; /* 根据需要调整行高 */
  max-height: calc(1.5em * 2); /* line-height乘以行数 */
  white-space: normal;
}
</style>
