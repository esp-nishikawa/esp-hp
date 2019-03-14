import TweenLite from 'gsap/TweenLite';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
// without next line, plugins may get dropped by your bundler...
const plugins = [ ScrollToPlugin ]; // eslint-disable-line no-unused-vars

import ThrottleDebounce from '@/mixins/throttle-debounce.js';

export default {
  mixins: [
    ThrottleDebounce,
  ],
  data () {
    return {
      scrollTop: 0,
      wheelDeltaY: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    if (this.$browser.ie) {
      window.addEventListener('wheel', this.onWheel);
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
    if (this.$browser.ie) {
      window.removeEventListener('wheel', this.onWheel);
    }
  },
  methods: {
    getScrollTop() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    },
    getEase(easing) {
      if (!easing) {
        return 'Power2.easeInOut';
      }
      let ease;
      if (easing.indexOf('easeInOut') != -1) {
        ease = 'easeInOut';
      } else if (easing.indexOf('easeIn') != -1) {
        ease = 'easeIn';
      } else if (easing.indexOf('easeOut') != -1) {
        ease = 'easeOut';
      }
      let power;
      if (easing.indexOf('Quad') != -1) {
        power = 'Power1';
      } else if (easing.indexOf('Cubic') != -1) {
        power = 'Power2';
      } else if (easing.indexOf('Quart') != -1) {
        power = 'Power3';
      } else if (easing.indexOf('Quint') != -1) {
        power = 'Power4';
      }
      if (ease && power) {
        return `${power}.${ease}`;
      }
    },
    goTo(target, settings = {}) {
      // IEで`$vuetify.goTo`が動作しない問題があるので代わりの実装
      if (this.$browser.ie) {
        const container= settings.container || window;
        const duration = (settings.duration || 500) / 1000;
        const ease = this.getEase(settings.easing);
        TweenLite.to(container, duration, { scrollTo: { y: target }, ease });
      } else {
        this.$vuetify.goTo(target, { appOffset: false, ...settings });
      }
    },
    smoothScroll(distance, duration, easing = 'linear') {
      if (distance === 0) {
        return;
      }
      // デフォルトの時間は移動量に合わせて算出
      if (!duration) {
        duration = Math.abs(distance);
      }
      // ダイアログを表示している場合
      const dialog = this.$common.getActiveDialog();
      if (dialog) {
        this.goTo(dialog.scrollTop + distance, { container: dialog, duration, easing });
        return;
      }
      this.goTo(this.getScrollTop() + distance, { duration, easing });
    },
    onScroll() {
      this.throttle(() => {
        this.scrollTop = this.getScrollTop();
      });
      this.debounce(() => {
        this.scrollTop = this.getScrollTop();
      });
    },
    // IEでホイールが動作しなくなる問題があるので代わりの実装
    onWheel(event) {
      event.preventDefault();
      if (event.deltaY > 0) {
        if (this.wheelDeltaY < 0) {
          this.wheelDeltaY = 0;
        } else {
          this.wheelDeltaY += 100;
        }
      }
      if (event.deltaY < 0) {
        if (this.wheelDeltaY > 0) {
          this.wheelDeltaY = 0;
        } else {
          this.wheelDeltaY -= 100;
        }
      }
      this.debounce(() => {
        this.smoothScroll(this.wheelDeltaY);
        this.wheelDeltaY = 0;
      }, 100, 'wheel');
    },
  },
};
