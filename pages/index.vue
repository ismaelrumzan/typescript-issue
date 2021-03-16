<template>
  <div>
    <Hero
      title="Schalte Dein Unternehmen auf Autopilot"
      description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
      alignment="left"
      :cta="ctasHero"
    />
    <TextWithImage
      badge="Digital Hub"
      title="Schalte Dein Unternehmen auf Autopilot"
      description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
      alignment="right"
      :cta="ctaFirst"
    />
    <TextWithImage
      badge="Digital Hub"
      title="Schalte Dein Unternehmen auf Autopilot"
      description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
      alignment="left"
      :cta="ctaFirst"
    />
    <TextWithImage
      badge="Digital Hub"
      title="Schalte Dein Unternehmen auf Autopilot"
      description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
      alignment="center"
      :cta="ctaFirst"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/blocks/Hero";
import TextWithImage from "@/blocks/TextWithImage";

export default Vue.extend({
  components: {
    Hero,
    TextWithImage,
  },
  data() {
    return {
      ctasHero: [
        {
          title: "Jetzt starten",
          href: "/about",
        },
        {
          title: "Unsere Pläne",
          type: "secondary",
          href: "/pricing",
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
