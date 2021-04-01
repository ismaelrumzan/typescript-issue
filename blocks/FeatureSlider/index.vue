<template>
  <client-only>
    <div :class="[styles.container, styles[alignment]]">
      <div :class="styles.header">
        <Badge v-if="badge" :text="badge" />
        <div v-if="title" :class="styles.headerText">
          <h2 :class="styles.title">{{ title }}</h2>
          <p v-if="description" :class="styles.description">
            {{ description }}
          </p>
        </div>
        <div :class="styles.navigation">
          <button @click="goToPrevSlide"><Icon name="LongArrowLeft" /></button>
          <button @click="goToNextSlide"><Icon name="LongArrowRight" /></button>
        </div>
      </div>
      <Swiper ref="slider" :options="swiperOptions" :class="styles.carousel">
        <SwiperSlide v-for="(slide, i) in slides" :key="i">
          <span :class="styles.index">{{ modifyIndex(i) }}</span>
          <VNode :node="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  </client-only>
</template>

<script lang='ts'>
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";
import Badge from "@/components/Badge";
import Icon from "@/components/Icon";
import { Swiper as SwiperClass, SwiperOptions, Mousewheel } from "swiper/core";
import { directive } from "vue-awesome-swiper";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper-bundle.css";
SwiperClass.use([Mousewheel]);
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);

type Alignment = "left" | "right" | "center";

export default Vue.extend({
  props: {
    badge: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    alignment: {
      type: String as PropType<Alignment>,
      default: "center"
    }
  },
  components: {
    Badge,
    Icon,
    Swiper,
    SwiperSlide,
    VNode: {
      functional: true,
      render: (h: any, ctx: any) => ctx.props.node
    }
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      styles,
      slides: [],
      swiperOptions: {
        autoHeight: true,
        loop: true,
        slidesPerView: 1.35,
        mousewheel: {
          forceToAxis: true
        },
        centeredSlides: true,
        slideToClickedSlide: true,
        spaceBetween: 15,
        slideClass: styles.slide,
        slideActiveClass: [styles.active, "swiper-slide-active"].join(" "),
        breakpoints: {
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3.25
          },
          1500: {
            slidesPerView: 4.5
          }
        }
      } as SwiperOptions
    };
  },
  created() {
    (this as any).slides = (this as any).$slots.default.filter(
      (item: any) => item.tag
    );
  },
  methods: {
    modifyIndex(i: number): string | number {
      i++;
      if (i.toString().length === 1) {
        return `0${i}`;
      }
      return i;
    },
    goToNextSlide() {
      (this as any).$refs.slider.$swiper.slideNext();
    },
    goToPrevSlide() {
      (this as any).$refs.slider.$swiper.slidePrev();
    }
  }
});
</script>