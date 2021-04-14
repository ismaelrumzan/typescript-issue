<template>
  <div>
    <Hero
      badge="pages.about.hero.badge"
      title="pages.about.hero.title"
      description="pages.about.hero.description"
      alignment="center"
    />
    <Section color="main" fullWidth>
      <FeatureSlider
        badge="pages.about.slider.badge"
        title="pages.about.slider.title"
      >
        <Slide
          v-for="(slide, i) in $t('pages.about.slider.slides')"
          :key="i"
          :title="slide.title"
          :description="slide.description"
        />
      </FeatureSlider>
    </Section>
    <Section>
      <TextWithDescription
        badge="pages.about.values.badge"
        title="pages.about.values.title"
        alignment="center"
        padding="medium"
        style="padding-bottom: 1.5rem"
      />
      <Grid columns="3">
        <Feature
          v-for="(value, i) in $t('pages.about.values.values')"
          :key="i"
          alignment="center"
          :title="value.title"
          :description="value.description"
          :icon="value.icon"
        />
      </Grid>
    </Section>
    <Section color="light" padding="none" style="padding-top: 1.25rem">
      <Application />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/blocks/Hero";
import Section from "@/blocks/Section";
import TextWithImage from "@/blocks/TextWithImage";
import TextWithDescription from "@/blocks/TextWithDescription";
import Grid from "@/blocks/Grid";
import Feature from "@/blocks/Feature";
import FeatureSlider from "@/blocks/FeatureSlider";
import Slide from "@/blocks/FeatureSlider/Slide";
import Application from "@/blocks/Application";

export default Vue.extend({
  components: {
    Hero,
    Section,
    TextWithImage,
    TextWithDescription,
    Grid,
    Feature,
    FeatureSlider,
    Slide,
    Application
  }
});
</script>
