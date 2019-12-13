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
};
