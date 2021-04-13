<template>
  <div id="content">
    <Section padding="none">
      <TextWithDescription
        badge="phrases.all_solutions"
        title="pages.solutions.hero.title"
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
  head() {
    return {
      title: (this as any).$i18n.t("pages.solutions.seo.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: (this as any).$i18n.t("pages.solutions.seo.description")
        }
      ]
    };
  },
  data() {
    return {
      solutions
    };
  }
});
</script>