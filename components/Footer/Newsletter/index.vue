<template>
  <div :class="styles.newsletter">
    <div :class="styles.content">
      <span :class="styles.text">{{ $t('phrases.subscribe_newsletter') }}</span>
      <form
        :class="[styles.form, { [styles.withName]: email.length > 0 }]"
        @submit.prevent="signUp"
      >
        <input
          v-model="email"
          type="email"
          id="newsletter-email"
          name="email"
          autocomplete="email"
          :placeholder="$t('general.email_address')"
          maxlength="200"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <input
          v-show="email.length > 0"
          v-model="firstName"
          id="newsletter-given-name"
          name="given-name"
          autocomplete="given-name"
          :placeholder="$t('contact.first_name')"
          maxlength="200"
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

export default Vue.extend({
  components: {
    Button,
    Box
  },
  data() {
    return {
      styles,
      firstName: '',
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

      if (this.email && this.firstName) {
        const data = {
          email: this.email,
          firstName: this.firstName
        };

        try {
          await this.$axios.$post(
            `${this.$config.baseURL}/api/v1/newsletter/signup`,
            data
          );
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
