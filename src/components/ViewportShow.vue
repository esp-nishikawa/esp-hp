<script>
// 表示領域に入った時にtransitionするコンテンツ
export default {
  props: {
    delay: { type: [String, Number], default: 100 },
    duration: { type: [String, Number], default: 1 },
    translateX: [String, Number],
    translateY: [String, Number],
    rotate: [String, Number],
    scale: [String, Number],
    styleOptions: Object,
    easing: { type: String, default: 'ease-out' },
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
        // eslint-disable-next-line no-case-declarations
        let transform = '';
        if (this.translateX) {
          transform += isNaN(this.translateX) ? `translateX(${this.translateX}) ` : `translateX(${this.translateX}px) `;
        }
        if (this.translateY) {
          transform += isNaN(this.translateY) ? `translateY(${this.translateY}) ` : `translateY(${this.translateY}px) `;
        }
        if (this.rotate) {
          transform += isNaN(this.rotate) ? `rotate(${this.rotate}) ` : `rotate(${this.rotate}deg) `;
        }
        if (this.scale) {
          transform += `scale(${this.scale}) `;
        }
        return {
          opacity: 0,
          transform,
          ...this.styleOptions,
        };
      case 'after-enter':
        return {
          transition: `all ${this.duration}s ${this.easing}`,
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
