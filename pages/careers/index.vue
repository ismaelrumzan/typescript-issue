<template>
  <div id="content">
    <Hero
      title="pages.careers.hero.title"
      description="pages.careers.hero.description"
      alignment="center"
      illustration="world_light"
      darkIllustration="world_dark"
      :illustrationStyles="{ height: 'inherit' }"
      class="hero"
      padding="none"
      gap="none"
      fullWidth
      :cta="[
        { title: 'phrases.apply_now', href: '#apply' },
        { title: 'pages.about.title', href: '/about', type: 'secondary' }
      ]"
    />
    <Section color="main" id="apply">
      <TextWithDescription
        title="phrases.apply_now"
        alignment="center"
        padding="topOnly"
        style="padding-bottom: 1.25rem"
      />
      <JobForm />
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
import HelpBanner from "@/blocks/HelpBanner";
import JobForm from "@/forms/Job";

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithDescription,
    HelpBanner,
    JobForm
  }
});
</script>

<style lang="scss">
.hero {
  svg {
    min-width: 40rem;
  }
}
</style>