<template>
  <div :class="[styles.container, styles[alignment], styles[paddingClass]]">
    <div :class="styles.content">
      <Badge v-if="badge" :text="badge" />
      <h2 :class="styles.title">{{ $t(title) }}</h2>
      <span v-if="description" :class="styles.description">{{
        $t(description)
      }}</span>
      <ul v-if="cta" :class="styles.buttons">
        <li v-for="(button, i) in cta" :key="i" :class="styles.button">
          <Button
            v-if="button.onClick"
            v-bind="button"
            @click="button.onClick"
          />
          <Button v-else v-bind="button" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

type Alignment = "left" | "right" | "center";
type PaddingOption =
  | "none"
  | "small"
  | "medium"
  | "large"
  | "topOnly"
  | "bottomOnly";

export default Vue.extend({
  components: {
    Badge,
    Button
  },
  props: {
    alignment: {
      type: String as PropType<Alignment>,
      default: "left"
    },
    padding: {
      type: String as PropType<PaddingOption>,
      default: "large"
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
    cta: {
      type: Array
    }
  },
  data() {
    return {
      styles
    };
  },
  computed: {
    paddingClass(): string {
      return `pad-${this.padding}`;
    }
  }
});
</script>