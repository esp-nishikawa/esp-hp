<script>
export default {
  data () {
    return {
      isTransition1: false,
      isTransition2: false,
      isTransition3: false,
      isTransition4: false,
      isTransition5: false,
      isTransition6: false,
      informations: [
        {
          date: '2018-7-12',
          title: 'サイトリニューアルしました。',
          description: `・２０１９年度新卒採用情報を掲載しました。<br>
                        ・中途採用情報を更新しました。<br>
                        ・その他、決算状況など更新しました。`,
        },
        {
          date: '2015-10-25',
          title: '祝！本社移転。住所や案内など更新しました。',
          description: `＜新本社＞<div>〒100-0005<br>東京都千代田区丸の内2-2-1<br>岸本ビルヂング６Ｆ</div>`,
        },
        {
          date: '2015-2-1',
          title: 'サイト更新 決算状況など変更しました。',
          description: ``,
        },
      ],
    }
  },
  methods: {
    afterAppear(el) {
      new Promise((resolve, reject) => {
        setTimeout(() => { this.isTransition1 = true; }, 2000);
        setTimeout(() => { this.isTransition2 = true; }, 2200);
        setTimeout(() => { this.isTransition3 = true; }, 2400);
        setTimeout(() => { this.isTransition4 = true; }, 2600);
        setTimeout(() => { this.isTransition5 = true; }, 2800);
        setTimeout(() => { this.isTransition6 = true; }, 3000);
      });
    },
  },
}
</script>

<template>
<v-content>
  <section>
    <v-parallax
      :src="require('@/assets/parallax_home.jpg')"
      :height="$vuetify.breakpoint.xs ? 540 : 600"
    >
      <v-layout row wrap>
        <v-flex xs4 text-xs-center>
          <div
            class="circle-content title light-blue lighten-1 white--text mt-5"
            :style="$vuetify.breakpoint.xs ? {'transform':'scale(0.8)'} : {}"
            v-ripple
            @click="isTransition1 = !isTransition1"
          >
            <transition name="transition-fade" mode="out-in">
              <div v-if="isTransition1" key="on">
                Globalでの<br>活動を
              </div>
              <div v-else key="off">
                Environment
              </div>
            </transition>
          </div>
        </v-flex>
        <v-flex xs4 text-xs-center>
          <div
            class="circle-content title light-blue lighten-1 white--text mt-1"
            :style="$vuetify.breakpoint.xs ? {'transform':'scale(0.8)'} : {}"
            v-ripple
            @click="isTransition2 = !isTransition2"
          >
            <transition name="transition-fade" mode="out-in">
              <div v-if="isTransition2" key="on">
                お客様の夢<br>を現実に
              </div>
              <div v-else key="off">
                Customer<br>Satisfaction
              </div>
            </transition>
          </div>
        </v-flex>
        <v-flex xs4 text-xs-center>
          <div
            class="circle-content title light-blue lighten-1 white--text mt-5"
            :style="$vuetify.breakpoint.xs ? {'transform':'scale(0.8)'} : {}"
            v-ripple
            @click="isTransition3 = !isTransition3"
          >
            <transition name="transition-fade" mode="out-in">
              <div v-if="isTransition3" key="on">
                社員主役で
              </div>
              <div v-else key="off">
                Employee<br>Satisfaction
              </div>
            </transition>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center>
        <transition
          name="transition-fade"
          appear
          @after-appear="afterAppear"
        >
          <div
            class="white--text display-4 text-xs-center"
            style="opacity:0.7"
          >
            eSoft<br>Powers
          </div>
        </transition>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs4 text-xs-center>
          <div
            class="circle-content title light-blue lighten-1 white--text mt-1"
            :style="$vuetify.breakpoint.xs ? {'transform':'scale(0.8)'} : {}"
            v-ripple
            @click="isTransition4 = !isTransition4"
          >
            <transition name="transition-fade" mode="out-in">
              <div v-if="isTransition4" key="on">
                信頼獲得に<br>向け
              </div>
              <div v-else key="off">
                Quality
              </div>
            </transition>
          </div>
        </v-flex>
        <v-flex xs4 text-xs-center>
          <div
            class="circle-content title light-blue lighten-1 white--text mt-5"
            :style="$vuetify.breakpoint.xs ? {'transform':'scale(0.8)'} : {}"
            v-ripple
            @click="isTransition5 = !isTransition5"
          >
            <transition name="transition-fade" mode="out-in">
              <div v-if="isTransition5" key="on">
                常に前を<br>見て
              </div>
              <div v-else key="off">
                Innovation
              </div>
            </transition>
          </div>
        </v-flex>
        <v-flex xs4 text-xs-center>
          <div
            class="circle-content title light-blue lighten-1 white--text mt-1"
            :style="$vuetify.breakpoint.xs ? {'transform':'scale(0.8)'} : {}"
            v-ripple
            @click="isTransition6 = !isTransition6"
          >
            <transition name="transition-fade" mode="out-in">
              <div v-if="isTransition6" key="on">
                仲間と共に
              </div>
              <div v-else key="off">
                Partner<br>Satisfaction
              </div>
            </transition>
          </div>
        </v-flex>
      </v-layout>
    </v-parallax>
  </section>

  <section>
    <v-layout row wrap justify-center class="mt-5">
      <div class="text-xs-center">
        <div class="headline">株式会社 イーソフトパワーズ （ｅＳｏｆｔＰｏｗｅｒｓ）は、<br>お客様のご要望をICTで叶える会社です。</div>
        <span class="title">ご用命は<a href="mailto:info@esoftpowers.com">こちら</a>まで！</span>
      </div>
    </v-layout>
  </section>

  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-space-around class="mt-5">
        <v-flex xs12 sm4 xl3>
          <v-card
            raised hover ripple
            class="hover-card"
            @click.native="$router.push('/corporate')"
          >
            <v-card-media
              class="hover-media"
              :src="require('@/assets/media_corporate.jpg')"
              :height="$vuetify.breakpoint.xs ? 128 : 200"
            >
            </v-card-media>
            <v-card-title primary-title class="layout justify-center">
              <div class="hover-title">
                <div class="text-main hover-text" data-hover="会社概要">会社概要</div>
                <span class="text-sub hover-text" data-hover="About Us">About Us</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 xl3>
          <v-card
            raised hover ripple
            class="hover-card"
            @click.native="$router.push('/service')"
          >
            <v-card-media
              class="hover-media"
              :src="require('@/assets/media_service.jpg')"
              :height="$vuetify.breakpoint.xs ? 128 : 200"
            >
            </v-card-media>
            <v-card-title primary-title class="layout justify-center">
              <div class="hover-title">
                <div class="text-main hover-text" data-hover="事業分野">事業分野</div>
                <span class="text-sub hover-text" data-hover="Our Business">Our Business</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 xl3>
          <v-card
            raised hover ripple
            class="hover-card"
            @click.native="$router.push('/recruit')"
          >
            <v-card-media
              class="hover-media"
              :src="require('@/assets/media_recruit.jpg')"
              :height="$vuetify.breakpoint.xs ? 128 : 200"
            >
            </v-card-media>
            <v-card-title primary-title class="layout justify-center">
              <div class="hover-title">
                <div class="text-main hover-text" data-hover="採用情報">採用情報</div>
                <span class="text-sub hover-text" data-hover="Recruit">Recruit</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>

  <section>
    <v-layout row wrap class="my-5" align-right>
      <v-flex xs12 sm10 offset-sm1>
        <v-card flat class="transparent">
          <v-card-title primary-title>
            <v-icon medium class="blue--text text--lighten-2" style="margin-right:10px">thumb_up</v-icon>
            <div class="text-main">INFORMATION</div>
          </v-card-title>
          <v-divider></v-divider>
          <v-expansion-panel popout>
            <v-expansion-panel-content
              v-for="(information, i) in informations"
              :key="i"
              :hide-actions="!information.description"
            >
              <div slot="header">
                <span class="text-sub">{{ information.date }}</span>
                <div>{{ information.title }}</div>
              </div>
              <v-card v-if="information.description">
                <v-card-text v-html="information.description"></v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</v-content>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.circle-content {
  height: 128px;
  width: 128px;
  opacity: 0.7;
  border-radius: 50%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  text-align: center;
  vertical-align: middle;
  transition: all 0.4s ease-in-out;
}

.circle-content:hover {
  z-index: 999;
  transform: scale(1.1);
  box-shadow: 0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12);
}

.transition-fade-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.transition-fade-leave-to {
  opacity: 0;
  transform: translateY(100%) scale(0.5);
}

.transition-fade-enter-active {
  transition: transform 0.7s, opacity 0.7s;
}

.transition-fade-enter {
  opacity: 0;
  transform: translateY(-100%) scale(0.5);
}

.hover-card .hover-media {
  transition: opacity 0.4s;
}

.hover-card:hover .hover-media {
  opacity: 0.8;
}

.hover-card .hover-title {
  position: relative;
}

.hover-card .hover-title::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #1976D2;
  opacity: 0;
  transform: translateY(5px);
  transition: transform 0.4s, opacity 0.4s;
  pointer-events: none;
}

.hover-card:hover .hover-title::before {
  opacity: 1;
  transform: translateY(0px);
}

.hover-card .hover-text::before {
  content: attr(data-hover);
  position: absolute;
  opacity: 0;
  color: #1976D2;
  transform: scale(1.1) translateX(10px) translateY(-10px) rotate(4deg);
  transition: transform 0.3s, opacity 0.3s;
  pointer-events: none;
}

.hover-card:hover .hover-text::before {
  transform: scale(1) translateX(0px) translateY(0px) rotate(0deg);
  opacity: 1;
}

.text-main {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
}

.text-sub {
  color: rgba(0,0,0,.54);
}
</style>
