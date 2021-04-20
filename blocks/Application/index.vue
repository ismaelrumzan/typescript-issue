<template>
  <TextWithImage
    title="blocks.apply.title"
    description="blocks.apply.description"
    padding="none"
    illustration="team"
    :cta="[
      {
        title: 'blocks.apply.as_partner',
        href: '/apply'
      },
      {
        title: 'blocks.apply.as_developer',
        type: 'tertiary',
        href: '/careers'
      }
    ]"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import TextWithImage from '@/blocks/TextWithImage';

export default Vue.extend({
  components: {
    TextWithImage
  }
});
</script>
