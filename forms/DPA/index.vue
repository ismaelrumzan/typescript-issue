<template>
  <form :class="styles.form" @submit.prevent="checkForm" method="post">
    <Grid columns="1" padding="small">
      <label>
        <span style="text-align: center; padding-bottom: 0.5rem">{{
          $t("contact.company_name_2")
        }}</span>
        <input
          style="text-align: center"
          v-model="organization"
          id="organization"
          name="organization"
          autocomplete="organization"
          maxlength="100"
          required
        />
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
        :title="$t('phrases.generate', { object: $tc('general.contract', 1) })"
      />
    </Grid>

    <Grid v-if="sent" columns="1" padding="small">
      <Box type="success">
        {{ $t("form.success") }}
      </Box>
    </Grid>

    <Grid v-if="errors.length > 0" columns="1" padding="small">
      <Box type="error" v-for="(error, i) in errors" :key="i">
        {{ error }}
      </Box>
    </Grid>

    <Grid v-if="sendingError" columns="1" padding="small">
      <Box type="error">
        {{ $t("errors.general") }}
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
import { jsPDF } from "jspdf";
import { Generator } from "./generator";
// import "jspdf/dist/polyfills.es.js";

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
      organization: "",
      password: null
    };
  },
  methods: {
    generateContract() {
      const doc = new jsPDF();
      Generator.generate(doc, this.organization);
      doc.save("AV-Vertrag.pdf");
      this.loading = false;
    },
    checkForm: function(e: any) {
      this.sent = false;
      this.sendingError = false;
      this.loading = true;

      this.errors = [];

      if (this.password) {
        (this as any).errors.push(this.$i18n.t("errors.bot"));
      }

      if (this.errors.length > 0) {
        this.loading = false;
        return false;
      }

      this.generateContract();
    }
  }
});
</script>