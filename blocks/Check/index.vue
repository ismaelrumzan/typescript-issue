<template>
  <div :class="styles.check">
    <Icon name="Check" :class="styles.icon" />
    <span v-html="html">
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import Icon from '@/components/Icon';

export default Vue.extend({
  components: {
    Icon
  },
  data() {
    return {
      styles,
      html: {} as string | undefined
    };
  },
  created() {
    this.html = this.$slots.default?.[0].text;
  }
});
</script>
