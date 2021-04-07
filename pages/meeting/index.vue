<template>
  <div id="content">
    <Hero
      badge="Online buchbar"
      title="Digital Hotel kennenlernen?"
      description="Du hast noch Fragen? Oder willst Du uns besser kennenlernen? Wir bieten Dir die Möglichkeit, ein persönliches Meeting mit uns zu vereinbaren. Dieses kannst Du hier direkt online buchen."
      alignment="center"
      :cta="[
        {
          title: 'Meeting buchen',
          onClick: bookMeeting
        }
      ]"
    />
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Section from "@/blocks/Section";
import Hero from "@/blocks/Hero";
import { MutationType } from "~/store";

export default Vue.extend({
  components: {
    Hero,
    Section
  },
  methods: {
    bookMeeting() {
      this.$store.commit(MutationType.SET_MEETING_WIDGET_OPEN, true);
    }
  }
});
</script>