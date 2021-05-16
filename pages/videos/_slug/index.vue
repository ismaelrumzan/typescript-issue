<template>
  <div :class="styles.article">
    <article>
      <div :class="styles.headerContainer">
        <div :class="styles.header">
          <NuxtLink :to="localePath('/videos')" :class="styles.back">
            <Icon name="ChevDown" />
            {{ $t('general.back') }}
          </NuxtLink>
          <!-- <figure :class="styles.picture">
            <nuxt-img
              v-if="video.picture"
              :src="`/images/people/${video.picture}`"
              :alt="video.name"
              loading="lazy"
            />
            <nuxt-img
              v-else
              :src="`/images/people/oktus.jpg`"
              :alt="video.name"
              loading="lazy"
            />
          </figure> -->
          <h1 :class="styles.title">{{ video.name }}</h1>
          <span v-if="video.company" :class="styles.company">{{
            video.company
          }}</span>
          <Button
            v-if="video.email"
            :class="styles.button"
            :title="
              $t('phrases.contact_name', {
                name: video.name.split(' ')[0]
              })
            "
            :externalHref="`mailto:${video.email}`"
          />
        </div>
      </div>
      <div :class="styles.content">
        <nuxt-content :document="video" />
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
    const video = await $content(
      `${app.i18n.locale}/videos`,
      params.slug
    ).fetch();
    return { video };
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
