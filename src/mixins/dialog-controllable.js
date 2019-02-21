export default {
  data() {
    return {
      name: null,
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
      if (event.state['name'] === this.name) {
        this.open();
      } else {
        // 最前面のダイアログ以外はクローズしない
        const container = this.$refs['container'] || this.$children[0];
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

      // ブラウザ履歴への追加／削除
      if (val) {
        if (window.history.state['name'] != this.name) {
          window.history.pushState({ name: this.name }, this.name);
        }
      } else {
        if (window.history.state['name'] === this.name) {
          window.history.back();
        }
      }
    },
  },
  created() {
    if (!this.name) {
      this.name = this.$common.getUniqueString();
    }
  },
  mounted() {
    window.addEventListener('popstate', this.onPopstate);
  },
  beforeDestroy() {
    window.removeEventListener('popstate', this.onPopstate);
  },
};
