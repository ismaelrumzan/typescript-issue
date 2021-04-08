<template>
  <aside :class="[styles.sidebar, { [styles.open]: open }]">
    <div :class="styles.sidebarInner">
      <div :class="styles.content">
        <div
          v-for="(category, i) in categoriesWithPages"
          :key="i"
          :class="styles.category"
        >
          <span :class="styles.categoryName">{{ $t(category.name) }}</span>
          <ul :class="styles.pages">
            <li v-for="page in category.pages" :key="page.slug">
              <NuxtLink :to="page.path" @click.native="closeMenu">
                {{ page.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button @click="toggleMenu" :class="styles.toggle">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <span @click="closeMenu" :class="styles.overlay"></span>
  </aside>
</template>

<script lang='ts'>
import Vue from "vue";
import { MutationType, RootState } from "~/store";
import styles from "./styles.module.scss?module";

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
  data() {
    return {
      styles,
      categoriesWithPages: [] as CategoryWithPages[],
      categories: [] as string[],
      pages: [] as Page[]
    };
  },
  created() {
    this.getPages();
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    open(): boolean {
      return (this.$store.state as RootState).docsMenuOpen;
    }
  },
  methods: {
    async getPages() {
      let pages: Page[] = await (this as any)
        .$content(`${this.$i18n.locale}/docs`)
        .sortBy("position")
        .only(["title", "category", "path", "slug"])
        .fetch();

      const categories: string[] = pages.map((page: Page) => page.category);
      const uniqueCategories = new Set(categories);

      if (this.$i18n.locale === this.$i18n.defaultLocale) {
        pages = pages.map((page: Page) => ({
          ...page,
          path: page.path.replace(`/${this.$i18n.locale}`, "")
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

      this.pages = pages;
      this.categories = [...uniqueCategories];
      this.categoriesWithPages = categoriesWithPages;
    },
    toggleMenu(): void {
      this.$store.commit(MutationType.TOGGLE_DOCS_MENU);
    },
    closeMenu(): void {
      this.$store.commit(MutationType.SET_DOCS_MENU_OPEN, false);
    }
  },
  watch: {
    currentLocale() {
      this.getPages();
    }
  }
});
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/styles/colors" as v;

.nuxt-link-exact-active {
  background-color: var(--main-color-light-8);
  color: var(--main-color);
  font-weight: 500;
}
[data-theme="dark"] {
  .nuxt-link-exact-active {
    background-color: color.adjust(v.$main-color, $alpha: -0.8);
  }
}
</style>