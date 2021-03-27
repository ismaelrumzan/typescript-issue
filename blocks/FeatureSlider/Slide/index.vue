<template>
  <div :class="styles.content">
    <h3 :class="styles.title">{{ title }}</h3>
    <p v-if="description" :class="styles.description">
      {{ description }}
    </p>
  </div>
</template>


<script lang='ts'>
import Vue from "vue";
import styles from "../styles.module.scss?module";

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
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