<template>
  <div id="content">
    <Section padding="small">
      <Grid columns="3">
        <Feature
          alignment="center"
          v-for="(page, i) in pages"
          :key="i"
          v-bind="{ ...page, moreLink: page.path }"
        />
        <Feature
          alignment="center"
          title="pages.dpa.title"
          moreLink="/legal/dpa"
          icon="Document"
        />
      </Grid>
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";
import Section from "@/blocks/Section";
import Grid from "@/blocks/Grid";
import Feature from "@/blocks/Feature";

export default Vue.extend({
  components: {
    Section,
    Grid,
    Feature
  },
  data() {
    return {
      styles
    };
  },
  async asyncData({ $content, app }: any) {
    const pages = await $content(`${app.i18n.locale}/legal`)
      .only(["title", "description", "path", "icon"])
      .fetch();

    if (app.i18n.locale === app.i18n.defaultLocale) {
      return {
        pages: pages.map((page: any) => ({
          ...page,
          path: page.path.replace(`/${app.i18n.locale}`, "")
        }))
      };
    }

    return {
      pages
    };
  }
});
</script>