<template>
  <div id="content">
    <Hero v-bind="$t('pages.contact.hero')" alignment="center">
      <ContactForm />
    </Hero>
    <Section color="grey" padding="none">
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
import ContactForm from '@/forms/Contact';

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithDescription,
    HelpBanner,
    ContactForm
  }
});
</script>
