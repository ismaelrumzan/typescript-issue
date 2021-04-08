<template>
  <div id="content">
    <Section
      padding="small"
      v-for="(category, i) in categoriesWithPages"
      :key="i"
      :color="i % 2 !== 0 ? 'grey' : ''"
    >
      <TextWithDescription
        padding="topOnly"
        :title="category.name"
        alignment="center"
      />
      <Grid columns="3">
        <Feature
          alignment="center"
          v-for="(page, i) in category.pages"
          :key="i"
          :title="page.title"
          :description="page.description"
          :moreLink="page.path"
          moreText="general.view"
          :icon="page.icon"
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
import TextWithDescription from "@/blocks/TextWithDescription";

interface Page {
  title: string;
  category: string;
  path: string;
  slug: string;
}

interface CategoryWithPages {
  name: string;
  pages: Page[];
}

export default Vue.extend({
  components: {
    Section,
    Grid,
    Feature,
    TextWithDescription
  },
  data() {
    return {
      styles
    };
  },
  async asyncData({ $content, app }: any) {
    let pages = await $content(`${app.i18n.locale}/docs`)
      .sortBy("position")
      .only(["title", "description", "category", "slug", "path", "icon"])
      .fetch();

    const categories: string[] = pages.map((page: Page) => page.category);
    const uniqueCategories = new Set(categories);

    if (app.i18n.locale === app.i18n.defaultLocale) {
      pages = pages.map((page: Page) => ({
        ...page,
        path: page.path.replace(`/${app.i18n.locale}`, "")
      }));
    }

    let categoriesWithPages = [];
    for (const category of [...uniqueCategories]) {
      const categoryPages = pages.filter(
        (page: Page) => page.category === category
      );
      categoriesWithPages.push({
        name: category,
        pages: categoryPages
      });
    }

    return {
      pages,
      categories,
      categoriesWithPages
    };
  }
});
</script>