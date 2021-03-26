<template>
  <div :class="[styles.tabs, styles[alignment]]" :data-alignment="alignment">
    <div :class="styles.header">
      <ul :class="styles.items">
        <li
          v-for="(tab, i) in tabs"
          :key="i"
          @click="[selectTab(i), scrollToElem($event)]"
          :class="{ [styles.active]: i == selectedIndex }"
        >
          <span :class="styles.title">
            <span :class="styles.index">{{ i + 1 }}</span>
            {{ tab.title }}
          </span>
          <span
            v-if="tab.description"
            :class="styles.description"
            :ref="`description-${i}`"
          >
            {{ tab.description }}
          </span>
          <span :class="styles.indicator"></span>
        </li>
      </ul>
    </div>
    <div :class="styles.content">
      <slot />
      <div
        v-if="alignment === 'left' || alignment === 'right'"
        :class="styles.mobileTextContainer"
      >
        <div
          v-for="(tab, i) in tabs"
          :key="i"
          :class="[
            styles.mobileDescription,
            { [styles.active]: i == selectedIndex }
          ]"
        >
          <span
            v-if="tab.description"
            :class="styles.description"
            :ref="`description-${i}`"
          >
            {{ tab.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";
import smoothscroll from "smoothscroll-polyfill";

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
    smoothscroll.polyfill();
  },
  methods: {
    selectTab(i: number) {
      this.selectedIndex = i;
      this.tabs.forEach((tab: any, index: number) => {
        tab.active = index === i;
      });
    },
    adjustHeight(i: number) {
      if (i != this.selectedIndex) {
        const content = (this as any).$refs[`description-${i}`][0];
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    },
    scrollToElem(e: any) {
      const offset = e.target.offsetLeft;
      e.target.parentNode.scrollTo({
        left: offset,
        behavior: "smooth"
      });
    },
    modifiedIndex(i: number): string | number {
      i++;
      if (i.toString().length === 1) {
        return `0${i}`;
      }
      return i;
    }
  }
});
</script>