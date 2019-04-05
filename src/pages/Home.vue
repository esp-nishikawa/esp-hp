<script>
import PageWrapper from '@/components/PageWrapper';
import EspLogo from '@/components/EspLogo';
import PhilosophyCircle from '@/components/PhilosophyCircle';
import ViewportShow from '@/components/ViewportShow';
import RouteImage from '@/components/RouteImage';
import ContactDialog from '@/components/ContactDialog';
import TheInformation from '@/components/TheInformation';

// トップページ
export default {
  components: {
    PageWrapper,
    EspLogo,
    PhilosophyCircle,
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
            <philosophy-circle auto-timer="2000">
              <template #before>Environment</template>
              <template #after>Globalでの<br>活動を</template>
            </philosophy-circle>
          </v-flex>
          <v-flex class="text-xs-center mt-2">
            <philosophy-circle auto-timer="2200">
              <template #before>Customer<br>Satisfaction</template>
              <template #after>お客様の夢<br>を現実に</template>
            </philosophy-circle>
          </v-flex>
          <v-flex class="text-xs-center mt-5">
            <philosophy-circle auto-timer="2400">
              <template #before>Employee<br>Satisfaction</template>
              <template #after>社員主役で</template>
            </philosophy-circle>
          </v-flex>
        </v-layout>
        <esp-logo/>
        <v-layout fill-heigh align-end justify-space-around>
          <v-flex class="text-xs-center mb-5">
            <philosophy-circle auto-timer="2600">
              <template #before>Quality</template>
              <template #after>信頼獲得に<br>向け</template>
            </philosophy-circle>
          </v-flex>
          <v-flex class="text-xs-center mb-2">
            <philosophy-circle auto-timer="2800">
              <template #before>Innovation</template>
              <template #after>常に前を<br>見て</template>
            </philosophy-circle>
          </v-flex>
          <v-flex class="text-xs-center mb-5">
            <philosophy-circle auto-timer="3000">
              <template #before>Partner<br>Satisfaction</template>
              <template #after>仲間と共に</template>
            </philosophy-circle>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container>
        <v-layout justify-center align-center class="headline-text text-xs-center mt-5">
          <span>株式会社イーソフトパワーズ（ｅＳｏｆｔＰｏｗｅｒｓ）は、<br>お客様のご要望をICTで叶える会社です。</span>
        </v-layout>
        <v-layout justify-center align-center class="title-text text-xs-center mt-1">
          <span>ご用命は</span>
          <contact-dialog>
            <base-link class="title-text pa-0">こちら</base-link>
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
            <viewport-show translate-x="80" :style-options="{ 'letter-spacing': '.5em' }" class="title-text white-text my-3">
              株式会社イーソフトパワーズ<br>（ｅＳｏｆｔＰｏｗｅｒｓ）
            </viewport-show>
            <viewport-show translate-y="40" delay="400" class="white-text" style="font-size:16px;">
              Soft Powerの元々の意味はHard Power（武力、軍事力）の対語で、文明の力、人類の知恵という、より広い意味を持ちます。
            </viewport-show>
            <viewport-show translate-y="40" delay="600" class="white-text" style="font-size:16px;">
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

<style scoped>
.headline-text {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: .02em;
}

.title-text {
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: .04em;
  white-space: nowrap;
}

.white-text {
  color: #fff;
  text-shadow: 0 0 2px rgba(0,0,0,.5);
}
</style>
