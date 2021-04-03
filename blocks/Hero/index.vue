<template>
  <section
    :class="[
      styles.hero,
      styles[alignment],
      styles[verticalAlign],
      styles[illustrationWidth],
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
            :title="button.title"
            :type="button.type"
            :href="button.href"
          />
        </li>
      </ul>
    </div>
    <div v-if="illustration" :class="styles.illustration">
      <Illustration :name="illustration" />
    </div>
    <slot />
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Illustration from "@/components/Illustration";
import TypeWriter from "@/components/TypeWriter";

type HorizontalAlignment = "left" | "right" | "center";
type VerticalAlignment = "top" | "bottom" | "middle";
type IllustrationWidth = "narrow" | "normal" | "wide";
type RenderMode = "svg" | "canvas";

export default Vue.extend({
  components: {
    Badge,
    Button,
    Illustration,
    TypeWriter,
  },
  props: {
    alignment: {
      type: String as PropType<HorizontalAlignment>,
      default: "left",
    },
    verticalAlign: {
      type: String as PropType<VerticalAlignment>,
      default: "middle",
    },
    badge: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    illustration: {
      type: String,
    },
    illustrationWidth: {
      type: String as PropType<IllustrationWidth>,
      default: "normal",
    },
    renderer: {
      type: String as PropType<RenderMode>,
    },
    cta: {
      type: Array,
    },
    typewriter: {
      type: String,
    },
    contentStyles: {
      type: Object,
    },
    titleStyles: {
      type: Object,
    },
  },
  data() {
    return {
      styles,
    };
  },
});
</script>