export default {
  // 最前面の`v-dialog`を取得
  getActiveDialog() {
    const elements = document.getElementsByClassName('v-dialog v-dialog--active');
    if (elements && elements.length > 0) {
      return elements[elements.length - 1];
    }
  },
};
