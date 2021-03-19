<template>
  <span
    :class="styles.wrapper"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";

export default Vue.extend({
  props: {
    width: {
      type: [Number, String],
      default: 32
    },
    height: {
      type: [Number, String],
      default: 32
    }
  },
  data() {
    return {
      styles
    };
  }
});
</script>