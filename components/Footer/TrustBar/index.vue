<template>
  <div :class="styles.trustbarWrapper">
    <div :class="styles.trustbar">
      <div :class="styles.item">
        <Icon name="Check" />
        <span>99.99% Uptime</span>
      </div>
      <div :class="styles.item">
        <Icon name="Security" />
        <span>Fokus auf Sicherheit</span>
      </div>
      <div :class="styles.item">
        <Icon name="Speed" />
        <span>Hohe Geschwindigkeit</span>
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