<template>
  <section
    :class="[
      styles.section,
      styles[color],
      styles[variant],
      styles[skew],
      { [styles.isSkewed]: skew },
      { [styles.noPadding]: noPadding },
      { [styles.fullWidth]: fullWidth }
    ]"
    :data-theme="color"
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
  }
});
</script>