import TweenLite from 'gsap/TweenLite';

export default {
  // 表示領域の判定
  inViewport(el) {
    const rect = el.getBoundingClientRect();
    return !(rect.bottom < 0
          || rect.right < 0
          || rect.left > window.innerWidth
          || rect.top > window.innerHeight);
  },

  // 要素の表示
  showElement(el, settings = {}) {
    const {
      duration = 2,
      autoAlpha = 0,
      x = 0,
      y = 200,
      transformOrigin = '50% 50%',
      ease = 'Power2.easeOut',
      delay = 0,
    } = settings;

    TweenLite.fromTo(el, duration, {
      autoAlpha,
      x,
      y,
    }, {
      autoAlpha: 1,
      x: 0,
      y: 0,
      transformOrigin,
      ease,
      delay,
    });
  },

  bind(el, binding) {
    if (typeof IntersectionObserver === 'undefined') {
      el.$onScroll = () => {
        if (binding.def.inViewport(el)) {
          binding.def.showElement(el, binding.value);
          document.removeEventListener('scroll', el.$onScroll);
        }
      };
      document.addEventListener('scroll', el.$onScroll);
    } else {
      el.$onIntersect = (entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          } else {
            binding.def.showElement(el, binding.value);
            observer.unobserve(el);
          }
        });
      };
      el.$observer = new IntersectionObserver(el.$onIntersect, {});
    }
  },

  // eslint-disable-next-line no-unused-vars
  inserted(el, binding) {
    if (el.$onScroll) {
      el.$onScroll();
    }
    if (el.$observer) {
      el.$observer.observe(el);
    }
  },

  // eslint-disable-next-line no-unused-vars
  unbind(el, binding) {
    delete el.$onScroll;
    delete el.$observer;
    delete el.$onIntersect;
  },
};
