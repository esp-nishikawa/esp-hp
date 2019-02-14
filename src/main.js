import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { Ripple, Scroll } from 'vuetify/lib/directives';
import 'vuetify/src/stylus/app.styl';
import App from './App';
import router from './router';
import plugin from './plugin';
import CSSPlugin from 'gsap/CSSPlugin';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
// without next line, plugins may get dropped by your bundler...
const plugins = [ CSSPlugin, ScrollToPlugin ]; // eslint-disable-line no-unused-vars

Vue.use(Vuetify, {
  directives: {
    Ripple,
    Scroll,
  }
});

Vue.use(plugin);

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

// IEのスクロール対応
if (vm.browser.ie || vm.browser.edge) {
  document.addEventListener(
    'wheel',
    (event) => {
      event.preventDefault();

      // ダイアログを表示している場合
      const dialog = vm.common.getActiveDialog();
      if (dialog) {
        vm.goTo(dialog.scrollTop + event.deltaY, { container: dialog, duration: 100, easing: 'linear' });
        return;
      }

      vm.goTo(window.pageYOffset + event.deltaY, { duration: 100, easing: 'linear' });
    },
    false,
  );
}
