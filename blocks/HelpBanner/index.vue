<template>
  <section :class="styles.helpSection">
    <div :class="styles.helpContainer">
      <div :class="styles.help">
        <div :class="styles.textContainer">
          <h2>Noch Fragen?</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div :class="styles.buttonContainer">
          <Button title="Work in Progress..." href="/faq" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";
import Button from "@/components/Button";

export default Vue.extend({
  components: {
    Button
  },
  data() {
    return {
      styles
    };
  }
});
</script>