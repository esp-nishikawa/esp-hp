export default {
  data () {
    return {
      showDialog: false,
    }
  },
  methods: {
    resetScroll() {
      document.getElementsByClassName('v-dialog v-dialog--active')[0].scrollTop = 0;
    },
  },
  watch: {
    showDialog(val) {
      if (!val) {
        this.resetScroll();
      }
    },
  },
}
