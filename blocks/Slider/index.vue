<template>
  <client-only>
    <div :class="[styles.container, styles[alignment]]">
      <Swiper ref="slider" :options="swiperOptions" :class="styles.carousel">
        <SwiperSlide v-for="(slide, i) in slides" :key="i">
          <VNode :node="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import styles from './styles.module.scss?module';
import Badge from '@/components/Badge';
import Icon from '@/components/Icon';
import {
  Swiper as SwiperClass,
  SwiperOptions,
  Mousewheel,
  Autoplay
} from 'swiper/core';
import { directive } from 'vue-awesome-swiper';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import 'swiper/swiper-bundle.css';
SwiperClass.use([Mousewheel, Autoplay]);
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);

type Alignment = 'left' | 'right' | 'center';

export default Vue.extend({
  props: {
    alignment: {
      type: String as PropType<Alignment>,
      default: 'center'
    },
    autoplay: {
      type: [String, Number]
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
        slidesPerView: 1.25,
        mousewheel: {
          forceToAxis: true
        },
        centeredSlides: true,
        slideToClickedSlide: true,
        spaceBetween: -50,
        speed: 500,
        slideClass: styles.slide,
        slideActiveClass: styles.active,
        autoplay: this.autoplay
          ? {
              delay: this.autoplay
            }
          : false,
        breakpoints: {
          768: {
            slidesPerView: 1.5
          },
          1024: {
            slidesPerView: 1.5
          },
          1500: {
            slidesPerView: 2.5,
            spaceBetween: -30
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
