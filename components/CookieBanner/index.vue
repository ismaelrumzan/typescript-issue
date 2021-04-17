<template>
  <div v-if="!seenCookieBanner" :class="styles.cookies">
    <div :class="styles.content">
      <span>
        {{ $t("cookies.text") }}
        <NuxtLink :to="localePath('/legal/privacy-policy#cookies')">
          {{ $t("phrases.more") }}
        </NuxtLink>
      </span>
      <div :class="styles.links">
        <NuxtLink to="">
          {{ $t("general.manage") }}
        </NuxtLink>
        <Button
          title="general.accept"
          type="secondary"
          @click="setSeenCookieBanner(true)"
        />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";
import Button from "@/components/Button";

export default Vue.extend({
  components: {
    Button
  },
  data() {
    return {
      styles,
      seenCookieBanner: true
    };
  },
  methods: {
    setSeenCookieBanner(seen: boolean) {
      this.seenCookieBanner = seen;
      localStorage.setItem("seenCookieBanner", `${seen}`);
    }
  },
  mounted() {
    this.seenCookieBanner = Boolean(
      localStorage.getItem("seenCookieBanner") === "true"
    );
  }
});
</script>