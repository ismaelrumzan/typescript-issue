<template>
  <div :style="style" ref="illustration"></div>
</template>

<script lang="ts">
import Vue from "vue";
import lottie from "lottie-web";

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
    }
  },
  data() {
    return {
      style: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        margin: "0 auto"
      }
    };
  },
  mounted() {
    import(`@/assets/illustrations/${this.name}.json`)
      .then(module => {
        (lottie as any).loadAnimation({
          container: this.$refs.illustration,
          renderer: "svg",
          loop: this.loop,
          autoplay: this.autoplay,
          animationData: module.default
        });
      })
      .catch(error => {
        console.error(error);
        console.warn("Loading fallback Illustration ...");
        import(`@/assets/illustrations/404.json`).then(module => {
          (lottie as any).loadAnimation({
            container: this.$refs.illustration,
            renderer: "svg",
            loop: this.loop,
            autoplay: this.autoplay,
            animationData: module.default
          });
        });
      });
  }
});
</script>