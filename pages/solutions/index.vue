<template>
  <div id="content">
    <Section padding="none">
      <TextWithDescription
        badge="pages.all_solutions"
        title="Alle Lösungen im Überblick"
        alignment="center"
        padding="medium"
        style="padding-bottom: 2rem"
      />
      <Grid
        columns="3"
        searchable
        searchText="general.solution"
        padding="bottomOnly"
      >
        <Feature
          title="pages.roomplan.title"
          description="pages.roomplan.description"
          icon="Roomplan"
          moreLink="/frontoffice/roomplan"
        />
        <Feature
          title="pages.reservations.title"
          description="pages.reservations.description"
          icon="Calendar"
          moreLink="/frontoffice/reservations"
        />
        <Feature
          title="pages.guests.title"
          description="pages.guests.description"
          icon="People"
          moreLink="/frontoffice/guests"
        />
        <Feature
          disabled
          title="pages.lost_property.title"
          description="pages.lost_property.description"
          icon="LostItem"
          moreLink="/frontoffice/lost-property"
        />
        <Feature
          disabled
          title="pages.feedback.title"
          description="pages.feedback.description"
          icon="Feedback"
          moreLink="/frontoffice/feedback"
        />
        <Feature
          title="pages.emails.title"
          description="pages.emails.description"
          icon="Mail"
          moreLink="/frontoffice/emails"
        />
        <Feature
          disabled
          title="pages.messenger.title"
          description="pages.messenger.description"
          icon="Conversation"
          moreLink="/frontoffice/messenger"
        />
        <Feature
          disabled
          title="pages.phone.title"
          description="pages.phone.description"
          icon="Phone"
          moreLink="/frontoffice/phone"
        />
        <Feature
          disabled
          title="pages.permissions.title"
          description="pages.permissions.description"
          icon="Permissions"
          moreLink="/frontoffice/permissions"
        />
        <Feature
          disabled
          title="pages.payments.title"
          description="pages.payments.description"
          icon="CreditCards"
          moreLink="/frontoffice/payments"
        />
      </Grid>
    </Section>
    <Section noPadding>
      <HelpBanner />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Section from "@/blocks/Section";
import Hero from "@/blocks/Hero";
import TextWithDescription from "@/blocks/TextWithDescription";
import Grid from "@/blocks/Grid";
import Feature from "@/blocks/Feature";
import HelpBanner from "@/blocks/HelpBanner";

export default Vue.extend({
  components: {
    Section,
    Hero,
    TextWithDescription,
    Grid,
    Feature,
    HelpBanner
  }
});
</script>