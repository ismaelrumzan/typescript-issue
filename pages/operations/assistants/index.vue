<template>
  <div id="content">
    <Hero
      badge="pages.assistants.title"
      title="Beschleunige Prozesse in Deinem Hotel"
      description="Vereinfache die täglichen Abläufe im Hotel, vom Check-In bis zum Marketing. Mit Hilfe unserer Assistenten minimierst Du zeitaufwendige Aufgaben."
      illustration="assistants"
      :cta="[
        {
          title: 'Jetzt starten',
          href: '/apply'
        }
      ]"
    />
    <Section noPadding>
      <HelpBanner />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Section from "@/blocks/Section";
import Hero from "@/blocks/Hero";
import TextWithDescription from "@/blocks/TextWithDescription";
import HelpBanner from "@/blocks/HelpBanner";

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithDescription,
    HelpBanner
  }
});
</script>