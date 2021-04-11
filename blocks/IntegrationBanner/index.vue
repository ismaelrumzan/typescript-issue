<template>
  <TextWithImage
    badge="phrases.easy_integration"
    title="phrases.connect_your_system"
    description="Wir besitzen Schnittstellen zu den beliebtesten Herstellern"
    alignment="center"
    :cta="[{ title: 'phrases.get_started', href: '/apply' }]"
    illustration="main_light"
    darkIllustration="main_dark"
    :illustrationStyles="{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: '-1',
      filter: isDarkMode
        ? 'grayscale(1) opacity(0.5)'
        : 'grayscale(1) opacity(0.8)',
      opacity: isDarkMode ? 0.35 : 0.1,
      transform: 'scale(1.75)'
    }"
  />
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";
import TextWithImage from "@/blocks/TextWithImage";
import { RootState } from "~/store";

export default Vue.extend({
  components: {
    TextWithImage
  },
  data() {
    return {
      styles
    };
  },
  computed: {
    isDarkMode() {
      return (this.$store.state as RootState).theme === "dark";
    }
  }
});
</script>