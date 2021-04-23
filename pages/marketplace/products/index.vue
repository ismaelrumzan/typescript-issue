<template>
  <div id="content">
    <Hero
      title="Lorem Ipsum et cetera"
      description="Mit dem Betriebsystem für Unternehmen: Wir verschaffen Dir mehr Zeit, erhöhen die Qualität Deiner Abläufe und steigern Deine Produktivität und Wirtschaftlichkeit."
      alignment="center"
    />
    <Section noPadding>
      <HelpBanner />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Section from '@/blocks/Section';
import Hero from '@/blocks/Hero';
import TextWithDescription from '@/blocks/TextWithDescription';
import HelpBanner from '@/blocks/HelpBanner';

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithDescription,
    HelpBanner
  }
});
</script>
