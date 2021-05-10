<template>
  <div :class="styles.helpSection">
    <div :class="styles.helpContainer">
      <div :class="styles.help">
        <div :class="styles.textContainer">
          <h2>{{ $t('blocks.help.title') }}</h2>
          <p>{{ $t('blocks.help.description') }}</p>
          <div :class="styles.buttons">
            <Button
              :title="
                $t('phrases.go_to_site', { page: $t('pages.help.title') })
              "
              href="/help"
              type="primary"
              :class="styles.button"
            />
            <Button
              title="phrases.book_meeting"
              @click="bookMeeting"
              type="primary"
              :class="styles.button"
            />
          </div>
        </div>
        <div :class="styles.illustration">
          <Illustration name="question" speed="1.35" alternate />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import Button from '@/components/Button';
import Illustration from '@/components/Illustration';
import { MutationType } from '~/store';

export default Vue.extend({
  components: {
    Button,
    Illustration
  },
  data() {
    return {
      styles
    };
  },
  methods: {
    bookMeeting() {
      this.$store.commit(MutationType.SET_MEETING_WIDGET_OPEN, true);
    }
  }
});
</script>
