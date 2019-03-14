<script>
import PageWrapper from '@/components/PageWrapper';
import DelayText from '@/components/DelayText';
import TransitionCircle from '@/components/TransitionCircle';
import ViewportShow from '@/components/ViewportShow';
import RouteImage from '@/components/RouteImage';
import ContactDialog from '@/components/ContactDialog';
import TheInformation from '@/components/TheInformation';

// トップページ
export default {
  components: {
    PageWrapper,
    DelayText,
    TransitionCircle,
    ViewportShow,
    RouteImage,
    ContactDialog,
    TheInformation,
  },
};
</script>

<template>
  <page-wrapper>
    <section>
      <v-parallax
        :src="require('@/assets/home_parallax1.jpg')"
        :height="$vuetify.breakpoint.xs ? 540 : 600"
      >
        <v-layout fill-heigh align-start justify-space-around>
          <v-flex class="text-xs-center mt-5">
            <transition-circle
              class="title light-blue lighten-1 white--text"
              style="opacity:0.7;"
              auto-timer="2000"
            >
              <template #before>Environment</template>
              <template #after>Globalでの<br>活動を</template>
            </transition-circle>
          </v-flex>
          <v-flex class="text-xs-center mt-2">
            <transition-circle
              class="title light-blue lighten-1 white--text"
              style="opacity:0.7;"
              auto-timer="2200"
            >
              <template #before>Customer<br>Satisfaction</template>
              <template #after>お客様の夢<br>を現実に</template>
            </transition-circle>
          </v-flex>
          <v-flex class="text-xs-center mt-5">
            <transition-circle
              class="title light-blue lighten-1 white--text"
              style="opacity:0.7;"
              auto-timer="2400"
            >
              <template #before>Employee<br>Satisfaction</template>
              <template #after>社員主役で</template>
            </transition-circle>
          </v-flex>
        </v-layout>
        <v-layout column align-center justify-center>
          <v-flex class="text-xs-center">
            <delay-text
              class="display-4 white--text"
              style="opacity:0.7;"
              value="eSoft"
              delay="500"
            />
          </v-flex>
          <v-flex class="text-xs-center">
            <delay-text
              class="display-4 white--text"
              style="opacity:0.7;"
              value="Powers"
              delay="1000"
            />
          </v-flex>
        </v-layout>
        <v-layout fill-heigh align-end justify-space-around>
          <v-flex class="text-xs-center mb-5">
            <transition-circle
              class="title light-blue lighten-1 white--text"
              style="opacity:0.7;"
              auto-timer="2600"
            >
              <template #before>Quality</template>
              <template #after>信頼獲得に<br>向け</template>
            </transition-circle>
          </v-flex>
          <v-flex class="text-xs-center mb-2">
            <transition-circle
              class="title light-blue lighten-1 white--text"
              style="opacity:0.7;"
              auto-timer="2800"
            >
              <template #before>Innovation</template>
              <template #after>常に前を<br>見て</template>
            </transition-circle>
          </v-flex>
          <v-flex class="text-xs-center mb-5">
            <transition-circle
              class="title light-blue lighten-1 white--text"
              style="opacity:0.7;"
              auto-timer="3000"
            >
              <template #before>Partner<br>Satisfaction</template>
              <template #after>仲間と共に</template>
            </transition-circle>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container>
        <v-layout justify-center align-center class="headline text-xs-center mt-5">
          <span>株式会社イーソフトパワーズ（ｅＳｏｆｔＰｏｗｅｒｓ）は、<br>お客様のご要望をICTで叶える会社です。</span>
        </v-layout>
        <v-layout justify-center align-center class="title text-xs-center mt-1">
          <span>ご用命は</span>
          <contact-dialog>
            <base-link class="title pa-0">こちら</base-link>
          </contact-dialog>
          <span>まで！</span>
        </v-layout>
      </v-container>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-space-around class="mt-3">
          <v-flex xs12 sm4 xl3>
            <route-image value="corporate"/>
          </v-flex>
          <v-flex xs12 sm4 xl3>
            <route-image value="service"/>
          </v-flex>
          <v-flex xs12 sm4 xl3>
            <route-image value="recruit"/>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section>
      <v-parallax :src="require('@/assets/home_parallax2.jpg')" height="400" class="mt-5">
        <v-layout row wrap align-center justify-center>
          <v-flex xs11 sm10 lg9 xl8 text-xs-center>
            <viewport-show delay="100" class="title white--text my-3">
              株式会社イーソフトパワーズ<br>（ｅＳｏｆｔＰｏｗｅｒｓ）
            </viewport-show>
            <viewport-show delay="500" class="subheading white--text">
              Soft Powerの元々の意味はHard Power（武力、軍事力）の対語で、文明の力、人類の知恵という、より広い意味を持ちます。
            </viewport-show>
            <viewport-show delay="800" class="subheading white--text">
              我々が持つ知識、知恵、精神力を注ぎ、よりよいソフトを作ろうという意味を込めており、それに、embedded、engineering、electronics,等に加えenvironment（環境）と意味深く、冗長的でsoftに通じるeを付加した社名となっています。
            </viewport-show>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout row wrap class="my-5" align-right>
        <v-flex xs12 sm10 offset-sm1>
          <the-information/>
        </v-flex>
      </v-layout>
    </section>
  </page-wrapper>
</template>
