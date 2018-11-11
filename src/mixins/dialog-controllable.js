export default {
  data () {
    return {
      name: 'dialog',
      showDialog: false,
    }
  },
  methods: {
    onPopstate(el) {
      // 最前面のダイアログ以外はクローズしない
      const dialog = this.$refs['dialog'];
      if (dialog && dialog.activeZIndex != dialog.getMaxZIndex()) {
        return;
      }
      // 履歴上で表示状態ならクローズしない
      if (el.state['name'] === this.name) {
        return;
      }
      this.close();
    },
    close() {
      this.showDialog = false;
    },
    resetScroll() {
      const elements = document.getElementsByClassName('v-dialog v-dialog--active');
      if (elements && elements.length > 0) {
        elements[elements.length - 1].scrollTop = 0;
      }
    },
  },
  watch: {
    showDialog(val) {
      if (!val) {
        this.resetScroll();
      }

      // ブラウザの「戻る」ボタンでダイアログを閉じる
      if (val) {
        window.history.pushState({name: this.name}, this.name);
        window.addEventListener('popstate', this.onPopstate);
      } else {
        if (window.history.state['name'] === this.name) {
          window.history.back();
        }
        window.removeEventListener('popstate', this.onPopstate);
      }
    },
  },
}
