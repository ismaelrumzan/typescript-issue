<template>
  <div id="content">
    <Hero
      badge="pages.assistants"
      title="Einfache Abläufe mit unseren Assistenten"
      description="Vereinfache die täglichen Prozesse, vom Check-In bis zu XYZ mithilfe unserer Assistenten."
      illustration="example"
      :cta="[
        {
          title: 'Jetzt starten',
          href: '/apply',
        },
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
    HelpBanner,
  },
});
</script>