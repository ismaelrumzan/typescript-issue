<template>
  <a
    v-if="externalHref"
    :class="[styles.cta, styles[type], styles[variant]]"
    :href="externalHref"
  >
    <span :class="styles.text">{{ $t(title) }}</span>
  </a>
  <a
    v-else-if="hasTarget"
    :class="[styles.cta, styles[type], styles[variant]]"
    :href="href"
    @click="scrollToTarget(href, $event)"
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
      loading && styles.loading
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
import smoothscroll from "smoothscroll-polyfill";

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
    Loader
  },
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
    },
    scrollToTarget(target: string, e: any) {
      e.preventDefault();
      document.getElementById(target.substring(1))?.scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  computed: {
    hasTarget() {
      return this.href?.slice(0, 1) === "#";
    },
    localeTitle() {
      if (typeof this.title === "string") {
        return this.title;
      }
    }
  },
  mounted() {
    if (this.hasTarget) {
      smoothscroll.polyfill();
    }
  }
});
</script>