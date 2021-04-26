<template>
  <div id="content">
    <Hero
      v-bind="$t('pages.sales.hero')"
      alignment="center"
      :cta="[{ title: 'phrases.apply_now', href: '#apply' }]"
    />

    <Section color="grey">
      <TextWithImage
        textAlignment="left"
        title="pages.sales.benefit.title"
        image="pages.sales.benefit.image"
        illustrationWidth="wide"
      >
        <Check v-for="(check, i) in $t('pages.sales.benefit.checks')" :key="i">
          {{ check }}
        </Check>
      </TextWithImage>
    </Section>

    <Section padding="topOnly">
      <Logos v-bind="$t('pages.sales.partners')" />
    </Section>

    <Section>
      <TextWithImage
        alignment="right"
        textAlignment="left"
        title="pages.sales.solution.title"
        image="pages.sales.solution.image"
        illustrationWidth="wide"
      >
        <Check v-for="(check, i) in $t('pages.sales.solution.checks')" :key="i">
          {{ check }}
        </Check>
      </TextWithImage>
      <Grid>
        <Feature
          v-for="(feature, i) in $t('pages.sales.features')"
          :key="i"
          v-bind="feature"
        />
      </Grid>
    </Section>

    <Section color="main">
      <Testimonial
        v-for="(testimonial, i) in $t('pages.sales.testimonials')"
        :key="i"
        v-bind="testimonial"
      />
    </Section>

    <Section>
      <TextWithImage
        v-bind="$t('pages.sales.docs')"
        bubbles
        illustrationWidth="wide"
        :cta="[
          {
            title: $t('phrases.go_to_4', { page: 'Docs' }),
            href: '/docs'
          },
          {
            title: $t('phrases.go_to_2', { page: 'Support' }),
            href: '/help',
            type: 'secondary'
          }
        ]"
      />
    </Section>

    <Section color="light" padding="none" style="padding-top: 1.25rem">
      <TextWithImage
        v-bind="$t('pages.sales.application')"
        alignment="right"
        padding="none"
        :cta="[{ title: 'phrases.apply_now', href: '#apply' }]"
      />
    </Section>

    <Section style="padding-bottom: 2rem">
      <TextWithDescription title="FAQ" alignment="center" padding="small" />
      <Collapsible
        v-for="(question, i) in $t('pages.sales.faq')"
        :key="i"
        :title="question.question"
      >
        {{ question.answer }}
      </Collapsible>
    </Section>

    <Section color="grey">
      <TextWithDescription
        id="apply"
        title="phrases.apply_now"
        alignment="center"
        padding="small"
      />
      <PartnerForm />
    </Section>

    <Section padding="small">
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
import Testimonial from '@/blocks/Testimonial';
import Logos from '@/blocks/Logos';
import Slider from '@/blocks/Slider';
import Slide from '@/blocks/Slider/Slide';
import PricingTable from '@/blocks/PricingTable';
import Table from '@/blocks/PricingTable/Table';
import Collapsible from '@/components/Collapsible';
import Check from '@/blocks/Check';
import Grid from '@/blocks/Grid';
import Feature from '@/blocks/Feature';
import PartnerForm from '@/forms/Partner';

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithImage,
    TextWithDescription,
    Collapsible,
    Logos,
    HelpBanner,
    Testimonial,
    Slider,
    Slide,
    PricingTable,
    Table,
    Check,
    Grid,
    Feature,
    PartnerForm
  }
});
</script>
