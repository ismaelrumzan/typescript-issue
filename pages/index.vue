<template>
  <div id="content">
    <Hero
      title="pages.index.hero.title"
      typewriter="pages.index.hero.typewriter"
      description="pages.index.hero.description"
      alignment="left"
      :titleStyles="{ maxWidth: '33rem' }"
      :illustrationStyles="{ transform: 'scale(1.075)' }"
      illustration="main"
      particles
      :cta="[
        {
          title: 'phrases.get_started',
          href: '/apply'
        },
        {
          title: 'pages.index.hero.concept',
          href: '/about',
          type: 'secondary'
        }
      ]"
    />
    <Section color="grey" padding="small">
      <InfiniteSlider v-bind="$t('pages.index.trusted')" />
    </Section>
    <Section fullWidth padding="topOnly" style="padding-bottom: 1rem">
      <FeatureSlider
        title="pages.index.solutions.title"
        description="pages.index.solutions.description"
        :badge="$tc('general.solution', 2)"
      >
        <Slide
          v-for="(slide, i) in $t('pages.index.solutions.slides')"
          :key="i"
          v-bind="slide"
        />
      </FeatureSlider>
    </Section>
    <Section padding="bottomOnly">
      <InfiniteSlider v-bind="$t('pages.index.known_from')" />
    </Section>
    <Section color="main" overflow="hidden">
      <IntegrationBanner />
    </Section>
    <Section padding="none" style="padding-top: 1.5rem">
      <TextWithImage
        :badge="$tc('general.application', 1)"
        title="phrases.sparked_interest"
        description="pages.index.apply.description"
        illustration="contact"
        alignment="right"
        padding="none"
        :cta="[
          {
            title: 'phrases.apply_now',
            href: '/apply'
          }
        ]"
      />
    </Section>
    <Section color="light" padding="small">
      <HelpBanner />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Section from '@/blocks/Section';
import Hero from '@/blocks/Hero';
import TextWithImage from '@/blocks/TextWithImage';
import TextWithDescription from '@/blocks/TextWithDescription';
import HelpBanner from '@/blocks/HelpBanner';
import Tabs from '@/blocks/Tabs';
import Tab from '@/blocks/Tabs/Tab';
import InfiniteSlider from '@/blocks/InfiniteSlider';
import Grid from '@/blocks/Grid';
import Feature from '@/blocks/Feature';
import FeatureSlider from '@/blocks/FeatureSlider';
import Slide from '@/blocks/FeatureSlider/Slide';
import IntegrationBanner from '@/blocks/IntegrationBanner';
import { SEO } from '@/services';

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithImage,
    TextWithDescription,
    HelpBanner,
    Tabs,
    Tab,
    FeatureSlider,
    Slide,
    Grid,
    Feature,
    IntegrationBanner,
    InfiniteSlider
  },
  head() {
    /* Override default behavior to get rid of seperator and site title */
    return SEO.generate({
      title: this.$i18n.t('pages.index.seo.title').toString(),
      description: this.$i18n.t('pages.index.seo.description').toString()
    });
  }
});
</script>
