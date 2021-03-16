<template>
  <div>
    <Hero
      title="Oops..."
      description="Die Seite scheint nicht zu existieren"
      alignment="center"
      :cta="ctas"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/blocks/Hero";

export default Vue.extend({
  scrollToTop: true,
  components: {
    Hero
  },
  data() {
    return {
      ctas: [
        {
          title: "Zur Startseite",
          href: "/"
        }
      ]
    };
  }
});
</script>