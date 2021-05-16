<template>
  <div v-if="count" :class="styles.count">
    <div
      v-for="(n, i) in +count"
      :key="i"
      :class="[
        styles.skeleton,
        { [styles.rounded]: rounded },
        { [styles.round]: round }
      ]"
      :style="{
        width: computedWidth,
        height: computedHeight,
        marginBottom: `${lineMargin}`
      }"
    ></div>
  </div>
  <div
    v-else
    :class="[
      styles.skeleton,
      { [styles.rounded]: rounded },
      { [styles.round]: round }
    ]"
    :style="{ width: computedWidth, height: computedHeight }"
  ></div>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';

export default Vue.extend({
  props: {
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    },
    size: String,
    rounded: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: false
    },
    count: [String, Number],
    lineMargin: {
      type: String,
      default: '0.875rem'
    }
  },
  computed: {
    computedHeight(): String {
      return this.size ? this.size : this.height;
    },
    computedWidth(): String {
      return this.size ? this.size : this.width;
    }
  },
  data() {
    return {
      styles
    };
  }
});
</script>
