<template>
  <button @click="toggleMenu" :class="[styles.toggle, { [styles.open]: open }]">
    <span></span>
    <span></span>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";
import { MutationType, RootState } from "@/store";

export default Vue.extend({
  data() {
    return {
      styles,
    };
  },
  computed: {
    open(): boolean {
      return (this.$store.state as RootState).menuOpen;
    },
  },
  methods: {
    toggleMenu(): void {
      this.$store.commit(MutationType.TOGGLE_MENU);
    },
  },
});
</script>
