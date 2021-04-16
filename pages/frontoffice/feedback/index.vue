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
        title="Wissen, was Deine Kunden von dir denken"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        image="test.png"
      />
      <TextWithImage
        alignment="right"
        title="Wissen, was Deine Mitarbeiter von dir denken"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        image="test.png"
      />
    </Section>
    <Section>
      <TextWithImage
        title="Sammle dein Feedback strukturiert ein"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        image="test.png"
        :cta="[{ title: 'Moin', href: '/' }]"
      />
    </Section>
    <Section color="main">
      <TextWithImage
        alignment="right"
        title="Alles auf einem Blick"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        image="test.png"
      />
    </Section>
    <Section>
      <TextWithDescription title="FAQ" alignment="center" padding="small" />
      <Collapsible title="Here is the question">
        This is the answer.
      </Collapsible>
      <Collapsible title="Here is the question">
        This is the answer.
      </Collapsible>
      <Collapsible title="Here is the question">
        This is the answer.
      </Collapsible>
    </Section>
    <Section color="light" padding="none">
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
import Collapsible from "@/components/Collapsible";

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithImage,
    TextWithDescription,
    Collapsible,
    HelpBanner
  }
});
</script>