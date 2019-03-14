<script>
// 表示領域に入った時にtransitionするコンテンツ
export default {
  props: {
    delay: { type: [String, Number], default: 100 },
    duration: { type: [String, Number], default: 1 },
    translateY: { type: [String, Number], default: 60 },
  },
  data() {
    return {
      enterClass: 'before-enter',
    };
  },
  computed: {
    styles() {
      switch (this.enterClass) {
      case 'before-enter':
        return {
          opacity: 0,
        };
      case 'enter':
        return {
          opacity: 0,
          transform: isNaN(this.translateY) ? `translateY(${this.translateY})` : `translateY(${this.translateY}px)`,
        };
      case 'after-enter':
        return {
          transition: `all ${this.duration}s ease-out`,
        };
      default:
        return {};
      }
    },
  },
  methods: {
    onViewport() {
      this.enterClass = 'enter';
      this.$emit('enter');
      setTimeout(() => {
        this.$nextTick(() => {
          this.enterClass = 'after-enter';
        });
      }, Number(this.delay));
    },
  },
};
</script>

<template>
  <div v-viewport="onViewport" :class="enterClass" :style="styles">
    <slot/>
  </div>
</template>
