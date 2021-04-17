<template>
  <div :class="styles.illustration" :id="name" ref="illustration"></div>
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
      animation: null as AnimationItem | null,
      observer: null as IntersectionObserver | null,
      options: {
        root: null,
        threshold: 0
      } as IntersectionObserverInit
    };
  },
  methods: {
    fetchIllustration() {
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
          this.animation = animation;
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
            this.animation = animation;
          });
        });
    },
    handleIntersect(entry: any) {
      if (entry.isIntersecting > 0) {
        this.animation?.play();
      } else {
        this.animation?.pause();
      }
    }
  },
  mounted() {
    this.fetchIllustration();

    if (
      !("IntersectionObserver" in window) ||
      !("IntersectionObserverEntry" in window) ||
      !("intersectionRatio" in window.IntersectionObserverEntry.prototype)
    ) {
      /* will load polyfill later on, just keep playing at the moment */
    } else {
      this.observer = new IntersectionObserver(entries => {
        this.handleIntersect(entries[0]);
      }, this.options);

      this.observer.observe((this as any).$refs.illustration);
    }
  },
  beforeDestroy() {
    this.observer?.disconnect();
    this.animation?.destroy();
  }
});
</script>

<style lang="scss">
/**
  * Illustration: main.json
  */
#main {
  #elem1logo,
  #elem2logo,
  #elem3logo,
  #elem4logo,
  #elem5logo,
  #elem6logo,
  #elem7logo,
  #elem8logo,
  #elem9logo,
  #elem10logo {
    display: none !important;
  }

  #elem1bg,
  #elem2bg,
  #elem3bg,
  #elem4bg,
  #elem5bg,
  #elem6bg,
  #elem7bg,
  #elem8bg,
  #elem9bg,
  #elem10bg {
    display: none !important;
  }

  #elem1,
  #elem2,
  #elem3,
  #elem4,
  #elem5,
  #elem6,
  #elem7,
  #elem8,
  #elem9,
  #elem10 {
    path {
      fill: var(--main-color-light-8);
    }
  }
}
[data-theme="dark"] {
  #main {
    #middlebg,
    #elem1bg,
    #elem2bg,
    #elem3bg,
    #elem4bg,
    #elem5bg,
    #elem6bg,
    #elem7bg,
    #elem8bg,
    #elem9bg,
    #elem10bg {
      display: none !important;
    }

    #elem1,
    #elem2,
    #elem3,
    #elem4,
    #elem5,
    #elem6,
    #elem7,
    #elem8,
    #elem9,
    #elem10 {
      path {
        fill: #202020;
      }
    }

    #middle {
      g:first-child {
        path {
          fill: #e8353c;
        }
      }
      g:last-child {
        path {
          fill: #fff;
        }
      }
    }

    #elem3logo,
    #elem4logo,
    #elem5logo {
      path {
        fill: #fff;
      }
    }
  }
}
</style>