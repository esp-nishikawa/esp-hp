import ThrottleDebounce from '@/mixins/throttle-debounce.js';

export default {
  mixins: [
    ThrottleDebounce,
  ],
  data () {
    return {
      scrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    getScrollElement() {
      if ('scrollingElement' in document) {
        return document.scrollingElement;
      }
      if (document.compatMode === 'BackCompat') {
        return document.body;
      }
      return document.documentElement;
    },
    // 指定した位置にスクロール
    goTo(targetLocation, options = {}) {
      const scrollElement = options.scrollElement || this.getScrollElement();
      const duration = options.duration || 500;
      const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      const easing = options.easing || easeInOutCubic;
      return this.$helpers.scrollTo(scrollElement, targetLocation, duration, easing);
    },
    // 監視されている`scrollTop`の更新頻度を減らす
    onScroll() {
      this.throttle(() => {
        this.scrollTop = this.getScrollElement().scrollTop;
      });
      this.debounce(() => {
        this.scrollTop = this.getScrollElement().scrollTop;
      });
    },
  },
};
