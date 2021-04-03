<template>
  <a
    v-if="externalHref"
    :class="[styles.cta, styles[type], styles[variant]]"
    :href="externalHref"
  >
    <span :class="styles.text">{{ $t(title) }}</span>
  </a>
  <NuxtLink
    v-else-if="href"
    :class="[styles.cta, styles[type], styles[variant]]"
    :to="localePath(href)"
  >
    <span :class="styles.text">{{ $t(title) }}</span>
  </NuxtLink>
  <button
    v-else
    :disabled="loading || disabled"
    :type="type === 'submit' && 'submit'"
    :class="[
      styles.cta,
      styles[type],
      styles[variant],
      loading && styles.loading,
    ]"
    @click="onClick"
  >
    <span :class="styles.text">{{ $t(title) }}</span>
    <div v-if="loading" :class="styles.loader">
      <Loader />
    </div>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";
import Loader from "@/components/Loader";

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
  components: {
    Loader,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
    },
    externalHref: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<Type>,
      default: "primary",
    },
    variant: {
      type: String as PropType<Variant>,
      default: "none",
    },
    prefix: {
      default: null,
    },
    suffix: {
      default: null,
    },
  },
  data() {
    return {
      styles,
    };
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
});
</script>