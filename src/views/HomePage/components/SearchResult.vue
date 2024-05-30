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
import Paginator from "@/components/Paginator/Paginator.vue";
import { computed } from "vue";
import axios from "axios";
import { getAllProducts } from "@/api/products/products";

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

/** 所有產品資料 */
const productList = ref<CardObj[]>([]);
/** 是否顯示 */
const isShow = ref(false);
/** 現在分頁 */
const currentPage = ref(1);
/** 每頁顯示幾個產品 */
const perPage = 20;
onMounted(async () => {
  const res = await getAllProducts();
  console.log(res.data);
  productList.value = res.data;

  // productList.value = new Array(99).fill("0").map((_, index) => {
  //   return new CardObj(
  //     index.toString(),
  //     index === 0
  //       ? "測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品"
  //       : "這是一罐沐浴乳這是一罐沐浴乳這是一罐沐浴乳",
  //     "https://bruce-fe-ec.web.app/images/item.png",
  //     (2000 + index).toString(),
  //     (1000 + index).toString(),
  //     index % 2 === 0 ? "雙11優惠" : ""
  //   );
  // });
  isShow.value = true;
});
/** 分頁變更事件 */
function handelPageChange(page: number) {
  currentPage.value = page;
}
/** 每頁顯示的產品資料 */
const displayList = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return productList.value.slice(start, end);
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
  <!-- 卡片與分頁器 -->
  <template v-if="isShow">
    <!-- 卡片 -->
    <div class="-mx-2 ml-2 my-4 flex gap-4 flex-wrap">
      <template v-for="item in displayList" :key="item.productId">
        <Card :data="item" />
      </template>
    </div>
    <!-- 分頁器 -->
    <Paginator
      :data-length="productList.length"
      :per-page="perPage"
      @page-change="(page) => handelPageChange(page)"
    />
  </template>
</template>
