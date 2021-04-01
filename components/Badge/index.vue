<template>
  <div :class="styles.badge">
    <span>{{ $t(text) }}</span>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      styles
    };
  }
});
</script>