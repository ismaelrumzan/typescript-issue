<template>
  <div id="content">
    <Section padding="none">
      <TextWithDescription
        badge="pages.all_solutions"
        title="Alle Lösungen im Überblick"
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
          v-for="solution in solutions"
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
  data() {
    return {
      solutions
    };
  }
});
</script>