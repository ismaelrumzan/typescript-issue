<template>
  <client-only>
    <Swiper ref="slider" :options="swiperOptions" :class="styles.carousel">
      <SwiperSlide
        v-for="(slide, i) in slides"
        :key="i"
        :style="`width: ${Math.floor(Math.random() * 20) + 15}rem`"
      >
        <span :class="styles.index">{{ modifyIndex(i) }}</span>
        <VNode :node="slide" />
      </SwiperSlide>
      <!-- <div
        :class="['swiper-pagination', styles.pagination]"
        slot="pagination"
      ></div> -->
    </Swiper>
  </client-only>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";
import {
  Swiper as SwiperClass,
  SwiperOptions,
  Pagination,
  Mousewheel
} from "swiper/core";
import { directive } from "vue-awesome-swiper";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper-bundle.css";
SwiperClass.use([Pagination, Mousewheel]);
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);

export default Vue.extend({
  props: {
    title: {
      type: String
      // required: true
    },
    description: {
      type: String
    }
  },
  components: {
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
        freeMode: true,
        mousewheel: true,
        centeredSlides: true,
        freeModeSticky: true,
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
        },
        pagination: {
          el: ".swiper-pagination",
          bulletClass: [styles.bullet, "swiper-pagination-bullet"].join(" "),
          bulletActiveClass: [
            styles.bulletActive,
            "swiper-pagination-bullet-active"
          ].join(" "),
          clickable: true
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
    }
  }
});
</script>