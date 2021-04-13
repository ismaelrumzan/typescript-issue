<template>
  <div>
    <Hero
      title="pages.404.title"
      description="pages.404.description"
      alignment="center"
      illustration="404"
      :cta="[
        {
          title: $t('phrases.go_to_3', { page: $t('general.homepage') }),
          href: '/'
        }
      ]"
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

    window.scrollTo({
      top: 0
    });
  }
});
</script>