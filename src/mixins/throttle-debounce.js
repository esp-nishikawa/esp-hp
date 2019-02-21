export default {
  data() {
    return {
      timerMap: new Map(),
    };
  },
  methods: {
    // 処理を一定間隔で間引く
    throttle(func, interval = 100, key = 'throttle') {
      if (this.timerMap.has(key)) {
        return;
      }
      const timer = setTimeout((key) => {
        this.timerMap.delete(key);
      }, interval, key);
      this.timerMap.set(key, timer);
      func();
    },

    // 処理が指定時間内に何度発生しても最後の1回だけ実行する
    debounce(func, interval = 100, key = 'debounce') {
      if (this.timerMap.has(key)) {
        this.cancelDebounce(key);
      }
      const timer = setTimeout(() => {
        func();
      }, interval);
      this.timerMap.set(key, timer);
    },

    cancelDebounce(key = 'debounce') {
      const timer = this.timerMap.get(key);
      if (timer) {
        clearTimeout(timer);
      }
    },
  },
};
