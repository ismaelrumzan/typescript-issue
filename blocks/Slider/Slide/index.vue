<template>
  <div :class="styles.content">
    <slot />
  </div>
</template>


<script lang='ts'>
import Vue from "vue";
import styles from "../styles.module.scss?module";

export default Vue.extend({
  data() {
    return {
      styles
    };
  }
});
</script>