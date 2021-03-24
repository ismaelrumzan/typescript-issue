<template>
  <div id="content">
    <Hero
      title="Schalte Dein Unternehmen auf Autopilot"
      description="Mit dem Betriebsystem für Unternehmen: Wir verschaffen Dir mehr Zeit, erhöhen die Qualität Deiner Abläufe und steigern Deine Produktivität und Wirtschaftlichkeit."
      alignment="left"
      illustration="example"
      :cta="ctasHero"
    />
    <Section color="main" skew="positive">
      <TextWithImage
        badge="Digital Hub"
        title="Schalte Dein Unternehmen auf Autopilot"
        description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
        alignment="right"
        :cta="ctaFirst"
      />
      <TextWithImage
        badge="Digital Hub"
        title="Schalte Dein Unternehmen auf Autopilot"
        description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
        alignment="left"
        :cta="ctaFirst"
      />
    </Section>
    <Section>
      <TextWithDescription
        badge="Front Office"
        title="Vereinfache die Abläufe Deiner Rezeption"
        description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
        alignment="center"
      />
      <Tabs alignment="left">
        <Tab
          title="Zimmerplan"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="example" />
        </Tab>
        <Tab
          title="Messenger"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="404" />
        </Tab>
        <Tab
          title="Analytics"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="404" />
        </Tab>
        <Tab
          title="Kampagnen"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="example" />
        </Tab>
        <Tab
          title="Zahlungen"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="404" />
        </Tab>
      </Tabs>
      <TextWithDescription
        badge="Back Office"
        title="Vereinfache das Management Deines Hotels"
        description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
        alignment="center"
      />
      <Tabs alignment="right">
        <Tab
          title="Zimmerplan"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="example" />
        </Tab>
        <Tab
          title="Messenger"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="404" />
        </Tab>
        <Tab
          title="Analytics"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="404" />
        </Tab>
        <Tab
          title="Kampagnen"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="example" />
        </Tab>
        <Tab
          title="Zahlungen"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="404" />
        </Tab>
      </Tabs>
      <TextWithDescription
        badge="Operations"
        title="Vereinfache das Management Deines Hotels"
        description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
        alignment="center"
      />
      <Tabs alignment="center">
        <Tab
          title="Zimmerplan"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="example" />
        </Tab>
        <Tab
          title="Messenger"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="404" />
        </Tab>
        <Tab
          title="Analytics"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="404" />
        </Tab>
        <Tab
          title="Kampagnen"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="example" />
        </Tab>
        <Tab
          title="Zahlungen"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
        >
          <Illustration name="404" />
        </Tab>
      </Tabs>
    </Section>
    <Section color="light">
      <TextWithImage
        badge="Digital Hub"
        title="Schalte Dein Unternehmen auf Autopilot"
        description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
        alignment="center"
        :cta="ctaFirst"
      />
    </Section>
    <Section>
      <TextWithImage
        badge="Digital Hub"
        title="Schalte Dein Unternehmen auf Autopilot"
        description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
        alignment="left"
        :cta="ctaFirst"
      />
    </Section>
    <Section color="dark" skew="negative">
      <TextWithImage
        badge="Digital Hub"
        title="Schalte Dein Unternehmen auf Autopilot"
        description="Mit dem Betriebssystem für Unternehmen: Vereinfachen, automatisieren und heben wir Deine Geschäftsprozesse in die Cloud"
        alignment="center"
        :cta="ctaFirst"
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
import Illustration from "@/components/Illustration";

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithImage,
    TextWithDescription,
    HelpBanner,
    Tabs,
    Tab,
    Illustration
  },
  data() {
    return {
      ctasHero: [
        {
          title: "Jetzt starten",
          href: "/about"
        },
        {
          title: "Unser Konzept",
          type: "secondary",
          href: "/about"
        }
      ],
      ctaFirst: [
        {
          title: "Mehr erfahren",
          href: "/about"
        }
      ]
    };
  }
});
</script>
