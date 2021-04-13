<template>
  <div id="content">
    <Hero
      :badge="$tc('general.application', 1)"
      title="pages.apply.hero.title"
      description="pages.apply.hero.description"
      verticalAlign="top"
      illustrationWidth="wide"
    >
      <ApplicationForm />
    </Hero>
    <Section color="grey" padding="none">
      <HelpBanner />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Section from "@/blocks/Section";
import Hero from "@/blocks/Hero";
import TextWithDescription from "@/blocks/TextWithDescription";
import HelpBanner from "@/blocks/HelpBanner";
import ApplicationForm from "@/forms/Application";

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithDescription,
    HelpBanner,
    ApplicationForm
  },
  head() {
    return {
      title:
        (this as any).$i18n.t("pages.apply.seo.title") +
        (this as any).$i18n.t("seo.seperator") +
        (this as any).$i18n.t("seo.site_title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: (this as any).$i18n.t("pages.apply.seo.description")
        }
      ]
    };
  }
});
</script>