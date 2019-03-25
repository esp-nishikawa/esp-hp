export default {
  // 最前面の`v-dialog`を取得
  getActiveDialog() {
    const elements = document.getElementsByClassName('v-dialog v-dialog--active');
    if (elements && elements.length > 0) {
      return elements[elements.length - 1];
    }
  },

  getUniqueString() {
    return Date.now().toString() + Math.floor(Math.random()*1000).toString();
  },

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  },
};
