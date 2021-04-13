<template>
  <div :class="styles.article">
    <!-- <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav> -->
    <article>
      <div :class="styles.headerContainer">
        <div :class="styles.header">
          <h1 :class="styles.title">{{ page.title }}</h1>
          <span :class="styles.date">
            {{ $t("phrases.updated_at") + " " + formatDate(page.updatedAt) }}
          </span>
        </div>
      </div>
      <div :class="styles.content">
        <nuxt-content :document="page" />
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";
import Icon from "@/components/Icon";

export default Vue.extend({
  components: {
    Icon
  },
  data() {
    return {
      styles
    };
  },
  async asyncData({ $content, params, app }: any) {
    const page = await $content(
      `${app.i18n.locale}/legal`,
      params.slug
    ).fetch();
    return { page };
  },
  methods: {
    formatDate(date: Date) {
      const options: any = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit"
      };

      return new Date(date).toLocaleDateString(this.$i18n.locale, options);
    },
    scrollToTarget() {
      const target = window.location.hash;
      const headerHeight = getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height-scrolled")
        .slice(0, -2);

      const offset = -headerHeight - 25;

      if (target) {
        const id = decodeURIComponent(target.substring(1));
        const elem = document.getElementById(id);

        if (elem) {
          window.scrollTo({
            top: elem.getBoundingClientRect().top + offset + window.pageYOffset,
            behavior: "smooth"
          });
        }
      }
    }
  },
  mounted() {
    this.scrollToTarget();
  }
});
</script>

<style lang="scss">
.nuxt-content {
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
}
</style>