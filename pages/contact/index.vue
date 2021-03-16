<template>
  <div>
    <Hero
      title="Wir sind da, um Ihnen zu helfen"
      description="Du hast Fragen? Dann nehme jetzt Kontakt mit uns auf"
      alignment="center"
      :cta="ctasHero"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/blocks/Hero";

export default Vue.extend({
  components: {
    Hero,
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
    };
  },
});
</script>
