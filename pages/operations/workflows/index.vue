<template>
  <div id="content">
    <Hero
      badge="pages.workflows.title"
      title="Beschleunige Prozesse in Deinem Hotel"
      description="Vereinfache die täglichen Abläufe im Hotel, vom Check-In bis zum Marketing. Mit Hilfe von Workflows automatisierst Du zeitaufwendige Aufgaben."
      illustration="assistants"
      :cta="[
        {
          title: 'Jetzt starten',
          href: '/apply'
        }
      ]"
    />
    <Section color="grey" padding="bottomOnly">
      <TextWithDescription
        badge="Triggers &amp; Actions"
        title="Du legst fest, wann was passiert"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        alignment="center"
      />
      <Tabs withBackground>
        <Tab
          title="Trigger"
          description="Lege fest, bei welchem Ereignis eine Aktion ausgelöst werden soll."
        >
          <Illustration name="example" />
        </Tab>
        <Tab
          title="Actions"
          description="Wird Dein erstellter Trigger ausgelöst, werden die von Dir eingestellten Aktionen ausgeführt."
        >
          <Illustration name="example" />
        </Tab>
        <Tab
          title="Zurücklehnen"
          description="Zeitaufwendige und repetetive Aufgaben erledigen sich nun ganz von allein und sparen Dir eine Menge Zeit ein."
        >
          <Illustration name="example" />
        </Tab>
      </Tabs>
    </Section>
    <Section noPadding>
      <HelpBanner />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Section from "@/blocks/Section";
import HelpBanner from "@/blocks/HelpBanner";
import Hero from "@/blocks/Hero";
import Illustration from "@/components/Illustration";
import Tab from "@/blocks/Tabs/Tab";
import Tabs from "@/blocks/Tabs";
import TextWithDescription from "@/blocks/TextWithDescription";

export default Vue.extend({
  components: {
    Section,
    HelpBanner,
    Hero,
    Illustration,
    Tab,
    Tabs,
    TextWithDescription
  }
});
</script>