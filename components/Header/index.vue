<template>
  <header
    :class="[
      styles.header,
      { [styles.scrolled]: scrolled },
      { [styles.open]: open }
    ]"
  >
    <div :class="styles.outerContainer">
      <div :class="styles.innerContainer">
        <NuxtLink
          :to="localePath('/')"
          :class="styles.logoContainer"
          @click.native="handleRoute"
        >
          <div :class="styles.logo">
            <img src="/logos/digitalhotel.svg" />
          </div>
        </NuxtLink>
        <Toggle />
        <div :class="[styles.navigation, { [styles.open]: open }]">
          <Navigation />
        </div>
        <div :class="styles.buttons">
          <Button
            title="Login"
            type="secondary"
            :externalHref="`${$config.appURL}/login`"
            :class="[styles.button, styles.loginButton]"
          />
          <Button
            title="Sign Up"
            href="/apply"
            :class="styles.button"
            @click.native="closeMenu"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import { MutationType, RootState } from '@/store';
import Navigation from '@/components/Header/Navigation';
import Button from '@/components/Button';
import Toggle from '@/components/Header/Toggle';
import _ from 'lodash';

export default Vue.extend({
  components: {
    Navigation,
    Button,
    Toggle
  },

  data() {
    return {
      styles,
      scrolled: false,
      isDev: false
    };
  },
  computed: {
    open() {
      return (this.$store.state as RootState).menuOpen;
    }
  },
  methods: {
    /* Attached to listener – Checks scroll position */
    handleScroll(e: Event) {
      let scrollTop =
        window.scrollY ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;

      if (scrollTop > 20) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    handleRoute() {
      this.closeMenu();
      /* If index page, scroll to top instead of doing nothing */
      if (this.$route.name === `index___${this.$i18n.locale}`) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },
    closeMenu() {
      this.$store.commit(MutationType.SET_MENU_OPEN, false);
    }
  },
  mounted() {
    /* Check scroll position at mount and add throttled listener */
    let scrollTop =
      window.scrollY ||
      document.body.scrollTop ||
      document.documentElement.scrollTop;
    this.scrolled = scrollTop > 20;
    window.addEventListener('scroll', _.throttle(this.handleScroll, 120));
  },
  destroyed() {
    /* Remove listener */
    window.removeEventListener('scroll', this.handleScroll);
  }
});
</script>
