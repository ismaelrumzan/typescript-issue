<template>
  <footer :class="styles.footer">
    <TrustBar />
    <div :class="styles.content">
      <Navigation />
      <hr />
      <div :class="styles.additional">
        <NuxtLink to="/">
          <div :class="styles.logo">
            <NuxtImg src="/images/logo-dark.png" />
          </div>
        </NuxtLink>
        <span :class="styles.copyright">
          &copy; {{ curYear }} Digital Hotel – Alle Rechte vorbehalten
        </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";
import TrustBar from "@/components/Footer/TrustBar";
import Navigation from "@/components/Footer/Navigation";

export default Vue.extend({
  components: {
    TrustBar,
    Navigation
  },
  data() {
    return {
      styles
    };
  },
  computed: {
    curYear() {
      return new Date().getFullYear();
    }
  }
});
</script>