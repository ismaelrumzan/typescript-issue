<template>
  <div id="content">
    <Hero
      badge="Bewerbung"
      title="Starte jetzt Deinen Weg zum letzten Login"
      description="Mit dem Betriebsystem für Unternehmen: Wir verschaffen Dir mehr Zeit, erhöhen die Qualität Deiner Abläufe und steigern Deine Produktivität und Wirtschaftlichkeit."
      verticalAlign="top"
      illustrationWidth="wide"
    >
      <ApplicationForm />
    </Hero>
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
import ApplicationForm from "@/forms/Application";

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithDescription,
    HelpBanner,
    ApplicationForm
  }
});
</script>