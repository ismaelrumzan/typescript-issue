<template>
  <div id="content">
    <Hero
      badge="pages.operations.title"
      title="Automatisiere Deine Prozesse"
      description="Wir erleichtern Deinen Mitarbeitern Informationen sicher und effizient abzulegen und Prozesse sinnvoll zu automatisieren. Damit sorgen wir für eine hohe Datenqualität und individuelles Reporting für wichtige  Bereiche im Hotelbetrieb."
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
        badge="pages.all_solutions"
        title="Lösungen im Bereich Operations"
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
          v-for="solution in operationsSolutions"
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
    operationsSolutions() {
      return solutions.filter(
        (solution: any) => solution.category === "operations"
      );
    }
  }
});
</script>