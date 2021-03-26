<template>
  <div :class="styles.container">
    <h1>Blog</h1>
    <ul :class="styles.posts">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
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
import styles from "./index.module.scss?module";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/de";
dayjs.extend(relativeTime);
dayjs.locale("de");

export default Vue.extend({
  data() {
    return {
      styles
    };
  },
  async asyncData({ $content, params }: any) {
    const articles = await $content("articles")
      .only(["title", "description", "img", "slug", "author", "createdAt"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles
    };
  },
  methods: {
    formatDate(date: Date) {
      return dayjs(date).fromNow();
    }
  }
});
</script>