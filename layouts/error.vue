<template>
  <div>
    <Hero
      title="404"
      description="Oops... die Seite scheint nicht zu existieren"
      alignment="center"
      illustration="404"
      :cta="ctas"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/blocks/Hero";
import { MutationType, StorageKeys } from "@/store";

export default Vue.extend({
  components: {
    Hero
  },
  data() {
    return {
      ctas: [
        {
          title: "Zur Startseite",
          href: "/"
        }
      ]
    };
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