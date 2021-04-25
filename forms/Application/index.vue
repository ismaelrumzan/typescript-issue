<template>
  <form :class="styles.form" @submit.prevent="signUp" method="post">
    <Grid columns="2" padding="small" gap="medium">
      <label>
        <span>{{ $t('contact.first_name') }}</span>
        <input
          v-model="firstName"
          id="given-name"
          name="given-name"
          autocomplete="given-name"
          maxlength="100"
          pattern="[\p{L} \-\.]+"
          required
        />
      </label>

      <label>
        <span>{{ $t('contact.last_name') }}</span>
        <input
          v-model="lastName"
          id="family-name"
          name="family-name"
          autocomplete="family-name"
          maxlength="100"
          pattern="[\p{L} \-\.]+"
          required
        />
      </label>
    </Grid>

    <Grid columns="1" padding="small">
      <label>
        <span>{{ $t('contact.email') }}</span>
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          autocomplete="email"
          maxlength="200"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
      </label>
    </Grid>

    <Grid columns="1" padding="small">
      <label>
        <span>{{ $t('contact.company') }}</span>
        <input
          v-model="organization"
          id="organization"
          name="organization"
          autocomplete="organization"
          maxlength="100"
          required
        />
      </label>
    </Grid>

    <Grid columns="1" padding="small">
      <label>
        <span>{{ $t('contact.phone') }}</span>
        <input
          v-model="phone"
          type="tel"
          id="phone"
          name="phone"
          autocomplete="tel"
          required
        />
      </label>
    </Grid>

    <Grid columns="1" padding="small">
      <label>
        <span>{{ $t('form.message') }}</span>
        <textarea
          v-model="message"
          id="message"
          name="message"
          maxlength="2000"
          rows="6"
          required
        ></textarea>
      </label>
    </Grid>

    <!-- Honepot -->
    <Grid columns="1" padding="small" :class="styles.honeypot">
      <label>
        <span>Password</span>
        <input
          v-model="password"
          type="text"
          name="the_password"
          tabindex="-1"
          autocomplete="off"
        />
      </label>
    </Grid>

    <Grid columns="1" padding="small">
      <Button
        :loading="loading"
        type="submit"
        :title="$t('phrases.now', { action: $t('form.send') })"
      />
    </Grid>

    <Grid v-if="success" columns="1" padding="small">
      <Box type="success">
        {{ $t('form.application_success') }}
      </Box>
    </Grid>

    <Grid v-if="errors.length > 0" columns="1" padding="small">
      <Box v-for="error in errors" :key="error.code" type="error">
        {{ error.title }}
      </Box>
    </Grid>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import Button from '@/components/Button';
import Box from '@/components/Box';
import Grid from '@/blocks/Grid';

export default Vue.extend({
  components: {
    Button,
    Box,
    Grid
  },
  data() {
    return {
      styles,
      loading: false,
      success: false,
      errors: [],
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      phone: '',
      message: '',
      password: null
    };
  },
  methods: {
    async signUp() {
      this.success = false;
      this.errors = [];
      this.loading = true;

      if (this.password) {
        (this as any).errors.push(this.$i18n.t('errors.bot'));
        this.loading = false;
        return;
      }

      if (!this.email || !this.organization) {
        (this as any).errors.push('Provide an Email address and company name');
        this.loading = false;
        return;
      }

      const data = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        organization: this.organization,
        phone: this.phone,
        message: this.message
      };

      try {
        await this.$axios.$post(
          `${this.$config.baseURL}/api/leads/signup`,
          data
        );
        this.success = true;
      } catch (error) {
        this.errors = error.response.data.errors;
      }

      this.loading = false;
    }
  }
});
</script>
