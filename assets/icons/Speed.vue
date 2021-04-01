<template>
  <g>
    <path
      d="M14.371,0.001C6.434,0.001,0,6.435,0,14.373s6.434,14.373,14.371,14.373c7.939,0,14.375-6.435,14.375-14.373   S22.311,0.001,14.371,0.001z M14.371,26.594c-6.75,0-12.221-5.472-12.221-12.221c0-6.75,5.471-12.222,12.221-12.222   s12.221,5.472,12.221,12.222C26.592,21.122,21.121,26.594,14.371,26.594z"
    />
    <g
      style="transform-origin: center; transform: rotate(-11deg) translateY(0px)"
    >
      <polygon
        points="19.006,5.897 8.592,16.25 12.455,16.25 9.488,24.107 20.15,13.753 16.287,13.753  "
      />
    </g>
  </g>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      viewBox: "0 0 28.746 28.746"
    };
  },
  mounted() {
    this.$emit("ready", this.viewBox);
  }
});
</script>