<template>
  <div id="content">
    <Hero
      badge="Feedback"
      title="Alle Meinungen auf einem Blick"
      description="Mit dem Betriebsystem für Unternehmen: Wir verschaffen Dir mehr Zeit, erhöhen die Qualität Deiner Abläufe und steigern Deine Produktivität und Wirtschaftlichkeit."
      alignment="center"
    />

    <Section color="grey">
      <TextWithImage
        textAlignment="left"
        title="Diese App bringt Licht ins Dunkel"
        image="test.png"
      >
        <Check>Erfahre, was Deine <strong>Kunden</strong> von Dir denken</Check>
        <Check>
          Erfahre, was Deine <strong>Mitarbeiter</strong> von Dir denken
        </Check>
        <Check>Sammle Dein Feedback strukturiert ein</Check>
        <Check>Alles auf einem Blick</Check>
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
        title="Einfach, unauffällig und sehr flexibel"
        image="test.png"
        illustrationWidth="wide"
      >
        <Check>
          Wir sammeln über verschiedenste Wege das Feedback Deiner Kunden und
          Mitarbeiter ein
        </Check>
        <Check>
          Der Prozess geschieht völlig unsichtbar für den Benutzer
        </Check>
      </TextWithImage>
      <Grid>
        <Feature
          icon="Check"
          title="Schnell"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />
        <Feature
          icon="Check"
          title="Unsichtbar"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />
        <Feature
          icon="Check"
          title="Flexibel"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />
      </Grid>
    </Section>

    <Section color="grey" padding="small" fullWidth>
      <TextWithDescription
        badge="Zitate"
        title="Das sagen unsere Kunden"
        alignment="center"
        padding="topOnly"
      />
      <Slider autoplay="5000">
        <Slide>
          <Testimonial
            quote="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            author="Maurice Wegner"
            authorDetails="Employee at Digital Hotel"
          />
        </Slide>
        <Slide>
          <Testimonial
            quote="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            author="Maurice Wegner"
            authorDetails="Employee at Digital Hotel"
          />
        </Slide>
        <Slide>
          <Testimonial
            quote="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            author="Maurice Wegner"
            authorDetails="Employee at Digital Hotel"
          />
        </Slide>
        <Slide>
          <Testimonial
            quote="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            author="Maurice Wegner"
            authorDetails="Employee at Digital Hotel"
          />
        </Slide>
        <Slide>
          <Testimonial
            quote="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            author="Maurice Wegner"
            authorDetails="Employee at Digital Hotel"
          />
        </Slide>
      </Slider>
    </Section>

    <Section color="main">
      <Testimonial
        quote="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        author="Maurice Wegner"
        authorDetails="Employee at Digital Hotel"
      />
    </Section>

    <Section>
      <TextWithDescription title="FAQ" alignment="center" padding="small" />
      <Collapsible title="Was kostet diese App?">
        In der Standard-Version ist diese App <strong>kostenlos</strong>.
      </Collapsible>
      <Collapsible title="Was benötige ich, um damit starten zu können?">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Collapsible>
    </Section>

    <Section fullWidth>
      <TextWithDescription
        alignment="center"
        title="Preisgestaltung"
        description="Starte jetzt mit Deinem Paket"
        padding="none"
      />
      <PricingTable>
        <Table
          category="Standard"
          description="For development purposes"
          :price="{
            monthly: 0,
            annually: 0
          }"
          :features="[
            'Lorem ipsum loret in',
            'Lorem ipsum loret in',
            'Lorem ipsum loret in',
            'Lorem ipsum loret in'
          ]"
          :cta="{
            title: 'Start for free',
            href: '/apply',
            type: 'secondary'
          }"
        />
        <Table
          popular
          category="Premium"
          description="For small and medium hotels"
          :price="{
            monthly: 32,
            annually: 299
          }"
          :features="[
            'Alle Features aus Standard',
            'Lorem ipsum loret in',
            'Lorem ipsum loret in',
            'Lorem ipsum loret in',
            'Lorem ipsum loret in',
            'Lorem ipsum loret in'
          ]"
          :cta="{
            title: 'Get Premium',
            href: '/apply'
          }"
        />
        <Table
          category="Enterprise"
          description="For large hotels"
          :price="{
            monthly: 128,
            annually: 999
          }"
          :features="[
            'Alle Features aus Premium',
            'Lorem ipsum loret in',
            'Lorem ipsum loret in',
            'Lorem ipsum loret in',
            'Lorem ipsum loret in',
            'Lorem ipsum loret in',
            'Lorem ipsum loret in'
          ]"
          :cta="{
            title: 'Contact us',
            href: '/meeting',
            type: 'secondary'
          }"
        />
      </PricingTable>
    </Section>

    <Section color="light" padding="none">
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
