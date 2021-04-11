<template>
  <div id="content">
    <Hero
      badge="Alles im Überblick"
      title="FAQ"
      alignment="center"
      padding="small"
      style="padding-bottom: 1rem"
    />
    <Section padding="bottomOnly" style="margin-bottom: 2rem">
      <Collapsible title="Hier könnte Deine Frage stehen?">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Collapsible>
      <Collapsible title="Hier könnte Deine Frage stehen?">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Collapsible>
      <Collapsible title="Hier könnte Deine Frage stehen?">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Collapsible>
      <Collapsible title="Hier könnte Deine Frage stehen?">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Collapsible>
      <Collapsible title="Hier könnte Deine Frage stehen?">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Collapsible>
    </Section>
    <Section color="light" padding="small">
      <TextWithDescription
        badge="Meeting buchen"
        title="Du hast immer noch Fragen?"
        description="Wir bieten Dir die Möglichkeit, ein persönliches Meeting mit uns zu vereinbaren. Dieses kannst Du hier direkt online buchen."
        alignment="center"
        :cta="[
          {
            title: 'Meeting buchen',
            onClick: bookMeeting
          }
        ]"
      />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Section from "@/blocks/Section";
import Hero from "@/blocks/Hero";
import TextWithDescription from "@/blocks/TextWithDescription";
import Collapsible from "@/components/Collapsible";
import { MutationType } from "~/store";

export default Vue.extend({
  components: {
    Section,
    Hero,
    Collapsible,
    TextWithDescription
  },
  methods: {
    bookMeeting() {
      this.$store.commit(MutationType.SET_MEETING_WIDGET_OPEN, true);
    }
  }
});
</script>