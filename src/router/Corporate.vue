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
      <v-container>
        <v-row justify="center" class="mt-4">
          <v-col cols="12" sm="11" md="10" lg="9" xl="8">
            <v-card raised>
              <v-card-title class="justify-center">
                <base-headline class="pt-10 pb-2">PROFILE</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container class="px-0 px-sm-3">
                  <v-row>
                    <v-col cols="6">
                      <base-subheading>創立</base-subheading>
                      <base-text>{{ profile.founding }}</base-text>
                    </v-col>
                    <v-col cols="6">
                      <base-subheading>資本金</base-subheading>
                      <base-text>{{ profile.capital }}</base-text>
                    </v-col>
                    <v-col cols="6">
                      <base-subheading>代表取締役</base-subheading>
                      <base-text>{{ profile.ceo }}</base-text>
                    </v-col>
                    <v-col cols="6">
                      <base-subheading>取締役</base-subheading>
                      <base-text v-for="(director, d) in profile.directors" :key="d">{{ director }}</base-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>取引銀行</base-subheading>
                      <base-text v-for="(bank, b) in profile.banks" :key="b">{{ bank }}</base-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>主要取引先</base-subheading>
                      <base-text v-for="(customer, c) in profile.customers" :key="c">{{ customer }}</base-text>
                      <base-text>他</base-text>
                      <base-text>（敬称略、50音順）</base-text>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="center" class="mt-4">
          <v-col cols="12" sm="7" md="6" lg="5" xl="4">
            <v-card raised>
              <v-card-title class="justify-center">
                <base-headline class="pt-10 pb-2">LOCATIONS</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container class="px-0 px-sm-3">
                  <v-row>
                    <v-col>
                      <base-subheading>本社</base-subheading>
                      <base-text>〒100-0005<br>東京都千代田区丸の内2-2-1<br>岸本ビルヂング６Ｆ</base-text>
                      <div class="d-flex align-center mt-1">
                        <v-icon color="blue lighten-2" class="mr-1">phone</v-icon>
                        <base-text>TEL:03-6273-4837</base-text>
                      </div>
                      <div class="d-flex align-center mt-1">
                        <v-icon color="blue lighten-2" class="mr-1">print</v-icon>
                        <base-text>FAX:03-6273-4838</base-text>
                      </div>
                      <access-dialog>
                        <base-link class="pl-0">
                          <v-icon color="blue lighten-2" class="mr-1">map</v-icon>交通アクセス・地図
                        </base-link>
                      </access-dialog>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="center" class="mt-4">
          <v-col cols="12" sm="10" md="9" lg="8" xl="7">
            <v-card raised>
              <v-card-title class="justify-center">
                <base-headline class="pt-10 pb-2">HISTORY</base-headline>
              </v-card-title>
              <v-card-text class="pb-0">
                <v-container class="px-0 px-sm-3">
                  <v-row>
                    <v-col>
                      <base-subheading>業績ハイライト</base-subheading>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <the-performance/>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="office">
      <v-container>
        <v-row justify="center" class="mt-4">
          <v-col cols="12">
            <v-card raised>
              <v-card-title class="justify-center">
                <base-headline class="pt-10 pb-2">OFFICE</base-headline>
              </v-card-title>
              <v-card-text class="pb-0">
                <v-container class="px-0 px-sm-3">
                  <v-row class="mt-2">
                    <v-col>
                      <base-text>当社は、ビジネスの中心地にある「ビジネスエアポート丸の内」のレンタルオフィスを拠点としてます。</base-text>
                      <base-text>完全個室のプライベートなオフィスの他、シェアワークプレイスを利用してます。</base-text>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <base-subheading>シェアワークプレイス</base-subheading>
                      <base-text>皇居のお堀に面したシェアワークプレイス。</base-text>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-container fluid class="pt-0">
                <v-row>
                  <v-col cols="12" md="6" xl="4" offset-xl="2">
                    <office-image value="entrance"/>
                  </v-col>
                  <v-col cols="12" md="6" xl="4">
                    <office-image value="lounge"/>
                  </v-col>
                  <v-col cols="12" md="6" offset-md="3" xl="4" offset-xl="0">
                    <office-image value="workspace"/>
                  </v-col>
                  <v-col cols="12" md="6" xl="4">
                    <office-image value="boardroom"/>
                  </v-col>
                  <v-col cols="12" md="6" xl="4">
                    <office-image value="library"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </page-wrapper>
</template>
