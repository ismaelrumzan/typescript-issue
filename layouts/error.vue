<template>
  <div>
    <Hero
      title="404"
      description="Oops... die Seite scheint nicht zu existieren"
      alignment="center"
      illustration="404"
      :cta="ctas"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/blocks/Hero";

export default Vue.extend({
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
  },
  mounted() {
    window.scrollTo({
      top: 0
    });
  }
});
</script>