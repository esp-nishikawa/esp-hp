<script>
import PageWrapper from '@/components/PageWrapper';
import CompensationDialog from '@/components/CompensationDialog';
import ConditionsDialog from '@/components/ConditionsDialog';
import ContactDialog from '@/components/ContactDialog';

// 採用情報ページ
export default {
  components: {
    PageWrapper,
    CompensationDialog,
    ConditionsDialog,
    ContactDialog,
  },
};
</script>

<template>
  <page-wrapper background="1">
    <section id="new-graduate">
      <v-container grid-list-md>
        <v-layout row wrap justify-center class="mt-3">
          <v-flex xs12 sm11 md10 lg9 xl8>
            <v-card raised>
              <v-card-title primary-title class="layout justify-center">
                <base-headline>新卒採用</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <base-subheading>職種</base-subheading>
                      <div>システムエンジニア(SE)</div>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm6>
                      <base-subheading>応募資格</base-subheading>
                      <div>２０１９年３月に卒業予定の方</div>
                      <div>※既に卒業されている方も応募可能</div>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <base-subheading>応募学科</base-subheading>
                      <div>全学部・全学科</div>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm6>
                      <base-subheading>応募書類</base-subheading>
                      <div>1.履歴書(写真貼付)</div>
                      <div>2.成績証明書</div>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <base-subheading>選考方法</base-subheading>
                      <div>面接(1～2回を予定)</div>
                      <div>※日時は応募者に別途通知</div>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm6>
                      <base-subheading>給与</base-subheading>
                      <compensation-dialog>
                        <base-link>こちらをご覧ください</base-link>
                      </compensation-dialog>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <base-subheading>勤務条件・福利厚生など</base-subheading>
                      <conditions-dialog>
                        <base-link>こちらをご覧ください</base-link>
                      </conditions-dialog>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <base-subheading>連絡先</base-subheading>
                      <div>お電話またはメールフォームよりご連絡ください</div>
                      <v-layout align-center class="ml-0 mt-1">
                        <v-icon color="blue lighten-2" class="mr-1">phone</v-icon>TEL:03-6273-4837
                      </v-layout>
                      <contact-dialog selected-type="1">
                        <base-link class="pl-0">
                          <v-icon color="blue lighten-2" class="mr-1">email</v-icon>メールフォーム
                        </base-link>
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
                <base-headline>中途採用</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
                  <v-layout row wrap>
                    <v-flex xs12 sm6>
                      <base-subheading>職種</base-subheading>
                      <div>システムエンジニア(SE)</div>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <base-subheading>応募資格</base-subheading>
                      <div>ソフトウェア開発の経験がある方</div>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm6>
                      <base-subheading>応募書類</base-subheading>
                      <div>1.履歴書(写真貼付)</div>
                      <div>2.職務経歴書</div>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <base-subheading>選考方法</base-subheading>
                      <div>面接(1～2回を予定)</div>
                      <div>※日時は応募者に別途通知</div>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm6>
                      <base-subheading>給与</base-subheading>
                      <compensation-dialog mid-career>
                        <base-link>こちらをご覧ください</base-link>
                      </compensation-dialog>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <base-subheading>勤務条件・福利厚生など</base-subheading>
                      <conditions-dialog mid-career>
                        <base-link>こちらをご覧ください</base-link>
                      </conditions-dialog>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <base-subheading>連絡先</base-subheading>
                      <div>お電話またはメールフォームよりご連絡ください</div>
                      <v-layout align-center class="ml-0 mt-1">
                        <v-icon color="blue lighten-2" class="mr-1">phone</v-icon>TEL:03-6273-4837
                      </v-layout>
                      <contact-dialog selected-type="1">
                        <base-link class="pl-0">
                          <v-icon color="blue lighten-2" class="mr-1">email</v-icon>メールフォーム
                        </base-link>
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
  </page-wrapper>
</template>
