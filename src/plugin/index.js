import Common from './common.js';
import Browser from '@/mixins/browser.js';
import GoTo from '@/mixins/go-to.js';
import Vpshow from '@/directives/vpshow.js';

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    // 共通メソッド
    Vue.prototype.common = Common;
    // ミックスイン
    Vue.mixin(Browser);
    Vue.mixin(GoTo);
    // カスタムディレクティブ
    Vue.directive('vpshow', Vpshow);
  },
};
