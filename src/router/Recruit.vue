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
      <v-container>
        <v-row justify="center" class="mt-4">
          <v-col cols="12" sm="11" md="10" lg="9" xl="8">
            <v-card raised>
              <v-card-title class="justify-center">
                <base-headline class="pt-10 pb-2">新卒採用</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container class="px-0 px-sm-3">
                  <v-row>
                    <v-col cols="12">
                      <base-subheading>職種</base-subheading>
                      <base-text>システムエンジニア(SE)</base-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>応募資格</base-subheading>
                      <base-text>２０２１年３月に卒業予定の方</base-text>
                      <base-text>２０２２年３月に卒業予定の方</base-text>
                      <base-text>※既に卒業されている方も応募可能</base-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>応募学科</base-subheading>
                      <base-text>全学部・全学科</base-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>応募書類</base-subheading>
                      <base-text>
                        <ol>
                          <li>履歴書(写真貼付)</li>
                          <li>成績証明書</li>
                        </ol>
                      </base-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>選考方法</base-subheading>
                      <base-text>面接(1～2回を予定)</base-text>
                      <base-text>※日時は応募者に別途通知</base-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>給与</base-subheading>
                      <compensation-dialog>
                        <base-link>こちらをご覧ください</base-link>
                      </compensation-dialog>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>勤務条件・福利厚生など</base-subheading>
                      <conditions-dialog>
                        <base-link>こちらをご覧ください</base-link>
                      </conditions-dialog>
                    </v-col>
                    <v-col cols="12">
                      <base-subheading>連絡先</base-subheading>
                      <base-text>お電話またはメールフォームよりご連絡ください</base-text>
                      <div class="d-flex align-center mt-1">
                        <v-icon color="blue lighten-2" class="mr-1">phone</v-icon>
                        <base-text>TEL:03-6273-4837</base-text>
                      </div>
                      <contact-dialog selected-type="1">
                        <base-link class="pl-0">
                          <v-icon color="blue lighten-2" class="mr-1">email</v-icon>メールフォーム
                        </base-link>
                      </contact-dialog>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="mid-career">
      <v-container>
        <v-row justify="center" class="mt-4">
          <v-col cols="12" sm="11" md="10" lg="9" xl="8">
            <v-card raised>
              <v-card-title class="justify-center">
                <base-headline class="pt-10 pb-2">中途採用</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container class="px-0 px-sm-3">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <base-subheading>職種</base-subheading>
                      <base-text>システムエンジニア(SE)</base-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>応募資格</base-subheading>
                      <base-text>ソフトウェア開発の経験がある方</base-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>応募書類</base-subheading>
                      <base-text>
                        <ol>
                          <li>履歴書(写真貼付)</li>
                          <li>職務経歴書</li>
                        </ol>
                      </base-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>選考方法</base-subheading>
                      <base-text>面接(1～2回を予定)</base-text>
                      <base-text>※日時は応募者に別途通知</base-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>給与</base-subheading>
                      <compensation-dialog mid-career>
                        <base-link>こちらをご覧ください</base-link>
                      </compensation-dialog>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <base-subheading>勤務条件・福利厚生など</base-subheading>
                      <conditions-dialog mid-career>
                        <base-link>こちらをご覧ください</base-link>
                      </conditions-dialog>
                    </v-col>
                    <v-col cols="12">
                      <base-subheading>連絡先</base-subheading>
                      <base-text>お電話またはメールフォームよりご連絡ください</base-text>
                      <div class="d-flex align-center mt-1">
                        <v-icon color="blue lighten-2" class="mr-1">phone</v-icon>
                        <base-text>TEL:03-6273-4837</base-text>
                      </div>
                      <contact-dialog selected-type="1">
                        <base-link class="pl-0">
                          <v-icon color="blue lighten-2" class="mr-1">email</v-icon>メールフォーム
                        </base-link>
                      </contact-dialog>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </page-wrapper>
</template>
