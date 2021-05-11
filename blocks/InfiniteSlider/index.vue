<template>
  <div :class="[styles.slider, styles[paddingClass], styles[direction]]">
    <span v-if="title" :class="styles.title">{{ $t(title) }}</span>
    <ul :style="carouselStyles">
      <div>
        <li v-for="(logo, i) in logos" :key="i">
          <a
            :href="logo.link"
            :title="logo.name"
            target="_blank"
            rel="noopener"
          >
            <img :src="`/logos/${logo.file}`" :alt="`${logo.name} Logo`" />
          </a>
        </li>
      </div>
      <!-- Copy -->
      <div>
        <li v-for="(logo, i) in logos" :key="i + '-copy'">
          <a
            :href="logo.link"
            :title="logo.name"
            target="_blank"
            rel="noopener"
          >
            <img :src="`/logos/${logo.file}`" :alt="`${logo.name} Logo`" />
          </a>
        </li>
      </div>
      <!-- Copy -->
      <div v-if="logos.length < 6">
        <li v-for="(logo, i) in logos" :key="i + '-second-copy'">
          <a
            :href="logo.link"
            :title="logo.name"
            target="_blank"
            rel="noopener"
          >
            <img :src="`/logos/${logo.file}`" :alt="`${logo.name} Logo`" />
          </a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import styles from './styles.module.scss?module';

type PaddingOptions = 'default' | 'topOnly' | 'bottomOnly';

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
    width: {
      type: String,
      default: '200px'
    },
    direction: {
      type: String,
      default: 'left'
    },
    padding: {
      type: String as PropType<PaddingOptions>,
      default: 'default'
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
    },
    carouselStyles(): object {
      return {
        '--amount': this.logos.length,
        '--copies': this.logos.length < 6 ? 3 : 2,
        '--width': this.width,
        '--width-small': this.width
      };
    }
  }
});
</script>
