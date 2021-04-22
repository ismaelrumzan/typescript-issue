<template>
  <div :class="styles.newsletter">
    <div :class="styles.content">
      <span :class="styles.text">{{ $t('phrases.subscribe_newsletter') }}</span>
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
        <Button :loading="loading" title="general.subscribe" />
      </form>

      <div v-if="success || errors.length > 0" :class="styles.messages">
        <Box v-if="success" type="success">
          Deine E-Mail wurde erfolgreich hinzugefügt.
        </Box>
        <Box v-for="error in errors" :key="error.code" type="error">
          {{ error.title }}
        </Box>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import Button from '@/components/Button';
import Box from '@/components/Box';
import { AxiosRequestConfig } from 'axios';

export default Vue.extend({
  components: {
    Button,
    Box
  },
  data() {
    return {
      styles,
      isDev: false,
      email: '',
      loading: false,
      success: false,
      errors: []
    };
  },
  methods: {
    async signUp() {
      this.success = false;
      this.errors = [];
      this.loading = true;

      const BASE_URL = (this as any).$isLocalhost
        ? ''
        : (this as any).$isDev
        ? this.$config.devBaseURL
        : this.$config.baseURL;

      if (this.email) {
        const config: AxiosRequestConfig = {
          params: {
            email: this.email
          }
        };

        try {
          await this.$axios.$get(`${BASE_URL}/newsletter/signup`, config);
          this.success = true;
        } catch (error) {
          this.errors = error.response.data.errors;
        }
      }
      this.loading = false;
    }
  }
});
</script>
