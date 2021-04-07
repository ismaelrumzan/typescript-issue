<template>
  <aside :class="styles.sidebar">
    <div :class="styles.content">
      <ul :class="styles.menu">
        <li v-for="page in pages" :key="page.slug">
          <NuxtLink :to="page.path">
            {{ page.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";

export default Vue.extend({
  data() {
    return {
      styles,
      pages: []
    };
  },
  created() {
    this.getPages();
    console.log(this.pages);
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    }
  },
  methods: {
    async getPages() {
      const pages = await (this as any)
        .$content(`${this.$i18n.locale}/docs`)
        .only(["title", "path", "slug"])
        .fetch();

      if (this.$i18n.locale === this.$i18n.defaultLocale) {
        this.pages = pages.map((page: any) => ({
          ...page,
          path: page.path.replace(`/${this.$i18n.locale}`, "")
        }));
        return;
      }

      this.pages = pages;
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
.nuxt-link-exact-active {
  background-color: var(--main-color-light-9);
  color: var(--main-color);
}
</style>