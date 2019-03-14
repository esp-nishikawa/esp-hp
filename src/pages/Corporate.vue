<script>
import PageWrapper from '@/components/PageWrapper';
import AccessDialog from '@/components/AccessDialog';
import OfficeImage from '@/components/OfficeImage';
import ThePerformance from '@/components/ThePerformance';

// 会社案内ページ
export default {
  components: {
    PageWrapper,
    AccessDialog,
    OfficeImage,
    ThePerformance,
  },
  data() {
    return {
      profile: {
        founding: '平成19年9月',
        capital: '９７０万円',
        ceo: '水野正規',
        directors: [ '中村一明' ],
        banks: [ 'みずほ銀行 中目黒支店', '城南信用金庫 目黒支店' ],
        customers: [
          '株式会社大阪エヌデーエス',
          '株式会社コア',
          '株式会社コムワース',
          '株式会社中松商会',
          '株式会社ニッポンダイナミックシステムズ',
          '大和システム株式会社',
          'レバテック株式会社',
        ],
      },
    };
  },
};
</script>

<template>
  <page-wrapper background="1">
    <section id="profile">
      <v-container grid-list-md>
        <v-layout row wrap justify-center class="mt-3">
          <v-flex xs12 sm11 md10 lg9 xl8>
            <v-card raised>
              <v-card-title primary-title class="layout justify-center">
                <base-headline>PROFILE</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
                  <v-layout row wrap>
                    <v-flex xs6>
                      <base-subheading>創立</base-subheading>
                      <div>{{ profile.founding }}</div>
                    </v-flex>
                    <v-flex xs6>
                      <base-subheading>資本金</base-subheading>
                      <div>{{ profile.capital }}</div>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs6>
                      <base-subheading>代表取締役</base-subheading>
                      <div>{{ profile.ceo }}</div>
                    </v-flex>
                    <v-flex xs6>
                      <base-subheading>取締役</base-subheading>
                      <div v-for="(director, d) in profile.directors" :key="d">{{ director }}</div>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm6>
                      <base-subheading>取引銀行</base-subheading>
                      <div v-for="(bank, b) in profile.banks" :key="b">{{ bank }}</div>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <base-subheading>主要取引先</base-subheading>
                      <div v-for="(customer, c) in profile.customers" :key="c">{{ customer }}</div>
                      <div>他</div>
                      <div>（敬称略、50音順）</div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-md>
        <v-layout row wrap justify-center class="mt-3">
          <v-flex xs12 sm7 md6 lg5 xl4>
            <v-card raised>
              <v-card-title primary-title class="layout justify-center">
                <base-headline>LOCATIONS</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'py-0'">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <base-subheading>本社</base-subheading>
                      <div>〒100-0005<br>東京都千代田区丸の内2-2-1<br>岸本ビルヂング６Ｆ</div>
                      <v-layout align-center class="ml-0 mt-1">
                        <v-icon color="blue lighten-2" class="mr-1">phone</v-icon>TEL:03-6273-4837
                      </v-layout>
                      <v-layout align-center class="ml-0 mt-1">
                        <v-icon color="blue lighten-2" class="mr-1">print</v-icon>FAX:03-6273-4838
                      </v-layout>
                      <access-dialog>
                        <base-link class="pl-0">
                          <v-icon color="blue lighten-2" class="mr-1">map</v-icon>交通アクセス・地図
                        </base-link>
                      </access-dialog>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-md>
        <v-layout row wrap justify-center class="mt-3">
          <v-flex xs12 sm10 md9 lg8 xl7>
            <v-card raised>
              <v-card-title primary-title class="layout justify-center">
                <base-headline>HISTORY</base-headline>
              </v-card-title>
              <v-card-text>
                <base-subheading>業績ハイライト</base-subheading>
              </v-card-text>
              <the-performance/>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section id="office">
      <v-container grid-list-md>
        <v-layout row wrap justify-center class="mt-3">
          <v-flex xs12>
            <v-card raised>
              <v-card-title primary-title class="layout justify-center">
                <base-headline>OFFICE</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
                  <v-layout row wrap class="py-3">
                    <v-flex xs12>
                      <div>当社は、ビジネスの中心地にある「ビジネスエアポート丸の内」のレンタルオフィスを拠点としてます。</div>
                      <div>完全個室のプライベートなオフィスの他、シェアワークプレイスを利用してます。</div>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <base-subheading>シェアワークプレイス</base-subheading>
                      <div>皇居のお堀に面したシェアワークプレイス。</div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-container grid-list-md fluid>
                <v-layout row wrap>
                  <v-flex xs12 md6 xl4 offset-xl2>
                    <office-image value="entrance"/>
                  </v-flex>
                  <v-flex xs12 md6 xl4>
                    <office-image value="lounge"/>
                  </v-flex>
                  <v-flex xs12 md6 offset-md3 xl4 offset-xl0>
                    <office-image value="workspace"/>
                  </v-flex>
                  <v-flex xs12 md6 xl4>
                    <office-image value="boardroom"/>
                  </v-flex>
                  <v-flex xs12 md6 xl4>
                    <office-image value="library"/>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </page-wrapper>
</template>
