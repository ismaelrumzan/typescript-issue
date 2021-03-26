<template>
  <section :class="[styles.hero, styles[alignment]]">
    <div :class="styles.content">
      <div v-if="badge" :class="styles.badge">
        <span>{{ badge }}</span>
      </div>
      <h1 :class="styles.title">{{ title }}</h1>
      <span :class="styles.description">{{ description }}</span>
      <ul v-if="cta" :class="styles.buttons">
        <li v-for="(button, i) in cta" :key="i" :class="styles.button">
          <Button
            :title="button.title"
            :type="button.type"
            :href="button.href"
          />
        </li>
      </ul>
    </div>
    <div v-if="illustration" :class="styles.illustration">
      <Illustration :name="illustration" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";
import Button from "@/components/Button";
import Illustration from "@/components/Illustration";

type Alignment = "left" | "right" | "center";

export default Vue.extend({
  components: {
    Button,
    Illustration
  },
  props: {
    alignment: {
      type: String as PropType<Alignment>,
      default: "left"
    },
    badge: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    illustration: {
      type: String
    },
    cta: {
      type: Array
    }
  },
  data() {
    return {
      styles
    };
  }
});
</script>