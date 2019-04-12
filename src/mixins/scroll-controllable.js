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
      const duration = options.duration || 500;
      const container = options.container || this.getScrollElement();
      const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      const easing = options.easing || easeInOutCubic;

      const startTime = performance.now();
      const startLocation = container.scrollTop;
      if (targetLocation === startLocation) {
        return Promise.resolve(false);
      }

      return new Promise(resolve => requestAnimationFrame(function step(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.abs(duration ? Math.min(timeElapsed / duration, 1) : 1);

        container.scrollTop = Math.floor(startLocation + (targetLocation - startLocation) * easing(progress));

        if (progress === 1 || container.clientHeight + container.scrollTop === container.scrollHeight) {
          return resolve(true);
        }

        requestAnimationFrame(step);
      }));
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
