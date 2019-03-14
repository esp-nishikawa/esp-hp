export default {
  bind(el, binding) {
    const callback = binding.value;

    // `IntersectionObserver`が使用できない場合は代わりの実装
    if (typeof IntersectionObserver === 'undefined') {
      el.$onScroll = () => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom > 0
          && rect.right > 0
          && rect.left < window.innerWidth
          && rect.top < window.innerHeight) {
          callback(el);
          document.removeEventListener('scroll', el.$onScroll);
        }
      };
      document.addEventListener('scroll', el.$onScroll);
    } else {
      el.$observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            callback(el);
            observer.unobserve(el);
          }
        });
      });
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
  },
};
