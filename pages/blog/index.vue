<template>
  <div :class="styles.container">
    <h1>Blog</h1>
    <ul :class="styles.posts">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="article.path">
          <div>
            <h2 :class="styles.title">{{ article.title }}</h2>
            <span :class="styles.desc">{{ article.description }}</span>
            <span :class="styles.date">{{
              formatDate(article.createdAt)
            }}</span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/de";
import "dayjs/locale/en";
dayjs.extend(relativeTime);

export default Vue.extend({
  data() {
    return {
      styles
    };
  },
  async asyncData({ $content, app }: any) {
    const articles = await $content(`${app.i18n.locale}/blog`)
      .only(["title", "description", "img", "slug", "author", "createdAt"])
      .sortBy("createdAt", "desc")
      .fetch();

    if (app.i18n.locale === app.i18n.defaultLocale) {
      return {
        articles: articles.map((article: any) => ({
          ...article,
          path: article.path.replace(`/${app.i18n.locale}`, "")
        }))
      };
    }

    return {
      articles
    };
  },
  methods: {
    formatDate(date: Date) {
      return dayjs(date).fromNow();
    }
  },
  created() {
    dayjs.locale(this.$i18n.locale);
  }
});
</script>