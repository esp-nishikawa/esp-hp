import Common from './common.js';
import BaseHeader from '@/components/BaseHeader.vue';
import BaseHeadline from '@/components/BaseHeadline.vue';
import BaseSubheading from '@/components/BaseSubheading.vue';
import BaseText from '@/components/BaseText.vue';
import BaseLink from '@/components/BaseLink.vue';
import Viewport from '@/directives/viewport.js';

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    // 共通メソッド
    Vue.prototype.$common = Common;
    // コンポーネント
    Vue.component('base-header', BaseHeader);
    Vue.component('base-headline', BaseHeadline);
    Vue.component('base-subheading', BaseSubheading);
    Vue.component('base-text', BaseText);
    Vue.component('base-link', BaseLink);
    // カスタムディレクティブ
    Vue.directive('viewport', Viewport);
  },
};
