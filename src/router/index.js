import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';
import Corporate from './Corporate.vue';
import Service from './Service.vue';
import Recruit from './Recruit.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '株式会社イーソフトパワーズ',
        description: '株式会社イーソフトパワーズ（eSoftPowers）は、お客様のご要望をICTで叶える会社です。',
      },
    },
    {
      path: '/corporate',
      name: 'Corporate',
      component: Corporate,
      meta: {
        title: '会社案内',
        description: 'eSoftPowersの会社概要やオフィス環境についてご案内します。',
      },
    },
    {
      path: '/service',
      name: 'Service',
      component: Service,
      meta: {
        title: '事業分野',
        description: 'eSoftPowersが提供するサービス情報や事業内容についてご紹介します。',
      },
    },
    {
      path: '/recruit',
      name: 'Recruit',
      component: Recruit,
      meta: {
        title: '採用情報',
        description: 'eSoftPowersの新卒採用・中途採用の情報をご覧いただけます。',
      },
    },
  ],
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      router.app.$root.$once('before-enter', () => {
        router.app.$nextTick(() => {
          let position = { x: 0, y: 0 };
          if (savedPosition) {
            position = savedPosition;
          } else if (to.hash) {
            const anchor = document.querySelector(to.hash);
            if (anchor) {
              position = { x: anchor.offsetLeft, y: anchor.offsetTop };
            } else {
              position = { selector: to.hash };
            }
          }
          resolve(position);
        });
      });
    });
  },
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = `${to.meta.title} - eSoftPowers`;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription && to.meta.description) {
      metaDescription.setAttribute('content', to.meta.description);
    }
  });
});

export default router;
