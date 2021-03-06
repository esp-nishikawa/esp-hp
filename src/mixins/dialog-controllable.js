export default {
  data() {
    return {
      historyName: null,
      showDialog: false,
    };
  },
  watch: {
    showDialog(val) {
      // スクロール位置をリセット
      if (!val) {
        setTimeout(() => {
          this.resetScroll();
        }, 200);
      }

      // ブラウザ履歴への追加／削除
      if (val) {
        if (window.history.state['name'] != this.historyName) {
          window.history.pushState({ name: this.historyName }, this.historyName);
        }
      } else {
        if (window.history.state['name'] === this.historyName) {
          window.history.back();
        }
      }

      // html要素のスクロールを止める
      this.$nextTick(() => {
        if (this.isActiveAnyDialog()) {
          document.documentElement.style.overflowY = 'hidden';
        } else {
          document.documentElement.style.overflowY = 'scroll';
        }
      });
    },
  },
  created() {
    if (!this.historyName) {
      this.historyName = this.$common.getUniqueString();
    }
  },
  mounted() {
    window.addEventListener('popstate', this.onPopstate);
  },
  beforeDestroy() {
    window.removeEventListener('popstate', this.onPopstate);
  },
  methods: {
    onPopstate(event) {
      if (event.state['name'] === this.historyName) {
        this.open();
      } else {
        // 最前面のダイアログ以外はクローズしない
        const container = this.getDialogContainer();
        if (container && container.activeZIndex != container.getMaxZIndex()) {
          return;
        }
        this.close();
      }
    },
    open() {
      this.showDialog = true;
    },
    close() {
      this.showDialog = false;
    },
    resetScroll() {
      const dialog = this.getDialogElement();
      if (dialog) {
        dialog.scrollTop = 0;
        const scrollTargets = dialog.getElementsByClassName('scroll-target');
        Array.from(scrollTargets).forEach(scrollTarget => {
          scrollTarget.scrollTop = 0;
        });
      }
    },
    getDialogContainer() {
      // コンポーネントのルート要素が`v-dialog`以外の場合は、`v-dialog`のrefに`container`を設定する
      return this.$refs['container'] || this.$children[0];
    },
    getDialogElement() {
      const container = this.getDialogContainer();
      if (container) {
        return container.$refs['dialog'];
      }
    },
    isActiveAnyDialog() {
      const elements = document.getElementsByClassName('v-dialog v-dialog--active');
      if (elements && elements.length > 0) {
        return true;
      }
      return false;
    },
  },
};
