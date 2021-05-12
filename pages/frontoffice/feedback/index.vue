<template>
  <div id="content">
    <Hero
      badge="pages.feedback.hero.badge"
      title="pages.feedback.hero.title"
      description="pages.feedback.hero.description"
      alignment="center"
    />

    <Section color="grey">
      <TextWithImage
        textAlignment="left"
        title="pages.feedback.benefit.title"
        image="pages.feedback.benefit.image"
      >
        <Check
          v-for="(check, i) in $t('pages.feedback.benefit.checks')"
          :key="i"
        >
          {{ check }}
        </Check>
      </TextWithImage>
    </Section>

    <Section padding="topOnly">
      <InfiniteSlider
        title="Schließe Dich unseren bisherigen Kunden an"
        :logos="[
          {
            name: 'Romantikhotel Scheelehof',
            link: 'https://www.scheelehof.de',
            file: 'scheelehof.svg'
          },
          {
            name: 'Haffhus',
            link: 'https://www.haffhus.de',
            file: 'haffhus.svg'
          },
          {
            name: 'The Grand',
            link: 'https://www.the-grand.de',
            file: 'thegrand.svg'
          },
          {
            name: 'Kino Hotel Meyer',
            link: 'https://www.hotel-meyer.de',
            file: 'kinohotelmeyer.svg'
          }
        ]"
      />
    </Section>

    <Section>
      <TextWithImage
        alignment="right"
        textAlignment="left"
        title="pages.feedback.solution.title"
        image="pages.feedback.solution.image"
        illustrationWidth="wide"
      >
        <Check
          v-for="(check, i) in $t('pages.feedback.solution.checks')"
          :key="i"
        >
          {{ check }}
        </Check>
      </TextWithImage>
      <Grid>
        <Feature
          v-for="(feature, i) in $t('pages.feedback.features')"
          :key="i"
          v-bind="feature"
        />
      </Grid>
    </Section>

    <Section color="main">
      <Testimonial
        v-for="(testimonial, i) in $t('pages.feedback.testimonials')"
        :key="i"
        :quote="testimonial.quote"
        :author="testimonial.author"
      />
    </Section>

    <Section fullWidth padding="small">
      <TextWithDescription
        alignment="center"
        title="pages.feedback.pricing.title"
        description="pages.feedback.pricing.description"
        padding="topOnly"
      />
      <PricingTable>
        <Table
          v-for="(table, i) in $t('pages.feedback.pricing.tables')"
          :key="i"
          v-bind="table"
        />
      </PricingTable>
    </Section>

    <Section padding="bottomOnly" style="padding-bottom: 2rem">
      <TextWithDescription title="FAQ" alignment="center" padding="small" />
      <Collapsible
        v-for="(question, i) in $t('pages.feedback.faq')"
        :key="i"
        :title="question.question"
      >
        {{ question.answer }}
      </Collapsible>
    </Section>

    <Section color="grey" padding="small">
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
import InfiniteSlider from '@/blocks/InfiniteSlider';
import Slider from '@/blocks/Slider';
import Slide from '@/blocks/Slider/Slide';
import PricingTable from '@/blocks/PricingTable';
import Table from '@/blocks/PricingTable/Table';
import Collapsible from '@/components/Collapsible';
import Check from '@/blocks/Check';
import Grid from '@/blocks/Grid';
import Feature from '@/blocks/Feature';

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithImage,
    TextWithDescription,
    Collapsible,
    InfiniteSlider,
    HelpBanner,
    Testimonial,
    Slider,
    Slide,
    PricingTable,
    Table,
    Check,
    Grid,
    Feature
  }
});
</script>
