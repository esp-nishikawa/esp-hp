import TweenLite from 'gsap/TweenLite';

export default {
  methods: {
    goTo(target, settings = {}) {
      // `$vuetify.goTo`はIEだと動作しない問題があるので代わりの実装
      if (this.browser.ie) {
        const container= settings.container || window;
        const duration = (settings.duration || 500) / 1000;
        const ease = settings.easing === 'linear' ? undefined : 'Power2.easeInOut';
        TweenLite.to(container, duration, { scrollTo: { y: target }, ease });
      } else {
        this.$vuetify.goTo(target, { appOffset: false, ...settings });
      }
    },
  },
};
