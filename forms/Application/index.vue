<template>
  <form :class="styles.form" @submit.prevent="checkForm" method="post">
    <Grid columns="2" padding="small" gap="medium">
      <label>
        <span>Vorname</span>
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
        <span>Nachname</span>
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
        <span>E-Mail</span>
        <input
          v-model="email"
          id="email"
          name="email"
          autocomplete="email"
          maxlength="200"
          required
        />
      </label>
    </Grid>

    <Grid columns="1" padding="small">
      <label>
        <span>Unternehmen</span>
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
        <span>Nachricht</span>
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

    <Grid columns="1" padding="small">
      <Button :loading="loading" type="submit" title="Bewerbung senden" />
    </Grid>

    <Grid v-if="sent" columns="1" padding="small">
      <Box type="success">
        Deine Bewerbung wurde erfolgreich gesendet
      </Box>
    </Grid>

    <Grid v-if="sendingError" columns="1" padding="small">
      <Box type="error">
        Deine Bewerbung konnte nicht versendet werden...
      </Box>
    </Grid>
  </form>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";
import Button from "@/components/Button";
import Box from "@/components/Box";
import Grid from "@/blocks/Grid";
import emailjs from "emailjs-com";

export default Vue.extend({
  components: {
    Button,
    Box,
    Grid
  },
  data() {
    return {
      loading: false,
      sent: false,
      sendingError: false,
      styles,
      errors: [],
      firstName: null,
      lastName: null,
      email: null,
      organization: null,
      message: null
    };
  },
  methods: {
    sendEmail(e: any) {
      emailjs
        .sendForm(
          "service_jnsgi6m",
          "template_uvui9b2",
          e.target,
          "user_yiEcbjBXlOnHUlJaaA9o8"
        )
        .then(
          result => {
            this.loading = false;
            this.sent = true;
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            this.loading = false;
            this.sendingError = true;
            console.log("FAILED...", error);
          }
        );
    },
    checkForm: function(e: any) {
      this.sent = false;
      this.sendingError = false;
      this.loading = true;
      // if (this.name && this.age) {
      //   return true;
      // }

      this.errors = [];

      // if (!this.name) {
      //   this.errors.push('Name required.');
      // }
      // if (!this.age) {
      //   this.errors.push('Age required.');
      // }

      if (this.errors.length > 0) {
        this.loading = false;
        return false;
      }
      this.sendEmail(e);
    }
  }
});
</script>