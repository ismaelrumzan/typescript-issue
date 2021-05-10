<template>
  <img v-if="isDarkMode" src="/logos/oktus_white.svg" />
  <img v-else src="/logos/oktus.svg" />
</template>

<script lang="ts">
import Vue from 'vue';
import { RootState } from '~/store';
import styles from './styles.module.scss?module';

export default Vue.extend({
  data() {
    return {
      styles
    };
  },
  computed: {
    isDarkMode(): boolean {
      return (this.$store.state as RootState).theme === 'dark';
    }
  }
});
</script>
