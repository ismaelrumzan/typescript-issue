<template>
  <g>
    <path
      d="m400 216a23.928 23.928 0 0 1 -16.971-7.029l-127.029-127.03-127.029 127.03a24 24 0 0 1 -33.942-33.942l144-144a24 24 0 0 1 33.942 0l144 144a24 24 0 0 1 -16.971 40.971zm-127.029 264.971 144-144a24 24 0 0 0 -33.942-33.942l-127.029 127.03-127.029-127.03a24 24 0 0 0 -33.942 33.942l144 144a24 24 0 0 0 33.942 0z"
    />
  </g>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      viewBox: "0 0 512 512"
    };
  },
  mounted() {
    this.$emit("ready", this.viewBox);
  }
});
</script>