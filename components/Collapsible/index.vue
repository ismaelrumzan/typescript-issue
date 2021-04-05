<template>
  <div :class="[styles.collapsible, { [styles.open]: open }]">
    <div :class="styles.header" @click="toggleOpen($event)">
      <span :class="styles.title">
        {{ title }}
      </span>
      <span :class="styles.icon">
        <span></span>
        <span></span>
      </span>
    </div>
    <div :class="styles.content">
      <div :class="styles.container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: "Title"
    },
    expanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      styles,
      open: this.expanded
    };
  },
  methods: {
    toggleOpen(e: any) {
      this.open = !this.open;
      const content = e.target.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  }
});
</script>