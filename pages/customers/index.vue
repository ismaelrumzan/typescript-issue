<template>
  <div id="content">
    <Hero
      alignment="center"
      v-bind="$t('pages.customers.hero')"
      padding="none"
    />
    <Section>
      <ul :class="styles.customers">
        <li v-for="customer of customers" :key="customer.slug">
          <NuxtLink :to="customer.path">
            <div :class="styles.thumbnail">
              <img
                :src="`/logos/${customer.logo}`"
                :alt="`${customer.company} Logo`"
              />
            </div>
            <div :class="styles.content">
              <h2 :class="styles.title">{{ customer.company }}</h2>
              <span :class="styles.desc">{{ customer.description }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </Section>
    <Section color="grey" padding="small">
      <HelpBanner />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import Hero from '@/blocks/Hero';
import Section from '@/blocks/Section';
import HelpBanner from '@/blocks/HelpBanner';
// import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';
// import 'dayjs/locale/de';
// import 'dayjs/locale/en';
// dayjs.extend(relativeTime);

export default Vue.extend({
  components: {
    Hero,
    Section,
    HelpBanner
  },
  data() {
    return {
      styles
    };
  },
  async asyncData({ $content, app }: any) {
    const customers = await $content(`${app.i18n.locale}/customers`)
      .only(['company', 'description', 'logo', 'slug', 'path', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch();

    if (app.i18n.locale === app.i18n.defaultLocale) {
      return {
        customers: customers.map((customer: any) => ({
          ...customer,
          path: customer.path.replace(`/${app.i18n.locale}`, '')
        }))
      };
    }

    return {
      customers
    };
  }
  // methods: {
  //   formatDate(date: Date) {
  //     return dayjs(date).fromNow();
  //   }
  // },
  // created() {
  //   dayjs.locale(this.$i18n.locale);
  // }
});
</script>
