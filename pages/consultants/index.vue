<template>
  <div id="content">
    <Hero
      alignment="center"
      v-bind="$t('pages.consultants.hero')"
      padding="none"
    />
    <Section>
      <ul :class="styles.consultants">
        <li v-for="consultant of consultants" :key="consultant.slug">
          <div :class="styles.consultant">
            <NuxtLink :to="consultant.path" :class="styles.pictureLink">
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
            </NuxtLink>
            <div :class="styles.content">
              <h2 :class="styles.title">{{ consultant.name }}</h2>
              <span v-if="consultant.company" :class="styles.company">{{
                consultant.company
              }}</span>
              <Button
                :title="
                  $t('phrases.contact_name', {
                    name: consultant.name.split(' ')[0]
                  })
                "
                :href="consultant.path"
              />
              <span :class="styles.desc">{{ consultant.description }}</span>
            </div>
          </div>
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
import Button from '@/components/Button';
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
    Button,
    HelpBanner
  },
  data() {
    return {
      styles
    };
  },
  async asyncData({ $content, app }: any) {
    const consultants = await $content(`${app.i18n.locale}/consultants`)
      .only([
        'name',
        'company',
        'description',
        'picture',
        'slug',
        'path',
        'createdAt'
      ])
      .sortBy('createdAt', 'desc')
      .fetch();

    if (app.i18n.locale === app.i18n.defaultLocale) {
      return {
        consultants: consultants.map((consultant: any) => ({
          ...consultant,
          path: consultant.path.replace(`/${app.i18n.locale}`, '')
        }))
      };
    }

    return {
      consultants
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
