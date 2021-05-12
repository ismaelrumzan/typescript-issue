<template>
  <div :class="styles.article">
    <!-- <nav>
      <ul>
        <li v-for="link of page.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav> -->
    <article>
      <h1 :class="styles.title">{{ $t(page.title) }}</h1>
      <div :class="styles.content">
        <nuxt-content :document="page" />
      </div>
      <div :class="styles.footer">
        <span :class="styles.date">
          {{ $t('phrases.updated_at') + ' ' + formatDate(page.gitUpdatedAt) }}
        </span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';

export default Vue.extend({
  layout: 'docs',
  data() {
    return {
      styles
    };
  },
  async asyncData({ $content, params, app }: any) {
    const page = await $content(`${app.i18n.locale}/docs`, params.slug).fetch();
    return { page };
  },
  methods: {
    formatDate(date: Date) {
      const options: any = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      };

      return new Date(date).toLocaleDateString(this.$i18n.locale, options);
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
