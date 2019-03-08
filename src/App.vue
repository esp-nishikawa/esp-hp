<script>
import TweenLite from 'gsap/TweenLite';
import ScrollControllable from '@/mixins/scroll-controllable.js';
import ContactDialog from '@/components/ContactDialog';
import PrivacyDialog from '@/components/PrivacyDialog';

export default {
  components: {
    ContactDialog,
    PrivacyDialog,
  },
  mixins: [
    ScrollControllable,
  ],
  data () {
    return {
      isNavigation: false,
    };
  },
  watch: {
    '$route'(to, from) {
      if (to.hash) {
        if (to.path === from.path) {
          const anchor = document.querySelector(to.hash);
          if (anchor) {
            this.goTo(anchor.offsetTop);
          }
        } else {
          this.$root.$once('after-enter', () => {
            const anchor = document.querySelector(to.hash);
            if (anchor) {
              this.goTo(anchor.offsetTop);
            }
          });
        }
      }
    },
  },
  methods: {
    onEnter(el, done) {
      TweenLite.fromTo(el, 0.3, {
        autoAlpha: 0,
        //scale: 0.5,
      }, {
        autoAlpha: 1,
        //scale: 1,
        //transformOrigin: '50% 50%',
        ease: 'Power2.easeInOut',
        onComplete: done,
      });
    },
    onLeave(el, done) {
      TweenLite.fromTo(el, 0.2, {
        autoAlpha: 1,
      }, {
        autoAlpha: 0,
        ease: 'Power2.easeOut',
        onComplete: done,
      });
    },
    onBeforeEnter() {
      this.$root.$emit('before-enter');
    },
    onAfterEnter() {
      this.$root.$emit('after-enter');
    },
  },
};
</script>

<template>
  <v-app light>
    <v-navigation-drawer
      app
      fixed
      clipped
      v-model="isNavigation"
    >
      <v-list>
        <v-list-tile to="/" ripple>
          <v-list-tile-action>
            <v-icon light>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>ホーム</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group prepend-icon="flag">
          <v-list-tile slot="activator">
            <v-list-tile-title>会社案内</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/corporate#profile" ripple>
            <v-list-tile-action>
              <div/>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>会社概要</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/corporate#office" ripple>
            <v-list-tile-action>
              <div/>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>オフィス環境</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile to="/service" ripple>
          <v-list-tile-action>
            <v-icon light>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>事業分野</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group prepend-icon="face">
          <v-list-tile slot="activator">
            <v-list-tile-title>採用情報</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/recruit#new-graduate" ripple>
            <v-list-tile-action>
              <div/>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>新卒採用</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/recruit#mid-career" ripple>
            <v-list-tile-action>
              <div/>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>中途採用</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app clipped-left class="white">
      <v-toolbar-side-icon @click.native.stop="isNavigation = !isNavigation"/>
      <v-toolbar-title>
        <base-header>eSoftPowers</base-header>
      </v-toolbar-title>
    </v-toolbar>

    <transition
      @enter="onEnter"
      @leave="onLeave"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterEnter"
      mode="out-in"
    >
      <router-view/>
    </transition>

    <v-footer height="auto" class="blue darken-1">
      <v-container>
        <v-layout row wrap justify-end>
          <contact-dialog>
            <v-btn flat round color="white">
              <v-icon class="mr-1">email</v-icon>お問い合わせ
            </v-btn>
          </contact-dialog>
          <privacy-dialog>
            <v-btn flat round color="white">
              <v-icon class="mr-1">lock</v-icon>プライバシーポリシー
            </v-btn>
          </privacy-dialog>
        </v-layout>
        <v-layout row wrap justify-center>
          <div class="white--text ma-3">&copy; 2013-{{ new Date().getFullYear() }} eSoftPowers.Co.,Ltd.</div>
        </v-layout>
      </v-container>
    </v-footer>

    <v-fab-transition>
      <v-btn
        fab dark
        fixed bottom right
        class="mb-3"
        style="opacity:0.8;"
        color="purple"
        v-show="scrollTop > 60"
        @click.native.stop="goTo(0)"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<style>
#app {
  color: rgba(0,0,0,.87);
  font-family: Roboto, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: .02em;
}
</style>
