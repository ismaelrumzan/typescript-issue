<template>
  <div :class="[styles.loader, styles[size]]">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";

type LoaderSize = "small" | "medium" | "large";

export default Vue.extend({
  props: {
    size: {
      type: String as PropType<LoaderSize>,
      default: "medium"
    }
  },
  data() {
    return {
      styles
    };
  }
});
</script>