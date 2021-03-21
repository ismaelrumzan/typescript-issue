<template>
  <a
    v-if="externalHref"
    :class="[styles.cta, styles[type], styles[variant]]"
    :href="externalHref"
  >
    <span :class="styles.text">{{ title }}</span>
  </a>
  <NuxtLink
    v-else-if="href"
    :class="[styles.cta, styles[type], styles[variant]]"
    :to="href"
  >
    <span :class="styles.text">{{ title }}</span>
  </NuxtLink>
  <button
    v-else
    :class="[styles.cta, styles[type], styles[variant]]"
    @click="onClick"
  >
    <span :class="styles.text">{{ title }}</span>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";

type Type =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "error"
  | "warning"
  | "alert";
type Variant = "none" | "shadow";

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    href: {
      type: String
    },
    externalHref: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as PropType<Type>,
      default: "primary"
    },
    variant: {
      type: String as PropType<Variant>,
      default: "none"
    },
    prefix: {
      default: null
    },
    suffix: {
      default: null
    }
  },
  data() {
    return {
      styles
    };
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
});
</script>