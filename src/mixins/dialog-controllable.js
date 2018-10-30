export default {
  data () {
    return {
      showDialog: false,
    }
  },
  methods: {
    close() {
      this.showDialog = false;
    },
    resetScroll() {
      document.getElementsByClassName('v-dialog v-dialog--active')[0].scrollTop = 0;
    },
  },
  watch: {
    showDialog(val) {
      if (!val) {
        this.resetScroll();
      }

      // ブラウザの「戻る」ボタンでダイアログを閉じる
      if (val) {
        window.history.pushState({name: 'dialog'}, null);
        window.addEventListener('popstate', this.close);
      } else {
        if (window.history.state['name'] === 'dialog') {
          window.history.back();
        }
        window.removeEventListener('popstate', this.close);
      }
    },
  },
}
