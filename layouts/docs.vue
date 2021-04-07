<template>
  <main id="wrapper" data-layout="docs">
    <Header />
    <div class="docs">
      <Sidebar />
      <div class="content">
        <Nuxt />
      </div>
    </div>
    <Footer />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { MutationType, StorageKeys } from "@/store";

export default Vue.extend({
  components: {
    Header,
    Footer,
    Sidebar
  },
  mounted() {
    /* Set Color Theme */
    const theme = localStorage.getItem(StorageKeys.THEME);
    if (theme) {
      this.$store.commit(MutationType.SET_THEME, theme);
      document.documentElement.dataset.mode = theme;

      /* Use System Config initially */
    } else {
      const userPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (userPrefersDark) {
        this.$store.commit(MutationType.SET_THEME, "dark");
      }
    }
  }
});
</script>

<style lang="scss" scoped>
// [data-layout="docs"] {
//   --max-width: 90rem;
// }
.docs {
  display: grid;
  grid-template-columns: 20rem 1fr;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--horizontal-padding);

  .content {
    padding: var(--docs-gap);
  }
}
</style>