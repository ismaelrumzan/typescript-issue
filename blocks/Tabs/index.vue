<template>
  <div :class="[styles.tabs, styles[alignment]]" :data-alignment="alignment">
    <div :class="styles.header">
      <ul :class="styles.items">
        <li
          v-for="(tab, i) in tabs"
          :key="i"
          @click="selectTab(i)"
          :class="{ [styles.active]: i == selectedIndex }"
        >
          <span :class="styles.title">{{ tab.title }}</span>
          <span v-if="tab.description" :class="styles.description">
            {{ tab.description }}
          </span>
          <span :class="styles.indicator"></span>
        </li>
      </ul>
    </div>
    <div :class="styles.content">
      <slot />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";

type Alignment = "left" | "right" | "center";

export default Vue.extend({
  props: {
    alignment: {
      type: String as PropType<Alignment>,
      default: "left"
    }
  },
  data() {
    return {
      styles,
      selectedIndex: 0,
      tabs: []
    };
  },
  created() {
    (this as any).tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i: number) {
      this.selectedIndex = i;
      this.tabs.forEach((tab, index) => {
        (tab as any).active = index === i;
      });
    }
  }
});
</script>