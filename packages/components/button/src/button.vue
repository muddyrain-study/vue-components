<script lang="ts">
import { defineComponent } from "vue";
import { buttonProps } from "./button";

export default defineComponent({
  name: "DuyiButton",
  props: buttonProps,
  emits: ["click"],
  setup(_, { emit }) {
    function clickHandle(e: Event) {
      emit("click", e);
    }

    return {
      clickHandle,
    };
  },
});
</script>
<template>
  <button
    :class="[
      `duyi-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    :disabled="disabled"
    class="duyi-button"
    @click="clickHandle"
  >
    <i v-if="icon" :class="`duyi-icon-${icon}`"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<style lang="scss" scoped></style>
