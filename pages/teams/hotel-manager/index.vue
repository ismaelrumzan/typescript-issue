<template>
  <div id="content">
    <Hero
      title="Hero-Text zu dem Bereich Team Hoteldirektor"
      description="Mit dem Betriebsystem für Unternehmen: Wir verschaffen Dir mehr Zeit, erhöhen die Qualität Deiner Abläufe und steigern Deine Produktivität und Wirtschaftlichkeit."
      alignment="left"
      illustration="example"
      :cta="ctasHero"
    />
    <Section color="main" skew="positive">
      <TextWithImage
        badge="Digital Hub"
        title="Schalte Dein Unternehmen auf Autopilot"
        description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
        alignment="center"
        :cta="ctaFirst"
      />
    </Section>
    <Section>
      <TextWithImage
        badge="Digital Hub"
        title="Schalte Dein Unternehmen auf Autopilot"
        description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
        alignment="left"
        :cta="ctaFirst"
      />
    </Section>
    <Section noPadding>
      <HelpBanner />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Section from "@/blocks/Section";
import Hero from "@/blocks/Hero";
import TextWithImage from "@/blocks/TextWithImage";
import HelpBanner from "@/blocks/HelpBanner";

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithImage,
    HelpBanner,
  },
  data() {
    return {
      ctasHero: [
        {
          title: "Jetzt starten",
          href: "/about",
        },
        {
          title: "Unser Konzept",
          type: "secondary",
          href: "/about",
        },
      ],
      ctaFirst: [
        {
          title: "Mehr erfahren",
          href: "/about",
        },
      ],
    };
  },
});
</script>