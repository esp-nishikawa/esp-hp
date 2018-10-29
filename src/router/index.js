import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Corporate from '@/components/Corporate';
import Service from '@/components/Service';
import Recruit from '@/components/Recruit';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {title: '株式会社イーソフトパワーズ'}
    },
    {
      path: '/corporate',
      name: 'Corporate',
      component: Corporate,
      meta: {title: '会社案内'}
    },
    {
      path: '/service',
      name: 'Service',
      component: Service,
      meta: {title: '事業分野'}
    },
    {
      path: '/recruit',
      name: 'Recruit',
      component: Recruit,
      meta: {title: '採用情報'}
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      router.app.$root.$once('before-enter', () => {
        let position = { x: 0, y: 0 };
        if (to.hash) {
          const anchor = document.querySelector(to.hash);
          if (anchor) {
            position = { x: anchor.offsetLeft, y: anchor.offsetTop };
          } else {
            position = { selector: to.hash };
          }
        }
        //if (savedPosition) {
        //  position = savedPosition;
        //}
        resolve(position);
      });
    });
  },
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - eSoftPowers`;
  next();
});

export default router;
