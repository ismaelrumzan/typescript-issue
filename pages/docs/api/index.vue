<template>
  <div id="content">
    <Hero
      alignment="center"
      badge="Swagger UI"
      title="pages.api.hero.title"
      padding="small"
      style="padding-bottom: 3rem"
    />
    <Section color="grey" padding="small">
      <Swagger />
    </Section>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Hero from "@/blocks/Hero";
import Section from "@/blocks/Section";
import Swagger from "@/components/Swagger";

export default Vue.extend({
  components: {
    Hero,
    Section,
    Swagger
  }
});
</script>