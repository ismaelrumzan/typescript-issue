<template>
  <footer :class="styles.footer">
    <TrustBar />
    <div :class="styles.content">
      <Newsletter />
      <hr style="margin-top: 2rem" />
      <Navigation />
      <hr />
      <div :class="styles.additional">
        <NuxtLink :to="localePath('/')">
          <div :class="styles.logo">
            <img src="/logos/oktus.svg" />
          </div>
        </NuxtLink>

        <div :class="styles.options">
          <Select @change="changeLocale($event)">
            <option
              v-for="locale in locales"
              :key="locale.code"
              :value="locale.code"
              :selected="locale.selected"
            >
              {{ locale.name }}
            </option>
          </Select>
          <Select @change="changeMode($event)">
            <option
              v-for="(option, i) in options"
              :key="i"
              :value="option.value"
              :selected="option.selected"
              >{{ option.label }}</option
            >
          </Select>
        </div>

        <span :class="styles.copyright">
          &copy; {{ curYear }} oktus GmbH.
          {{ $t('phrases.all_rights_reserved') }}.
        </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import Newsletter from '@/components/Footer/Newsletter';
import TrustBar from '@/components/Footer/TrustBar';
import Navigation from '@/components/Footer/Navigation';
import Select from '@/components/Select';
import { MutationType, RootState } from '@/store';

export default Vue.extend({
  components: {
    Newsletter,
    TrustBar,
    Navigation,
    Select
  },
  data() {
    return {
      styles
    };
  },
  computed: {
    curYear() {
      return new Date().getFullYear();
    },
    locales() {
      if (this.$i18n?.locales) {
        return this.$i18n.locales.map((locale: any) => {
          return {
            code: locale.code,
            name: locale.name,
            selected: locale.code === this.$i18n.locale
          };
        });
      }
      return this.$i18n?.locales;
    },
    options() {
      return [
        {
          label: 'Light',
          value: 'light',
          selected: (this.$store.state as RootState).theme === 'light'
        },
        {
          label: 'Dark',
          value: 'dark',
          selected: (this.$store.state as RootState).theme === 'dark'
        }
      ];
    }
  },
  methods: {
    changeMode(e: any) {
      this.$store.commit(MutationType.SET_THEME, e.target.value);
    },
    changeLocale(e: any) {
      this.$i18n.setLocale(e.target.value);
    }
  }
});
</script>
