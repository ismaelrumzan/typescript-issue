<template>
  <div id="content">
    <Hero
      badge="pages.backoffice.title"
      title="Vereinfache das Management"
      description="Im Backoffice eines Hotelbetriebes gibt es viele individuelle Aufgaben zu bewältigen. Wir helfen Dir die Kommunikation zu verbessern, die Arbeiten effizienter zu erledigen und damit Sicherheit und Vertrauen zu schaffen."
      alignment="center"
      :cta="[
        {
          title: 'phrases.get_started',
          href: '/apply'
        }
      ]"
    />
    <Section color="grey">
      <TextWithDescription
        badge="pages.all_solutions"
        title="Lösungen im Bereich Backoffice"
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
          disabled
          alignment="center"
          title="pages.finance.title"
          description="phrases.coming_soon"
          icon="Roomplan"
          moreLink="/backoffice/finance"
        />
        <Feature
          disabled
          alignment="center"
          title="pages.suppliers.title"
          description="phrases.coming_soon"
          icon="Calendar"
          moreLink="/backoffice/suppliers"
        />
        <Feature
          disabled
          alignment="center"
          title="pages.erp.title"
          description="phrases.coming_soon"
          icon="People"
          moreLink="/backoffice/erp"
        />
        <Feature
          disabled
          alignment="center"
          title="pages.energy_management.title"
          description="phrases.coming_soon"
          icon="LostItem"
          moreLink="/backoffice/energy-management"
        />
        <Feature
          disabled
          alignment="center"
          title="pages.housekeeping.title"
          description="phrases.coming_soon"
          icon="Feedback"
          moreLink="/backoffice/housekeeping"
        />
        <Feature
          disabled
          alignment="center"
          title="pages.safety.title"
          description="phrases.coming_soon"
          icon="Mail"
          moreLink="/backoffice/safety"
        />
        <Feature
          disabled
          alignment="center"
          title="pages.staff.title"
          description="phrases.coming_soon"
          icon="Conversation"
          moreLink="/backoffice/staff"
        />
        <Feature
          disabled
          alignment="center"
          title="pages.applications.title"
          description="phrases.coming_soon"
          icon="Phone"
          moreLink="/backoffice/applications"
        />
        <Feature
          disabled
          alignment="center"
          title="pages.pos.title"
          description="phrases.coming_soon"
          icon="Permissions"
          moreLink="/backoffice/pos"
        />
        <Feature
          disabled
          alignment="center"
          title="pages.mail.title"
          description="phrases.coming_soon"
          icon="CreditCards"
          moreLink="/backoffice/mail"
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