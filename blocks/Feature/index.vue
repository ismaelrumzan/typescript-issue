<template>
  <div :class="[styles.feature, styles[alignment]]">
    <div v-if="icon" :class="styles.icon">
      <IconWrapper width="52" height="52">
        <Icon :name="icon" />
      </IconWrapper>
    </div>
    <h3 :class="styles.title">{{ $t(title) }}</h3>
    <p :class="styles.description">{{ $t(description) }}</p>
    <div v-if="moreLink" :class="styles.link">
      <NuxtLink :to="localePath(moreLink)">
        {{ moreText }}
      </NuxtLink>
      <Icon name="ArrowRight" />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";
import IconWrapper from "@/components/IconWrapper";
import Icon from "@/components/Icon";

type Alignment = "left" | "right" | "center";

export default Vue.extend({
  components: {
    IconWrapper,
    Icon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: String,
    icon: String,
    alignment: {
      type: String as PropType<Alignment>,
      default: "left",
    },
    moreText: {
      type: String,
      default: "Mehr erfahren",
    },
    moreLink: String,
  },
  data() {
    return {
      styles,
    };
  },
});
</script>