<template>
  <div :class="styles.trustbarWrapper">
    <div :class="styles.trustbar">
      <div :class="styles.item">
        <Icon name="Check" />
        <span>99.99% {{ $t("general.uptime") }}</span>
      </div>
      <div :class="styles.item">
        <Icon name="Security" />
        <span>{{ $t("phrases.focus_on_security") }}</span>
      </div>
      <div :class="styles.item">
        <Icon name="Speed" />
        <span>{{ $t("phrases.high_speed") }}</span>
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