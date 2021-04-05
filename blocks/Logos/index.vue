<template>
  <div :class="[styles.logos, styles[paddingClass]]">
    <span v-if="title" :class="styles.title">{{ $t(title) }}</span>
    <ul>
      <li v-for="(logo, i) in logos" :key="i">
        <a :href="logo.link" :title="logo.name" target="_blank" rel="noopener">
          <img :src="`/logos/${logo.file}`" :alt="`${logo.name} Logo`" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";

type PaddingOptions = "default" | "topOnly" | "bottomOnly";

interface Logo {
  file: string;
  link: string;
  name?: string;
}

export default Vue.extend({
  props: {
    title: {
      type: String
    },
    logos: {
      type: Array as PropType<Logo[]>
    },
    padding: {
      type: String as PropType<PaddingOptions>,
      default: "default"
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