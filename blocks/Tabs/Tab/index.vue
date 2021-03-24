<template>
  <div v-if="active" :class="[styles.tab, { [styles.active]: active }]">
    <slot />
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: "Tab"
    },
    description: {
      type: String
    }
  },
  data() {
    return {
      styles,
      active: true
    };
  }
});
</script>