<template>
  <blockquote :class="styles.testimonial">
    <div :class="styles.quote">
      <Icon name="Quote" />
      <span>{{ $t(quote) }}</span>
      <Icon name="Quote" />
    </div>
    <div v-if="author" :class="styles.author">
      <span>{{ author }}</span>
    </div>
    <div v-if="authorDetails" :class="styles.authorDetails">
      <span>{{ authorDetails }}</span>
    </div>
  </blockquote>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";
import Icon from "@/components/Icon"

export default Vue.extend({
  components: {
    Icon
  },
  props: {
    quote: {
      type: String,
      required: true
    },
    author: {
      type: String
    },
    authorDetails: {
      type: String
    }
  },
  data() {
    return {
      styles
    };
  }
});
</script>