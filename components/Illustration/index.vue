<template>
  <div :style="style" ref="illustration"></div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import lottie from "lottie-web";

export type RenderMode = "svg" | "canvas";

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
    }
  },
  data() {
    return {
      style: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        margin: "0 auto",
        display: "flex"
      }
    };
  },
  mounted() {
    import(`@/assets/illustrations/${this.name}.json`)
      .then(module => {
        (lottie as any).loadAnimation({
          container: this.$refs.illustration,
          renderer: this.renderer,
          loop: this.loop,
          autoplay: this.autoplay,
          animationData: JSON.parse(JSON.stringify(module.default))
        });
      })
      .catch(error => {
        console.error(error);
        console.warn("Loading fallback Illustration ...");
        import(`@/assets/illustrations/404.json`).then(module => {
          (lottie as any).loadAnimation({
            container: this.$refs.illustration,
            renderer: this.renderer,
            loop: this.loop,
            autoplay: this.autoplay,
            animationData: JSON.parse(JSON.stringify(module.default))
          });
        });
      });
  },
  beforeDestroy() {
    lottie.destroy();
  }
});
</script>