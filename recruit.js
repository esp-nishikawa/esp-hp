Vue.component('recruit', {
  template:
`
<v-content class="bg_main">
  <div class="bg_main1"></div>
  <div class="bg_main2"></div>
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="mt-5">
        <v-flex xs12 sm8 lg7 xl6>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>新卒採用</h2>
            </v-card-title>
            <v-card-text>
              現在募集しておりません。
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-center class="mt-5">
        <v-flex xs12 sm8 lg7 xl6>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>中途採用</h2>
            </v-card-title>
            <v-card-text>
              <h3>応募資格</h3>
              「ソフトウエアシステム設計」または「ソフトウエアプログラミング」の経験があること。
              <h3>業務内容</h3>
              「組み込み機器」または「パーソナルコンピューター」のソフトウエアシステム設計およびソフトウエアプログラミング。
              <h3>募集人員</h3>
              若干名
              <h3>勤務地</h3>
              東京、神奈川、千葉など関東近県
              <h3>待遇</h3>
              <div>経験／実力を正当評価し、実力に見合う報酬。</div>
              <div>詳細はお問い合わせください。</div>
              <v-dialog v-model="isDialog" max-width="600" :fullscreen="$vuetify.breakpoint.xs">
                <v-btn flat color="blue darken-2" slot="activator">給与モデルはこちらをご覧ください</v-btn>
                <v-card>
                  <v-layout>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="isDialog = false">
                      <v-icon>close</v-icon>
                    </v-btn>
                  </v-layout>
                  <v-card-title class="pt-0">
                    <div :class="$vuetify.breakpoint.xs ? 'title' : 'headline'">
                      基本給(残業含まず、経験による)
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-data-table
                      :headers="monthlyHeaders"
                      :items="monthlyItems"
                      hide-actions
                      class="elevation-1"
                    >
                      <template slot="items" slot-scope="props">
                        <td class="text-xs-left">{{ props.item.age }}</td>
                        <td class="text-xs-left">{{ props.item.salary }}</td>
                      </template>
                    </v-data-table>
                  </v-card-text>
                  <v-card-title class="pt-5">
                    <div :class="$vuetify.breakpoint.xs ? 'title' : 'headline'">
                      年収(賞与4カ月、残業20時間の場合)
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-data-table
                      :headers="annualHeaders"
                      :items="annualItems"
                      hide-actions
                      class="elevation-1"
                    >
                      <template slot="items" slot-scope="props">
                        <td class="text-xs-left">{{ props.item.age }}</td>
                        <td class="text-xs-left">{{ props.item.salary }}</td>
                      </template>
                    </v-data-table>
                  </v-card-text>
                </v-card>
              </v-dialog>
              <div>参考　勤務実態</div>
              <div>H25 平均時間外勤務時間 24.13H</div>
              <h3>その他</h3>
              <div>昇給１回/年</div>
              <div>賞与２回以上/年</div>
              <div>有給休暇１２日以上/年</div>
              <div>夏期休暇、ゴールデンウィーク休暇有り</div>
              <div>社保完</div>
              <h3>連絡先</h3>
              <a href="mailto:saiyou@esoftpowers.com">採用担当：saiyou@esoftpowers.com</a>
            </v-card-text>
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
      monthlyHeaders: [
        { text: '年齢', sortable: false, align: 'left', value: 'age' },
        { text: '月単位基本給与', sortable: false, align: 'left', value: 'salary' },
      ],
      monthlyItems: [
        {
          value: false,
          age: '25',
          salary: '￥216,400',
        },
        {
          value: false,
          age: '35',
          salary: '￥282,200',
        },
      ],
      annualHeaders: [
        { text: '年齢', sortable: false, align: 'left', value: 'age' },
        { text: '年単位給与', sortable: false, align: 'left', value: 'salary' },
      ],
      annualItems: [
        {
          value: false,
          age: '25',
          salary: '約386万',
        },
        {
          value: false,
          age: '35',
          salary: '約504万',
        },
      ],
    }
  },
})
