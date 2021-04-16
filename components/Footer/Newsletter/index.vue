<template>
  <div :class="styles.newsletter">
    <div :class="styles.content">
      <span :class="styles.text">{{ $t("phrases.subscribe_newsletter") }}</span>
      <form :class="styles.form" @submit.prevent="signUp">
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          autocomplete="email"
          :placeholder="$t('general.email_address')"
          maxlength="200"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <Button title="general.subscribe" disabled />
      </form>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";
import Button from "@/components/Button";
import { AxiosRequestConfig } from "axios";

export default Vue.extend({
  components: {
    Button
  },
  data() {
    return {
      styles,
      email: ""
    };
  },
  methods: {
    async signUp() {
      if (this.email) {
        const config: AxiosRequestConfig = {
          headers: {
            Accept: "application/json"
          }
        };

        const res = await this.$axios.$get(
          "https://icanhazdadjoke.com/",
          config
        );

        console.log(res.joke);
      }
    }
  }
});
</script>