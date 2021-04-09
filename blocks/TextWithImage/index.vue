<template>
  <div
    :class="[
      styles.container,
      styles[alignment],
      styles[paddingClass],
      styles[illustrationWidth]
    ]"
  >
    <div :class="styles.content">
      <Badge v-if="badge" :text="badge" />
      <h2 :class="styles.title">{{ $t(title) }}</h2>
      <span :class="styles.description">{{ $t(description) }}</span>
      <ul v-if="cta" :class="styles.buttons">
        <li v-for="(button, i) in cta" :key="i" :class="styles.button">
          <Button
            v-if="button.onClick"
            @click="button.onClick"
            :title="button.title"
            :type="button.type"
            :href="button.href"
            :externalHref="button.externalHref"
          />
          <Button
            v-else
            :title="button.title"
            :type="button.type"
            :href="button.href"
            :externalHref="button.externalHref"
          />
        </li>
      </ul>
    </div>
    <div
      v-if="illustration"
      :class="styles.illustration"
      :style="illustrationStyles"
    >
      <Illustration
        v-show="isDarkMode"
        :name="darkIllustration || illustration"
      />
      <Illustration v-show="!isDarkMode" :name="illustration" />
    </div>
    <div v-if="image" :class="styles.image">
      <nuxt-img
        :key="image"
        :src="`/images/${image}`"
        loading="lazy"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
      />
      <div :class="styles.background" v-if="bubbles">
        <div :class="styles.fancy">
          <span :class="styles.inner"></span>
        </div>
        <div :class="styles.fancy">
          <span :class="styles.inner"></span>
        </div>
        <div :class="styles.fancy">
          <span :class="styles.inner"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Illustration from "@/components/Illustration";
import { RootState } from "~/store";

type Alignment = "left" | "right" | "center";
type PaddingOption = "small" | "medium" | "large" | "none";
type IllustrationWidth = "narrow" | "normal" | "wide";
type RenderMode = "svg" | "canvas";

export default Vue.extend({
  components: {
    Badge,
    Button,
    Illustration
  },
  props: {
    alignment: {
      type: String as PropType<Alignment>,
      default: "left"
    },
    padding: {
      type: String as PropType<PaddingOption>,
      default: "medium"
    },
    badge: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    illustration: {
      type: String
    },
    darkIllustration: {
      type: String
    },
    illustrationWidth: {
      type: String as PropType<IllustrationWidth>,
      default: "normal"
    },
    illustrationStyles: {
      type: Object
    },
    renderer: {
      type: String as PropType<RenderMode>
    },
    image: {
      type: String
    },
    bubbles: {
      type: Boolean
    },
    cta: {
      type: Array
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
    isDarkMode(): boolean {
      return (this.$store.state as RootState).theme === "dark";
    }
  }
});
</script>