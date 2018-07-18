<script>
export default {
  data () {
    return {
      isDialog: false,
    }
  },
  props: {
    btnLabel: String,
  },
}
</script>

<template>
<v-dialog v-model="isDialog" max-width="600" :fullscreen="$vuetify.breakpoint.xs">
  <v-btn flat color="blue darken-2" slot="activator">{{ btnLabel }}</v-btn>
  <v-card>
    <v-layout>
      <v-spacer></v-spacer>
      <v-btn icon @click="isDialog = false">
        <v-icon>close</v-icon>
      </v-btn>
    </v-layout>
    <v-card-title primary-title class="layout justify-center pt-0">
      <h2>CONDITIONS & BENEFITS</h2>
    </v-card-title>
    <v-card-text :class="$vuetify.breakpoint.xs ? 'pt-0 pb-3 px-3' : 'pt-0 pb-5 px-5'">
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
</template>
