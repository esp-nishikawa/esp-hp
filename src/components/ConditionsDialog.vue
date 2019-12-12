<script>
import DialogWrapper from '@/components/DialogWrapper';

// 勤務条件・福利厚生ダイアログ
export default {
  components: {
    DialogWrapper,
  },
  props: {
    midCareer: Boolean,
  },
};
</script>

<template>
  <dialog-wrapper :dialog-key="midCareer ? 'conditions_dialog_mid' : 'conditions_dialog_new'" max-width="600">
    <template #activator>
      <slot/>
    </template>
    <template #title>
      <base-headline>CONDITIONS & BENEFITS</base-headline>
    </template>
    <template #content>
      <v-container :class="{'pa-0': $vuetify.breakpoint.xs}">
        <v-row>
          <v-col cols="12">
            <base-subheading>勤務地</base-subheading>
            <base-text>東京、東京近郊、札幌、その他プロジェクト拠点</base-text>
          </v-col>
          <v-col cols="12">
            <base-subheading>勤務時間</base-subheading>
            <base-text>９：００～１７：３０（昼休み１２：００～１３：００）</base-text>
            <base-text>実働７.５時間</base-text>
          </v-col>
          <v-col cols="12">
            <base-subheading>休日・休暇</base-subheading>
            <base-text>土曜日、日曜日、祝日、夏期休暇、年末年始休暇、他</base-text>
          </v-col>
          <v-col cols="12">
            <base-subheading>福利厚生</base-subheading>
            <base-text>・各種保険：健康保険、厚生年金保険、雇用保険、労災保険等完備</base-text>
            <base-text>・健保組合提携の宿泊・スポーツ施設を利用可</base-text>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </dialog-wrapper>
</template>
