export default {
  getUniqueString() {
    return Date.now().toString() + Math.floor(Math.random()*1000).toString();
  },

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  },
};
