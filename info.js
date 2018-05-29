Vue.component('info', {
  template:
`
<v-content class="bg_main">
  <div class="bg_main1"></div>
  <div class="bg_main2"></div>
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="mt-5">
        <v-flex xs12 sm8 md7 lg6 xl5>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <div class="py-3" :class="$vuetify.breakpoint.xs ? 'title' : 'headline'">
                株式会社イーソフトパワーズ<br>（ｅＳｏｆｔＰｏｗｅｒｓ）
              </div>
            </v-card-title>
            <v-card-text>
              Soft Powerの元々の意味はHard Power（武力、軍事力）の対語で、文明の力、人類の知恵という、より広い意味を持ちます。<br>
              我々が持つ知識、知恵、精神力を注ぎ、よりよいソフトを作ろうという意味を込めており、それに、embedded、engineering、electronics,等に加えenvironment（環境）と意味深く、冗長的でsoftに通じるeを付加した社名となっています。
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-center class="mt-5">
        <v-flex xs12 sm10 lg8 xl6>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>PROFILE</h2>
            </v-card-title>
            <v-card-text>
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
                  <h3>主なお客様</h3>
                  <div v-for="(customer, c) in profile.customers" :key="c">{{ customer }}</div>
                  <div>他</div>
                  <div>敬称略、順不同</div>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-center class="mt-5">
        <v-flex xs12 sm6 md5 lg4 xl3>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>CONTACT</h2>
            </v-card-title>
            <v-card-text>
              <h3>本社</h3>
              <div class="subheading">
                〒100-0005<br>東京都千代田区丸の内2-2-1<br>岸本ビルヂング６Ｆ
              </div>
              <div class="subheading">
                <v-icon class="blue--text text--lighten-2">phone</v-icon>TEL:03-6273-4837
              </div>
              <div class="subheading">
                <v-icon class="blue--text text--lighten-2">print</v-icon>FAX:03-6273-4838
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-dialog v-model="isDialog" max-width="720" :fullscreen="$vuetify.breakpoint.xs">
                <v-btn flat color="blue darken-2" slot="activator">＜＜＜交通アクセス 地図＞＞＞</v-btn>
                <v-card>
                  <v-layout>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="isDialog = false">
                      <v-icon>close</v-icon>
                    </v-btn>
                  </v-layout>
                  <v-card-title primary-title class="layout justify-center pt-0">
                    <h2>ACCESS</h2>
                  </v-card-title>
                  <v-layout row wrap justify-center class="mt-1">
                    <v-flex xs10>
                      <h3>本社</h3>
                      <div>・東京メトロ千代田線「二重橋前」駅4番出口徒歩2分</div>
                      <div>・東京メトロ丸の内線「東京」駅から東京メトロ千代田線「二重橋前」駅方面4番出口徒歩2分</div>
                      <div>・東京メトロ各線・都営三田線「大手町」駅から東京メトロ千代田線「二重橋前」駅方面4番出口徒歩2分</div>
                      <div>・JR「東京」駅丸の内南口徒歩5分</div>
                      <iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.jp/maps?ll=35.6804534,139.7625194&q=東京都千代田区丸の内２丁目２−１+岸本ビルヂング&output=embed&t=m&z=17"></iframe>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-center class="mt-5">
        <v-flex xs12 sm10 md8 lg6 xl4>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline text-bold py-3">業績ハイライト</div>
            </v-card-title>
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
</v-content>
`,
  data () {
    return {
      isDialog: false,
      profile: {
        founding: '平成19年9月',
        capital: '９７０万円',
        ceo: '水野正規',
        directors: [ '中村一明' ],
        banks: [ 'みずほ銀行 中目黒支店', '城南信用金庫 目黒支店' ],
        customers: [
          '株式会社 ニッポンダイナミックシステムズ',
          '株式会社　大阪エヌデーエス',
          '大和システム 株式会社',
          '株式会社　中松商会',
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
})
