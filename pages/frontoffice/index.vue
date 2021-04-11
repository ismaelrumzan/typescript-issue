<template>
  <div id="content">
    <Hero
      badge="pages.frontoffice.title"
      title="Alles rund um Deinen Gast"
      description="Ein großer Teil der Aufgaben besteht aus sich wiederholenden Prozessen. Wir optimieren und automatisieren diese Prozesse und ermöglichen den Zugriff über nur eine Benutzeroberfläche."
      alignment="center"
      :cta="[
        {
          title: 'phrases.get_started',
          href: '/apply'
        }
      ]"
    />
    <Section color="grey">
      <TextWithDescription
        badge="phrases.all_solutions"
        title="Lösungen im Bereich Frontoffice"
        alignment="center"
        padding="medium"
        style="padding-bottom: 2rem"
      />
      <Grid
        columns="3"
        searchable
        searchText="general.solution"
        padding="bottomOnly"
      >
        <Feature
          v-for="solution in frontofficeSolutions"
          :key="solution.link"
          :alignment="solution.alignment"
          :disabled="solution.disabled"
          :title="solution.title"
          :description="solution.description"
          :icon="solution.icon"
          :moreLink="solution.link"
        />
      </Grid>
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
import TextWithDescription from "@/blocks/TextWithDescription";
import Grid from "@/blocks/Grid";
import Feature from "@/blocks/Feature";
import HelpBanner from "@/blocks/HelpBanner";
import solutions from "@/data/solutions";

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithDescription,
    Grid,
    Feature,
    HelpBanner
  },
  computed: {
    frontofficeSolutions() {
      return solutions.filter(
        (solution: any) => solution.category === "frontoffice"
      );
    }
  }
});
</script>