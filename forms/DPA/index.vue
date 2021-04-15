<template>
  <div :class="styles.form">
    <form @submit.prevent="checkForm" @input="clearSignature" method="post">
      <p style="margin-bottom: 1.5rem">
        Um den Vertrag zu generieren benötigen wir zuvor einige Angaben
        bezüglich Deines Unternehmens. Dazu gehört der Name des Unternehmens,
        eine Kontakt-Mail, sowie ein Vertreter, welcher den Vertrag
        unterzeichnet. Nach der Generierung kannst Du Dir den Vertrag zunächst
        durchlesen und anschließend signieren.
      </p>

      <Grid columns="1" padding="small">
        <label>
          <span>{{ $t("contact.company_name_2") }}</span>
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

      <Grid columns="2" padding="small" gap="medium">
        <label>
          <span>{{ $t("contact.first_name") }}</span>
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
          <span>{{ $t("contact.last_name") }}</span>
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
          <span>{{ $t("contact.email") }}</span>
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

      <Grid columns="1" padding="small" style="margin-top: 1.5rem">
        <Button
          :loading="loading"
          type="submit"
          :title="
            $t('phrases.generate', { object: $tc('general.contract', 1) })
          "
        />
      </Grid>
    </form>

    <div v-show="showSignatureField" ref="step2" style="margin: 1rem auto">
      <Grid columns="1" padding="small" gap="small">
        <p style="margin-bottom: 1.5rem">
          Bitte überprüfe alle Angaben innerhalb des generierten Vertrags und
          fahre erst dann mit der Signatur fort. Du hast entweder die
          Möglichkeit den generierten Vertrag selbst zu unterzeichnen und uns
          anschließend per Mail zukommen zu lassen oder du nutzt die folgende
          Signatur-Funktion. Du kannst den signierten Vertrag vor dem Abschluss
          noch einmal herunterladen und ansehen. Sobald Du auf "Vertrag
          abschließen" klickst, wird der Vertrag automatisch an uns
          weitergeleitet.
        </p>
        <div :class="styles.signature">
          <canvas ref="signature"></canvas>
          <span :class="styles.signatureLine"></span>
          <span @click="clearSignature" :class="styles.signatureClear">
            <Icon name="Reset" />
          </span>
        </div>
        <span style="text-align: center; opacity: 0.5; font-size: 0.85rem">
          Bitte oben auf dem Strich unterzeichnen
        </span>
      </Grid>

      <Grid columns="1" style="padding-bottom: 1.25rem">
        <Button
          type="tertiary"
          :loading="loading"
          @click="injectSignature"
          title="Signierten Vertrag herunterladen"
        />
      </Grid>

      <Grid columns="1" padding="none">
        <Button
          :loading="loading"
          @click="sendEmail"
          title="Vertrag abschließen"
        />
      </Grid>
    </div>

    <Grid v-if="sent" columns="1" padding="small">
      <Box type="success">
        {{ $t("form.success") }}
      </Box>
    </Grid>

    <Grid v-if="errors.length > 0" columns="1" padding="small" gap="small">
      <Box type="error" v-for="(error, i) in errors" :key="i">
        {{ error }}
      </Box>
    </Grid>

    <Grid v-if="sendingError" columns="1" padding="small">
      <Box type="error">
        {{ $t("errors.general") }}
      </Box>
    </Grid>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";
import Button from "@/components/Button";
import Box from "@/components/Box";
import Grid from "@/blocks/Grid";
import Icon from "@/components/Icon";
import { jsPDF } from "jspdf";
import { Generator } from "./generator";
import SignaturePad from "signature_pad";
import emailjs from "emailjs-com";

export default Vue.extend({
  components: {
    Button,
    Box,
    Grid,
    Icon
  },
  data() {
    return {
      loading: false,
      sent: false,
      sendingError: false,
      showSignatureField: false,
      signaturePad: undefined,
      signature: undefined,
      styles,
      errors: [],
      organization: "",
      firstName: "",
      lastName: "",
      email: "",
      password: null,
      windowWidth: 0
    };
  },
  methods: {
    generateContract() {
      this.loading = true;
      const doc = new jsPDF();

      if (this.signature) {
        Generator.generate({
          doc,
          organization: this.organization,
          firstName: this.firstName,
          lastName: this.lastName,
          signature: this.signature
        });
        doc.save("AV-Vertrag-signed.pdf");
      } else {
        Generator.generate({
          doc,
          organization: this.organization,
          firstName: this.firstName,
          lastName: this.lastName
        });
        doc.save("AV-Vertrag.pdf");
      }

      this.showSignatureField = true;
      this.loading = false;

      const headerHeight = getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height-scrolled")
        .slice(0, -2);

      const offset = -headerHeight - 20;

      setTimeout(() => {
        window.scrollTo({
          top:
            (this as any).$refs.step2.getBoundingClientRect().top +
            window.pageYOffset +
            offset,
          behavior: "smooth"
        });
      }, 200);
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
    },

    injectSignature() {
      this.errors = [];
      if ((this as any).signaturePad.isEmpty()) {
        (this as any).errors.push("Keine Signatur gefunden");
        return;
      }
      this.signature = (this as any).signaturePad.toDataURL("image/jpeg", 0.2);
      this.generateContract();
    },

    clearSignature() {
      (this as any).signaturePad.clear();
      this.signature = undefined;
    },

    sendEmail() {
      this.loading = true;

      const doc = new jsPDF();
      const signature = (this as any).signaturePad.toDataURL("image/jpeg", 0.2);

      Generator.generate({
        doc,
        organization: this.organization,
        firstName: this.firstName,
        lastName: this.lastName,
        signature: signature
      });

      const pdf = doc.output("datauristring");

      const params = {
        firstName: this.firstName,
        lastName: this.lastName,
        organization: this.organization,
        email: this.email,
        content: pdf
      };

      emailjs
        .send(
          "default_service",
          "template_z2h7xj9",
          params,
          "user_dD3sqT5ZcegDVQThVlwr2"
        )
        .then(
          result => {
            this.loading = false;
            this.sent = true;
            console.log(
              "Content has been submitted successfully!",
              result.status,
              result.text
            );
          },
          error => {
            this.loading = false;
            this.sendingError = true;
            console.error(
              "An error has occured while trying to submit the content!",
              error
            );
          }
        );
    },

    resizeCanvas(e?: any, force = false) {
      /* Only resize when width has changed + goodwill */
      if (Math.abs(window.innerWidth - this.windowWidth) > 10 || force) {
        this.windowWidth = window.innerWidth;
        this.clearSignature();
        const canvas = this.$refs.signature as HTMLCanvasElement;
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = (canvas.parentElement?.clientWidth || 300) * ratio;
        canvas.height = (canvas.parentElement?.clientHeight || 150) * ratio;
        canvas.getContext("2d")?.scale(ratio, ratio);
        canvas.getContext("2d")!.fillStyle = "#ffffff";
        canvas.getContext("2d")!.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  },
  mounted() {
    (this as any).signaturePad = new SignaturePad(
      this.$refs.signature as HTMLCanvasElement,
      { backgroundColor: "#ffffff" }
    );

    this.resizeCanvas();
    window.addEventListener("resize", (this as any).resizeCanvas);
  },
  beforeDestroy() {
    window.removeEventListener("resize", (this as any).resizeCanvas);
  },
  watch: {
    showSignatureField(active) {
      if (active) {
        setTimeout(() => {
          this.resizeCanvas(null, true);
        }, 100);
      }
    }
  }
});
</script>