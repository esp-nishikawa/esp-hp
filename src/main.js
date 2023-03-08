import App from './App.vue';
import { createApp } from 'vue';
import { loadFonts } from './plugins/webfontloader';
import vuetify from './plugins/vuetify';
import plugins from './plugins';
import router from './router';

const app = createApp(App);

loadFonts();

app
  .use(vuetify)
  .use(plugins)
  .use(router);

app.mount('#app');
