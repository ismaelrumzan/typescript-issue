<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="name"
    role="presentation"
  >
    <g :fill="color">
      <component :is="loadIcon" />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
      default: "Check"
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    color: {
      type: String,
      default: "currentColor"
    },
    viewBox: {
      type: String,
      default: "0 0 18 18"
    }
  },
  computed: {
    loadIcon() {
      return () => import(`@/assets/icons/${this.name}.vue`);
    }
  }
});
</script>