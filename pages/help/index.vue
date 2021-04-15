<template>
  <div id="content">
    <Hero
      badge="pages.help.hero.badge"
      title="pages.help.hero.title"
      alignment="center"
      padding="small"
      style="padding-bottom: 1rem"
    />
    <Section padding="bottomOnly" style="margin-bottom: 2rem">
      <Collapsible
        v-for="(question, i) in $t('pages.help.faq')"
        :key="i"
        :title="question.question"
      >
        {{ question.answer }}
      </Collapsible>
    </Section>
    <Section color="light" padding="small">
      <TextWithDescription
        badge="phrases.book_meeting"
        title="phrases.got_more_questions"
        description="pages.help.meeting.text"
        alignment="center"
        :cta="[
          {
            title: 'phrases.book_meeting',
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