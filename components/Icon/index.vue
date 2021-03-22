<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :aria-labelledby="name"
    role="presentation"
  >
    <g :fill="color">
      <component :is="loadIcon" @ready="setViewBox" />
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
      default: 32
    },
    height: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: "currentColor"
    }
  },
  computed: {
    loadIcon() {
      const component = import(`@/assets/icons/${this.name}.vue`);
      return () => component;
    }
  },
  data() {
    return {
      viewBox: `0 0 ${this.width} ${this.height}`
    };
  },
  methods: {
    setViewBox(e: string) {
      this.viewBox = e;
    }
  }
});
</script>