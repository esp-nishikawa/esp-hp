import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import App from './App';
import router from './router';
import plugin from './plugin';
import CSSPlugin from 'gsap/CSSPlugin';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
// without next line, plugins may get dropped by your bundler...
const plugins = [ CSSPlugin, ScrollToPlugin ]; // eslint-disable-line no-unused-vars

Vue.use(Vuetify);
Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
