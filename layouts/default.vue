<template>
  <main id="wrapper">
    <Header />
    <Nuxt />
    <Footer />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MutationType, StorageKeys } from "@/store";

export default Vue.extend({
  components: {
    Header,
    Footer
  },
  mounted() {
    const theme = localStorage.getItem(StorageKeys.THEME);
    if (theme) {
      this.$store.commit(MutationType.SET_THEME, theme);
      document.documentElement.dataset.mode = theme;
    }
  }
});
</script>
