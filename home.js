Vue.component('home', {
  template:
`
<v-content>
  <section>
    <v-parallax
      src="assets/parallax_home.jpg"
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
        <v-flex xs12 sm4 lg3>
          <v-card
            raised hover ripple
            class="hover-card"
            @click.native="$router.push('/info')"
          >
            <v-card-media
              class="hover-media"
              src="assets/media_info.jpg"
              :height="$vuetify.breakpoint.xs ? 128 : 200"
            >
            </v-card-media>
            <v-card-title primary-title class="layout justify-center">
              <div class="hover-title">
                <div class="headline hover-text" data-hover="会社概要">会社概要</div>
                <span class="body-1 text-sub hover-text" data-hover="About Us">About Us</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 lg3>
          <v-card
            raised hover ripple
            class="hover-card"
            @click.native="$router.push('/service')"
          >
            <v-card-media
              class="hover-media"
              src="assets/media_service.jpg"
              :height="$vuetify.breakpoint.xs ? 128 : 200"
            >
            </v-card-media>
            <v-card-title primary-title class="layout justify-center">
              <div class="hover-title">
                <div class="headline hover-text" data-hover="事業分野">事業分野</div>
                <span class="body-1 text-sub hover-text" data-hover="Our Business">Our Business</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 lg3>
          <v-card
            raised hover ripple
            class="hover-card"
            @click.native="$router.push('/recruit')"
          >
            <v-card-media
              class="hover-media"
              src="assets/media_recruit.jpg"
              :height="$vuetify.breakpoint.xs ? 128 : 200"
            >
            </v-card-media>
            <v-card-title primary-title class="layout justify-center">
              <div class="hover-title">
                <div class="headline hover-text" data-hover="採用情報">採用情報</div>
                <span class="body-1 text-sub hover-text" data-hover="Recruit">Recruit</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>

  <section>
    <v-layout row wrap class="my-5" align-right>
      <v-flex xs12 offset-sm1>
        <v-card flat class="transparent">
          <v-card-title primary-title>
            <v-icon medium class="blue--text text--lighten-2" style="margin-right:10px">thumb_up</v-icon>
            <div class="headline text-shadow">INFORMATION</div>
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
`,
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
})
