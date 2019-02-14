export default {
  data() {
    return {
      name: 'dialog',
      showDialog: false,
    };
  },
  computed: {
    fullscreen() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  methods: {
    onPopstate(event) {
      // 最前面のダイアログ以外はクローズしない
      const container = this.$refs['container'] || this.$children[0];
      if (container && container.activeZIndex != container.getMaxZIndex()) {
        return;
      }
      // 履歴上で表示状態ならクローズしない
      if (event.state['name'] === this.name) {
        return;
      }
      this.close();
    },
    close() {
      this.showDialog = false;
    },
    resetScroll() {
      const container = this.$refs['container'] || this.$children[0];
      if (container) {
        const dialog = container.$refs['dialog'];
        if (dialog) {
          dialog.scrollTop = 0;
        }
      }
    },
  },
  watch: {
    showDialog(val) {
      // スクロール位置をリセット
      if (!val) {
        this.$nextTick(() => {
          this.resetScroll();
        });
      }

      // ブラウザの「戻る」ボタンでダイアログを閉じる
      if (val) {
        window.history.pushState({ name: this.name }, this.name);
        window.addEventListener('popstate', this.onPopstate);
      } else {
        if (window.history.state['name'] === this.name) {
          window.history.back();
        }
        window.removeEventListener('popstate', this.onPopstate);
      }
    },
  },
};
