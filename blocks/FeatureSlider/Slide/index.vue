<template>
  <div :class="styles.content">
    <h3 :class="styles.title">{{ title }}</h3>
    <div :class="styles.hidden">
      <p v-if="description" :class="styles.description">
        {{ $t(description) }}
      </p>
      <NuxtLink v-if="moreLink" :to="localePath(moreLink)" :class="styles.link">
        {{ $t(moreText) }}
        <Icon name="ArrowRight" />
      </NuxtLink>
    </div>
  </div>
</template>


<script lang='ts'>
import Vue from "vue";
import styles from "../styles.module.scss?module";
import Icon from "@/components/Icon";

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    moreText: {
      type: String,
      default: "phrases.more",
    },
    moreLink: {
      type: String,
    },
  },
  components: {
    Icon,
  },
  data() {
    return {
      styles,
    };
  },
});
</script>