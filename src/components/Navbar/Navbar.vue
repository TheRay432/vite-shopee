<script setup lang="ts">
import BaseContainer from "@/components/BaseContainer/BaseContainer.vue";
import InputSearch from "@/components/Input/InputSearch.vue";
import IconButton from "@/components/IconButton/IconButton.vue";
import { ref } from "vue";

/** 搜尋文字 */
const searchText = ref("");
/** 搜尋事件 */
function handleSearch(): void {
  console.log("searchText", searchText.value);
}
</script>
<template>
  <nav class="bg-orange">
    <BaseContainer>
      <!-- 使用者資訊/登出區塊 -->
      <div class="flex justify-between text-sm py-2">
        <div class="flex text-white">
          <span class="mr-2">{{ $t("navbar.label.center") }}</span>
          <span class="bg-lightOrange w-1"></span>
          <span class="ml-2">{{ $t("navbar.label.download") }}</span>
        </div>
        <div class="flex text-white">
          <span class="mr-2">使用者1</span>
          <span class="bg-lightOrange w-1"></span>
          <span class="ml-2">{{ $t("navbar.label.logout") }}</span>
        </div>
      </div>
      <!-- 搜尋列區塊 -->
      <div class="py-4 flex items-center">
        <span class="flex items-center text-white mr-2 shrink">
          <svg
            class="mr-1 mb-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
            />
          </svg>
          <h1 class="text-lg">XX拍賣</h1>
        </span>
        <!-- 搜尋列 -->
        <div class="flex grow items-center">
          <InputSearch v-model="searchText" />
          <IconButton
            :icon="'bi bi-search'"
            :is-need-border="true"
            @click-event="handleSearch"
          />
          <IconButton :icon="'bi bi-cart-plus'" :is-need-border="true" />
        </div>
      </div>
    </BaseContainer>
  </nav>
</template>
