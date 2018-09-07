<script>
export default {
  data () {
    return {
      scrollTop: 0,
      isNavigation: false,
    }
  },
  methods: {
    onScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    },
    onEnter(el, done) {
      TweenLite.fromTo(el, 0.3, {
        autoAlpha: 0,
        scale: 0.5,
      }, {
        autoAlpha: 1,
        scale: 1,
        transformOrigin: '50% 50%',
        ease: Power4.easeOut,
        onComplete: done,
      });
    },
    onLeave(el, done) {
      TweenLite.fromTo(el, 0.2, {
        autoAlpha: 1,
      }, {
        autoAlpha: 0,
        ease: Power4.easeOut,
        onComplete: done,
      });
    },
    onBeforeEnter(el) {
      this.$nextTick(() => {
        this.$root.$emit('before-enter');
      });
    },
    onAfterEnter(el) {
      this.$nextTick(() => {
        this.$root.$emit('after-enter');
      });
    },
  },
  watch: {
    '$route'(to, from) {
      if (to.hash) {
        if (to.path === from.path) {
          const anchor = document.querySelector(to.hash);
          if (anchor) {
            this.$vuetify.goTo(anchor.offsetTop);
          }
        } else {
          this.$root.$once('after-enter', () => {
            const anchor = document.querySelector(to.hash);
            if (anchor) {
              this.$vuetify.goTo(anchor.offsetTop);
            }
          });
        }
      }
    }
  },
  name: 'App'
}
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
            <v-list-tile-title>企業情報</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/corporate#company" ripple>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>会社概要</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/corporate#office" ripple>
            <v-list-tile-action></v-list-tile-action>
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
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>新卒採用</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/recruit#mid-career" ripple>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>中途採用</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app clipped-left class="white">
      <v-toolbar-side-icon
        @click.native.stop="isNavigation = !isNavigation"
      >
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <h1
          class="hover-link"
          data-hover="eSoftPowers"
          @click.stop="$router.push('/')"
        >
          eSoftPowers
        </h1>
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
      <v-spacer></v-spacer>
      <div class="white--text ma-3">
        Copyright &copy; {{ new Date().getFullYear() }} eSoftPowers.co.ltd All Rights Reserved.
      </div>
    </v-footer>

    <v-fab-transition>
      <v-btn
        fab dark
        fixed bottom right
        class="mb-3"
        style="opacity:0.8"
        color="purple"
        v-scroll="onScroll"
        v-show="scrollTop > 60"
        @click.native.stop="$vuetify.goTo(0)"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<style>
.bg_main {
  position: relative;
  z-index: 0;
}

.bg_main1 {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("assets/bg_main1.gif");
  background-repeat: repeat;
  opacity: 0.7;
  animation: bg_animation1 60s linear forwards;
}

.bg_main2 {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("assets/bg_main2.gif");
  background-repeat: repeat;
  opacity: 0;
  animation: bg_animation2 60s linear forwards;
}

.bg_main3 {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("assets/bg_main3.gif");
  background-repeat: repeat;
  opacity: 0.7;
  animation: bg_animation1 60s linear forwards;
}

.bg_main4 {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("assets/bg_main4.gif");
  background-repeat: repeat;
  opacity: 0;
  animation: bg_animation2 60s linear forwards;
}

@keyframes bg_animation1 {
  0% {opacity: 0.7;}
  100% {opacity: 0;}
}

@keyframes bg_animation2 {
  0% {opacity: 0;}
  100% {opacity: 0.7;}
}

#app {
  color: rgba(0,0,0,.87);
  font-family: Roboto, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: .02em;
}

h1 {
  font-size: 20px;
  font-weight: 700;
}

h2 {
  margin: 16px 0 8px 0;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: .2em;
}

h3 {
  position: relative;
  margin: 16px 0 2px 0;
  padding: 0 0 3px 4px;
  border-left: 5px solid #42A5F5;
  font-size: 16px;
  font-weight: 700;
}

h3:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: -webkit-repeating-linear-gradient(-45deg, #DDD, #DDD 2px, #FFF 2px, #FFF 4px);
  background: repeating-linear-gradient(-45deg, #DDD, #DDD 2px, #FFF 2px, #FFF 4px);
}

table th {
  color: #FFF!important;
  font-size: 15px!important;
  font-weight: 500!important;
  border: 1px solid #DDD;
  background: -webkit-linear-gradient(top, rgba(30,136,229,0.7), rgba(30,136,229,0.9));
  background: linear-gradient(to bottom, rgba(30,136,229,0.7), rgba(30,136,229,0.9));
  text-shadow: 0 -1px 0 rgba(30,136,229,0.9);
  box-shadow: 0px 1px 1px rgba(255,255,255,0.3) inset;
}

.v-tabs__bar {
  background: -webkit-linear-gradient(top, rgba(30,136,229,0.7), rgba(30,136,229,0.9));
  background: linear-gradient(to bottom, rgba(30,136,229,0.7), rgba(30,136,229,0.9));
  text-shadow: 0 -1px 0 rgba(30,136,229,0.9);
}

.v-tabs__div {
  font-size: 15px!important;
  font-weight: 500!important;
  max-width: 160px!important;
}

.v-carousel__prev, .v-carousel__next {
  top: 100%!important;
  padding-bottom: 50px!important;
  z-index: 2!important;
}

.v-chip .v-chip__content {
  cursor: inherit!important;
  user-select: none!important;
}

.hover-link {
  position: relative;
  cursor: pointer;
}

.hover-link::before {
  content: attr(data-hover);
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  max-width: 0;
  color: #1976D2;
  transition: max-width 0.4s;
}

.hover-link:hover::before {
  max-width: 100%;
}

.hover-link::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: -webkit-calc(100% - 0px);
  width: calc(100% - 0px);
  height: 2px;
  background: #1976D2;
  display: block;
  transform-origin: right top;
  transform: scale(0, 1);
  transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
}

.hover-link:hover::after {
  transform-origin: left top;
  transform: scale(1, 1);
}
</style>
