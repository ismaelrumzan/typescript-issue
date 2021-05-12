<template>
  <div>
    <Hero
      alignment="center"
      v-bind="$t('pages.api.hero')"
      padding="small"
      style="padding-bottom: 3rem"
    />
    <Swagger />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Hero from '@/blocks/Hero';
import Swagger from '@/components/Swagger';

export default Vue.extend({
  components: {
    Hero,
    Swagger
  }
});
</script>
