<template>
  <!-- 卡片外层容器 -->
  <div :style="width ? { width: width + 'px' } : {}" class="duyi-card">
    <!-- 卡片图片 -->
    <div
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
      class="duyi-card-img"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <!-- 卡片描述 -->
    <!-- 卡片描述会有两种情况： -->
    <!-- 1. 通过 props 传递过来 -->
    <!-- 2. 通过 slot 插槽来设置 -->
    <div v-if="summary" class="duyi-card-summary">
      {{ summary }}
    </div>
    <div v-else class="duyi-card-summary">
      <slot></slot>
    </div>
    <!-- 最后指定卡片的 footer -->
    <div class="duyi-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cardProps } from "./card";

export default defineComponent({
  name: "DuyiCard",
  props: cardProps,
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
