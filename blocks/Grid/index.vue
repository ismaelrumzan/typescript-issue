<template>
  <div
    :class="[
      styles.grid,
      styles[columnClass],
      styles[paddingClass],
      styles[gapClass]
    ]"
  >
    <slot />
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";

type PaddingOption = "small" | "medium" | "large" | "none";
type GapOption = "small" | "medium" | "large" | "none";

export default Vue.extend({
  props: {
    columns: {
      type: [Number, String],
      default: 3
    },
    padding: {
      type: String as PropType<PaddingOption>,
      default: "medium"
    },
    gap: {
      type: String as PropType<GapOption>,
      default: "large"
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
    },
    paddingClass(): string {
      return `pad-${this.padding}`;
    },
    gapClass(): string {
      return `gap-${this.gap}`;
    }
  }
});
</script>