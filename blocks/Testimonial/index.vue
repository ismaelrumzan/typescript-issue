<template>
  <blockquote :class="styles.testimonial">
    <div :class="styles.quote">
      <Icon name="Quote" />
      <span>{{ $t(quote) }}</span>
      <Icon name="Quote" />
    </div>
    <div v-if="author.name" :class="styles.author">
      <span>{{ author.name }}</span>
    </div>
    <div v-if="author.job || author.company" :class="styles.authorDetails">
      <span v-if="author.job">{{ author.job }}</span>
      <span v-if="author.job && author.company">at</span>
      <span v-if="author.company">{{ author.company }}</span>
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
