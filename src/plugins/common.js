export default {
  getUniqueString() {
    return Date.now().toString() + Math.floor(Math.random()*1000).toString();
  },

  getRandom(min, max, isInteger) {
    if (isInteger) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      return Math.random() * (max - min) + min;
    }
  },

  scrollTo(scrollElement, targetLocation, duration, easing) {
    const startTime = performance.now();
    const startLocation = scrollElement.scrollTop;
    if (targetLocation === startLocation) {
      return Promise.resolve(false);
    }

    return new Promise(resolve => requestAnimationFrame(function step(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.abs(duration ? Math.min(timeElapsed / duration, 1) : 1);
      const ease = easing ? easing(progress) : progress;

      scrollElement.scrollTop = Math.floor(startLocation + (targetLocation - startLocation) * ease);

      if (progress === 1 || scrollElement.clientHeight + scrollElement.scrollTop === scrollElement.scrollHeight) {
        return resolve(true);
      }

      requestAnimationFrame(step);
    }));
  },
};
