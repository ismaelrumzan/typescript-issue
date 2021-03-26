<template>
  <client-only>
    <Swiper ref="slider" :options="swiperOptions" :class="styles.carousel">
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <div
        :class="['swiper-pagination', styles.pagination]"
        slot="pagination"
      ></div>
    </Swiper>
  </client-only>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";
import { Swiper as SwiperClass, SwiperOptions, Pagination } from "swiper/core";
import { directive } from "vue-awesome-swiper";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper-bundle.css";
SwiperClass.use([Pagination]);
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);

export default Vue.extend({
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      styles,
      swiperOptions: {
        autoHeight: true,
        loop: true,
        slidesPerView: 3,
        freeMode: true,
        centeredSlides: true,
        freeModeSticky: true,
        slideToClickedSlide: true,
        spaceBetween: 30,
        slideClass: styles.slide,
        slideActiveClass: [styles.active, "swiper-slide-active"].join(" "),
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
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
  }
});
</script>