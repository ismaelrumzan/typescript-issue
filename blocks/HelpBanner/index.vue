<template>
  <div :class="styles.helpSection">
    <div :class="styles.helpContainer">
      <div :class="styles.help">
        <div :class="styles.textContainer">
          <h2>Noch Fragen?</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <div :class="styles.buttons">
            <Button title="Zum FAQ" href="/faq" :class="styles.button" />
          </div>
        </div>
        <div :class="styles.illustration">
          <Illustration name="question" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";
import Button from "@/components/Button";
import Illustration from "@/components/Illustration";

export default Vue.extend({
  components: {
    Button,
    Illustration
  },
  data() {
    return {
      styles
    };
  }
});
</script>