<template>
  <blockquote :class="styles.testimonial">
    <div :class="styles.quote">
      <Icon name="Quote" />
      <span>{{ $t(quote) }}</span>
      <Icon name="Quote" />
    </div>
    <div v-if="author.name" :class="styles.author">
      <figure v-if="author.picture" :class="styles.authorPicture">
        <nuxt-img
          :src="`/images/people/${author.picture}`"
          :alt="author.name"
          loading="lazy"
        />
      </figure>
      <span>{{ author.name }}</span>
      <div v-if="author.job || company" :class="styles.authorDetails">
        <span v-if="author.job">{{ author.job }}</span
        ><span v-if="author.job && author.company">,</span>
        <span v-if="author.company">{{ author.company }}</span>
      </div>
    </div>
  </blockquote>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import styles from './styles.module.scss?module';
import Icon from '@/components/Icon';

interface IAuthor {
  name: string;
  job?: string;
  company?: string;
  picture?: string;
}

export default Vue.extend({
  components: {
    Icon
  },
  props: {
    quote: {
      type: String,
      required: true
    },
    author: {
      type: Object as PropType<IAuthor>
    }
  },
  data() {
    return {
      styles
    };
  }
});
</script>
