<template>
  <main id="wrapper">
    <Header />
    <Nuxt />
    <Footer />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default Vue.extend({
  components: {
    Header,
    Footer
  }
});
</script>
