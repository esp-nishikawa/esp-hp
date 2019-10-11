import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import App from './App';
import router from './router';
import plugin from './plugin';

Vue.use(Vuetify);
Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
