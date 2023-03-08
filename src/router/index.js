import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/hello-world',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'HelloWorld',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "hello" */ '@/views/HelloWorld.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "esp" */ '@/views/Home.vue'),
    meta: {
      title: '株式会社イーソフトパワーズ',
      description: '株式会社イーソフトパワーズ（eSoftPowers）は、お客様のご要望をICTで叶える会社です。',
    },
  },
  {
    path: '/corporate',
    name: 'Corporate',
    component: () => import(/* webpackChunkName: "esp" */ '@/views/Corporate.vue'),
    meta: {
      title: '会社案内',
      description: 'eSoftPowersの会社概要やオフィス環境についてご案内します。',
    },
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName: "esp" */ '@/views/Service.vue'),
    meta: {
      title: '事業分野',
      description: 'eSoftPowersが提供するサービス情報や事業内容についてご紹介します。',
    },
  },
  {
    path: '/recruit',
    name: 'Recruit',
    component: () => import(/* webpackChunkName: "esp" */ '@/views/Recruit.vue'),
    meta: {
      title: '採用情報',
      description: 'eSoftPowersの新卒採用・中途採用の情報をご覧いただけます。',
    },
  },
];

const scrollBehavior = (to, from, savedPosition) => {
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
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
});

router.afterEach((to) => {
  document.title = `${to.meta.title} - eSoftPowers`;
  const metaDescription = document.querySelector("meta[name='description']");
  if (metaDescription && to.meta.description) {
    metaDescription.setAttribute('content', to.meta.description);
  }
});

export default router;
