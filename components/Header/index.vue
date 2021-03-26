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
          to="/"
          :class="styles.logoContainer"
          @click.native="handleRoute"
        >
          <div :class="styles.logo">
            <img :src="Logo" />
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
            :externalHref="
              `${isDev ? $config.devAppURL : $config.appURL}/login`
            "
            :class="[styles.button, styles.loginButton]"
          />
          <Button title="Sign Up" href="/apply" :class="styles.button" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";
import { RootState } from "@/store";
import Navigation from "@/components/Header/Navigation";
import Button from "@/components/Button";
import Toggle from "@/components/Header/Toggle";
import Logo from "@/assets/images/logo-dark.png";
import _ from "lodash";

export default Vue.extend({
  components: {
    Navigation,
    Button,
    Toggle
  },

  data() {
    return {
      styles,
      Logo,
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
      /* If index page, scroll to top instead of doing nothing */
      if (this.$route.name === "index") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }
  },
  mounted() {
    this.isDev = (this as any).$isDev;

    /* Check scroll position at mount and add throttled listener */
    let scrollTop =
      window.scrollY ||
      document.body.scrollTop ||
      document.documentElement.scrollTop;
    this.scrolled = scrollTop > 20;
    window.addEventListener("scroll", _.throttle(this.handleScroll, 120));
  },
  destroyed() {
    /* Remove listener */
    window.removeEventListener("scroll", this.handleScroll);
  }
});
</script>
