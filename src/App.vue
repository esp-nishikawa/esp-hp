<script>
import ScrollControllable from '@/mixins/scroll-controllable.js';
import AnimationPetal from '@/components/AnimationPetal';

export default {
  components: {
    AnimationPetal,
  },
  mixins: [
    ScrollControllable,
  ],
  data () {
    return {
      isNavigation: false,
      navigationItems: [
        {
          path: '/',
          icon: 'home',
          title: 'ホーム',
        },
        {
          path: '/corporate',
          icon: 'flag',
          title: '会社案内',
          subItems: [
            {
              path: '/corporate#profile',
              title: '会社概要',
            },
            {
              path: '/corporate#office',
              title: 'オフィス環境',
            },
          ],
        },
        {
          path: '/service',
          icon: 'work',
          title: '事業分野',
        },
        {
          path: '/recruit',
          icon: 'face',
          title: '採用情報',
          subItems: [
            {
              path: '/recruit#new-graduate',
              title: '新卒採用',
            },
            {
              path: '/recruit#mid-career',
              title: '中途採用',
            },
          ],
        },
      ],
    };
  },
  computed: {
    petalNum() {
      return Math.ceil(this.$vuetify.display.height / 80);
    },
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
      //this.$root.$emit('before-enter');
    },
  },
};
</script>

<template>
  <v-app>
    <v-navigation-drawer
      app
      fixed
      clipped
      v-model="isNavigation"
    >
      <v-list>
        <template v-for="(navigationItem, n) in navigationItems">
          <v-list-item
            v-if="!navigationItem.subItems"
            :to="navigationItem.path"
            ripple
            active-class="blue--text text--darken-2"
          >
            <v-list-item-icon>
              <v-icon>{{ navigationItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ navigationItem.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group
            v-else
            no-action
            eager
            :prepend-icon="navigationItem.icon"
            :group="navigationItem.path"
          >
            <template #activator>
              <v-list-item-content>
                <v-list-item-title>{{ navigationItem.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(subItem, s) in navigationItem.subItems"
              :key="s"
              :to="subItem.path"
              ripple
              active-class="blue--text text--darken-2"
            >
              <v-list-item-content>
                <v-list-item-title>{{ subItem.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
      <animation-petal
        v-for="n in petalNum"
        :key="n"
        :value="isNavigation"
        :start-offset="n * -100"
      />
    </v-navigation-drawer>

    <v-app-bar app fixed clipped-left color="white">
      <v-app-bar-nav-icon @click.native.stop="isNavigation = !isNavigation"/>
      <v-toolbar-title>
        <base-header>eSoftPowers</base-header>
      </v-toolbar-title>
    </v-app-bar>

    <router-view v-slot="{ Component, route }">
      <transition
        name="routing"
        mode="out-in"
        @before-enter="onBeforeEnter"
      >
        <component :is="Component" :key="route.path"/>
      </transition>
    </router-view>

    <v-fab-transition>
      <v-btn
        v-show="scrollTop > 100"
        fab dark
        fixed bottom right
        color="purple"
        style="opacity:0.8;"
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
