<template>
  <div :class="[styles.box, styles[type]]">
    <slot />
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";

type BoxType = "info" | "warning" | "error" | "success";

export default Vue.extend({
  props: {
    type: {
      type: String as PropType<BoxType>,
      default: "info"
    }
  },
  data() {
    return {
      styles
    };
  }
});
</script>