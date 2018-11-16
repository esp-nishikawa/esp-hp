import TweenLite from 'gsap/TweenLite';
import {Power4} from 'gsap/EasePack';
import CSSPlugin from 'gsap/CSSPlugin';
// without this line, CSSPlugin may get dropped by your bundler...
const plugins = [ CSSPlugin ]; // eslint-disable-line no-unused-vars

export const Vpshow = {
  // 表示領域の判定
  inViewport(el) {
    const rect = el.getBoundingClientRect();
    return !(rect.bottom < 0 || rect.right < 0 ||
             rect.left > window.innerWidth ||
             rect.top > window.innerHeight);
  },

  bind(el, binding) {
    el.$onScroll = () => {
      if (binding.def.inViewport(el)) {
        const { duration=2, autoAlpha=0, x=0, y=200, delay=0 } = binding.value;
        TweenLite.fromTo(el, duration, {
          autoAlpha,
          x,
          y,
        }, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          transformOrigin: '50% 50%',
          ease: Power4.easeOut,
          delay,
        });
        binding.def.unbind(el, binding);
      }
    };
    document.addEventListener('scroll', el.$onScroll);
  },

  // eslint-disable-next-line no-unused-vars
  inserted(el, binding) {
    el.$onScroll();
  },

  // eslint-disable-next-line no-unused-vars
  unbind(el, binding) {
    document.removeEventListener('scroll', el.$onScroll);
    delete el.$onScroll;
  },
}
