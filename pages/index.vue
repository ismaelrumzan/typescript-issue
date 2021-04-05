<template>
  <div id="content">
    <Hero
      title="pages.index.hero.title"
      typewriter="pages.index.hero.typewriter"
      description="pages.index.hero.description"
      alignment="left"
      :titleStyles="{ maxWidth: '33rem' }"
      illustration="example"
      particles
      padding="small"
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
      <Logos
        title="pages.index.trusted"
        :logos="[
          {
            name: 'Stripe',
            link: 'https://www.stripe.com',
            file: 'stripe.svg'
          },
          {
            name: 'Stripe',
            link: 'https://www.stripe.com',
            file: 'stripe.svg'
          },
          {
            name: 'Stripe',
            link: 'https://www.stripe.com',
            file: 'stripe.svg'
          },
          {
            name: 'Stripe',
            link: 'https://www.stripe.com',
            file: 'stripe.svg'
          },
          {
            name: 'Stripe',
            link: 'https://www.stripe.com',
            file: 'stripe.svg'
          },
          {
            name: 'Stripe',
            link: 'https://www.stripe.com',
            file: 'stripe.svg'
          }
        ]"
      />
    </Section>
    <Section fullWidth>
      <FeatureSlider
        title="pages.index.solutions.title"
        description="pages.index.solutions.description"
        badge="pages.solutions"
      >
        <Slide
          title="Smarte Tools für die täglichen Aufgaben"
          description="Unsere Assistenten helfen Dir von der Reservierung bis zur Fundsache, völlig selbsterklärend für jeden Mitarbeiter die Aufgaben zu erledigen und die Daten dort abzulegen, wo Sie hingehören."
          moreLink="/operations/assistants"
        />
        <Slide
          title="Mehr Freiheit mit individuellem Zimmerplan"
          description="An vielen Rezeptionen ist der Zimmerplan noch immer ein wichtiges Informationstool. Wir werten diesen über die Möglichkeiten des PMS auf und schaffen Raum für mehr individuelle Informationen. "
          moreLink="/frontoffice/roomplan"
        />
        <Slide
          title="E-Mail geht auch einfach und mit Call-to-Action"
          description="Das ständige Wechseln von Programmen hat ein Ende. Deinen E-Mail-Client findest Du mit den wichtigsten Daten aus Deinem PMS in der selben Benutzeroberfläche. Und den einfachen Call-to-Action Anwendungen sparst Du zusätzlich Zeit."
          moreLink="/frontoffice/emails"
        />
        <Slide
          title="Schnellzugriff auf Gäste und Reservierungen"
          description="Gästeinformationen abfragen und hinterlegen, Reservierungen checken und bearbeiten von jedem Ort aus ohne in Dein PMS wechseln zu müssen - das funktioniert einfach und schnell über Deine neue Benutzeroberfläche."
          moreLink="/frontoffice/guests"
        />
        <Slide
          title="Deine Mitarbeiter immer im Blick"
          description="Lass die Dienstpläne doch von Deinen Teams selbst erstellen und gebe sie dann frei. Sei immer darüber informiert wer Dienst hat und im Haus ist. Bleib immer auf dem Laufenden und erhalte Nachrichten, wenn sich was ändert."
          moreLink="/backoffice/staff"
        />
        <Slide
          title="Einfaches Onboarding für Deine neuen Mitarbeiter"
          description="Schaffe Vertrauen ab der ersten Minute. Von der Bewerbung über alle notwendigen Unterweisungen bis hin zur schnellen und zur sicheren Einarbeitung machen wir es jedem neuen Teammitglied Deines Unternehmens einfach."
          moreLink="/backoffice/applications"
        />
      </FeatureSlider>
    </Section>
    <Section color="grey">
      <TextWithDescription
        badge="Hauptkategorien"
        title="Bereich für Hauptkategorien"
        description="Hauptkategorien der Lösungen sind Frontoffice, Backoffice, Operations, Marketing"
        alignment="center"
      />
      <Grid columns="3">
        <Feature
          title="This is a feature"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          icon="Operations"
          moreLink="/operations"
        />
        <Feature
          title="This is a feature"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          icon="Operations"
        />
        <Feature
          title="This is a feature"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          icon="Operations"
        />
        <Feature
          title="This is a feature"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          icon="Operations"
        />
        <Feature
          title="This is a feature"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          icon="Operations"
        />
        <Feature
          title="This is a feature"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          icon="Operations"
        />
      </Grid>
    </Section>
    <Section color="main">
      <Grid columns="2">
        <Feature
          title="This is a feature"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          icon="Operations"
          moreLink="/operations"
        />
        <Feature
          title="This is a feature"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          icon="Operations"
        />
        <Feature
          title="This is a feature"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          icon="Operations"
        />
        <Feature
          title="This is a feature"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          icon="Operations"
        />
        <Feature
          title="This is a feature"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          icon="Operations"
        />
        <Feature
          title="This is a feature"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          icon="Operations"
        />
      </Grid>
    </Section>
    <Section>
      <TextWithImage
        badge="Operations"
        title="Vereinfache das Management Deines Hotels"
        description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
        image="test.png"
        padding="large"
        alignment="right"
        :cta="[
          {
            title: 'Mehr erfahren',
            href: '/about'
          }
        ]"
      />
    </Section>
    <Section color="light" noPadding>
      <TextWithImage
        badge="Bewirb dich"
        title="Haben wir Dein Interesse geweckt?"
        description="Dann bewirb Dich jetzt und werde eines der ersten Hotels, das den Autopilot aktiviert. Aber beeil' Dich, die Plätze sind begrenzt!"
        illustration="contact"
        padding="none"
        :cta="[
          {
            title: 'Jetzt bewerben',
            href: '/apply'
          }
        ]"
      />
    </Section>
    <Section>
      <HelpBanner />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Section from "@/blocks/Section";
import Hero from "@/blocks/Hero";
import TextWithImage from "@/blocks/TextWithImage";
import TextWithDescription from "@/blocks/TextWithDescription";
import HelpBanner from "@/blocks/HelpBanner";
import Tabs from "@/blocks/Tabs";
import Tab from "@/blocks/Tabs/Tab";
import Logos from "@/blocks/Logos";
import Grid from "@/blocks/Grid";
import Feature from "@/blocks/Feature";
import FeatureSlider from "@/blocks/FeatureSlider";
import Slide from "@/blocks/FeatureSlider/Slide";

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithImage,
    TextWithDescription,
    HelpBanner,
    Logos,
    Tabs,
    Tab,
    FeatureSlider,
    Slide,
    Grid,
    Feature
  }
});
</script>