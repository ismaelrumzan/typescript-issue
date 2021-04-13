<template>
  <section
    :class="[
      styles.hero,
      styles[alignment],
      styles[verticalAlign],
      styles[illustrationWidth],
      styles[paddingClass],
      styles[gapClass],
      { [styles.fullWidth]: fullWidth }
    ]"
  >
    <div :class="styles.content" :style="contentStyles">
      <Badge v-if="badge" :text="badge" />
      <h1 :class="styles.title" :style="titleStyles">
        {{ $t(title) }}
        <TypeWriter
          v-if="typewriter"
          :words="$t(typewriter)"
          :class="styles.typewriter"
        />
      </h1>
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
      v-if="illustration && darkIllustration"
      :class="styles.illustration"
      :style="illustrationStyles"
    >
      <Illustration
        v-show="isDarkMode"
        :name="darkIllustration || illustration"
        :withShadow="withShadow"
        :renderer="renderer"
      />
      <Illustration
        v-show="!isDarkMode"
        :name="illustration"
        :withShadow="withShadow"
        :renderer="renderer"
      />
    </div>
    <div
      v-else-if="illustration"
      :class="styles.illustration"
      :style="illustrationStyles"
    >
      <Illustration
        :name="illustration"
        :withShadow="withShadow"
        :renderer="renderer"
      />
    </div>

    <slot />
    <Particles v-if="particles" />
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Illustration from "@/components/Illustration";
import Particles from "@/components/Particles";
import TypeWriter from "@/components/TypeWriter";
import { RootState } from "~/store";

type PaddingOptions = "default" | "small" | "none";
type HorizontalAlignment = "left" | "right" | "center";
type VerticalAlignment = "top" | "bottom" | "middle";
type IllustrationWidth = "narrow" | "normal" | "wide";
type GapOption = "default" | "medium" | "large" | "none";
type RenderMode = "svg" | "canvas" | "html";

export default Vue.extend({
  components: {
    Badge,
    Button,
    Illustration,
    Particles,
    TypeWriter
  },
  props: {
    alignment: {
      type: String as PropType<HorizontalAlignment>,
      default: "left"
    },
    verticalAlign: {
      type: String as PropType<VerticalAlignment>,
      default: "middle"
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
    withShadow: {
      type: Boolean
    },
    renderer: {
      type: String as PropType<RenderMode>
    },
    particles: {
      type: Boolean
    },
    cta: {
      type: Array
    },
    typewriter: {
      type: String
    },
    contentStyles: {
      type: Object
    },
    illustrationStyles: {
      type: Object
    },
    titleStyles: {
      type: Object
    },
    padding: {
      type: String as PropType<PaddingOptions>,
      default: "default"
    },
    gap: {
      type: String as PropType<GapOption>,
      default: "default"
    },
    fullWidth: {
      type: Boolean
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
    gapClass(): string {
      return `gap-${this.gap}`;
    },
    isDarkMode(): boolean {
      return (this.$store.state as RootState).theme === "dark";
    }
  },
  watch: {
    /* Currently both Illustration are being loaded. Needs to be optimized later on */
    // isDarkMode(darkMode) {
    //   if (darkMode) {
    //     console.log(this.$refs.illustration);
    //   }
    // }
  }
});
</script>