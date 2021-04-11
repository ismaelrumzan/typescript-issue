<template>
  <div :class="styles.illustration" ref="illustration"></div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";
import lottie, { AnimationItem } from "lottie-web";

export type RenderMode = "svg" | "canvas" | "html";

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
      default: "example"
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    renderer: {
      type: String as PropType<RenderMode>,
      default: "svg"
    },
    withShadow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      styles,
      animation: null
    };
  },
  mounted() {
    import(`@/assets/illustrations/${this.name}.json`)
      .then(module => {
        const animation = lottie.loadAnimation({
          container: this.$refs.illustration as any,
          renderer: this.renderer as RenderMode,
          rendererSettings: this.withShadow
            ? {
                filterSize: {
                  width: "200%",
                  height: "200%",
                  x: "-50%",
                  y: "-50%"
                }
              }
            : {},
          loop: this.loop,
          autoplay: this.autoplay,
          animationData: JSON.parse(JSON.stringify(module.default))
        });
        (this.animation as AnimationItem | null) = animation;
      })
      .catch(error => {
        console.error(error);
        console.warn("Loading fallback Illustration ...");
        import(`@/assets/illustrations/404.json`).then(module => {
          const animation = lottie.loadAnimation({
            container: this.$refs.illustration as any,
            renderer: this.renderer as RenderMode,
            loop: this.loop,
            autoplay: this.autoplay,
            animationData: JSON.parse(JSON.stringify(module.default))
          });
          (this.animation as AnimationItem | null) = animation;
        });
      });
  },
  beforeDestroy() {
    (this.animation as AnimationItem | null)?.destroy();
  }
});
</script>