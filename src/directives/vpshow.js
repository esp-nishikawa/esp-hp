export const Vpshow = {
  inViewport(el) {
    const rect = el.getBoundingClientRect();
    return !(rect.bottom < 0 || rect.right < 0 ||
             rect.left > window.innerWidth ||
             rect.top > window.innerHeight);
  },

  bind(el, binding) {
    el.$onScroll = function() {
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
    }
    document.addEventListener('scroll', el.$onScroll);
  },

  inserted(el, binding) {
    el.$onScroll();
  },

  unbind(el, binding) {
    document.removeEventListener('scroll', el.$onScroll);
    delete el.$onScroll;
  },
}
