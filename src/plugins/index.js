import Common from './common.js';
import BaseHeader from '@/components/BaseHeader.vue';
import BaseHeadline from '@/components/BaseHeadline.vue';
import BaseSubheading from '@/components/BaseSubheading.vue';
import BaseText from '@/components/BaseText.vue';
import BaseLink from '@/components/BaseLink.vue';
import Viewport from '@/directives/viewport.js';

export default {
  install(app) {
    // 共通メソッド
    app.config.globalProperties.$common = Common;
    // コンポーネント
    app.component('base-header', BaseHeader);
    app.component('base-headline', BaseHeadline);
    app.component('base-subheading', BaseSubheading);
    app.component('base-text', BaseText);
    app.component('base-link', BaseLink);
    // カスタムディレクティブ
    app.directive('viewport', Viewport);
  },
};
