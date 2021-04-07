<template>
  <div>
    <Hero
      badge="Unsere Mission"
      title="Wir optimieren die täglichen Prozesse im Hotel"
      description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      alignment="center"
    />
    <Section color="main" fullWidth>
      <FeatureSlider
        title="Die Plattform für die Hotellerie und den Tourismus"
        badge="Unsere Expertise"
      >
        <Slide
          title="Einfachheit"
          description="Durch die Reduzierung der Kostenstruktur steigern wir die Profitabilität des Unternehmens"
        />
        <Slide
          title="Neueinsteiger"
          description="Wir ermöglichen es Quereinsteigern den Einstieg in die Branche, dank unserer Plattform, zu vereinfachen"
        />
        <Slide
          title="Mitarbeiter binden"
          description="Mithilfe unseres benutzerfreundlichen System verlängern wir die Verweildauer von Mitarbeitern im Unternehmen"
        />
        <Slide
          title="Qualität erhöhen"
          description="Durch standardisierte Abläufe steigern wir die Qualität der Arbeit innerhalb des Unternehmens"
        />
        <Slide
          title="Spaß am Arbeiten"
          description="Durch die Vermeidung von unlogischen und unnötigen Arbeitsabläufen erzeugen wir wieder Freude am Job"
        />
        <Slide
          title="Keine Sprachbarrieren"
          description="Dank der Mehrsprachigkeit der Software überwinden wir Sprachbarrieren für Mitarbeiter"
        />
        <Slide
          title="Einfaches Onboarding"
          description="Wir ermöglichen ein professionelles und standardisiertes On- aber auf Offboarding von Mitarbeitern"
        />
        <Slide
          title="Automatisierung"
          description="Wir wirken dem vorhandenen Fachkräftemangel durch Automatisierung von Prozessen entgegen"
        />
      </FeatureSlider>
    </Section>
    <Section>
      <TextWithDescription
        badge="Unsere Werte"
        title="Offenheit und Automatisierung"
        alignment="center"
        padding="medium"
        style="padding-bottom: 1.5rem"
      />
      <Grid columns="3">
        <Feature
          alignment="center"
          title="Offene Schnittstellen"
          description="Mithilfe von offenen Schnittstellen fördern wir die Integration zu anderen Systemen"
          icon="Mail"
        />
        <Feature
          alignment="center"
          title="Automatisierung"
          description="Mit unserer Automatisierungs-Engine verbinden wir unterschiedliche Systeme miteinander"
          icon="Mail"
        />
        <Feature
          alignment="center"
          title="Assistenten"
          description="Dank unserer Assistenten standardisieren wir individuelle Prozesse innerhalb des Unternehmens"
          icon="Mail"
        />
        <Feature
          alignment="center"
          title="Dashboards"
          description="Mithilfe individueller Dashboards, Transparenz über die wichtigen Kennzahlen des Unternehmens zu erzeugen"
          icon="Mail"
        />
        <Feature
          alignment="center"
          title="Einheitliche Oberfläche"
          description="Durch eine vereinheitlichte Oberfläche in der alle Systeme zusammengefasst werden, vereinfachen wir den täglichen Ablauf"
          icon="Mail"
        />
      </Grid>
    </Section>
    <Section color="light" padding="none">
      <TextWithImage
        title="Du möchtest ein Teil des Prozesses werden?"
        description="Bewirb dich jetzt bei uns, entweder als Partner oder als Mitarbeiter und werde Teil unseres Prozesses."
        padding="none"
        illustration="team"
        :cta="[
          {
            title: 'Als Partner',
            href: '/apply'
          },
          {
            title: 'Als Entwickler',
            type: 'tertiary',
            href: '/apply'
          }
        ]"
      />
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

export default Vue.extend({
  components: {
    Hero,
    Section,
    TextWithImage,
    TextWithDescription,
    Grid,
    Feature,
    FeatureSlider,
    Slide
  }
});
</script>
