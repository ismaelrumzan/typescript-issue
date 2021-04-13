<template>
  <div id="content">
    <Hero
      badge="phrases.bookable_online"
      title="pages.meeting.hero.title"
      description="pages.meeting.hero.description"
      alignment="center"
      :cta="[
        {
          title: 'phrases.book_meeting',
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