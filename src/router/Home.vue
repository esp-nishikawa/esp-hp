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
        <div class="d-flex flex-column justify-space-between">
          <div class="d-flex align-start justify-space-around">
            <philosophy-circle auto-timer="2000" class="mt-12">
              <template #before>Environment</template>
              <template #after>Globalでの<br>活動を</template>
            </philosophy-circle>
            <philosophy-circle auto-timer="2200" class="mt-2">
              <template #before>Customer<br>Satisfaction</template>
              <template #after>お客様の夢<br>を現実に</template>
            </philosophy-circle>
            <philosophy-circle auto-timer="2400" class="mt-12">
              <template #before>Employee<br>Satisfaction</template>
              <template #after>社員主役で</template>
            </philosophy-circle>
          </div>
          <esp-logo/>
          <div class="d-flex align-end justify-space-around">
            <philosophy-circle auto-timer="2600" class="mb-12">
              <template #before>Quality</template>
              <template #after>信頼獲得に<br>向け</template>
            </philosophy-circle>
            <philosophy-circle auto-timer="2800" class="mb-2">>
              <template #before>Innovation</template>
              <template #after>常に前を<br>見て</template>
            </philosophy-circle>
            <philosophy-circle auto-timer="3000" class="mb-12">>
              <template #before>Partner<br>Satisfaction</template>
              <template #after>仲間と共に</template>
            </philosophy-circle>
          </div>
        </div>
      </v-parallax>
    </section>

    <section>
      <v-container class="mt-12">
        <div class="headline-text text-center">
          <span>株式会社イーソフトパワーズ（ｅＳｏｆｔＰｏｗｅｒｓ）は、<br>お客様のご要望をICTで叶える会社です。</span>
        </div>
        <div class="title-text d-flex justify-center align-center mt-1">
          <span>ご用命は</span>
          <contact-dialog>
            <base-link class="title-text pa-0">こちら</base-link>
          </contact-dialog>
          <span>まで！</span>
        </div>
      </v-container>
    </section>

    <section>
      <v-container class="mt-8 mb-16">
        <v-row justify="space-around">
          <v-col cols="12" sm="4" xl="3">
            <route-image value="corporate"/>
          </v-col>
          <v-col cols="12" sm="4" xl="3">
            <route-image value="service"/>
          </v-col>
          <v-col cols="12" sm="4" xl="3">
            <route-image value="recruit"/>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section>
      <v-parallax :src="require('@/assets/home_parallax2.jpg')" height="400" class="mt-12">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="11" sm="10" lg="9" xl="8" class="text-center">
              <viewport-show translate-x="80" :style-options="{ 'letter-spacing': '.5em' }" class="title-text white-text my-4">
                株式会社イーソフトパワーズ<br>（ｅＳｏｆｔＰｏｗｅｒｓ）
              </viewport-show>
              <viewport-show translate-y="40" delay="400" class="white-text" style="font-size:16px;">
                Soft Powerの元々の意味はHard Power（武力、軍事力）の対語で、文明の力、人類の知恵という、より広い意味を持ちます。
              </viewport-show>
              <viewport-show translate-y="40" delay="600" class="white-text" style="font-size:16px;">
                我々が持つ知識、知恵、精神力を注ぎ、よりよいソフトを作ろうという意味を込めており、それに、embedded、engineering、electronics,等に加えenvironment（環境）と意味深く、冗長的でsoftに通じるeを付加した社名となっています。
              </viewport-show>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <section>
      <v-container class="my-16">
        <v-row justify="start">
          <v-col cols="12" sm="11" md="10" lg="9" xl="8">
            <the-information/>
          </v-col>
        </v-row>
      </v-container>
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
  text-shadow: 0 -1px 1px rgba(0,0,0,.4);
}
</style>
