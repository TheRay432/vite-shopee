<script setup lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue";
import { RouterView, useRoute } from "vue-router";
import BaseContainer from "@/components/BaseContainer/BaseContainer.vue";
import BaseSwiper from "@/components/BaseSwiper/BaseSwiper.vue";
import { computed } from "vue";
import Loading from "@/components/Loading/Loading.vue";

const route = useRoute();
const isHome = computed(() => route.path === "/");
</script>

<template>
  <Navbar />
  <BaseSwiper v-if="isHome" />
  <div class="pb-12">
    <BaseContainer>
      <router-view></router-view>
    </BaseContainer>
  </div>
  <Loading />
</template>
