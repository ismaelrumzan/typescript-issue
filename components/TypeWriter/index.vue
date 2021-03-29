<template>
  <span>
    {{ displayText.join("") }}
    <span class="cursor">_</span>
  </span>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    speed: {
      type: Number,
      default: 150
    },
    deleteSpeed: {
      type: Number,
      default: 100
    },
    nextWordInterval: {
      type: Number,
      default: 3000
    },
    words: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      displayText: [],
      currentWord: "",
      wordIdx: 0,
      timeoutSpeed: null,
      isWaitingNextWord: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.start();
    }, 2000);
  },
  computed: {
    wordList() {
      return this.words.split(",").map(word => word.trim());
    }
  },
  methods: {
    start() {
      if (this.words && this.words.length > 0) {
        this.currentWord = this.wordList[this.wordIdx].split("");
        this.timeoutSpeed = this.speed;
        this.animate = setTimeout(this.type, this.timeoutSpeed);
      }
    },
    type() {
      /* Typing */
      if (this.currentWord.length > 0) {
        this.displayText.push(this.currentWord.shift());

        /* Add Delay before deletion */
      } else if (
        !this.isWaitingNextWord &&
        this.currentWord.length === 0 &&
        this.displayText.length === this.wordList[this.wordIdx].length
      ) {
        this.timeoutSpeed = this.nextWordInterval;
        this.isWaitingNextWord = true;

        /* Delete */
      } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
        this.timeoutSpeed = this.deleteSpeed;
        this.displayText.pop();

        /* When deleted */
      } else if (
        this.currentWord.length === 0 &&
        this.displayText.length === 0
      ) {
        /* Next Word */
        if (this.wordIdx < this.wordList.length - 1) {
          this.wordIdx++;
        } else {
          this.wordIdx = 0;
        }

        this.timeoutSpeed = this.speed;
        this.isWaitingNextWord = false;
        this.currentWord = this.wordList[this.wordIdx].split("");
        this.displayText.push(this.currentWord.shift());
      }

      setTimeout(this.type, this.timeoutSpeed);
    }
  }
});
</script>

<style lang="scss" scoped>
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

.cursor {
  display: inline-block;
  margin-left: -12px;
  animation: blink-animation 1s steps(2, start) infinite;
}
</style>