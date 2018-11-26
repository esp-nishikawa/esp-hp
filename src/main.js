import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { Ripple, Scroll } from 'vuetify/lib/directives';
import 'vuetify/src/stylus/app.styl';
import App from './App';
import router from './router';

Vue.use(Vuetify, {
  directives: {
    Ripple,
    Scroll,
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
