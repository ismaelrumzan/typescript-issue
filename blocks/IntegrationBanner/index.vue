<template>
  <TextWithImage
    :class="[styles.banner, 'integration-banner']"
    badge="phrases.easy_integration"
    title="phrases.connect_your_system"
    description="blocks.integration.description"
    alignment="center"
    :cta="[{ title: 'phrases.get_started', href: '/apply' }]"
    illustration="main"
    :illustrationStyles="{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: '-1',
      filter: isDarkMode ? 'grayscale(1)' : 'opacity(1)',
      opacity: isDarkMode ? 0.15 : 0.2,
      transform: 'scale(1.75)'
    }"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import TextWithImage from '@/blocks/TextWithImage';
import { RootState } from '~/store';

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
      return (this.$store.state as RootState).theme === 'dark';
    }
  }
});
</script>

<style lang="scss">
.integration-banner {
  #elem1,
  #elem2,
  #elem3,
  #elem4,
  #elem5,
  #elem6,
  #elem7,
  #elem8,
  #elem9,
  #elem10 {
    path {
      fill: var(--main-color-light-8) !important;
    }
  }

  #elem1ball,
  #elem2ball,
  #elem3ball,
  #elem4ball,
  #elem5ball,
  #elem6ball,
  #elem7ball,
  #elem8ball,
  #elem9ball,
  #elem10ball {
    display: none !important;
  }
}

[data-theme='dark'] {
  .integration-banner {
    #elem1,
    #elem2,
    #elem3,
    #elem4,
    #elem5,
    #elem6,
    #elem7,
    #elem8,
    #elem9,
    #elem10 {
      path {
        fill: var(--main-color-dark-3) !important;
      }
    }
  }
}
</style>
