<script>
import AccessDialog from './AccessDialog.vue';
import OfficeImage from './OfficeImage.vue';
import { Vpshow } from '@/directives/vpshow.js';

export default {
  data () {
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
      performanceHeaders: [
        { text: '年度', sortable: false, align: 'right', value: 'year' },
        { text: '売上高', sortable: false, align: 'right', value: 'sales' },
        { text: '社員数', sortable: false, align: 'right', value: 'employees' },
        { text: '内技術者数', sortable: false, align: 'right', value: 'engineers' },
      ],
      performanceItems: [
        {
          value: false,
          year: '28年度',
          sales: '16,510万円',
          employees: '13名',
          engineers: '11名',
        },
        {
          value: false,
          year: '27年度',
          sales: '15,808万円',
          employees: '13名',
          engineers: '11名',
        },
        {
          value: false,
          year: '26年度',
          sales: '15,294万円',
          employees: '13名',
          engineers: '11名',
        },
        {
          value: false,
          year: '25年度',
          sales: '13,133万円',
          employees: '12名',
          engineers: '10名',
        },
        {
          value: false,
          year: '24年度',
          sales: '11,474万円',
          employees: '10名',
          engineers: '9名',
        },
        {
          value: false,
          year: '23年度',
          sales: '10,304万円',
          employees: '10名',
          engineers: '9名',
        },
        {
          value: false,
          year: '22年度',
          sales: '8,070万円',
          employees: '9名',
          engineers: '8名',
        },
        {
          value: false,
          year: '21年度',
          sales: '8,760万円',
          employees: '9名',
          engineers: '8名',
        },
      ],
    }
  },
  components: {
    AccessDialog,
    OfficeImage,
  },
  directives: {
    Vpshow,
  },
}
</script>

<template>
<v-content class="bg_main">
  <div class="bg_main1"></div>
  <div class="bg_main2"></div>

  <section id="profile">
    <v-container grid-list-md>
      <v-layout row wrap justify-center class="mt-3">
        <v-flex xs12 sm11 md10 lg9 xl8>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>PROFILE</h2>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
                <v-layout row wrap>
                  <v-flex xs6>
                    <h3>創立</h3>
                    <div>{{ profile.founding }}</div>
                  </v-flex>
                  <v-flex xs6>
                    <h3>資本金</h3>
                    <div>{{ profile.capital }}</div>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs6>
                    <h3>代表取締役</h3>
                    <div>{{ profile.ceo }}</div>
                  </v-flex>
                  <v-flex xs6>
                    <h3>取締役</h3>
                    <div v-for="(director, d) in profile.directors" :key="d">{{ director }}</div>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <h3>取引銀行</h3>
                    <div v-for="(bank, b) in profile.banks" :key="b">{{ bank }}</div>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <h3>主要取引先</h3>
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
              <h2>LOCATIONS</h2>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'py-0'">
                <v-layout row wrap>
                  <v-flex xs12>
                    <h3>本社</h3>
                    <div>
                      〒100-0005<br>東京都千代田区丸の内2-2-1<br>岸本ビルヂング６Ｆ
                    </div>
                    <v-layout class="align-center ml-0 mt-1">
                      <v-icon color="blue lighten-2" class="mr-1">phone</v-icon>TEL:03-6273-4837
                    </v-layout>
                    <v-layout class="align-center ml-0 mt-1">
                      <v-icon color="blue lighten-2" class="mr-1">print</v-icon>FAX:03-6273-4838
                    </v-layout>
                    <access-dialog>
                      <v-btn flat round color="blue darken-2" class="ma-0 pl-0">
                        <v-icon color="blue lighten-2" class="mr-1">map</v-icon>交通アクセス・地図
                      </v-btn>
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
              <h2>HISTORY</h2>
            </v-card-title>
            <v-card-text>
              <h3>業績ハイライト</h3>
            </v-card-text>
            <v-data-table
              :headers="performanceHeaders"
              :items="performanceItems"
              hide-actions
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-right">{{ props.item.year }}</td>
                <td class="text-xs-right">{{ props.item.sales }}</td>
                <td class="text-xs-right">{{ props.item.employees }}</td>
                <td class="text-xs-right">{{ props.item.engineers }}</td>
              </template>
            </v-data-table>
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
              <h2>OFFICE</h2>
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
                    <h3>シェアワークプレイス</h3>
                    <div>皇居のお堀に面したシェアワークプレイス。</div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-container grid-list-md fluid>
              <v-layout row wrap>
                <v-flex v-vpshow="{ duration:2.0, y:100 }" xs12 md6 xl4 offset-xl2>
                  <office-image :item-index="0"></office-image>
                </v-flex>
                <v-flex v-vpshow="{ duration:3.0, y:100 }" xs12 md6 xl4>
                  <office-image :item-index="1"></office-image>
                </v-flex>
                <v-flex v-vpshow="{ duration:2.5, y:100 }" xs12 md6 offset-md3 xl4 offset-xl0>
                  <office-image :item-index="2"></office-image>
                </v-flex>
                <v-flex v-vpshow="{ duration:2.0, y:100 }" xs12 md6 xl4>
                  <office-image :item-index="3"></office-image>
                </v-flex>
                <v-flex v-vpshow="{ duration:3.0, y:100 }" xs12 md6 xl4>
                  <office-image :item-index="4"></office-image>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</v-content>
</template>
