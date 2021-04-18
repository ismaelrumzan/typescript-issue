<template>
  <div id="content">
    <Hero
      badge="pages.backoffice.title"
      title="pages.backoffice.hero.title"
      description="pages.backoffice.hero.description"
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
        :title="
          $t('phrases.solutions_in', { area: $t('pages.backoffice.title') })
        "
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
          v-for="solution in backofficeSolutions"
          :key="solution.link"
          v-bind="{ ...solution, moreLink: solution.link }"
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
    backofficeSolutions() {
      return solutions.filter(
        (solution: any) => solution.category === "backoffice"
      );
    }
  }
});
</script>