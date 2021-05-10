<template>
  <blockquote :class="styles.testimonial">
    <div :class="styles.quote">
      <Icon name="Quote" />
      <slot />
      <Icon name="Quote" />
    </div>
    <div v-if="author" :class="styles.author">
      <figure v-if="picture" :class="styles.authorPicture">
        <nuxt-img
          :src="`/images/people/${picture}`"
          :alt="author"
          loading="lazy"
        />
      </figure>
      <span>{{ author }}</span>
      <div v-if="job || company" :class="styles.authorDetails">
        <span v-if="job">{{ job }}</span
        ><span v-if="job && company">,</span>
        <span v-if="company">{{ company }}</span>
      </div>
    </div>
  </blockquote>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import Icon from '@/components/Icon';

export default Vue.extend({
  name: 'Quote',
  components: {
    Icon
  },
  props: {
    author: {
      type: String,
      default: 'Name'
    },
    job: String,
    company: String,
    picture: String
  },
  data() {
    return {
      styles
    };
  }
});
</script>
