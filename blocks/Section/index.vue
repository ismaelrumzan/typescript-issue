<template>
  <section
    :class="[
      styles.section,
      styles[color],
      styles[variant],
      styles[skew],
      styles[paddingClass],
      styles[overflowClass],
      { [styles.isSkewed]: skew },
      { [styles.noPadding]: noPadding || padding === 'none' },
      { [styles.fullWidth]: fullWidth }
    ]"
    :data-section-theme="color"
    :data-section-no-padding="noPadding"
  >
    <div :class="styles.container">
      <div :class="styles.content">
        <slot />
      </div>
    </div>
    <div v-if="skew" :class="styles.skewContainer">
      <span :class="styles.skew"></span>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";

export type BackgroundColor = "default" | "main" | "light" | "dark" | "grey";
export type BackgroundVariant = "default" | "gradient";
export type OverflowOptions = "visible" | "hidden";
export type PaddingOptions =
  | "default"
  | "small"
  | "topOnly"
  | "bottomOnly"
  | "none";

export type SkewOption =
  | "positive"
  | "negative"
  | "positiveTop"
  | "negativeTop"
  | "positiveBottom"
  | "negativeBottom";

export default Vue.extend({
  props: {
    color: {
      type: String as PropType<BackgroundColor>
    },
    variant: {
      type: String as PropType<BackgroundVariant>
    },
    skew: {
      type: String as PropType<SkewOption>
    },
    overflow: {
      type: String as PropType<OverflowOptions>,
      default: "visible"
    },
    padding: {
      type: String as PropType<PaddingOptions>,
      default: "default"
    },
    noPadding: {
      type: Boolean
    },
    fullWidth: {
      type: Boolean
    }
  },
  data() {
    return {
      styles
    };
  },
  computed: {
    paddingClass(): string {
      return `pad-${this.padding}`;
    },
    overflowClass(): string {
      return `overflow-${this.overflow}`;
    }
  }
});
</script>