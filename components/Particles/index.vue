<template>
  <div :class="['particles', styles.particles]" ref="particles">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";
import anime from "animejs";

export default Vue.extend({
  data() {
    return {
      styles
    };
  },
  mounted() {
    anime({
      targets: ".particles div",
      scale: [
        { value: 0.75, easing: "easeOutSine", duration: 1000 },
        { value: 1, easing: "easeInOutQuad", duration: 1500 }
      ],
      opacity: [
        { value: 0.4, easing: "easeOutSine", duration: 1000 },
        { value: 0, easing: "easeInOutQuad", duration: 1500 }
      ],
      delay: anime.stagger(500, { grid: [8, 4], from: "center" }),
      loop: true,
      direction: "alternate"
    });
  }
});
</script>