<template>
  <div :class="styles.select">
    <select @change="handleChange($event)">
      <slot />
    </select>
    <span :class="styles.icon">
      <Icon name="Select" />
    </span>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";
import Icon from "@/components/Icon";

export default Vue.extend({
  components: {
    Icon
  },
  data() {
    return {
      styles
    };
  },
  methods: {
    handleChange(e: any) {
      this.$emit("change", e);
    }
  }
});
</script>