<script>
import ScrollControllable from '@/mixins/scroll-controllable.js';

export default {
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
        }
      }
    },
  },
  methods: {
    onBeforeEnter() {
      this.$root.$emit('before-enter');
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
      name="routing"
      @before-enter="onBeforeEnter"
      mode="out-in"
    >
      <router-view/>
    </transition>

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

<style scoped>
#app {
  color: rgba(0,0,0,.87);
  font-family: Roboto, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: .02em;
}

.routing-leave-active {
  transition: all .3s ease;
}

.routing-leave-to {
  opacity: 0;
  transform: rotateY(30deg);
}

.routing-enter-active {
  transition: all .7s ease-out;
}

.routing-enter {
  opacity: 0;
  transform: rotateY(-70deg);
}
</style>
