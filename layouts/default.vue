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

<style lang="scss">
/* Global fixes for non-module classes */

/* Syntax Highlighter */
.nuxt-content-highlight {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  background: var(--light-2);
  border-radius: var(--border-radius-medium);
  border: 1px solid var(--light-5);
  // box-shadow: var(--shadow-small);
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: var(--light);
  }

  pre[class*="language-"] {
    padding: 1.25rem 1.35rem;
    margin: 0;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    font-family: var(--font-code);
    font-size: 0.95rem;
    color: var(--dark);
    text-shadow: none;
  }

  .filename {
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.85rem;
    padding: 0.425rem 1.35rem;
    display: block;
    border-bottom: 1px solid var(--light-5);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    background: none;
  }
}

[data-theme="dark"] {
  .nuxt-content-highlight {
    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background: #080808;
    }

    .filename {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>