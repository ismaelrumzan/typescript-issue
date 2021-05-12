<template>
  <div :class="general.content">
    <span v-if="popular" :class="styles.badge">{{
      $t('general.popular')
    }}</span>
    <span :class="styles.category">{{ $t(category) }}</span>
    <span :class="styles.description">{{ $t(description) }}</span>
    <div v-if="price" :class="styles.price">
      <span :class="styles.currency">€</span>
      <span :class="styles.value">{{ price.monthly }}</span>
      <span :class="styles.period">/ month</span>
    </div>
    <div v-else :class="styles.price">
      <span :class="styles.value">{{ $t('general.custom') }}</span>
    </div>
    <ul :class="styles.features">
      <li v-for="(feature, i) in features" :key="i">
        <Icon name="Check" :class="styles.check" />
        {{ feature }}
      </li>
    </ul>
    <div :class="styles.button">
      <Button v-if="cta.onClick" v-bind="cta" @click="cta.onClick" />
      <Button v-else v-bind="cta" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import general from '../styles.module.scss?module';
import styles from './styles.module.scss?module';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

interface Price {
  monthly: string | number;
  anually: string | number;
}

export default Vue.extend({
  components: {
    Icon,
    Button
  },
  props: {
    popular: {
      type: Boolean
    },
    category: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: Object as PropType<Price>
    },
    features: {
      type: Array
    },
    link: {
      type: String,
      default: '/apply'
    },
    cta: {
      type: Object,
      default: {
        title: 'Get started',
        href: '/apply'
      }
    }
  },
  data() {
    return {
      general,
      styles
    };
  }
});
</script>
