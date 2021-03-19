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
      <div :class="styles.header">
        <h1 :class="styles.title">{{ article.title }}</h1>
        <!-- <span :class="styles.desc">{{ article.description }}</span> -->
        <span :class="styles.date">{{ formatDate(article.createdAt) }}</span>
        <!-- <img :src="article.img" :alt="article.alt" /> -->
      </div>
      <div :class="styles.content">
        <nuxt-content :document="article" />
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";

export default Vue.extend({
  data() {
    return {
      styles
    };
  },
  async asyncData({ $content, params }: any) {
    const article = await $content("articles", params.slug).fetch();
    return { article };
  },
  methods: {
    formatDate(date: Date) {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit"
      };

      return new Date(date).toLocaleDateString("de", options);
    }
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