<template>
  <div :class="styles.article">
    <article>
      <div :class="styles.headerContainer">
        <div :class="styles.header">
          <NuxtLink :to="localePath('/customers')" :class="styles.back">
            <Icon name="ChevDown" />
            {{ $t('general.back') }}
          </NuxtLink>
          <h1 :class="styles.title">{{ customer.title }}</h1>
        </div>
      </div>
      <div :class="styles.partnerImage">
        <div :class="styles.imageWrapper">
          <img src="/logos/oktus_circle.svg" alt="oktus Logo" />
          <span>&plus;</span>
          <img
            :src="`/logos/${customer.logo}`"
            :alt="`${customer.company} Logo`"
          />
        </div>
      </div>
      <div :class="styles.content">
        <nuxt-content :document="customer" />
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import Icon from '@/components/Icon';

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
    const customer = await $content(
      `${app.i18n.locale}/customers`,
      params.slug
    ).fetch();
    return { customer };
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
