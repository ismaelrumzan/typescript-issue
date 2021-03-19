<template>
  <div :class="styles.trustbarWrapper">
    <div :class="styles.trustbar">
      <div :class="styles.item">
        <Icon name="Security" viewBox="0 0 512 512" />
        <span>Fokus auf Sicherheit</span>
      </div>
      <div :class="styles.item">
        <Icon name="Demo" viewBox="0 0 24 24" />
        <span>Kostenlose Testphase</span>
      </div>
      <div :class="styles.item">
        <Icon name="Check" viewBox="0 0 512 512" />
        <span>99.99% Uptime</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";
import Icon from "@/components/Icon";

export default Vue.extend({
  components: {
    Icon
  },
  data() {
    return {
      styles
    };
  }
});
</script>