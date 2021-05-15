<template>
  <div :class="styles.article">
    <article>
      <div :class="styles.headerContainer">
        <div :class="styles.header">
          <NuxtLink :to="localePath('/consultants')" :class="styles.back">
            <Icon name="ChevDown" />
            {{ $t('general.back') }}
          </NuxtLink>
          <figure :class="styles.picture">
            <nuxt-img
              v-if="consultant.picture"
              :src="`/images/people/${consultant.picture}`"
              :alt="consultant.name"
              loading="lazy"
            />
            <nuxt-img
              v-else
              :src="`/images/people/oktus.jpg`"
              :alt="consultant.name"
              loading="lazy"
            />
          </figure>
          <h1 :class="styles.title">{{ consultant.name }}</h1>
          <span v-if="consultant.company" :class="styles.company">{{
            consultant.company
          }}</span>
          <Button
            v-if="consultant.email"
            :class="styles.button"
            :title="
              $t('phrases.contact_name', {
                name: consultant.name.split(' ')[0]
              })
            "
            :externalHref="`mailto:${consultant.email}`"
          />
        </div>
      </div>
      <div :class="styles.content">
        <nuxt-content :document="consultant" />
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

export default Vue.extend({
  components: {
    Icon,
    Button
  },
  data() {
    return {
      styles
    };
  },
  async asyncData({ $content, params, app }: any) {
    const consultant = await $content(
      `${app.i18n.locale}/consultants`,
      params.slug
    ).fetch();
    return { consultant };
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
