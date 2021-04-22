<template>
  <div id="content">
    <Hero
      badge="pages.technology.hero.badge"
      title="pages.technology.hero.title"
      description="pages.technology.hero.description"
      alignment="center"
    />

    <Section color="grey">
      <TextWithImage
        textAlignment="left"
        title="pages.technology.benefit.title"
        image="pages.technology.benefit.image"
        illustrationWidth="wide"
      >
        <Check
          v-for="(check, i) in $t('pages.technology.benefit.checks')"
          :key="i"
        >
          {{ check }}
        </Check>
      </TextWithImage>
    </Section>

    <Section padding="topOnly">
      <Logos
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
        title="pages.technology.solution.title"
        image="pages.technology.solution.image"
        illustrationWidth="wide"
      >
        <Check
          v-for="(check, i) in $t('pages.technology.solution.checks')"
          :key="i"
        >
          {{ check }}
        </Check>
      </TextWithImage>
      <Grid>
        <Feature
          v-for="(feature, i) in $t('pages.technology.features')"
          :key="i"
          v-bind="feature"
        />
      </Grid>
    </Section>

    <Section color="main">
      <Testimonial
        v-for="(testimonial, i) in $t('pages.technology.testimonials')"
        :key="i"
        :quote="testimonial.quote"
        :author="testimonial.author"
      />
    </Section>

    <Section>
      <TextWithImage
        bubbles
        badge="Dokumentation"
        title="Von Entwickler für Entwickler"
        description="In unserer Dokumentation erfährst du schnell und einfach, wie Du am besten startest. Falls Du weiterhin Fragen hast, kontaktier uns doch ganz einfach."
        image="docs.png"
        illustrationWidth="wide"
        :cta="[
          { title: 'Dokumentation', href: '/docs' },
          { title: 'Zum Support', href: '/help', type: 'secondary' }
        ]"
      />
    </Section>

    <Section color="light" padding="none" style="padding-top: 1.25rem">
      <TextWithImage
        alignment="right"
        padding="none"
        badge="Bewerbung"
        title="Bewirb dich jetzt mit Deinem Projekt"
        description="Unsere Integration und der Support sind zunächst auf wenige Plätze begrenzt. Du kannst mit Deinem Projekt bei uns bewerben, schreib uns einfach etwas über Dich und Dein Vorhaben!"
        illustration="team"
        :cta="[{ title: 'Jetzt bewerben', href: '/apply' }]"
      />
    </Section>

    <Section style="padding-bottom: 2rem">
      <TextWithDescription title="FAQ" alignment="center" padding="small" />
      <Collapsible
        v-for="(question, i) in $t('pages.technology.faq')"
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
import Logos from '@/blocks/Logos';
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
    Logos,
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
