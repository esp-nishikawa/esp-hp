<script>
import CompensationDialog from './CompensationDialog.vue';
import ConditionsDialog from './ConditionsDialog.vue';
import ContactDialog from './ContactDialog.vue';

export default {
  components: {
    CompensationDialog,
    ConditionsDialog,
    ContactDialog,
  },
}
</script>

<template>
<v-content class="bg_main">
  <div class="bg_main1"></div>
  <div class="bg_main2"></div>

  <section id="new-graduate">
    <v-container grid-list-md>
      <v-layout row wrap justify-center class="mt-3">
        <v-flex xs12 sm11 md10 lg9 xl8>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>新卒採用</h2>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
                <v-layout row wrap>
                  <v-flex xs12>
                    <h3>職種</h3>
                    <div>システムエンジニア(SE)</div>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <h3>応募資格</h3>
                    <div>２０１９年３月に卒業予定の方</div>
                    <div>※既に卒業されている方も応募可能</div>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <h3>応募学科</h3>
                    <div>全学部・全学科</div>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <h3>応募書類</h3>
                    <div>1.履歴書(写真貼付)</div>
                    <div>2.成績証明書</div>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <h3>選考方法</h3>
                    <div>面接(1～2回を予定)</div>
                    <div>※日時は応募者に別途通知</div>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <h3>給与</h3>
                    <compensation-dialog>
                      <v-btn flat round color="blue darken-2">こちらをご覧ください</v-btn>
                    </compensation-dialog>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <h3>勤務条件・福利厚生など</h3>
                    <conditions-dialog>
                      <v-btn flat round color="blue darken-2">こちらをご覧ください</v-btn>
                    </conditions-dialog>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12>
                    <h3>連絡先</h3>
                    <div>お電話またはメールフォームよりご連絡ください</div>
                    <v-layout class="align-center ml-0 mt-1">
                      <v-icon color="blue lighten-2" class="mr-1">phone</v-icon>TEL:03-6273-4837
                    </v-layout>
                    <contact-dialog selected-type="1">
                      <v-btn flat round color="blue darken-2" class="ma-0 pl-0">
                        <v-icon color="blue lighten-2" class="mr-1">email</v-icon>メールフォーム
                      </v-btn>
                    </contact-dialog>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>

  <section id="mid-career">
    <v-container grid-list-md>
      <v-layout row wrap justify-center class="mt-3">
        <v-flex xs12 sm11 md10 lg9 xl8>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>中途採用</h2>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <h3>職種</h3>
                    <div>システムエンジニア(SE)</div>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <h3>応募資格</h3>
                    <div>ソフトウェア開発の経験がある方</div>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <h3>応募書類</h3>
                    <div>1.履歴書(写真貼付)</div>
                    <div>2.職務経歴書</div>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <h3>選考方法</h3>
                    <div>面接(1～2回を予定)</div>
                    <div>※日時は応募者に別途通知</div>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <h3>給与</h3>
                    <compensation-dialog mid-career>
                      <v-btn flat round color="blue darken-2">こちらをご覧ください</v-btn>
                    </compensation-dialog>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <h3>勤務条件・福利厚生など</h3>
                    <conditions-dialog>
                      <v-btn flat round color="blue darken-2">こちらをご覧ください</v-btn>
                    </conditions-dialog>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12>
                    <h3>連絡先</h3>
                    <div>お電話またはメールフォームよりご連絡ください</div>
                    <v-layout class="align-center ml-0 mt-1">
                      <v-icon color="blue lighten-2" class="mr-1">phone</v-icon>TEL:03-6273-4837
                    </v-layout>
                    <contact-dialog selected-type="1">
                      <v-btn flat round color="blue darken-2" class="ma-0 pl-0">
                        <v-icon color="blue lighten-2" class="mr-1">email</v-icon>メールフォーム
                      </v-btn>
                    </contact-dialog>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</v-content>
</template>
