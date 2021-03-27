<template>
  <div :class="[styles.grid, styles[columnClass]]">
    <slot />
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";

export default Vue.extend({
  props: {
    columns: {
      type: [Number, String],
      default: 3
    }
  },
  data() {
    return {
      styles
    };
  },
  computed: {
    columnClass(): string {
      const val = parseInt(`${this.columns}`);
      return `col-${val}`;
    }
  }
});
</script>