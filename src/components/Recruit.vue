<script>
export default {
  data () {
    return {
      isSalaryDialog: false,
      isConditionsDialog: false,
      initialItems: [
        {
          value: false,
          education: '大学院（修士）卒',
          salary: '214,700円',
        },
        {
          value: false,
          education: '大学卒',
          salary: '204,300円',
        },
        {
          value: false,
          education: '専門卒（３年制）',
          salary: '200,900円',
        },
        {
          value: false,
          education: '高専・短大・専門卒（２年制）',
          salary: '198,000円',
        },
      ],
      annualItems: [
        {
          value: false,
          age: '２４歳',
          salary: '３８３万',
        },
        {
          value: false,
          age: '２７歳',
          salary: '４１０万',
        },
        {
          value: false,
          age: '３１歳',
          salary: '４６１万',
        },
      ],
    }
  },
}
</script>

<template>
<v-content class="bg_main">
  <div class="bg_main1"></div>
  <div class="bg_main2"></div>
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="mt-5">
        <v-flex xs12 sm9 md8 lg7 xl6>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>新卒採用</h2>
            </v-card-title>
            <v-card-text>
              <h3>職種</h3>
              <div>システムエンジニア(SE)</div>
              <h3>応募資格</h3>
              <div>２０１９年３月に卒業予定の方</div>
              <div>※既に卒業されている方も応募可能</div>
              <h3>応募学科</h3>
              <div>全学部・全学科</div>
              <h3>応募書類</h3>
              <div>1.履歴書(写真貼付)</div>
              <div>2.成績証明書</div>
              <h3>選考方法</h3>
              <div>面接(1～2回を予定)</div>
              <div>※日時は応募者に別途通知</div>
              <h3>給与</h3>
              <v-btn flat color="blue darken-2" @click.stop="isSalaryDialog = true">こちらをご覧ください</v-btn>
              <h3>勤務条件・福利厚生など</h3>
              <v-btn flat color="blue darken-2" @click.stop="isConditionsDialog = true">こちらをご覧ください</v-btn>
              <h3>連絡先</h3>
              <div>お電話またはメールにてご連絡下さい</div>
              <div>
                <v-icon class="blue--text text--lighten-2">phone</v-icon>TEL:03-6273-4837
              </div>
              <div>
                <v-icon class="blue--text text--lighten-2">email</v-icon>
                <a href="mailto:saiyou@esoftpowers.com">採用担当：saiyou@esoftpowers.com</a>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-center class="mt-5">
        <v-flex xs12 sm9 md8 lg7 xl6>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>中途採用</h2>
            </v-card-title>
            <v-card-text>
              <h3>職種</h3>
              <div>システムエンジニア(SE)</div>
              <h3>応募資格</h3>
              <div>ソフトウェア開発の経験がある方</div>
              <h3>応募書類</h3>
              <div>1.履歴書(写真貼付)</div>
              <div>2.職務経歴書</div>
              <h3>選考方法</h3>
              <div>面接(1～2回を予定)</div>
              <div>※日時は応募者に別途通知</div>
              <h3>給与</h3>
              <v-btn flat color="blue darken-2" @click.stop="isSalaryDialog = true">こちらをご覧ください</v-btn>
              <h3>勤務条件・福利厚生など</h3>
              <v-btn flat color="blue darken-2" @click.stop="isConditionsDialog = true">こちらをご覧ください</v-btn>
              <h3>連絡先</h3>
              <div>お電話またはメールにてご連絡下さい</div>
              <div>
                <v-icon class="blue--text text--lighten-2">phone</v-icon>TEL:03-6273-4837
              </div>
              <div>
                <v-icon class="blue--text text--lighten-2">email</v-icon>
                <a href="mailto:saiyou@esoftpowers.com">採用担当：saiyou@esoftpowers.com</a>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-dialog v-model="isSalaryDialog" max-width="600" :fullscreen="$vuetify.breakpoint.xs">
      <v-card>
        <v-layout>
          <v-spacer></v-spacer>
          <v-btn icon @click="isSalaryDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-layout>
        <v-card-title class="layout justify-center pt-0 pb-0">
          <h2 class="medium-xs">初任給（平成２９年度実績）</h2>
        </v-card-title>
        <v-card-text class="pt-0 pb-0">
          <v-data-table
            :items="initialItems"
            hide-actions
            hide-headers
            class="elevation-3"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-left">{{ props.item.education }}</td>
              <td class="text-xs-left">{{ props.item.salary }}</td>
            </template>
          </v-data-table>
          <div>※この表の金額は基準給で独身者の場合</div>
        </v-card-text>
        <v-card-title class="layout justify-center pt-3 pb-0">
          <h2 class="medium-xs">年収モデル</h2>
        </v-card-title>
        <v-card-text class="pt-0 pb-0">
          <v-data-table
            :items="annualItems"
            hide-actions
            hide-headers
            class="elevation-3"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-left">{{ props.item.age }}</td>
              <td class="text-xs-left">{{ props.item.salary }}</td>
            </template>
          </v-data-table>
          <div>※年間賞与4ヶ月、1ヶ月の残業20Hとした場合。</div>
        </v-card-text>
        <v-card-text>
          <h3>諸手当</h3>
          <div>通勤手当（全額）、家族手当、時間外手当、役職手当</div>
          <h3>昇給</h3>
          <div>年１回（７月）</div>
          <h3>賞与</h3>
          <div>年２回（６月、１２月）</div>
          <div>※年間平均４.０カ月＋α（平成２９年度実績）</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="isConditionsDialog" max-width="600" :fullscreen="$vuetify.breakpoint.xs">
      <v-card>
        <v-layout>
          <v-spacer></v-spacer>
          <v-btn icon @click="isConditionsDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-layout>
        <v-card-title primary-title class="layout justify-center pt-0">
          <h2>CONDITIONS & BENEFITS</h2>
        </v-card-title>
        <v-card-text>
          <h3>勤務地</h3>
          <div>東京、東京近郊、札幌、その他プロジェクト拠点</div>
          <h3>勤務時間</h3>
          <div>９：００～１７：３０（昼休み１２：００～１３：００）</div>
          <div>実働７.５時間</div>
          <h3>休日・休暇</h3>
          <div>土曜日、日曜日、祝日、夏期休暇、年末年始休暇、他</div>
          <h3>福利厚生</h3>
          <div>・各種保険：健康保険、厚生年金保険、雇用保険、労災保険等完備</div>
          <div>・健保組合提携の宿泊・スポーツ施設を利用可</div>
        </v-card-text>
      </v-card>
    </v-dialog>

  </section>
</v-content>
</template>
