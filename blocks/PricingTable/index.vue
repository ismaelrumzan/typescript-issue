<template>
  <client-only>
    <div :class="styles.container">
      <Swiper ref="slider" :options="swiperOptions" :class="styles.carousel">
        <SwiperSlide
          v-for="(slide, i) in slides"
          :key="i"
          :class="{
            [styles.popular]:
              slide.componentOptions.propsData.popular !== undefined
          }"
        >
          <VNode :node="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import Badge from '@/components/Badge';
import Icon from '@/components/Icon';
import { Swiper as SwiperClass, SwiperOptions, Mousewheel } from 'swiper/core';
import { directive } from 'vue-awesome-swiper';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import 'swiper/swiper-bundle.css';
SwiperClass.use([Mousewheel]);
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);

export default Vue.extend({
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
        autoHeight: false,
        loop: false,
        allowTouchMove: true,
        slideToClickedSlide: true,
        slidesPerView: 1.075,
        spaceBetween: 20,
        mousewheel: {
          forceToAxis: true
        },
        speed: 500,
        slideClass: styles.slide,
        slideActiveClass: styles.active,
        breakpoints: {
          900: {
            slidesPerView: 3,
            allowTouchMove: false,
            spaceBetween: 0,
            slideToClickedSlide: false,
            mousewheel: false
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
    goToNextSlide() {
      (this as any).$refs.slider.$swiper.slideNext();
    },
    goToPrevSlide() {
      (this as any).$refs.slider.$swiper.slidePrev();
    }
  }
});
</script>
