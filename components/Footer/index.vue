<template>
  <footer :class="styles.footer">
    <div :class="styles.content">
      <Navigation />
      <hr />
      <div :class="styles.additional">
        <NuxtLink to="/">
          <div :class="styles.logo">
            <img :src="Logo" />
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
import Navigation from "@/components/Footer/Navigation";
import Logo from "@/assets/images/logo-dark.png";

export default Vue.extend({
  components: {
    Navigation,
  },
  data() {
    return {
      styles,
      Logo,
    };
  },
  computed: {
    curYear() {
      return new Date().getFullYear();
    },
  },
});
</script>